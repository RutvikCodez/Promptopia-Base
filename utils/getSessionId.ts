import { getServerSession } from "next-auth";
import { authOptions } from "./authOption";

export const getSessionId = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    console.log(session?.user.id, "user ID");
    return "User not found";
  }
  return session.user.id;
};
