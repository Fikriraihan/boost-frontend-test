"use client";

import { Search } from "lucide-react";

export function SearchNotFound({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-blue-50 rounded-lg p-8 text-center">
      <div className="bg-blue-100 p-3 rounded-full">
        <Search className="w-8 h-8 text-blue-500" />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-blue-900">
        No Results Found
      </h2>
      <p className="mt-2 text-blue-600 max-w-md">
        We couldn&apos;t find any blog posts matching &quot;{searchQuery}
        &quot;. Try adjusting your search terms.
      </p>
    </div>
  );
}
