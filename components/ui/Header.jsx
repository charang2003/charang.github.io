import Link from "next/link";
import { Botton } from "@/components/ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto">
            {/* logo */}
            <Link href="/">
            <h1 className="text4xl font-semibold">
                Charan <span className="text-accent">.</span>
            </h1>
            </Link>
            {/* nav */}
            <Nav />
        </div>
    </header>
  );
};

export default Header;