import { titleDescType } from "@utils/types";
import clsx from "clsx";
import React from "react";

const TitleDesc = ({
  desc,
  title,
  subtitle,
  backgroundColor,
}: titleDescType) => {
  return (
    <div className="flex flex-col gap-5">
      <h1
        className={clsx("text-2xl font-extrabold leading-accent-1 text-black sm:text-6xl",{
          [backgroundColor!]: !!backgroundColor
        })}
      >
        {title} <br />
        <span className="bg-gradient-accent-1 bg-clip-text text-transparent ">
          {subtitle}
        </span>
      </h1>
      <p className="text-lg text-gray-600 sm:text-xl max-w-2xl">{desc}</p>
    </div>
  );
};

export default TitleDesc;
