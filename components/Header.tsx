"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="w-full p-4 inline-flex items-center fixed top-0 z-2">
      <div id="brand-container" className="cursor-pointer" onClick={() => redirect("/")}>
        <Image src="/brand-logo-black.svg" className="dark:invert" alt="Logo" width={120} height={40} />
      </div>
      <div
        className="inline-flex sm:hidden ml-auto items-center gap-2 font-semibold"
        id="menu-container"
      >
        <IconMenu size={24} onClick={() => setVisible(!visible)} />
        <aside id="side-bar">
          <div className={`absolute top-0 right-0 bg-foreground text-background p-4 shadow-md flex flex-col gap-4 transition-transform ${visible ? "inline-flex" : "hidden"}`}>
            <IconX
              size={24}
              onClick={() => setVisible(!visible)}
              className="mr-auto"
            />
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/signin">Sign In</Link>
          </div>
        </aside>
      </div>
      <div
        id="link-container"
        className="ml-auto items-center gap-4 font-semibold sm:inline-flex hidden"
      >
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/signin"></Link>
      </div>
    </header>
  );
}

export default Header;