"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const roleTexts = [
  "Linux Enthusiast",
  "Terminal Enjoyer",
  "Full-Stack Developer",
  "Exploring Security Layers",
  "AI/ML Curious",
];

export default function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [roleIsDeleting, setRoleIsDeleting] = useState(false);
  const [rolePaused, setRolePaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Role typewriter effect
  useEffect(() => {
    const targetText = roleTexts[roleIndex];

    if (rolePaused) {
      const pauseTimer = setTimeout(() => {
        setRolePaused(false);
        setRoleIsDeleting(true);
      }, 2500);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = roleIsDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!roleIsDeleting) {
        if (roleText.length < targetText.length) {
          setRoleText(targetText.slice(0, roleText.length + 1));
        } else {
          setRolePaused(true);
        }
      } else {
        if (roleText.length > 0) {
          setRoleText(roleText.slice(0, -1));
        } else {
          setRoleIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roleTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, roleIndex, roleIsDeleting, rolePaused]);

  return (
    <section
      id="home"
      className="min-h-screen h-screen flex items-start justify-center bg-base px-4 sm:px-6 lg:px-12 xl:px-20 pt-8 sm:pt-16 lg:pt-0 overflow-x-hidden overflow-y-auto snap-start"
      style={{ willChange: "transform" }}
    >
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto lg:flex lg:items-center lg:min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-20 items-center w-full">
          {/* Left Column - Main Content */}
          <motion.div
            className="lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { duration: 0.8, ease: "easeOut" }
            }
            style={{ transform: "translateZ(0)" }}
          >
            {/* Name with gradient effect */}
            <motion.div
              className="space-y-2 sm:space-y-3"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -30 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.1 }
                  : { duration: 0.8, delay: 0.2, ease: "easeOut" }
              }
              style={{ transform: "translateZ(0)" }}
            >
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono leading-tight">
                <span className="bg-gradient-to-r from-mauve via-pink to-red bg-clip-text text-text">
                  Bhargav Prasad
                </span>
              </h1>
              {/* Tagline with colors */}
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-mono">
                <span className="text-pink">CS Student</span>
                <span className="text-subtext0 mx-2 sm:mx-3">·</span>
                <span className="text-blue">Amrita Vishwa Vidyapeetham</span>
              </p>
            </motion.div>

            {/* Role Typewriter Effect - Hidden on mobile */}
            <motion.div
              className="hidden sm:block text-sm sm:text-lg lg:text-xl xl:text-2xl font-mono"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.2 }
                  : { duration: 0.6, delay: 0.4, ease: "easeOut" }
              }
              style={{ transform: "translateZ(0)" }}
            >
              <span className="text-overlay0">~/octagone %</span>{" "}
              <span className="text-yellow">{roleText}</span>
              <span className="animate-pulse text-mauve">|</span>
            </motion.div>

            {/* Social Section */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.3 }
                  : { duration: 0.6, delay: 0.6, ease: "easeOut" }
              }
              style={{ transform: "translateZ(0)" }}
            >
              <h3 className="text-sm xs:text-lg sm:text-xl md:text-2xl font-bold font-mono text-subtext-0 text-center lg:text-left">
                Let&apos;s connect
              </h3>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-6">
                <motion.a
                  href="https://github.com/octagonemusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface0 hover:bg-mauve text-text hover:text-crust px-6 py-3 rounded-lg font-mono text-[1rem] transition-colors duration-200 flex items-center space-x-2 hover:shadow-lg hover:shadow-mauve/20"
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3, delay: 0.4 }
                      : {
                          opacity: {
                            duration: 0.5,
                            delay: 0.8,
                            ease: "easeOut",
                          },
                          y: { duration: 0.5, delay: 0.8, ease: "easeOut" },
                          scale: { duration: 0.15 },
                        }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { scale: 1.1, y: -4, transition: { duration: 0.15 } }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? {}
                      : { scale: 0.95, y: 0, transition: { duration: 0.1 } }
                  }
                  style={{ transform: "translateZ(0)" }}
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500 ease-out"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="group-hover:font-bold transition-all duration-200">
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhargav-prasad-5a183a261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface0 hover:bg-blue text-text hover:text-crust px-6 py-3 rounded-lg font-mono text-1rem transition-colors duration-200 flex items-center space-x-2 hover:shadow-lg hover:shadow-blue/20"
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3, delay: 0.45 }
                      : {
                          opacity: {
                            duration: 0.5,
                            delay: 0.9,
                            ease: "easeOut",
                          },
                          y: { duration: 0.5, delay: 0.9, ease: "easeOut" },
                          scale: { duration: 0.15 },
                        }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { scale: 1.1, y: -4, transition: { duration: 0.15 } }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? {}
                      : { scale: 0.95, y: 0, transition: { duration: 0.1 } }
                  }
                  style={{ transform: "translateZ(0)" }}
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500 ease-out"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="group-hover:font-bold transition-all duration-200">
                    LinkedIn
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3, delay: 0.15 }
                : { duration: 0.8, delay: 0.3, ease: "easeOut" }
            }
            style={{ transform: "translateZ(0)" }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                className="text-sm sm:text-lg md:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 0.25 }
                    : { duration: 0.6, delay: 0.5, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                I love building{" "}
                <span className="text-maroon font-semibold">
                  clean, thoughtful systems
                </span>{" "}
                — from
                <span className="text-subtext0 font-semibold">
                  {" "}
                  intuitive web-apps
                </span>{" "}
                to
                <span className="text-subtext0 font-semibold">
                  {" "}
                  low-level experiments
                </span>
                .
              </motion.p>

              <motion.p
                className="text-sm sm:text-lg md:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 0.35 }
                    : { duration: 0.6, delay: 0.7, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                Right now, I&apos;m focused on learning, tinkering, and
                <span className="text-yellow font-semibold">
                  {" "}
                  creating things I care about
                </span>
                .
              </motion.p>

              <motion.p
                className="text-sm sm:text-lg md:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 0.45 }
                    : { duration: 0.6, delay: 0.9, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                When I&apos;m not building or breaking stuff, I&apos;m probably
                <span className="text-blue font-semibold">
                  {" "}
                  tweaking dotfiles
                </span>{" "}
                or
                <span className="text-subtext0 font-semibold">
                  {" "}
                  organizing my workspace
                </span>
                .
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
