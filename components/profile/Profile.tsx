"use client";
import React from "react";
import { postType } from "@utils/types";
import { useRouter } from "next/navigation";
import PromptCard from "@components/reusable/PromptCard";
import { toast } from "sonner";

const Profile = ({ posts }: { posts: postType[] }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
      {posts.map(({ creator, prompt, tag, _id }, index) => (
        <PromptCard
          prompt={prompt}
          tag={tag}
          userEmail={creator.email}
          userImage={creator.image}
          userName={creator.username}
          key={index}
          showAction={true}
          onEdit={() => {
            router.push(`/update-prompt/${_id}`);
          }}
          onDelete={async () => {
            try {
              const response = await fetch(`/api/prompt/${_id}`, {
                method: "DELETE",
              });
              if (response.ok) {
                toast.success("Prompt deleted successfully!");
                router.push("/");
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Profile;
