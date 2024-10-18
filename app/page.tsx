import Feed from "@components/Feed";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt`,
    {
      next: { revalidate: 10 },
    }
  );
  const posts = await response.json();
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, craete and share creative prompts
      </p>
      <Feed posts={posts} />
    </section>
  );
}
