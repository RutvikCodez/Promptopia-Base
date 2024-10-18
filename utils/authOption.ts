import User from "@models/user";
import { connectToDB } from "@utils/database";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
    callbacks: {
      async session({ session }) {
        try {
          await connectToDB();
          if (session.user) {
            const sessionUser = await User.findOne({
              email: session.user?.email,
            });
            if (sessionUser) {
              session.user.id = sessionUser._id.toString();
            }
          }
          return session;
        } catch (error) {
          console.error("Error in session callback", error);
          return session;
        }
      },
      async signIn({ profile }) {
        try {
          await connectToDB();
          const userExists = await User.findOne({ email: profile?.email });
          if (!userExists) {
            await User.create({
              email: profile?.email,
              username: profile?.name?.replace(/\s/g, "").toLowerCase(),
              image: profile?.image,
            });
          }
  
          return true;
        } catch (error) {
          console.error("Error in signIn callback", error);
          return false;
        }
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };