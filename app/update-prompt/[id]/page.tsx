import UpdatePrompt from "@components/update-prompt/UpdatePrompt";
import { postType } from "@utils/types";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return <>Post does not exists</>;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/${params.id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const post: postType = await response.json();
  return <UpdatePrompt prompt={post.prompt} tag={post.tag} promptID={params.id} />;
};

export default page;
