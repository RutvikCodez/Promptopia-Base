import Profile from "@components/profile/Profile";
import TitleDesc from "@components/reusable/TitleDesc";
import { apiCall } from "@utils/apiCall";
import { getSessionId } from "@utils/getSessionId";
import { postType } from "@utils/types";
import React from "react";


const page = async () => {
  const userID = await getSessionId();
  if (!userID) {
    return <>Not Authorized</>;
  }
  const posts: postType[] = await apiCall(`api/users/posts/${userID}`);
  return (
    <section className="w-full flex flex-col gap-10">
      <TitleDesc
        title="My Profile"
        desc="Welcome to your personalized profile page"
        backgroundColor="text-blue-500"
      />
      <Profile posts={posts} />
    </section>
  );
};

export default page;
