"use client";

import Image from "next/image";
import brand from "../../public/brand.svg";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useScrollHidden } from "../app/scroll-provider";

export default function Header() {
  const hidden = useScrollHidden();

  return (
    <header
      className={`z-1 bg-background py-4 top-0 sticky transition-transform ${
        hidden ? "-translate-y-20" : "translate-y-0"
      }`}
    >
      <div className="container flex mx-auto justify-between items-center">
        <div className="text-foreground text-7xl brand">
        <Image
          alt="brand logo"
          className="drop-shadow-sm drop-shadow-foreground"
          width={40}
          src={brand}
        />
      </div>

      <div className="gap-4 flex *:cursor-pointer">
        <SignedOut>
          <SignInButton>
            <button className="border p-2 rounded-sm text-foreground dark:text-foreground">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-primary p-2 rounded-sm text-white">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      </div>
    </header>
  );
}
