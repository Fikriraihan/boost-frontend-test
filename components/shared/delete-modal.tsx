"use client";

import { useState } from "react";
import { AlertTriangleIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  itemName: string;
  onDelete: () => void;
}

export function DeleteModalComponent({
  itemName = "item",
  onDelete,
}: DeleteModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Trash2Icon className="h-6 w-6 cursor-pointer text-red-500" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center text-destructive">
            <AlertTriangleIcon className="h-5 w-5" />
            Confirm Deletion
          </DialogTitle>
          <DialogDescription className="text-destructive">
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            Are you sure you want to delete this {itemName}? it will be
            permanently removed.
          </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
