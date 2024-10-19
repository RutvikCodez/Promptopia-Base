import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { Slug } from "@utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Slug }) {
  try {
    const userId = params.id;
    await connectToDB();
    const prompts = await Prompt.find({
      creator: userId,
    }).populate("creator");
    return new NextResponse(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
}
