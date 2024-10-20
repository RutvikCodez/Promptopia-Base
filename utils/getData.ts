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
        "w-full rounded-md block font-satoshi text-sm shadow-lg font-medium",
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

export const signInInputData: magicField[] = [
  {
    type: "input",
    config: {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "m@example.com",
      validation: z
        .string()
        .trim()
        .min(1, {
          message: "Email is required",
        })
        .trim(),
    },
    RenderComponent: CustomInput,
  },
  {
    type: "input",
    config: {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "********",
      validation: z
        .string()
        .trim()
        .min(1, {
          message: "Password is required",
        })
        .trim(),
    },
    RenderComponent: CustomInput,
  },
];

export const signUpInputData: magicField[] = [
  {
    type: "input",
    config: {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "m@example.com",
      validation: z
        .string()
        .trim()
        .min(1, {
          message: "Email is required",
        })
        .trim(),
    },
    RenderComponent: CustomInput,
  },
  {
    type: "input",
    config: {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "********",
      validation: z
        .string()
        .trim()
        .min(1, {
          message: "Password is required",
        })
        .trim(),
    },
    RenderComponent: CustomInput,
  },
  {
    type: "input",
    config: {
      name: "image",
      type: "file",
      label: "Profile Image",
      placeholder: "Select Profile Image",
      validation: z.string(),
    },
    RenderComponent: CustomInput,
  },
];

export const navData = [
  {
    href: "/profile",
    name: "My Profile",
  },
  {
    href: "/create-prompt",
    name: "Create Prompt",
  },
];
