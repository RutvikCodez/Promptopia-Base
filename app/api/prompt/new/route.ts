import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag: tag,
      prompt: prompt,
    });
    await newPrompt.save();
    const prompts = await Prompt.find({}).populate("creator");
    return new NextResponse(JSON.stringify(prompts), {
      status: 200,
    });
    // return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create new prompt", { status: 500 });
  }
};
