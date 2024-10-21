"use client";
import PromptCard from "@components/reusable/PromptCard";
import { postType } from "@utils/types";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Feed = ({ data }: { data: postType[] }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
      {data.map(({ creator, prompt, tag }, index) => (
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
  );
};

export default Feed;
