"use client";
import DrawerComponents from "@components/reusable/DrawerComponents";
import { Button } from "@components/ui/button";
import { navData } from "@utils/getData";
import { userType } from "@utils/types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonNavbar from "./CommonNavbar";

const MobileNavbar = ({ id, image }: userType) => {
  return (
    <header className="flex w-full md:hidden">
      <CommonNavbar userID={id}>
        <DrawerComponents
          trigger={
            <div className="flex relative">
              <Image
                src={image || "/assets/images/logo.svg"}
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </div>
          }
        >
          <ul className="flex flex-col gap-5 px-5 h-full w-full justify-center">
            {navData.map(({ href, name }, index) => (
              <>
                <li key={index}>
                  <Link
                    href={href}
                    className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                  >
                    {name}
                  </Link>
                </li>
                <hr />
              </>
            ))}
            <Button
              type="button"
              onClick={() => {
                signOut();
              }}
              key={3}
              className="ounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black w-fit hover:text-white text-center text-sm font-inter flex items-center justify-center"
              aria-label="Sign Out"
            >
              Sign Out
            </Button>
          </ul>
        </DrawerComponents>
      </CommonNavbar>
    </header>
  );
};

export default MobileNavbar;
