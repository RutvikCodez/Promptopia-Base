import type { Metadata } from "next";
import "@styles/globals.css";
import Nav from "@components/common/Nav";
import Provider from "@components/common/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@utils/authOption";
import MobileNavbar from "@components/common/MobileNavbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="relative z-10 flex justify-center items-center flex-col max-w-6xl mx-auto gap-14 max-md:px-5">
            <Nav
              id={session?.user.id || ""}
              image={session?.user.image || ""}
            />
            <MobileNavbar
              id={session?.user.id || ""}
              image={session?.user.image || ""}
            />
            {children}
          </main>
          <Toaster position="top-right" richColors />
        </Provider>
      </body>
    </html>
  );
}
