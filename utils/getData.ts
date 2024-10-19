import { z } from "zod";
import { magicField } from "./types";
import CustomInput from "@components/custom/input";
import CustomTextarea from "@components/custom/textarea";

export const searchFormData: magicField[] = [
  {
    type: "input",
    config: {
      name: "searchPrompt",
      type: "search",
      label: "",
      placeholder: "Search for a tag or a username",
      validation: z
        .string({
          required_error: "Search Text is required",
        })
        .trim(),
      className:
        "w-full-rounded-md block border bordergray-200 bg-white font-satoshi text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0 peer text-center",
    },
    RenderComponent: CustomInput,
  },
];

export const promptFormData: magicField[] = [
  {
    type: "textarea",
    config: {
      cols: 10,
      rows: 10,
      label: "Your AI Prompt",
      name: "prompt",
      placeholder: "Write your post here",
      validation: z.string().trim().min(1, {
        message: "Prompt is required",
      }),
      className: "w-full flex rounded-lg p-3 text-sm text-gray-500 outline-0",
    },
    RenderComponent: CustomTextarea,
  },
  {
    type: "input",
    config: {
      name: "tag",
      type: "text",
      label: "Field Of Prompt",
      placeholder: "#Tag",
      validation: z
        .string()
        .trim()
        .min(1, {
          message: "Tag is required",
        })
        .trim(),
      className: "w-full flex rounded-lg p-3 text-sm text-gray-500 outline-0",
    },
    RenderComponent: CustomInput,
  },
];
