import TitleDesc from "@components/reusable/TitleDesc";
import Feed from "@components/landigPage/Feed";
import { postType } from "@utils/types";
import PromptCard from "@components/reusable/PromptCard";
import { apiCall } from "@utils/apiCall";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default async function Home() {
  const posts: postType[] = await apiCall("api/getAllPrompt");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5">
      <TitleDesc
        desc=" Promptopia is an open-source AI prompting tool for modern world to
        discover, craete and share creative prompts"
        title=" Discover & Share"
        subtitle="AI-Powered Prompts"
      />
      <Link href={"/search"}>
        <Button
          variant={"outline"}
          className="bg-black text-white font-semibold"
        >
          Need Specific Prompt?
        </Button>
      </Link>
      <Feed data={posts} />
    </section>
  );
}
