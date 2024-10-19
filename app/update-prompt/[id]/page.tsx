import UpdatePrompt from "@components/update-prompt/UpdatePrompt";
import { apiCall } from "@utils/apiCall";
import { postType } from "@utils/types";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return <>Post does not exists</>;
  }
  const post: postType = await apiCall(`api/prompt/${params.id}`);  
  return (
    <UpdatePrompt
      promptDefaultValue={post.prompt}
      tagDefaultValue={post.tag}
      promptID={params.id}
    />
  );
};

export default page;
