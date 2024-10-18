import PromptCard from "@components/PromptCard";
import { postType } from "@utils/types";
import React from "react";

type ProfileProps = {
  name: string;
  desc: string;
  data: postType[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const Profile = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            prompt={post.prompt}
            handleEdit={() => handleEdit && handleEdit(post._id)}
            handleDelete={() => handleDelete && handleDelete(post._id)}
            id={post.creator._id}
            tag={post.tag}
            email={post.creator.email}
            username={post.creator.username}
            image={post.creator.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
