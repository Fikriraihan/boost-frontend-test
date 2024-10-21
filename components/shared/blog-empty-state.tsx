"use client";

import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Empty() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-blue-50 rounded-lg p-8 text-center">
      <div className="bg-blue-100 p-3 rounded-full">
        <BookOpen className="w-8 h-8 text-blue-500" />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-blue-900">
        No Blog Posts Yet
      </h2>
      <p className="mt-2 text-blue-600 max-w-md">
        Your blog is waiting for its first story. Start writing and share your
        thoughts with the world!
      </p>
      <Link href="/create">
        <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white">
          Create Your First Post
        </Button>
      </Link>
    </div>
  );
}
