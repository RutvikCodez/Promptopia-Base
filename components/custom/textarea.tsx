import { TextAreaFieldWithRenderFields } from "@utils/types";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { cn } from "@lib/utils";
import { Textarea } from "@components/ui/textarea";

const CustomTextarea = ({
  control,
  name,
  className,
  label,
  cols,
  rows,
  disabled,
  placeholder,
  defaultValue
}: TextAreaFieldWithRenderFields) => {
  return (
    <FormField
      control={control}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name={name as any}
      render={(renderField) => {
        const { field } = renderField;
        return (
          <div className={cn("space-y-2 w-full", className)}>
            <FormItem className="w-full">
              <FormLabel>{label}</FormLabel>
              <Textarea
                {...field}
                cols={cols}
                rows={rows}
                disabled={disabled}
                placeholder={placeholder}
                onChange={field.onChange}
                defaultValue={defaultValue}
              />
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomTextarea;
