import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { ArrayToZodResolver } from "@utils/ArrayToZodResolver";
import { promptFormData } from "@utils/getData";
import React from "react";
import { useForm } from "react-hook-form";
import TitleDesc from "./TitleDesc";
import { promptFormDataType } from "@utils/types";

const PromptForm = ({
  desc,
  onSubmit,
  title,
  promptDefaultValue,
  tagDefaultValue,
}: promptFormDataType) => {
  const form = useForm({
    resolver: ArrayToZodResolver(promptFormData),
  });
  const isSubmitting = form.formState.isSubmitting;
  return (
    <section className="w-full flex flex-col justify-start items-start gap-10">
      <TitleDesc subtitle={title} desc={desc} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-2xl flex flex-col gap-7"
        >
          {promptFormData.map(({ RenderComponent, config }, index) => {
            return (
              <div key={index}>
                <RenderComponent
                  control={form.control}
                  {...config}
                  defaultValue={
                    config.name === "prompt"
                      ? promptDefaultValue
                      : tagDefaultValue
                  }
                />
              </div>
            );
          })}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default PromptForm;
