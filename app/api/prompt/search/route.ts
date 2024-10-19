import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query");

  try {
    await connectToDB();
    const user = await User.findOne({
      username: query,
    });
    if (user) {
      const prompts = await Prompt.find({
        creator: user._id,
      });
      return new NextResponse(JSON.stringify(prompts), { status: 201 });
    }
    const prompts = await Prompt.find({
      $or: [
        {
          prompt: query,
        },
        {
          tag: query,
        },
      ],
    });
    return new NextResponse(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
  return new NextResponse("hello");
};
