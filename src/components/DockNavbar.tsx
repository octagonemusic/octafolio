"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const scrollContainer = document.querySelector(".snap-y");
      if (!scrollContainer) return;

      const sections = navItems.map((item) => document.getElementById(item.id));
      const containerRect = scrollContainer.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = containerRect.height;

      // Find the section that's most visible in the viewport
      let maxVisibleArea = 0;
      let mostVisibleSection = navItems[0].id;

      sections.forEach((section, index) => {
        if (!section) return;

        const sectionRect = section.getBoundingClientRect();
        const sectionStart = scrollTop + (sectionRect.top - containerRect.top);
        const sectionEnd = sectionStart + sectionRect.height;

        // Calculate visible area
        const visibleStart = Math.max(scrollTop, sectionStart);
        const visibleEnd = Math.min(scrollTop + containerHeight, sectionEnd);
        const visibleArea = Math.max(0, visibleEnd - visibleStart);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleSection = navItems[index].id;
        }
      });

      setActiveSection(mostVisibleSection);
    }, 50);
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      // Set initial active section
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-md sm:w-auto sm:max-w-none"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="flex items-center justify-center gap-1 sm:gap-2 px-2 xs:px-3 sm:px-4 py-2.5 xs:py-3 bg-surface0/80 backdrop-blur-md border-blue border-2 rounded-xl shadow-lg overflow-hidden"
        initial={shouldReduceMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.3, delay: 0.4 }
            : {
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.8,
              }
        }
        style={{ transform: "translateZ(0)" }}
      >
        {navItems.map((item) => (
          <motion.button
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative px-2 sm:px-4 py-1 rounded-lg
              transition-all duration-250 ease-out
              flex-shrink-0 min-w-0 cursor-pointer
              ${
                activeSection === item.id
                  ? "bg-maroon text-base"
                  : "text-subtext0 hover:text-text hover:shadow-md hover:bg-surface1/30"
              }
            `}
            style={{ transform: "translateZ(0)" }}
          >
            <span className="font-bold text-sm sm:text-[1rem] whitespace-nowrap overflow-hidden text-ellipsis">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </nav>
  );
}
