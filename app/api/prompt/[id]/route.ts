import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { Slug } from "@utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Slug }) {
  try {
    const promptID = params.id;
    await connectToDB();
    const prompt = await Prompt.findById(promptID).populate("creator");
    if (!prompt) {
      return new NextResponse("Prompt Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(prompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Slug }) {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new NextResponse("Prompt Not Found", { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new NextResponse(JSON.stringify(existingPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to update prompt", { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Slug }) {
  try {
    await connectToDB();
    const promptID = params.id;
    if (!promptID) {
      return new NextResponse("ID Not Provided", { status: 400 });
    }
    const deletePrompt = await Prompt.findByIdAndDelete(promptID);
    if (!deletePrompt) {
      return new NextResponse("Prompt Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(deletePrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to delete prompt", { status: 500 });
  }
}
