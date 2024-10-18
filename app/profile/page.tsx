import MyProfile from "@components/profile/MyProfile";
import { authOptions } from "@utils/authOption";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    console.log(session?.user.id, "user ID");
    return <>Hello</>;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/posts/${session.user.id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const posts = await response.json();
  return <MyProfile posts={posts} />;
};

export default page;
