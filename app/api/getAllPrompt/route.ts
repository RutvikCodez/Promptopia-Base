import { posts } from "@utils/getData";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // await connectToDB();
    // const prompts = await Prompt.find({}).populate("creator");
    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
};
