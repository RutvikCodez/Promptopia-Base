import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { cn } from "@lib/utils";
import { InputFieldWithRenderFields } from "@utils/types";
import React from "react";

const CustomInput = ({
  control,
  name,
  cns,
  className,
  label,
  defaultValue = "",
  type,
  disabled,
  placeholder,
  onChange,
}: InputFieldWithRenderFields) => {
  return (
    <FormField
      control={control}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name={name as any}
      render={(renderField) => {
        const { field } = renderField;
        const { value, ...rest } = field;
        return (
          <div className={cn("space-y-2 w-full", cns?.container, className)}>
            <FormItem className="w-full">
              <FormLabel className={cn(cns?.label)}>{label}</FormLabel>
              <Input
                {...rest}
                defaultValue={defaultValue ?? value}
                className={cn("border-gray-300 border w-full", cns?.input, className)}
                {...(type === "file" ? {} : { value: value })}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                onChange={(e) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  onChange && onChange(e);
                  if (type === "number") {
                    field.onChange(e.currentTarget.valueAsNumber);
                  } else if (type === "file") {
                    field.onChange(e.target?.files ?? undefined);
                  } else {
                    field.onChange(e.currentTarget.value);
                  }
                }}
              />
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomInput;
