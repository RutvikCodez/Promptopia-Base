import TitleDesc from "@components/reusable/TitleDesc";
import { apiCall } from "@utils/apiCall";
import { postType } from "@utils/types";
import Feed from "@components/landigPage/Feed";


export default async function Home() {
  const response = await await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getAllPrompt`,
    {
      next: { revalidate: 10 },
    }
  );
  const posts = await response.json();
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center text-center">
        <TitleDesc
          desc=" Promptopia is an open-source AI prompting tool for modern world to
        discover, craete and share creative prompts"
          title=" Discover & Share"
          subtitle="AI-Powered Prompts"
        />
        <Feed data={posts} />
      </div>
    </section>
  );
}
