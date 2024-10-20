import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    console.log(prompts);

    return new NextResponse(JSON.stringify(prompts), {
      status: 201,
      headers: {
        "Cache-Control": "no-store", // This ensures the response is not cached
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
};
