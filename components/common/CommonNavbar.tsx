import { Button } from "@components/ui/button";
import { commonNavbarType } from "@utils/types";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonNavbar = ({ children, userID }: commonNavbarType) => {
  return (
    <nav className="w-full flex justify-between items-center p-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
          Propmtopia
        </p>
      </Link>
      {userID ? (
        children
      ) : (
        <Button
          type="button"
          onClick={() => signIn("google")}
          className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
        >
          Sign In
        </Button>
      )}
    </nav>
  );
};

export default CommonNavbar;
