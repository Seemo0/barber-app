"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ModernCuts</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {/* <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link> */}
            <Link href="#" className="hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="outline"
          >
            Toggle Theme
          </Button>
        </div>
      </div>
    </header>
  );
}
