"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <header className="py-4">
      <div className="flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          CRUD APP
        </h1>

        <div className="flex gap-4 items-center">
          <Link href={"/"} className="font-bold text-lg">
            Home
          </Link>
          <Link
            href={"/add"}
            className="py-2 px-8 bg-green-700 text-white font-bold rounded-md"
          >
            Add
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
