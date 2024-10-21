"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { substringText } from "@/lib/substringText";
import { CalendarIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { DeleteModalComponent } from "./delete-modal";

interface BlogCardProps {
  title: string;
  author: string;
  summary: string;
  date: Date;
  category: string;
  id: string;
  onDelete: (_id: string) => void;
}

export function BlogCard(props: BlogCardProps) {
  const { title, author, summary, date, category, id, onDelete } = props;
  return (
    <motion.div
      className="group"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="w-full max-w-md mx-auto flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardHeader className="p-6">
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <Badge>{category}</Badge>

            <DeleteModalComponent
              onDelete={() => onDelete(id)}
              itemName="blog"
            />
          </div>
          <h2 className="text-2xl group-hover:text-blue-500 font-bold leading-tight mb-2 hover:text-blue-600">
            {title}
          </h2>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>{author}</span>
            <span className="mx-2">•</span>
            <CalendarIcon className="w-4 h-4 mr-2" />
            <p>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground">
            {substringText(summary)}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Link
            href={`/blog/${id}`}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Read More →
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
