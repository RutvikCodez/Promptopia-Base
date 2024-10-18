"use client";
import React, { ChangeEvent, useState } from "react";
import PromptCard from "./PromptCard";
import { feedData } from "@utils/types";

const Feed = ({ posts }: feedData) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
          className="search_input peer"
          required
        />
      </form>
      <div className="mt-16 prompt_layout">
        {posts.map(({ _id, creator, prompt, tag }) => (
          <PromptCard
            id={creator._id}
            prompt={prompt}
            key={_id}
            image={creator.image}
            email={creator.email}
            username={creator.username}
            handleTagClick={() => {}}
            tag={tag}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
