"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize font-medium transition-all ${
            link.path === pathname
              ? "text-accent border-b-2 border-accent"
              : "text-white"
          } hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
