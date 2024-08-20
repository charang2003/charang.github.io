import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Nav from "@/components/ui/Nav";
import MobileNav from "@/components/ui/MobileNav"; // Add this line

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Charan <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navigation and Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav Placeholder */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
