"use client";
import { Button } from "@components/ui/button";
import { userType } from "@utils/types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonNavbar from "./CommonNavbar";

const Nav = ({ image, id }: userType) => {
  return (
    <header className="flex w-full max-md:hidden">
      <CommonNavbar userID={id}>
      <div className="flex gap-3 md:gap-5 max-md:hidden">
        <Link
          href={"/create-prompt"}
          className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
        >
          Create Post
        </Link>
        <Button
          type="button"
          onClick={() => {
            signOut();
          }}
          className="ounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center"
          aria-label="Sign Out"
        >
          Sign Out
        </Button>
        <Link href={"/profile"}>
          <Image
            src={image || "/assets/images/logo.svg"}
            alt="Profile"
            width={37}
            height={37}
            className="rounded-full"
          />
        </Link>
      </div>  
    </CommonNavbar>
    </header>
  );
};

export default Nav;
