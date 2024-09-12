import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { ModeToggle, ThemeToggleIcon } from "../ui/theme-toggler";
 
export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Libaries",
      icon: (
        <IconNewSection className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-fulltext-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Theme",
      icon: (
        <ThemeToggleIcon/>
      ),
      href: "#",
    },
  ];
  return (
    <div className="absolute bottom-20 inset-x-0 flex items-center justify-center mx-auto">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}