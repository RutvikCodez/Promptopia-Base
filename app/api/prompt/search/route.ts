import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query");
  let regQuery;
  if (query) {
    regQuery = new RegExp(query, "i");
  }
  try {
    await connectToDB();
    if (query?.trim() == "") {
      const prompts = await Prompt.find({}).populate("creator");
      return new NextResponse(JSON.stringify(prompts), { status: 201 });
    }
    const user = await User.findOne({
      username: regQuery,
    });
    if (user) {
      const prompts = await Prompt.find({
        creator: user._id,
      }).populate("creator");
      return new NextResponse(JSON.stringify(prompts), { status: 201 });
    }
    const prompts = await Prompt.find({
      $or: [
        {
          prompt: regQuery,
        },
        {
          tag: regQuery,
        },
      ],
    }).populate("creator");
    return new NextResponse(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch prompts", { status: 500 });
  }
  return new NextResponse("hello");
};
