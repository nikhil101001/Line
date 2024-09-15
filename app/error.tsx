"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/error.png"
        alt="Error"
        width={300}
        height={300}
        className="dark:invert"
      />

      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go Back</Link>
      </Button>
    </div>
  );
}
