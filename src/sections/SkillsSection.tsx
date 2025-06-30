"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

// Type definitions
interface FileItem {
  type: "file";
  name: string;
  icon: string;
  level?: string;
  years?: number;
  projects?: number;
  content?: string;
}

interface FolderItem {
  type: "folder";
  name: string;
  icon: string;
  color: string;
  children: Record<string, FileItem | FolderItem>;
}

type FileSystemItem = FileItem | FolderItem;
type FileSystem = Record<string, FileSystemItem>;

const skillsFileSystem: FileSystem = {
  "programming-languages": {
    type: "folder",
    name: "programming-languages",
    icon: "📁",
    color: "blue",
    children: {
      "java.skill": {
        type: "file",
        name: "Java",
        icon: "☕",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "python.skill": {
        type: "file",
        name: "Python",
        icon: "🐍",
        level: "Intermediate",
        years: 2,
        projects: 5,
      },
      "cpp.skill": {
        type: "file",
        name: "C/C++",
        icon: "⚡",
        level: "Intermediate",
        years: 2,
        projects: 5,
      },
      "javascript.skill": {
        type: "file",
        name: "JavaScript (ES6+)",
        icon: "🟨",
        level: "Advanced",
        years: 5,
        projects: 9,
      },
      "typescript.skill": {
        type: "file",
        name: "TypeScript",
        icon: "🔷",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "shell.skill": {
        type: "file",
        name: "Shell Scripting",
        icon: "🐚",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
    },
  },
  frameworks: {
    type: "folder",
    name: "frameworks",
    icon: "📁",
    color: "green",
    children: {
      "react.skill": {
        type: "file",
        name: "React.js",
        icon: "⚛️",
        level: "Advanced",
        years: 3,
        projects: 10,
      },
      "nextjs.skill": {
        type: "file",
        name: "Next.js",
        icon: "🚀",
        level: "Advanced",
        years: 1,
        projects: 8,
      },
      "nodejs.skill": {
        type: "file",
        name: "Node.js",
        icon: "🟢",
        level: "Advanced",
        years: 4,
        projects: 9,
      },
      "express.skill": {
        type: "file",
        name: "Express.js",
        icon: "🚂",
        level: "Intermediate",
        years: 3,
        projects: 5,
      },
      "tailwind.skill": {
        type: "file",
        name: "Tailwind CSS",
        icon: "🎨",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "spring.skill": {
        type: "file",
        name: "Spring Boot",
        icon: "🍃",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "flask.skill": {
        type: "file",
        name: "Flask",
        icon: "🌶️",
        level: "Beginner",
        years: 1,
        projects: 3,
      },
      "payload-cms.skill": {
        type: "file",
        name: "Payload CMS",
        icon: "📝",
        level: "Intermediate",
        years: 1,
        projects: 5,
      },
    },
  },
  databases: {
    type: "folder",
    name: "databases",
    icon: "📁",
    color: "peach",
    children: {
      "postgresql.skill": {
        type: "file",
        name: "PostgreSQL",
        icon: "🐘",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "mysql.skill": {
        type: "file",
        name: "MySQL",
        icon: "🐬",
        level: "Intermediate",
        years: 2,
        projects: 6,
      },
      "mongodb.skill": {
        type: "file",
        name: "MongoDB",
        icon: "🍃",
        level: "Advanced",
        years: 4,
        projects: 8,
      },
      "firebase.skill": {
        type: "file",
        name: "Firebase",
        icon: "🔥",
        level: "Beginner",
        years: 1,
        projects: 2,
      },
    },
  },
  "ai-ml-ds": {
    type: "folder",
    name: "ai-ml-ds",
    icon: "📁",
    color: "orange",
    children: {
      "pandas.skill": {
        type: "file",
        name: "Pandas",
        icon: "🐼",
        level: "Intermediate",
        years: 1,
      },
      "numpy.skill": {
        type: "file",
        name: "NumPy",
        icon: "🔢",
        level: "Intermediate",
        years: 1,
      },
      "scikit.skill": {
        type: "file",
        name: "Scikit-learn",
        icon: "📊",
        level: "Intermediate",
        years: 1,
      },
      "tensorflow.skill": {
        type: "file",
        name: "TensorFlow",
        icon: "🧠",
        level: "Intermediate",
        years: 1,
      },
      "matplotlib.skill": {
        type: "file",
        name: "Matplotlib/Seaborn",
        icon: "📈",
        level: "Intermediate",
        years: 1,
      },
    },
  },
  security: {
    type: "folder",
    name: "security",
    icon: "📁",
    color: "mauve",
    children: {
      "arp-spoofing.skill": {
        type: "file",
        name: "ARP spoofing (detection)",
        icon: "🕵️",
        level: "Intermediate",
        years: 1,
      },
      "crystals-dilithium.skill": {
        type: "file",
        name: "CRYSTALS-Dilithium",
        icon: "💎",
        level: "Beginner",
        years: 1,
      },
      "zkp.skill": {
        type: "file",
        name: "Zero-Knowledge Proofs",
        icon: "🔮",
        level: "Beginner",
        years: 1,
      },
      "pq-crypto.skill": {
        type: "file",
        name: "Post-quantum crypto",
        icon: "🚀",
        level: "Beginner",
        years: 1,
      },
    },
  },
  devops: {
    type: "folder",
    name: "devops",
    icon: "📁",
    color: "lavender",
    children: {
      "docker.skill": {
        type: "file",
        name: "Docker",
        icon: "🐳",
        level: "Intermediate",
        years: 1,
      },
      "docker-compose.skill": {
        type: "file",
        name: "Docker Compose",
        icon: "🐙",
        level: "Intermediate",
        years: 1,
      },
      "git.skill": {
        type: "file",
        name: "Git",
        icon: "📦",
        level: "Advanced",
        years: 4,
      },
      "github-actions.skill": {
        type: "file",
        name: "GitHub Actions",
        icon: "⚙️",
        level: "Intermediate",
        years: 1,
      },
      "vercel.skill": {
        type: "file",
        name: "Vercel",
        icon: "△",
        level: "Intermediate",
        years: 1,
      },
      "tailscale.skill": {
        type: "file",
        name: "Tailscale",
        icon: "🔒",
        level: "Beginner",
        years: 1,
      },
    },
  },
  "linux-systems": {
    type: "folder",
    name: "linux-systems",
    icon: "📁",
    color: "red",
    children: {
      "arch-linux.skill": {
        type: "file",
        name: "Arch Linux (Hyprland)",
        icon: "🐧",
        level: "Advanced",
        years: 3,
      },
      "debian.skill": {
        type: "file",
        name: "Debian Server",
        icon: "🌪️",
        level: "Intermediate",
        years: 1,
      },
      "btrfs.skill": {
        type: "file",
        name: "Btrfs",
        icon: "🗂️",
        level: "Intermediate",
        years: 1,
      },
      "systemd.skill": {
        type: "file",
        name: "Systemd",
        icon: "⚙️",
        level: "Advanced",
        years: 3,
      },
      "samba.skill": {
        type: "file",
        name: "Samba",
        icon: "📂",
        level: "Beginner",
        years: 1,
      },
      "ssh.skill": {
        type: "file",
        name: "SSH",
        icon: "🔐",
        level: "Intermediate",
        years: 2,
      },
      "self-hosted.skill": {
        type: "file",
        name: "Self-hosted apps",
        icon: "🏠",
        level: "Intermediate",
        years: 1,
      },
    },
  },
  "other-interests": {
    type: "folder",
    name: "other-interests",
    icon: "📁",
    color: "teal",
    children: {
      "networks.skill": {
        type: "file",
        name: "Computer Networks",
        icon: "🌐",
        level: "Intermediate",
        years: 2,
      },
      "dx.skill": {
        type: "file",
        name: "Developer Experience",
        icon: "✨",
        level: "Intermediate",
        years: 2,
      },
      "dotfiles.skill": {
        type: "file",
        name: "Dotfiles & Linux theming",
        icon: "🎨",
        level: "Advanced",
        years: 3,
      },
    },
  },
  "soft-skills": {
    type: "folder",
    name: "soft-skills",
    icon: "📁",
    color: "yellow",
    children: {
      "scrum.skill": {
        type: "file",
        name: "Scrum Master",
        icon: "🏃",
        level: "Beginner",
        years: 0.5,
      },
      "collaboration.skill": {
        type: "file",
        name: "Team Collaboration",
        icon: "🤝",
        level: "Advanced",
        years: 3,
      },
      "communication.skill": {
        type: "file",
        name: "Clear Communication",
        icon: "💬",
        level: "Advanced",
        years: 4,
      },
      "debugging.skill": {
        type: "file",
        name: "Rapid Debugging",
        icon: "🐛",
        level: "Advanced",
        years: 3,
      },
    },
  },
  "README.md": {
    type: "file",
    name: "README.md",
    icon: "📋",
    content: `# Skills Overview

This directory contains all my technical and soft skills, organized by category.

## Usage
Navigate through the folders to explore different skill categories.
Each .skill file contains detailed information about proficiency and experience.

## Stats
- Total Skills: 53
- Years of Combined Experience: 110+
- Advanced Level Skills: 10
- Currently Learning: Post-quantum cryptography, Distributed Systems

## Last Updated
${new Date().toLocaleDateString()}
    `,
  },
};

const levelColors: Record<string, string> = {
  Beginner: "text-yellow",
  Intermediate: "text-peach",
  Advanced: "text-green",
};

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<FileSystemItem | null>(null);
  const [terminalText, setTerminalText] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const targetText = "cd ~/skills && ls -la";
    let index = 0;

    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (index <= targetText.length) {
          setTerminalText(targetText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowTerminal(true), 500);
        }
      }, 80);
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);

  // Navigate to current directory contents
  const getCurrentDirectory = (): FileSystem => {
    let current: FileSystem = skillsFileSystem;
    for (const pathPart of currentPath) {
      const item = current[pathPart];
      if (item && item.type === "folder") {
        current = item.children;
      }
    }
    return current;
  };

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName]);
    setSelectedItem(null);
  };

  const navigateUp = () => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1));
      setSelectedItem(null);
    }
  };

  const navigateToRoot = () => {
    setCurrentPath([]);
    setSelectedItem(null);
  };

  const selectItem = (item: FileSystemItem) => {
    setSelectedItem(item);
  };

  const currentDir = getCurrentDirectory();
  const breadcrumb = ["~", "skills", ...currentPath].join("/");

  return (
    <section
      id="skills"
      className="h-screen bg-base px-4 sm:px-6 lg:px-8 py-8 pb-55 sm:pb-26 pt-12 overflow-hidden snap-start"
    >
      <div className="w-full max-w-7xl mx-auto h-full">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : { duration: 0.8, ease: "easeOut" }
          }
          className="h-full flex flex-col"
        >
          {/* Header */}
          <div className="text-center space-y-2 flex-shrink-0 mb-4">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-text mb-4"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.3 }
                  : { duration: 0.5, delay: 0.4, ease: "easeOut" }
              }
            >
              Skills Explorer
            </motion.h2>
            <motion.div
              className="text-xl sm:text-2xl font-mono text-overlay0 mb-4"
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
              <span className="text-yellow">{terminalText}</span>
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

          {showTerminal && (
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
              className="bg-surface0 rounded-xl overflow-hidden flex-1 flex flex-col min-h-0"
            >
              {/* Terminal Header */}
              <div className="bg-surface1 px-4 py-3 flex items-center gap-2 flex-shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-green rounded-full"></div>
                </div>
                <div className="font-mono text-xs sm:text-sm text-overlay0 ml-4 truncate">
                  Skills Explorer - {breadcrumb}
                </div>
              </div>

              {/* File Explorer Content */}
              <div className="flex flex-1 min-h-0">
                {/* File List */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto no-scroll-snap">
                  {/* Breadcrumb Navigation */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-4 text-sm sm:text-lg font-mono overflow-x-auto">
                    <button
                      onClick={navigateToRoot}
                      className="text-mauve hover:text-text transition-colors whitespace-nowrap cursor-pointer"
                    >
                      ~/skills
                    </button>
                    {currentPath.map((path, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                      >
                        <span className="text-overlay0">/</span>
                        <button
                          onClick={() =>
                            setCurrentPath(currentPath.slice(0, index + 1))
                          }
                          className="text-mauve hover:text-text transition-colors cursor-pointer"
                        >
                          {path}
                        </button>
                      </span>
                    ))}
                  </div>

                  {/* Back Button */}
                  {currentPath.length > 0 && (
                    <motion.button
                      onClick={navigateUp}
                      className="flex items-center gap-2 p-2 hover:bg-surface1 rounded-lg transition-colors mb-2 sm:mb-4 w-full text-left cursor-pointer"
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    >
                      <span className="text-blue">📁</span>
                      <span className="font-mono text-text text-xs sm:text-sm">
                        ..
                      </span>
                    </motion.button>
                  )}

                  {/* File/Folder List */}
                  <div className="space-y-1">
                    {Object.entries(currentDir).map(([key, item]) => (
                      <motion.button
                        key={key}
                        onClick={() => {
                          if (item.type === "folder") {
                            navigateToFolder(key);
                          } else {
                            selectItem(item);
                          }
                        }}
                        className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-surface1 rounded-lg transition-all duration-200 w-full text-left group cursor-pointer ${
                          selectedItem === item
                            ? "bg-surface1 border-l-4 border-mauve"
                            : ""
                        }`}
                        whileHover={shouldReduceMotion ? {} : { x: 2 }}
                      >
                        <span className="text-xl sm:text-3xl group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                          {item.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-text text-sm sm:text-lg group-hover:text-mauve transition-colors truncate">
                            {item.name}
                          </div>
                          {item.type === "file" &&
                            "years" in item &&
                            item.years && (
                              <div className="text-xs font-mono text-overlay0">
                                {item.years} year
                                {item.years !== 1 ? "s" : ""} experience
                              </div>
                            )}
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {item.type === "folder" && (
                            <div className="text-sm font-mono text-text bg-surface2 px-3 py-1 rounded-full border border-overlay0">
                              {Object.keys(item.children).length}
                            </div>
                          )}
                          {item.type === "file" &&
                            "level" in item &&
                            item.level && (
                              <div
                                className={`text-xs font-mono px-2 py-1 rounded ${levelColors[item.level]} bg-opacity-20`}
                              >
                                {item.level}
                              </div>
                            )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* File Preview Panel */}
                <AnimatePresence>
                  {selectedItem && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: shouldReduceMotion ? 0.2 : 0.3 }}
                      className="hidden lg:block lg:w-80 border-l border-surface2 p-4 sm:p-6 bg-surface0 overflow-y-auto no-scroll-snap"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{selectedItem.icon}</span>
                          <h3 className="font-mono font-bold text-text text-lg sm:text-xl">
                            {selectedItem.name}
                          </h3>
                        </div>

                        {"content" in selectedItem && selectedItem.content ? (
                          <div className="bg-surface1 rounded-lg p-4 max-h-64 overflow-y-auto no-scroll-snap">
                            <pre className="text-sm font-mono text-subtext1 whitespace-pre-wrap">
                              {selectedItem.content}
                            </pre>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {"level" in selectedItem && selectedItem.level && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-mono text-overlay0">
                                  Level:
                                </span>
                                <span
                                  className={`text-sm font-mono px-2 py-1 rounded ${levelColors[selectedItem.level]} bg-opacity-20`}
                                >
                                  {selectedItem.level}
                                </span>
                              </div>
                            )}
                            {"years" in selectedItem && selectedItem.years && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-mono text-overlay0">
                                  Experience:
                                </span>
                                <span className="text-sm font-mono text-text">
                                  {selectedItem.years} year
                                  {selectedItem.years !== 1 ? "s" : ""}
                                </span>
                              </div>
                            )}
                            {"projects" in selectedItem &&
                              selectedItem.projects && (
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-mono text-overlay0">
                                    Projects:
                                  </span>
                                  <span className="text-sm font-mono text-text">
                                    {selectedItem.projects}
                                  </span>
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Preview Modal */}
                <AnimatePresence>
                  {selectedItem && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: shouldReduceMotion ? 0.2 : 0.3 }}
                      className="lg:hidden fixed inset-x-4 bottom-24 top-auto bg-surface0 border border-surface2 rounded-xl p-4 shadow-xl z-50"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{selectedItem.icon}</span>
                          <h3 className="font-mono font-bold text-text text-lg truncate">
                            {selectedItem.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => setSelectedItem(null)}
                          className="text-overlay0 hover:text-text transition-colors p-1 cursor-pointer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {"content" in selectedItem && selectedItem.content ? (
                        <div className="bg-surface1 rounded-lg p-3 max-h-32 overflow-y-auto no-scroll-snap">
                          <pre className="text-sm font-mono text-subtext1 whitespace-pre-wrap">
                            {selectedItem.content}
                          </pre>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-3 text-sm">
                          {"level" in selectedItem && selectedItem.level && (
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-overlay0">
                                Level:
                              </span>
                              <span
                                className={`font-mono px-2 py-1 rounded ${levelColors[selectedItem.level]} bg-opacity-20`}
                              >
                                {selectedItem.level}
                              </span>
                            </div>
                          )}
                          {"years" in selectedItem && selectedItem.years && (
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-overlay0">
                                Exp:
                              </span>
                              <span className="font-mono text-text">
                                {selectedItem.years}y
                              </span>
                            </div>
                          )}
                          {"projects" in selectedItem &&
                            selectedItem.projects && (
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-overlay0">
                                  Projects:
                                </span>
                                <span className="font-mono text-text">
                                  {selectedItem.projects}
                                </span>
                              </div>
                            )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
