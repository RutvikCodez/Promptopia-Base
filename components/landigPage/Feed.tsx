"use client";
import PromptCard from "@components/reusable/PromptCard";
import { postType } from "@utils/types";
import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

const Feed = ({ data }: { data: postType[] }) => {
  const [posts, setPosts] = useState<postType[]>([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div className="mx-auto w-full flex justify-center items-center flex-col gap-5">
      <SearchForm setPosts={setPosts} />
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
    </div>
  );
};

export default Feed;
