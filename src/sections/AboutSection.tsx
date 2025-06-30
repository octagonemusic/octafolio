"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface AboutTab {
  id: string;
  title: string;
  icon: string;
  content: {
    para1: string;
    para2: string;
  };
}

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [whoamiText, setWhoamiText] = useState("");
  const [activeTab, setActiveTab] = useState("background");
  const [contentVisible, setContentVisible] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("");
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [commandOutput, setCommandOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Typewriter effect for whoami
  useEffect(() => {
    const targetText = "whoami";
    let index = 0;

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

  // Shell command animation
  useEffect(() => {
    const commands = ["whoami", "uname -a", "cat /etc/hostname", "id"];
    let cmdIndex = 0;

    const cmdTimer = setInterval(() => {
      setCurrentCommand(commands[cmdIndex]);
      cmdIndex = (cmdIndex + 1) % commands.length;
    }, 6000);

    return () => clearInterval(cmdTimer);
  }, []);

  // Command typewriter effect
  useEffect(() => {
    if (!currentCommand) return;

    setDisplayedCommand("");
    setShowOutput(false);
    setCommandOutput("");

    let index = 0;

    const typeTimer = setInterval(() => {
      if (index <= currentCommand.length) {
        setDisplayedCommand(currentCommand.slice(0, index));
        index++;
      } else {
        clearInterval(typeTimer);
        // Show output immediately after command is typed
        setTimeout(() => {
          const outputs = {
            whoami: "<span class='text-mauve'>octagone</span>",
            "uname -a":
              "Linux <span class='text-blue'>octagone-arch</span> <span class='text-green'>6.6.52-1-lts</span> #1 SMP <span class='text-yellow'>x86_64</span> <span class='text-peach'>GNU/Linux</span>",
            "cat /etc/hostname": "<span class='text-blue'>octagone-arch</span>",
            id: "uid=<span class='text-yellow'>1000</span>(<span class='text-mauve'>octagone</span>) gid=<span class='text-green'>1000</span>(<span class='text-blue'>octagone</span>) groups=<span class='text-peach'>wheel,docker,users</span>",
          };

          setCommandOutput(
            outputs[currentCommand as keyof typeof outputs] || "",
          );
          setShowOutput(true);
        }, 200);
      }
    }, 80);

    return () => clearInterval(typeTimer);
  }, [currentCommand]);

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timeTimer = setInterval(updateTime, 1000);

    return () => clearInterval(timeTimer);
  }, []);

  // Content animation effect
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const aboutTabs: AboutTab[] = [
    {
      id: "background",
      title: "background.md",
      icon: "📄",
      content: {
        para1:
          "I'm a final-year Computer Science undergrad at Amrita Vishwa Vidyapeetham, and I've been building full-stack web apps since I first got into tech, way back in 2020. The journey started with curiosity about how websites worked, and it quickly turned into a passion for creating digital experiences.",
        para2:
          'From my first "Hello World" to complex full-stack applications, every project has taught me something new about the craft of software development. I love how each challenge pushes me to learn new technologies and think creatively about problem-solving.',
      },
    },
    {
      id: "systems",
      title: "systems.sh",
      icon: "🐧",
      content: {
        para1:
          "Over time, I've grown into a bit of a Linux power user - it's become my true passion due to my obsession with tinkering and computers. I daily-drive Arch + Hyprland on my laptop and run a Debian-based homelab, always tweaking dotfiles and finding cool self-hosting tools.",
        para2:
          "What I love about Linux is how the low-level control and system tweaking come together to make the system feel entirely mine. From custom keybindings to automated deployment scripts, every part of my workflow is intentionally crafted. It's this endless tinkering that keeps me excited about technology.",
      },
    },
    {
      id: "expertise",
      title: "focusAreas.py",
      icon: "🔬",
      content: {
        para1:
          "I've worked on quite a few AI/ML projects through college courses and side projects - it used to be a major interest of mine and gave me solid experience in the field. While it's not my current passion, the problem-solving mindset and technical foundation have been invaluable.",
        para2:
          "Lately, I've been digging into cybersecurity through courses and side projects. I'm still a beginner, but I find it genuinely fascinating how it intersects with system knowledge. The challenge of understanding both attack and defense strategies keeps me digging deeper on my own.",
      },
    },
    {
      id: "philosophy",
      title: "philosophy.txt",
      icon: "💭",
      content: {
        para1:
          "At the end of the day, I love building systems — whether it's a polished frontend, a robust backend service, or a custom setup running on bare metal. There's something deeply satisfying about taking an idea from concept to reality and solving problems along the way.",
        para2:
          "Every bug fixed, every feature implemented, every system optimized — it all adds up to something meaningful. I'm always learning, always tinkering, always looking for the next challenge that will push me to grow as both a developer and a system architect.",
      },
    },
  ];

  const renderHighlightedContent = (
    text: string,
    highlights: Array<{ text: string; color: string }>,
  ) => {
    let result = text;
    highlights.forEach(({ text: highlightText, color }) => {
      result = result.replace(
        highlightText,
        `<span class="font-semibold ${color}">${highlightText}</span>`,
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  const getHighlights = (tabId: string, paraNum: number) => {
    const highlights = {
      background: {
        1: [
          { text: "Computer Science undergrad", color: "text-blue" },
          { text: "full-stack web apps", color: "text-pink" },
        ],
        2: [
          { text: "Hello World", color: "text-yellow" },
          { text: "software development", color: "text-teal" },
        ],
      },
      systems: {
        1: [
          { text: "Linux power user", color: "text-sapphire" },
          { text: "Arch + Hyprland", color: "text-blue" },
          { text: "Debian-based homelab", color: "text-red" },
        ],
        2: [
          { text: "entirely mine", color: "text-yellow" },
          { text: "endless tinkering", color: "text-mauve" },
        ],
      },
      expertise: {
        1: [
          { text: "AI/ML projects", color: "text-mauve" },
          { text: "solid experience", color: "text-green" },
        ],
        2: [
          { text: "cybersecurity", color: "text-peach" },
          { text: "digging deeper", color: "text-red" },
        ],
      },
      philosophy: {
        1: [
          { text: "building systems", color: "text-teal" },
          { text: "concept to reality", color: "text-blue" },
        ],
        2: [
          { text: "always learning", color: "text-yellow" },
          { text: "system architect", color: "text-sapphire" },
        ],
      },
    };
    return (
      highlights[tabId as keyof typeof highlights]?.[
        paraNum as keyof typeof highlights.background
      ] || []
    );
  };

  return (
    <section
      id="about"
      className="h-screen flex flex-col bg-mantle px-6 sm:px-12 lg:px-20 snap-start"
      style={{ willChange: "transform" }}
    >
      {/* Header */}
      <motion.div
        className="flex-shrink-0 pt-8 pb-6"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={
          shouldReduceMotion
            ? { duration: 0.3, delay: 0.1 }
            : { duration: 0.6, delay: 0.2, ease: "easeOut" }
        }
        style={{ transform: "translateZ(0)" }}
      >
        <div className="text-center mb-6">
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
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              |
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        className="flex-1 flex flex-col max-w-6xl mx-auto w-full pb-55 sm:pb-24 min-h-0"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0.3, delay: 0.8 }
            : { duration: 0.8, delay: 1.0, ease: "easeOut" }
        }
        style={{ transform: "translateZ(0)" }}
      >
        {/* Terminal Header */}
        <div className="bg-surface0 rounded-t-lg border-2 border-blue border-b-0 p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red"></div>
              <div className="w-3 h-3 rounded-full bg-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-green"></div>
            </div>
            <span className="text-subtext0 font-mono text-sm ml-4">
              ~/octagone/about
            </span>
          </div>

          {/* File Tabs */}
          <div className="flex gap-1 overflow-x-auto">
            {aboutTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-t text-sm font-mono whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-mantle text-text border-b-2 border-blue"
                    : "bg-surface1 text-subtext0 hover:text-text hover:bg-surface2"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 bg-surface0 rounded-b-lg border-2 border-blue border-t-0 p-6 overflow-hidden">
          <div
            className="h-full overflow-y-auto custom-scrollbar no-scroll-snap"
            style={{ scrollBehavior: "auto" }}
          >
            <motion.div
              className="space-y-6"
              key={activeTab}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, filter: "blur(2px)" }
              }
              animate={
                contentVisible
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 10, filter: "blur(2px)" }
              }
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.4,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                // Reset scroll to top on tab changes
                const scrollContainer =
                  document.querySelector(".custom-scrollbar");
                if (scrollContainer) {
                  scrollContainer.scrollTop = 0;
                }
              }}
            >
              <p className="text-lg text-text leading-relaxed">
                {renderHighlightedContent(
                  aboutTabs.find((tab) => tab.id === activeTab)?.content
                    .para1 || "",
                  getHighlights(activeTab, 1),
                )}
              </p>

              <p className="text-lg text-text leading-relaxed">
                {renderHighlightedContent(
                  aboutTabs.find((tab) => tab.id === activeTab)?.content
                    .para2 || "",
                  getHighlights(activeTab, 2),
                )}
              </p>

              {/* Spacer to push status bar to bottom */}
              <div className="flex-1"></div>

              {/* Terminal Status Bar - Always at bottom */}
              <div className="mt-auto pt-4 border-t border-overlay0">
                <div className="font-mono text-base space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-overlay1">~/octagone %</span>
                    <span className="text-text">{displayedCommand}</span>
                    <motion.span
                      className="text-mauve"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      {displayedCommand.length < currentCommand.length
                        ? "|"
                        : ""}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div
                      className="text-subtext0 leading-tight flex-1"
                      dangerouslySetInnerHTML={{
                        __html: showOutput ? commandOutput : "&nbsp;",
                      }}
                    ></div>
                    <div className="text-overlay0 ml-4">{currentTime}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
