"use client";
import { ArrayToZodResolver } from "@utils/ArrayToZodResolver";
import { searchFormData } from "@utils/getData";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { apiCall } from "@utils/apiCall";
import { postType } from "@utils/types";
import { Form } from "@components/ui/form";
import PromptCard from "@components/reusable/PromptCard";

const page = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const form = useForm({
    resolver: ArrayToZodResolver(searchFormData),
  });
  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const prompts = await apiCall(`api/prompt/search?query=${e.target.value}`);
    setPosts(prompts);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-bold">Search AI Prompts</h1>
      <Form {...form}>
        <form className="w-full max-w-xl">
          {searchFormData.map(({ RenderComponent, config }, index) => (
            <div key={index}>
              <RenderComponent
                control={form.control}
                {...config}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
          ))}
        </form>
      </Form>
      <div className="grid grid-cols-3 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
        {posts.map(({ _id, creator, prompt, tag }) => (
          <PromptCard
            key={_id}
            prompt={prompt}
            tag={tag}
            userEmail={creator.email}
            userImage={creator.image}
            userName={creator.username}
          />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-center text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default page;
