import { FunctionComponent, HTMLInputTypeAttribute, ReactNode } from "react";
import { Control, UseFormGetValues, UseFormWatch } from "react-hook-form";
import { z } from "zod";

export type postType = {
  _id: string;
  prompt: string;
  tag: string;
  creator: {
    _id: string;
    image: string;
    username: string;
    email: string;
  };
};

export type feedData = {
  posts: postType[];
};

export type titleDescType = {
  title?: string;
  desc: string;
  subtitle?: string;
  backgroundColor?: string;
};

export type typeWithRenderField<T> = T & {
  control: Control<z.infer<formSchema>>; // remain
  form?: {
    getValues: UseFormGetValues<unknown>;
    watch: UseFormWatch<unknown>;
    setValue: UseFormSetValue<unknown>;
  };
};

export type commonConfig = {
  label: string;
  placeholder: string;
  className?: string;
  cns?: {
    label?: string;
    input?: string;
    formItem?: string;
    container?: string;
  };
  readonly name: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  defaultValue?: string;
  validation: z.ZodType<unknown, unknown, unknown>;
};

export type magicFieldInputConfing = {
  type: HTMLInputTypeAttribute;
  fileRef?: unknown;
};

export type magicFieldInput = {
  type: "input";
  config: commonConfig & magicFieldInputConfing;
};

export type magicFieldTextareaConfing = {
  cols: number;
  rows: number;
};

export type magicFieldTextarea = {
  type: "textarea";
  config: commonConfig & magicFieldTextareaConfing;
};

export type InputFieldWithRenderFields = Partial<
  typeWithRenderField<magicFieldInput["config"]>
>;

export type TextAreaFieldWithRenderFields = Partial<
  typeWithRenderField<magicFieldTextarea["config"]>
>;

export type inputFieldWithRenderFieldFn =
  FunctionComponent<InputFieldWithRenderFields>;
export type textAreaFieldWithRenderFieldFn =
  FunctionComponent<TextAreaFieldWithRenderFields>;
export type renderComponent =
  | inputFieldWithRenderFieldFn
  | textAreaFieldWithRenderFieldFn;

export type magicField = Readonly<
  (magicFieldInput | magicFieldTextarea) & {
    RenderComponent: renderComponent;
  }
>;

export type promptCardType = {
  userImage: string;
  userName: string;
  userEmail: string;
  prompt: string;
  tag: string;
  showAction?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export type promptFormDataType = {
  title: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
  promptDefaultValue?: string;
  tagDefaultValue?: string;
  form: UseFormReturn<FieldValues, any, undefined>;
};

export type userIdType = {
  userId: string;
};

export type updatePromptFormDataType = {
  promptID: string;
  promptDefaultValue: string;
  tagDefaultValue: string;
};

export type Slug = {
  id: string;
};

export type searchFormType = {
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>;
};

export type userType = {
  email?: string;
  image?: string;
  name?: string;
  id: string;
};

export type drawerType = {
  direction?: "left" | "top" | "bottom" | "right" | undefined;
  open?: boolean | undefined;
  onOpenChange?: ((open: boolean) => void) | undefined;
  trigger: ReactNode;
  children: ReactNode;
};

export type commonNavbarType = {
  userID: string;
  children: ReactNode;
};

export type authWrapperType = {
  inputData: magicField[];
  onSubmit: (values: any) => void;
  title: string;
  desc: string;
  authType: "In" | "Up";
};

export type profileType = {
  posts: postType[];
  onDelete: (id: string) => Promise<void>;
  fetchPosts: (id: string) => Promise<postType[]>;
  userID: string;
};
