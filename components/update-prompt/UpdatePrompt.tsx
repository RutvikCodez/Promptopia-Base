"use client";
import PromptForm from "@components/reusable/PromptForm";
import { updatePromptFormDataType } from "@utils/types";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const UpdatePrompt = ({
  promptID,
  promptDefaultValue,
  tagDefaultValue,
}: updatePromptFormDataType) => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePrompt = async (values: any) => {
    try {
      const response = await fetch(`/api/prompt/${promptID}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: values.prompt || promptDefaultValue,
          tag: values.tag || tagDefaultValue,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error in updating Prompt", error);
    }
  };
  const handleSubmit = async (values: any) => {
    toast.promise(updatePrompt(values), {
      loading: "Creating Prompt...",
      success: "Prompt has been created!",
      error: "Something went wrong",
    });
  };
  return (
    <PromptForm
      title="Edit Post"
      desc="Edit and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform"
      onSubmit={handleSubmit}
      promptDefaultValue={promptDefaultValue}
      tagDefaultValue={tagDefaultValue}
    />
  );
};

export default UpdatePrompt;
