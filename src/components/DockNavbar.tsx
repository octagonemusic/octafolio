"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "" },
  { id: "about", label: "About", icon: "" },
  { id: "skills", label: "Skills", icon: "" },
  { id: "projects", label: "Projects", icon: "" },
  { id: "contact", label: "Contact", icon: "" },
];

export default function DockNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-md sm:w-auto sm:max-w-none">
      <div className="flex items-center justify-center gap-1 sm:gap-2 px-2 xs:px-3 sm:px-4 py-2.5 xs:py-3 bg-surface0/80 backdrop-blur-md border-blue border-2 rounded-xl shadow-lg overflow-hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative px-2 sm:px-4 py-1 rounded-lg
              transition-all duration-250 ease-out
              flex-shrink-0 min-w-0
              ${
                activeSection === item.id
                  ? "bg-maroon text-base"
                  : "text-subtext0 hover:text-text hover:bg-surface1/30"
              }
            `}
          >
            <span className="font-bold text-sm sm:text-[1rem] whitespace-nowrap overflow-hidden text-ellipsis">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
