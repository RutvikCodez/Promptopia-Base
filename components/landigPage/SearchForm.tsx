"use client";
import { ArrayToZodResolver } from "@utils/ArrayToZodResolver";
import { searchFormData } from "@utils/getData";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { apiCall } from "@utils/apiCall";
import { searchFormType } from "@utils/types";

const SearchForm = ({ setPosts }: searchFormType) => {
  const form = useForm({
    resolver: ArrayToZodResolver(searchFormData),
  });
  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const prompts = await apiCall(`api/prompt/search?query=${e.target.value}`);
    setPosts(prompts);
  };
  return (
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
  );
};

export default SearchForm;
