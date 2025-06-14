"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [whoamiText, setWhoamiText] = useState("");


  // Typewriter effect for whoami
  useEffect(() => {
    const targetText = "whoami";
    let index = 0;

    // Start after a short delay to coordinate with other animations
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (index <= targetText.length) {
          setWhoamiText(targetText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 120);
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-mantle px-6 sm:px-12 lg:px-20 py-16 overflow-x-hidden"
      style={{ willChange: "transform" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : { duration: 0.8, ease: "easeOut" }
          }
          style={{ transform: "translateZ(0)" }}
        >
          {/* Header */}
          <motion.div
            className="text-center"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? { duration: 0.3, delay: 0.1 }
                : { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }
            style={{ transform: "translateZ(0)" }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-text mb-4"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.3 }
                  : { duration: 0.5, delay: 0.4, ease: "easeOut" }
              }
            >
              About Me
            </motion.h2>
            <motion.div 
              className="text-xl sm:text-2xl font-mono text-overlay0"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.5 }
                  : { duration: 0.4, delay: 0.6, ease: "easeOut" }
              }
            >
              <span className="text-overlay0">~/octagone % </span>
              <span className="text-yellow">{whoamiText}</span>
              <motion.span 
                className="text-mauve"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <motion.div
              className="space-y-8"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.8 }
                  : { duration: 0.7, delay: 1.0, ease: "easeOut" }
              }
              style={{ transform: "translateZ(0)" }}
            >
              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.0 }
                    : { duration: 0.5, delay: 1.2, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                I&apos;m a final-year{" "}
                <span className="text-blue font-semibold">
                  Computer Science undergrad
                </span>{" "}
                at Amrita Vishwa Vidyapeetham, and I&apos;ve been building{" "}
                <span className="text-pink font-semibold">
                  full-stack web apps
                </span>{" "}
                since I first got into tech. From solo projects to freelance
                work, it&apos;s a space that I really enjoy working in.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.1 }
                    : { duration: 0.5, delay: 1.4, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                Over time, I&apos;ve grown into a bit of a Linux power user. I
                daily-drive{" "}
                <span className="text-sapphire font-semibold">
                  Arch + Hyprland{" "}
                </span>
                on my laptop and run a{" "}
                <span className="text-red font-semibold">Debian-based </span>
                homelab, constantly tweaking dotfiles and finding self-hosting
                tools I find cool or useful.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.2 }
                    : { duration: 0.5, delay: 1.6, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                What I love about Linux is how the low-level control and system
                tweaking come together to make the system feel{" "}
                <span className="text-yellow font-semibold">entirely mine</span>
                .
              </motion.p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="space-y-8"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.9 }
                  : { duration: 0.7, delay: 1.1, ease: "easeOut" }
              }
              style={{ transform: "translateZ(0)" }}
            >
              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.1 }
                    : { duration: 0.5, delay: 1.3, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                I&apos;ve worked on{" "}
                <span className="text-mauve font-semibold">AI/ML projects</span>{" "}
                through college courses and side projects — it&apos;s given me a
                solid foundation and shaped the way I think about
                problem-solving.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.2 }
                    : { duration: 0.5, delay: 1.5, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                Lately, I&apos;ve been digging into{" "}
                <span className="text-peach font-semibold">cybersecurity</span>.
                I&apos;m just getting started, but it&apos;s something I&apos;m
                genuinely excited to learn more about.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl text-subtext1 leading-relaxed"
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: 1.3 }
                    : { duration: 0.5, delay: 1.7, ease: "easeOut" }
                }
                style={{ transform: "translateZ(0)" }}
              >
                At the end of the day, I love{" "}
                <span className="text-teal font-semibold">
                  building systems
                </span>{" "}
                — whether it&apos;s a polished frontend, a backend service, or a
                custom setup running on bare metal. I&apos;m always learning,
                always tinkering.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
