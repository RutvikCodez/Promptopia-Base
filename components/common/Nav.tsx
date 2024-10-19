"use client";
import { Button } from "@components/ui/button";
import { userType } from "@utils/types";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = ({ image, id }: userType) => {
  return (
    <header className="flex justify-between items-center p-3 w-full">
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
      <div className="sm:flex hidden">
        {id ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
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
        ) : (
          <Button
            type="button"
            onClick={() => signIn("google")}
            className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Nav;
