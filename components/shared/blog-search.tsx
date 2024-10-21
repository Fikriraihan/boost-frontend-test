"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function BlogSearchComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    const loweredCaseTerm = term.toLowerCase();
    if (loweredCaseTerm) {
      params.set("search", loweredCaseTerm);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full max-w-2xl">
      <div
        className={`relative flex items-center transition-all duration-300 ease-in-out ${
          isFocused ? "w-full" : "w-64"
        }`}
      >
        <input
          id="search"
          type="text"
          placeholder="Search blogs by title, category, or author..."
          defaultValue={searchParams.get("search")?.toString() || ""}
          onChange={(e) => handleSearch(e.target.value)}
          className={`w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all duration-300 ease-in-out ${
            isFocused ? "border-blue-500 shadow-lg" : "border-gray-300"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Search
          className={`absolute left-3 transition-all duration-300 ease-in-out ${
            isFocused ? "text-blue-500" : "text-gray-400"
          }`}
          size={20}
        />
      </div>
    </div>
  );
}
