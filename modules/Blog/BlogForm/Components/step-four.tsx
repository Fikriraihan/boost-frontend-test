import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { BlogFormTypes } from "@/types/BlogTypes";

const StepFour = ({
  watch,
  onEdit,
}: {
  watch: BlogFormTypes;
  onEdit: () => void;
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{watch.title}</CardTitle>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>{watch.author}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Summary</h3>
          <p className="text-sm text-muted-foreground">{watch.summary}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Content Preview</h3>
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <p className="text-sm">{watch.content}</p>
          </ScrollArea>
        </div>
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-primary" />
          <Badge variant="secondary">Tech</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onEdit}>
          Edit
        </Button>
        <Button type="submit">Submit Post</Button>
      </CardFooter>
    </Card>
  );
};

export default StepFour;
