import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 z-50 flex w-full">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Logo
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-amber-400"
          >
            Menu
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-amber-400"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-amber-400"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-amber-400"
          >
            Store
          </Link>
        </nav>
        <div className="flex items-center">
          <Button className="bg-amber-500 hover:bg-amber-600 rounded-full">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
