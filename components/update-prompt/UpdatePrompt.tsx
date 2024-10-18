"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/create-prompt/Form";

type promptData = {
  prompt: string;
  tag: string;
  promptID: string
};

const UpdatePrompt = ({ prompt, tag, promptID }: promptData) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const session = useSession();
  const router = useRouter();
  const [post, setPost] = useState<{
    prompt: string;
    tag: string;
  }>({
    prompt: "",
    tag: "",
  });
  useEffect(() => {
    setPost({
      prompt: prompt,
      tag: tag,
    });
  }, []);

  const updatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    if (!session.data?.user.id) {
      return;
    }
    try {
      const response = await fetch(`/api/prompt/${promptID}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error in updating Prompt", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      handleSubmit={updatePrompt}
      post={post}
      setPost={setPost}
      submitting={submitting}
      type="Edit"
    />
  );
};

export default UpdatePrompt;
