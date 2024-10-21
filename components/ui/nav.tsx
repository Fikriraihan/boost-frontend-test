"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 bg-white shadow-sm z-10"
    >
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Boost
        </Link>
        {pathname === "/" && (
          <Link href="/create" className="">
            <Button>Create Blog</Button>
          </Link>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;
