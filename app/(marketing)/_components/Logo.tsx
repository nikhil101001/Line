import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.svg" width={10} height={10} alt="Line" />
      <p className={cn(font.className, "font-semibold")}>Line</p>
      <Image
        src="/logo.svg"
        width={10}
        height={10}
        alt="Line"
        className="rotate-180"
      />
    </div>
  );
};
