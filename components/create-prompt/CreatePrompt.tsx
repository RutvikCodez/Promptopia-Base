"use client";
// import React, { FormEvent, useState } from "react";
// import Form from "./Form";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const CreatePrompt = () => {
//   const [submitting, setSubmitting] = useState<boolean>(false);
//   const session = useSession();
//   const router = useRouter();
//   const [post, setPost] = useState<{
//     prompt: string;
//     tag: string;
//   }>({
//     prompt: "",
//     tag: "",
//   });
//   const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitting(true);
//     console.log(session.data?.user.id, "userID");
//     if (!session.data?.user.id) {
//       return
//     }
//     try {
//       const response = await fetch("/api/prompt/new", {
//         method: "POST",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           userId: session.data?.user.id,
//           tag: post.tag,
//         }),
//       });
//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log("Error in creating Prompt", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   return (
//     <Form
//       handleSubmit={createPrompt}
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       type="Create"
//     />
//   );
// };

// export default CreatePrompt;
import PromptForm from "@components/reusable/PromptForm";
import { userIdType } from "@utils/types";
import { useRouter } from "next/navigation";
import React from "react";

const CreatePrompt = ({ userId }: userIdType) => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return (
    <PromptForm
      title="Create Post"
      desc="Create and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform"
      onSubmit={createNewPrompt}
    />
  );
};

export default CreatePrompt;
