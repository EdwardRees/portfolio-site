import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui";

import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div className="px-5 py-3">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row justify-between">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="text-xl font-bold">Home</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col items-center px-3">
                <Link className="py-4 px-4" href="/">
                  Home
                </Link>
                <a className="py-4" href="#about">
                  About
                </a>
                <a className="py-4" href="#services">
                  Services
                </a>
                <a href="#education" className="py-4">
                  Education
                </a>
                <a className="py-4" href="#experience">
                  Experience
                </a>
                <a className="py-4" href="#skills">
                  Skills
                </a>
                <a className="py-4" href="#projects">
                  Projects
                </a>
                <a href="#support" className="py-4 text-center">
                  Support my Friends and Family
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <div className="px-1"></div>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export { Navbar };
