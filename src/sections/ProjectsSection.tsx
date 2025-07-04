"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import React from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  languages: Array<{ name: string; color: string; percentage: number }>;
  lastCommit: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "flexrr",
    name: "Flexrr",
    description: "🎨 Modular CMS for high-performance static websites",
    longDescription:
      "Flexrr is a modular content management system (CMS) designed for building high-performance, SEO-optimized static websites. It integrates Payload CMS as the backend with MongoDB storage and Next.js SSG for lightning-fast delivery.",
    languages: [
      { name: "🟦 TypeScript", color: "text-blue", percentage: 93.5 },
      { name: "🎨 CSS", color: "text-blue", percentage: 4.1 },
      { name: "🟨 JavaScript", color: "text-blue", percentage: 1.2 },
    ],
    lastCommit: "2 hours ago",
    githubUrl: "https://github.com/octagonemusic/flexrr",
    liveUrl: "https://flexrrcms.vercel.app",
    features: [
      "Payload CMS integration",
      "Next.js SSG",
      "MongoDB storage",
      "Reusable content blocks",
      "SEO optimization",
      "Responsive layouts",
    ],
    techStack: ["Next.js", "Payload CMS", "MongoDB", "TypeScript", "Tailwind"],
  },
  {
    id: "flexrr-studio",
    name: "Flexrr Studio",
    description: "🚀 Automation & deployment tool for Flexrr projects",
    longDescription:
      "Flexrr Studio simplifies the deployment process by integrating GitHub and Vercel, allowing users to create and deploy Flexrr projects in a few clicks. Handles repository creation, environment setup, and deployment automation.",
    languages: [
      { name: "🟦 TypeScript", color: "text-blue", percentage: 99.8 },
      { name: "⚙️ Other", color: "text-blue", percentage: 0.2 },
    ],
    lastCommit: "1 day ago",
    githubUrl: "https://github.com/octagonemusic/flexrr-studio",
    liveUrl: "https://flexrr-studio.vercel.app",
    features: [
      "GitHub integration",
      "Vercel deployment",
      "Environment setup",
      "Project dashboard",
      "Deployment tracking",
      "Update management",
    ],
    techStack: ["React", "Node.js", "GitHub API", "Vercel API", "MongoDB"],
  },
  {
    id: "flyrr",
    name: "Flyrr",
    description: "💬 Real-time messaging app with code execution",
    longDescription:
      "Flyrr is a real-time messaging application built using the MERN stack with Socket.IO for WebSocket communication. Features multi-user chat rooms, live message delivery, and remote code execution for multiple programming languages.",
    languages: [
      { name: "🟨 JavaScript", color: "text-blue", percentage: 97.1 },
      { name: "🎨 CSS", color: "text-blue", percentage: 2.3 },
      { name: "🔴 HTML", color: "text-blue", percentage: 0.6 },
    ],
    lastCommit: "5 days ago",
    githubUrl: "https://github.com/octagonemusic/flyrr-mern-app",
    liveUrl: "https://flyrrchat.onrender.com",
    features: [
      "Real-time messaging",
      "Code execution",
      "Multi-user chat rooms",
      "Syntax highlighting",
      "Message history",
      "Typing indicators",
    ],
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB", "Express"],
  },
  {
    id: "signeval",
    name: "SignEval",
    description: "🤟 ASL Alphabet Recognition using MediaPipe & Deep Learning",
    longDescription:
      "SignEval is an ASL (American Sign Language) alphabet recognition system built using MediaPipe for hand landmark detection and a custom-trained deep learning model for classification. Supports real-time gesture recognition through webcam.",
    languages: [{ name: "🐍 Python", color: "text-blue", percentage: 100 }],
    lastCommit: "1 week ago",
    githubUrl: "https://github.com/octagonemusic/signeval",
    features: [
      "Real-time gesture recognition",
      "29 gesture support",
      "MediaPipe integration",
      "Deep learning model",
      "Webcam inference",
      "Confidence scoring",
    ],
    techStack: ["Python", "MediaPipe", "TensorFlow", "OpenCV", "NumPy"],
  },
  {
    id: "arp-toolkit",
    name: "ARP Toolkit",
    description: "🛡️ Network simulation environment for ARP spoofing analysis",
    longDescription:
      "The ARP Toolkit is a network simulation environment for demonstrating, detecting, and analyzing ARP spoofing attacks in a safe and controlled setting using Docker. Consists of three containers mimicking a network environment.",
    languages: [
      { name: "🐍 Python", color: "text-blue", percentage: 54.7 },
      { name: "🔴 HTML", color: "text-blue", percentage: 44.1 },
      { name: "🐚 Shell", color: "text-blue", percentage: 1.2 },
    ],
    lastCommit: "3 weeks ago",
    githubUrl: "https://github.com/octagonemusic/arp-toolkit",
    features: [
      "ARP spoofing simulation",
      "Real-time monitoring",
      "Docker containerization",
      "Attack detection",
      "Network visualization",
      "Security training",
    ],
    techStack: ["Python", "Docker", "Scapy", "Flask", "NetworkX"],
  },
  {
    id: "water-quality",
    name: "Early Water Quality Detection",
    description: "💧 ML-based water quality prediction system",
    longDescription:
      "This system predicts surface water quality using regression-based models built on India-WRIS portal data. Features a two-stage model architecture with 84-94% prediction accuracy and early warning system for critical thresholds.",
    languages: [{ name: "🐍 Python", color: "text-blue", percentage: 100 }],
    lastCommit: "2 weeks ago",
    githubUrl: "https://github.com/octagonemusic/ml_hackathon/",
    features: [
      "ML prediction models",
      "Two-stage architecture",
      "Early warning system",
      "WHO/EPA thresholds",
      "Real-time monitoring",
      "Risk classification",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [terminalText, setTerminalText] = useState("");
  const [showRepos, setShowRepos] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentTime, setCurrentTime] = useState("");

  // Terminal typewriter effect
  useEffect(() => {
    const targetText = "gh repo list";
    let index = 0;

    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (index <= targetText.length) {
          setTerminalText(targetText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowRepos(true), 500);
        }
      }, 80);
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);

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

  return (
    <section
      id="projects"
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
            className="text-4xl sm:text-6xl font-bold font-mono text-text mb-4"
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
            My Projects
          </motion.h2>
          <motion.div
            className="text-sm xs:text-lg sm:text-xl lg:text-2xl font-mono text-overlay0"
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
      </motion.div>

      {/* Git Repository Interface */}
      <motion.div
        className="flex-1 flex flex-col max-w-7xl mx-auto w-full pb-45 sm:pb-24 min-h-0"
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
        {showRepos && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
            className="bg-surface0 rounded-lg border-2 border-blue overflow-hidden flex-1 flex flex-col min-h-0"
          >
            {/* Terminal Header */}
            <div className="bg-surface0 p-2 flex-shrink-0 border-b border-surface2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-green"></div>
                  </div>
                  <span className="text-subtext0 font-mono text-xs ml-2">
                    repositories
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setViewMode(viewMode === "list" ? "grid" : "list")
                    }
                    className="hidden sm:flex items-center gap-1 text-subtext0 hover:text-text transition-colors p-1 bg-surface1 hover:bg-surface2 rounded font-mono text-xs cursor-pointer"
                  >
                    {viewMode === "list" ? "⊞" : "☰"}
                    <span>{viewMode === "list" ? "Grid" : "List"}</span>
                  </button>
                  <span className="text-overlay0 text-xs font-mono">
                    {currentTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Repository Stats */}
            <div className="bg-surface0 px-4 py-2 border-b border-surface2">
              <div className="flex items-center gap-6 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-blue">📊</span>
                  <span className="text-subtext0">
                    {projects.length} repositories
                  </span>
                </div>
              </div>
            </div>

            {/* Repository List */}
            <div className="flex-1 overflow-hidden">
              <div className="flex h-full">
                {/* Main Repository List */}
                <div className="flex-1 p-4 overflow-y-auto custom-scrollbar no-scroll-snap">
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 lg:grid-cols-2 gap-4"
                        : "space-y-4"
                    }
                  >
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        className={`bg-surface1 rounded-lg border border-surface2 hover:border-blue transition-all duration-300 cursor-pointer ${
                          selectedProject?.id === project.id
                            ? "border-blue bg-surface2"
                            : ""
                        }`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="p-4">
                          {/* Repository Header */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">📁</span>
                              <h3 className="font-mono font-bold text-text text-lg">
                                {project.name}
                              </h3>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-subtext1 text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Languages */}
                          <div className="flex items-center gap-2 mb-3">
                            {project.languages.map((lang) => (
                              <div
                                key={lang.name}
                                className="flex items-center gap-1"
                              >
                                <span className="text-xs sm:text-sm font-mono text-subtext0">
                                  {lang.name}
                                </span>
                                <span className="hidden sm:inline text-xs sm:text-sm text-overlay0">
                                  {lang.percentage}%
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Repository Stats */}
                          <div className="flex items-center justify-between text-xs font-mono text-overlay0">
                            <span>Updated {project.lastCommit}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Details Panel */}
                <AnimatePresence>
                  {selectedProject && (
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
                      className="hidden lg:block lg:w-96 border-l border-surface2 bg-surface0 overflow-y-auto custom-scrollbar no-scroll-snap"
                    >
                      <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">📁</span>
                            <h3 className="font-mono font-bold text-text text-xl">
                              {selectedProject.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => setSelectedProject(null)}
                            className="text-overlay0 hover:text-text transition-colors"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Long Description */}
                        <div className="bg-surface1 rounded-lg p-4">
                          <h4 className="font-mono font-semibold text-text mb-2">
                            README.md
                          </h4>
                          <p className="text-sm text-subtext1 leading-relaxed">
                            {selectedProject.longDescription}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-mono font-semibold text-text mb-2">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="bg-surface2 text-text border border-blue px-2 py-1 rounded text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-mono font-semibold text-text mb-2">
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {selectedProject.features.map((feature, index) => (
                              <li
                                key={index}
                                className="text-sm text-subtext1 flex items-center gap-2"
                              >
                                <span className="text-blue">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                          {selectedProject.githubUrl && (
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-surface2 hover:bg-blue hover:text-crust text-text px-4 py-2 rounded font-mono text-sm transition-colors cursor-pointer"
                            >
                              <span>📦</span>
                              git clone
                            </a>
                          )}
                          {selectedProject.liveUrl && (
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-surface2 hover:bg-blue hover:text-crust text-text px-4 py-2 rounded font-mono text-sm transition-colors cursor-pointer"
                            >
                              <span>🚀</span>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Mobile Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.3 }}
            className="lg:hidden fixed inset-x-4 bottom-45 top-auto bg-surface0 border border-surface2 rounded-xl p-4 shadow-xl z-50 max-h-80 overflow-y-auto custom-scrollbar no-scroll-snap"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📁</span>
                <h3 className="font-mono font-bold text-text text-lg truncate">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-overlay0 hover:text-text transition-colors p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-subtext1 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-surface2 text-text border border-blue px-2 py-1 rounded text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-surface2 hover:bg-blue hover:text-crust text-text px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer"
                  >
                    📦 Clone
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-surface2 hover:bg-blue hover:text-crust text-text px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer"
                  >
                    🚀 Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
