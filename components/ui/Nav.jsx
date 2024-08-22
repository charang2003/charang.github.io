"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Certifications", path: "/services" },
  { name: "Resume", path: "/resume" },  // Added Resume
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

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
