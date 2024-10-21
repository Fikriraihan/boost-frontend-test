import React from "react";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  description?: string;
  field: ControllerRenderProps<T, Path<T>>;
  placeholder?: string;
  type?: "text" | "textarea";
}

const FormInput = <T extends FieldValues>({
  field,
  label,
  description,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  const InputComponent = type === "textarea" ? Textarea : Input;
  return (
    <FormItem>
      <FormLabel className="text-md">{label}</FormLabel>
      <FormControl>
        <InputComponent
          className="bg-white"
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormInput;
