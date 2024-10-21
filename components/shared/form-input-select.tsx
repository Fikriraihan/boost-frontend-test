import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

type ItemType = string | { value: string; name: string };

interface FormFieldProps<T extends FieldValues> {
  label: string;
  description?: string;
  field: ControllerRenderProps<T, Path<T>>;
  placeholder?: string;
  type?: string;
  items: ItemType[];
}

const FormInputSelect = <T extends FieldValues>({
  field,
  label,
  description,
  items,
  placeholder,
}: FormFieldProps<T>) => {
  const getItemValue = (item: ItemType) =>
    typeof item === "string" ? item : item.value;
  const getItemName = (item: ItemType) =>
    typeof item === "string" ? item : item.name;

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder || "Select an option"} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={getItemValue(item)}>
              {getItemName(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormInputSelect;
