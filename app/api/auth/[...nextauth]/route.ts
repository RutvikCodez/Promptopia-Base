import { authOptions } from "@utils/authOption";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// MONGODB_URI=mongodb+srv://rutvikdarji67:gnFVKFI4Njh6hEmC@cluster0.flxuufk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
