"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

type NavbarLinkProps = {
  href: string;
  children?: React.ReactNode;
  blank?: boolean;
  Icon?: React.ComponentType;
};

const NavbarLink = ({
  href,
  children,
  blank = false,
  Icon,
}: NavbarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassNames = `flex items-center gap-2 text-[0.95rem]  hover:text-neutral-200 ${
    isActive ? "text-neutral-200" : "text-neutral-400"
  }`;

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={linkClassNames} target={blank ? "_blank" : undefined}>
        {Icon && <Icon />}
        {children}
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-end md:justify-center align-center gap-3">
      <div className="flex items-center justify-between mr-5 md:mr-0 bg-neutral-900/20 border-[1px] border-neutral-800/40 w-fit gap-5 mt-4 p-2 rounded-xl fixed z-50 backdrop-blur-sm">
        <div className="items-center gap-5 md:flex hidden">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/education">Education</NavbarLink>
          <NavbarLink href="/works">Works</NavbarLink>
          <NavbarLink href="https://github.com/AgustinBN/worksland" blank>
            Source
          </NavbarLink>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none focus:text-indigo-400 focus:ring-0 md:hidden"
          >
            <RxHamburgerMenu />
            {isOpen && (
              <div className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-neutral-900/80 border-[1px] border-neutral-800/40 ring-opacity-5 focus:outline-none">
                <div className="p-2">
                  <NavbarLink href="/">Home</NavbarLink>
                  <NavbarLink href="/education">Education</NavbarLink>
                  <NavbarLink href="/works">Works</NavbarLink>
                  <NavbarLink
                    href="https://github.com/AgustinBN/worksland"
                    blank
                  >
                    Source
                  </NavbarLink>
                </div>
              </div>
            )}
          </button>
          <NavbarLink href="https://x.com/AgustinBN_" blank Icon={FaXTwitter} />
          <NavbarLink
            href="https://github.com/AgustinBN/"
            blank
            Icon={AiFillGithub}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
