import PromptCard from "@components/reusable/PromptCard";
import TitleDesc from "@components/reusable/TitleDesc";
import SearchForm from "@components/landigPage/SearchForm";
import { apiCall } from "@utils/apiCall";
import { postType } from "@utils/types";
import { getSessionId } from "@utils/getSessionId";

export default async function Home() {
  const userID = await getSessionId();
  if (!userID) {
    return <>Not Authorized</>;
  }
  const posts: postType[] = await apiCall("api/prompt");
  return (
    <main className="w-full flex flex-col justify-center items-center gap-10">
      <section className="flex flex-col items-center text-center">
        <TitleDesc
          desc=" Promptopia is an open-source AI prompting tool for modern world to
        discover, craete and share creative prompts"
          title=" Discover & Share"
          subtitle="AI-Powered Prompts"
        />
        <SearchForm />
      </section>
      <section className="mx-auto w-full flex justify-center items-center flex-col gap-2">
        <div className="grid grid-cols-3 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
          {posts.map(({ creator, prompt, tag }, index) => (
            <PromptCard
              key={index}
              prompt={prompt}
              tag={tag}
              userEmail={creator.email}
              userImage={creator.image}
              userName={creator.username}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
