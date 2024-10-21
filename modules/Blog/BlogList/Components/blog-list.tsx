"use client";
import { BlogSearchComponent } from "@/components/shared/blog-search";
import { BlogCard } from "@/components/shared/blog-card";
import { BlogTypes } from "@/types/BlogTypes";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Empty } from "@/components/shared/blog-empty-state";
import { SearchNotFound } from "@/components/shared/blog-search-not-found";
import { motion } from "framer-motion";
const BlogList = () => {
  const [posts, setPosts] = useState<BlogTypes[]>([]);
  const searchParams = useSearchParams();
  const params = searchParams.get("search");

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogs");
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);

      if (params) {
        const filteredPosts = parsedPosts.filter(
          (post: BlogTypes) =>
            post.title.toLowerCase().includes(params.toLowerCase()) ||
            post.author.toLowerCase().includes(params.toLowerCase()) ||
            post.category.toLowerCase().includes(params.toLowerCase())
        );
        setPosts(filteredPosts);
      }
    }
  }, [params]);

  const handleDelete = (id: string) => {
    const updatedPosts = posts.filter((post: BlogTypes) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("blogs", JSON.stringify(updatedPosts));
    toast({
      variant: "destructive",
      title: "Blog Deleted",
      description: "Blog has been deleted successfully.",
      duration: 2000,
    });
  };

  const renderContent = () => {
    if (posts.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard
                key={post.id}
                title={post.title}
                summary={post.summary}
                date={post.createdAt || new Date()}
                category={post.category}
                author={post.author}
                id={post.id}
                onDelete={handleDelete}
              />
            </motion.div>
          ))}
        </div>
      );
    } else if (params && posts.length === 0) {
      return <SearchNotFound searchQuery={params} />;
    } else {
      return <Empty />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="space-y-12"
    >
      <BlogSearchComponent />
      {renderContent()}
    </motion.div>
  );
};

export default BlogList;
