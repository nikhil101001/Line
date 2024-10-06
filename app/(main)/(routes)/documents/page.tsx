"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/empty.png"
        alt="empty"
        width={300}
        height={300}
        className="dark:invert"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Line
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentsPage;
