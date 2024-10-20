"use client";
import PromptForm from "@components/reusable/PromptForm";
import { userIdType } from "@utils/types";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const CreatePrompt = ({ userId }: userIdType) => {
  const router = useRouter();
  const createNewPrompt = async (values: any) => {
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: values.prompt,
          userId: userId,
          tag: values.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error in creating Prompt", error);
    }
  };
  const handleSubmit = async (values: any) => {
    toast.promise(createNewPrompt(values), {
      loading: "Creating Prompt...",
      success: "Prompt has been created!",
      error: "Something went wrong",
    });
  };
  return (
    <PromptForm
      title="Create Post"
      desc="Create and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform"
      onSubmit={handleSubmit}
    />
  );
};

export default CreatePrompt;
