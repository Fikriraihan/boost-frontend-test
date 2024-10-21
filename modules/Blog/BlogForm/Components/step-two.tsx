import FormInput from "@/components/shared/form-input";
import FormInputSelect from "@/components/shared/form-input-select";
import { FormField } from "@/components/ui/form";
import React from "react";
import { Control } from "react-hook-form";

const StepTwo = (
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
    <>
      <FormField
        control={control}
        name="summary"
        render={({ field }) => <FormInput field={field} label="Summary" />}
      />
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormInputSelect
            items={["Technology", "Design", "Culture", "Business"]}
            field={field}
            label="Category"
          />
        )}
      />
    </>
  );
};

export default StepTwo;
