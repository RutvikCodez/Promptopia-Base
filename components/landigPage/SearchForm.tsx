"use client";
import { ArrayToZodResolver } from "@utils/ArrayToZodResolver";
import { searchFormData } from "@utils/getData";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { apiCall } from "@utils/apiCall";

const SearchForm = () => {
  const form = useForm({
    resolver: ArrayToZodResolver(searchFormData),
  });
  const onSubmit = () => {
    console.log("hello");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-xl">
        {searchFormData.map(({ RenderComponent, config }, index) => (
          <div key={index}>
            <RenderComponent
              control={form.control}
              {...config}
              onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                const prompts = await apiCall(
                  `api/prompt/search?query=${e.target.value}`
                );
                console.log(prompts, "hello");
              }}
            />
          </div>
        ))}
      </form>
    </Form>
  );
};

export default SearchForm;
