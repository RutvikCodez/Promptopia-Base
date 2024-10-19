import CreatePrompt from "@components/create-prompt/CreatePrompt";
import { getSessionId } from "@utils/getSessionId";
import React from "react";

const page = async () => {
  const userID = await getSessionId();
  if (!userID) {
    return <>Not Authorized</>;
  }
  return <CreatePrompt userId={userID} />;
};

export default page;
