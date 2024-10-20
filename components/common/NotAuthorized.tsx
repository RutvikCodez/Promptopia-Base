import React from "react";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@components/ui/button";
import Link from "next/link";

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full flex flex-col gap-8 p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center flex flex-col gap-6">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Not Authorized
            </h2>
            <p className="text-sm text-gray-600">
              Sorry, you don't have permission to access this page.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Button asChild className="w-full">
            <Link href={"/"}>
              <Home />
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
