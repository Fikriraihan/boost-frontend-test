"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema } from "../Validation/schema";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { useState } from "react";
import StepThree from "./step-three";
import StepFour from "./step-four";
import { BlogFormTypes } from "@/types/BlogTypes";
import { toast } from "@/hooks/use-toast";

const steps = [
  {
    title: "Metadata",
    fields: ["title", "author"],
  },
  {
    title: "Summary & Category",
    fields: ["summary", "category"],
  },
  {
    title: "Content",
    fields: ["content"],
  },
  {
    title: "Review & Submit",
    fields: [],
  },
];

const BlogForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      summary: "",
      content: "",
      category: "Technology",
    },
  });

  const watchFields = form.watch();

  const nextStep = async () => {
    const currentFields = steps[currentStep - 1].fields;
    const isValid = await form.trigger(
      currentFields as (keyof BlogFormTypes)[],
      {}
    );

    if (!isValid) {
      return;
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit: SubmitHandler<BlogFormTypes> = (data) => {
    const newBlog = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const existingBlog = JSON.parse(localStorage.getItem("blogs") ?? "[]");
    localStorage.setItem("blogs", JSON.stringify([...existingBlog, newBlog]));
    toast({
      title: "Blog Created",
      description: "Blog has been created successfully.",
      variant: "default",
      duration: 2000,
    });
    router.push("/");
  };

  return (
    <div className="space-y-12">
      <section className="flex items-center gap-2">
        <p className="text-3xl font-bold">Step {currentStep}: </p>
        <p className="text-3xl font-bold">{steps[currentStep - 1].title}</p>
      </section>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 1 && <StepOne {...form.control} />}
          {currentStep === 2 && <StepTwo {...form.control} />}
          {currentStep === 3 && <StepThree {...form.control} />}
          {currentStep === 4 && (
            <StepFour watch={watchFields} onEdit={() => setCurrentStep(1)} />
          )}

          {currentStep < steps.length && (
            <div className="flex justify-between">
              <Button
                disabled={currentStep === 1}
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </Button>
              <Button
                disabled={currentStep === steps.length}
                type="button"
                variant="outline"
                onClick={nextStep}
              >
                Next
              </Button>
            </div>
          )}

          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
};

export default BlogForm;
