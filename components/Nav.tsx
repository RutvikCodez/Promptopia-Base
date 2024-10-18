"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useProviders from "./providers/useProviders";

const Nav = () => {
  const session = useSession();
  const providers = useProviders();
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const handleSignOut = () => {
    setToggleDropDown(false);
    signOut();
  };

  const renderProviders = () =>
    providers &&
    Object.values(providers).map((provider, index) => (
      <button
        key={index}
        type="button"
        onClick={() => signIn(provider.id)}
        className="black_btn"
      >
        Sign In
      </button>
    ));
  const linkData = [
    {
      path: "/profile",
      name: "My Profile",
    },
    {
      path: "/create-prompt",
      name: "Create Prompt",
    },
  ];
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Propmtopia</p>
      </Link>
      <div className="sm:flex hidden">
        {session.data?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="outline_btn"
              aria-label="Sign Out"
            >
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={session.data.user.image || "/assets/images/logo.svg"}
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          renderProviders()
        )}
      </div>
      <div className="sm:hidden flex relative">
        {session.data?.user ? (
          <div className="flex">
            <Image
              src={session.data.user.image || "/assets/images/logo.svg"}
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {
                setToggleDropDown(!toggleDropDown);
              }}
            />
            {toggleDropDown && (
              <div className="dropdown">
                {linkData.map(({ name, path }, index) => (
                  <Link
                    key={index}
                    href={path}
                    className="dropdown_link"
                    onClick={() => setToggleDropDown(false)}
                  >
                    {name}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="mt-5 w-full black_btn"
                  aria-label="Sign Out"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          renderProviders()
        )}
      </div>
    </nav>
  );
};

export default Nav;
