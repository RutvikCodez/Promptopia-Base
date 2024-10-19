import PromptCard from "@components/reusable/PromptCard";
import TitleDesc from "@components/reusable/TitleDesc";
import SearchForm from "@components/landigPage/SearchForm";
import { apiCall } from "@utils/apiCall";
import { postType } from "@utils/types";
import { getSessionId } from "@utils/getSessionId";
import Feed from "@components/landigPage/Feed";

export default async function Home() {
  const userID = await getSessionId();
  if (!userID) {
    return <>Not Authorized</>;
  }
  const posts: postType[] = await apiCall("api/prompt");
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
