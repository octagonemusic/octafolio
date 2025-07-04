"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [terminalText, setTerminalText] = useState("");
  const [showClient, setShowClient] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  // Terminal typewriter effect
  useEffect(() => {
    const targetText = "mail -s 'Contact' octagone@dev.local";
    let index = 0;

    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (index <= targetText.length) {
          setTerminalText(targetText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowClient(true), 500);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("Sending message...");

    // Simulate sending
    setTimeout(() => {
      setSendStatus("Message sent successfully! ✓");
      setIsSending(false);
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSendStatus(""), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col bg-base px-6 sm:px-12 lg:px-20 snap-start"
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
            Get In Touch
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

      {/* Email Client Interface */}
      <motion.div
        className="flex-1 flex flex-col max-w-4xl mx-auto w-full pb-45 sm:pb-24 min-h-0"
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
        {showClient && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
            className="bg-surface0 rounded-lg border-2 border-blue overflow-hidden flex-1 flex flex-col min-h-0"
          >
            {/* Email Client Header */}
            <div className="bg-surface0 p-2 flex-shrink-0 border-b border-surface2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-green"></div>
                  </div>
                  <span className="text-subtext0 font-mono text-xs ml-2">
                    compose message
                  </span>
                </div>
                <span className="text-overlay0 text-xs font-mono">
                  {currentTime}
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar no-scroll-snap">
              <form onSubmit={handleSend} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-blue font-mono text-[1rem] block">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-surface1 text-text font-mono text-[1rem] px-3 py-2 border border-surface2 rounded focus:border-blue focus:outline-none"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-blue font-mono text-[1rem] block">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-surface1 text-text font-mono text-[1rem] px-3 py-2 border border-surface2 rounded focus:border-blue focus:outline-none"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-blue font-mono text-[1rem] block">
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full bg-surface1 text-text font-mono text-[1rem] px-3 py-2 border border-surface2 rounded focus:border-blue focus:outline-none"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-blue font-mono text-[1rem] block">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={8}
                    className="w-full bg-surface1 text-text font-mono text-[1rem] px-3 py-2 border border-surface2 rounded focus:border-blue focus:outline-none resize-none"
                    required
                  />
                </div>

                {/* Send Button */}
                <div className="flex items-center justify-between pt-4 border-t border-surface2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex items-center gap-2 bg-surface2 hover:bg-blue hover:text-crust text-text px-6 py-2 rounded font-mono text-[1rem] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSending ? "📤" : "📨"}</span>
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                  {sendStatus && (
                    <span className="text-green font-mono text-[1rem]">
                      {sendStatus}
                    </span>
                  )}
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-surface2">
                <div className="text-blue font-mono text-[1rem] mb-4">
                  Other ways to reach me:
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-mauve">📧</span>
                    <a
                      href="mailto:bhargavprasad2025@gmail.com"
                      className="text-text hover:text-blue transition-colors font-mono text-[1rem] cursor-pointer"
                    >
                      bhargavprasad2025@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mauve">💼</span>
                    <a
                      href="https://www.linkedin.com/in/bhargav-prasad-5a183a261/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-blue transition-colors font-mono text-[1rem] cursor-pointer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mauve">🐙</span>
                    <a
                      href="https://github.com/octagonemusic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-blue transition-colors font-mono text-[1rem] cursor-pointer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
