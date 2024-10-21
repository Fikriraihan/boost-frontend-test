"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, UserCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogTypes } from "@/types/BlogTypes";
import NotFound from "@/app/not-found";

export function DetailBlogCard({ id }: Readonly<{ id: string }>) {
  const [dataDetail, setDataDetail] = useState<BlogTypes>();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogs");
    if (storedPosts) {
      const getDetail = JSON.parse(storedPosts);
      const detail = getDetail.find((post: BlogTypes) => post.id === id);
      setDataDetail(detail);
    }
  }, [id]);

  useEffect(() => {
    if (dataDetail?.createdAt) {
      const date = new Date(dataDetail.createdAt);
      setFormattedDate(date.toLocaleString());
    } else {
      setFormattedDate(new Date().toLocaleString());
    }
  }, [dataDetail]);

  if (!dataDetail) {
    return NotFound();
  }

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden shadow-lg">
      <CardHeader className="bg-blue-600 text-white p-6">
        <div className="flex justify-between items-center mb-2">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 hover:bg-blue-200"
          >
            {dataDetail?.category}
          </Badge>
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <p>{formattedDate}</p>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">
          {dataDetail?.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <UserCircle className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-600">
            {dataDetail?.author}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{dataDetail?.summary}</p>
        <Separator className="my-4" />
        <div className="prose prose-blue max-w-none">
          <p>{dataDetail?.content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
