"use client";
import React from "react";
import Profile from "./Profile";
import { useRouter } from "next/navigation";
import { feedData } from "@utils/types";

const MyProfile = ({ posts }: feedData) => {
  const router = useRouter();
  const handleEdit = (id: string) => {
    router.push(`/update-prompt/${id}`);
  };
  const handleDelete = async (id: string) => {
    const hasConfirm = confirm("Are you sure you want to delete this prompt?");
    if (hasConfirm) {
      try {
        const response = await fetch(`/api/prompt/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log("Error in deleting prompt", error);
      }
    }
  };
  return (
    <Profile
      data={posts}
      desc="Welcome to your personalized profile page"
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      name="My"
    />
  );
};

export default MyProfile;
