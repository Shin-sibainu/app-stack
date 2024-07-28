import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center gap-2"
        prefetch={false}
      >
        <LayersIcon className="h-6 w-6" />
        <span className="font-bold text-lg">AppStack.com</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#feature"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          特徴
        </Link>
        <Link
          href="#how-to-use"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          使い方
        </Link>
        <Link
          href="https://x.com/Shin_Engineer"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
          target="_blank"
          rel="noreferrer"
        >
          コンタクト
        </Link>
      </nav>
    </header>
  );
};

export default Header;

function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
