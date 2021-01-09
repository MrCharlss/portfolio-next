import Navlogo from "./NavLogo";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isActive, setIsactive] = useState(false);

  return (
    <header className="fixed top-0 right-0 w-full bg-brand z-20">
      <div className="container mx-auto  py-8 flex px-4 lg:px-4 justify-between">
        <Link href="/" className="z-20" passHref>
          <Navlogo />
        </Link>
        <nav className="flex flex-column justify-between items-center">
          <ul className="hidden md:flex flex-column  font-mono text-xs">
            <Link href="/#about">
              <li className="text-lead_light py-2 pr-4">
                <span className="text-org">01.</span>About
              </li>
            </Link>

            <li className="text-lead_light pr-4 py-2">
              <span className="text-org">02.</span>Experiencia
            </li>
            <li className="text-lead_light pr-4 py-2">
              <span className="text-org">03.</span>Trabajo
            </li>
            <li className="text-lead_light pr-4 py-2">
              <span className="text-org">04.</span>Contacto
            </li>
          </ul>
        </nav>
        <div className="z-20">
          <button
            onClick={() => {
              setIsactive(!isActive);
            }}
            className="text-2xl text-lead md:hidden"
          >
            X
          </button>
          <button className="btn hidden md:flex">Ponte en contacto</button>
        </div>
      </div>
      {isActive && <MobileNav />}
    </header>
  );
};

export default Nav;
