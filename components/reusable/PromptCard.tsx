"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { promptCardType } from "@utils/types";

const PromptCard = ({
  prompt,
  tag,
  userEmail,
  userImage,
  userName,
  showAction = false,
  onDelete,
  onEdit,
}: promptCardType) => {
  const [copied, setCopied] = useState<string>("");
  const handleCopy = () => {
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <Card className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-2 backdrop-blur-lg backdrop-filter w-full h-fit">
      <CardHeader className="w-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src={userImage || "/assets/icons/tick.svg"}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {userName}
              </h3>
              <p className="font-inter text-sm text-gray-500">{userEmail}</p>
            </div>
          </div>
          <div
            className="w-7 h-7 rounded-full bg-white/10 shadow-accent-1 backdrop-blur flex justify-center items-center cursor-pointer"
            onClick={handleCopy}
          >
            <Image
              src={
                copied === prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt="Copy Icon "
              width={12}
              height={12}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-satoshi text-sm text-gray-700">{prompt}</p>
        <p className="font-inter text-sm bg-gradient-accent-2 cursor-pointer bg-clip-text text-transparent">
          #{tag}
        </p>
      </CardContent>
      {showAction && (
        <CardFooter className="flex justify-center items-center gap-4 border-t border-gray-100">
          <p
            className="font-inter text-sm bg-gradient-accent-2 cursor-pointer bg-clip-text text-transparent"
            onClick={onEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm bg-gradient-accent-1 cursor-pointer bg-clip-text text-transparent"
            onClick={onDelete}
          >
            Delete
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default PromptCard;
