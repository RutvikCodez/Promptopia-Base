"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

type providerType = {
  children: ReactNode;
};

const Provider = ({ children }: providerType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
