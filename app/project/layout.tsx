import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center pt-6 gap-4">
      <Button
        asChild
        type="button"
        variant="ghost"
        size="lg"
        className="font-sans cursor-pointer"
      >
        <Link href="/">
          <ArrowLeftIcon className="mr-2 h-4 w-4 " />
          Back
        </Link>
      </Button>
      {children}
    </div>
  );
}
