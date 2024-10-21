import FormInput from "@/components/shared/form-input";
import { FormField } from "@/components/ui/form";
import React from "react";
import { Control } from "react-hook-form";

const StepThree = (
  control: Control<
    {
      title: string;
      author: string;
      summary: string;
      content: string;
      category: "Technology" | "Design" | "Culture" | "Business";
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >
) => {
  return (
    <FormField
      control={control}
      name="content"
      render={({ field }) => (
        <FormInput type="textarea" field={field} label="Content" />
      )}
    />
  );
};

export default StepThree;
