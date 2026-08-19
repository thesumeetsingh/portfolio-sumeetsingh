import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

const roles = [
  "Java Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-violet-500/[0.04] blur-3xl" />

        <div className="absolute bottom-[15%] right-[8%] h-80 w-80 rounded-full bg-blue-500/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1fr_380px]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm uppercase tracking-[0.3em] text-white/40"
          >
            Computer Science Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Sumeet
            <br />
            <span className="bg-gradient-to-r from-white via-violet-300 to-white/30 bg-clip-text text-transparent">
              Singh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex h-9 items-center text-xl text-white/70"
          >
            <span className="mr-3 text-violet-400">&gt;</span>

            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(7px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  filter: "blur(7px)",
                }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>

            <span className="ml-1 animate-pulse text-violet-400">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl leading-7 text-white/45"
          >
            Computer Science Engineer focused on Java, backend development,
            full-stack applications, and AI-driven software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139,92,246,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white"
            >
              View Projects →
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/resume/Sumeet-Singh-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white"
            >
              View Resume ↓
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex items-center gap-3"
          >
            {[
              {
                href: "https://github.com/thesumeetsingh",
                label: "GitHub",
                icon: <FaGithub />,
              },
              {
                href: "https://www.linkedin.com/in/iam-sumeet-singh/",
                label: "LinkedIn",
                icon: <FaLinkedinIn />,
              },
              {
                href: "https://leetcode.com/u/thesumeetsingh/",
                label: "LeetCode",
                icon: <FaCode />,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-violet-400/40 hover:bg-violet-400/5 hover:text-violet-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center"
        >
          {/* Orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-violet-400/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-7 rounded-full border border-white/10"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-14 rounded-full border border-violet-400/10"
          />

          {/* Orbit dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
          </motion.div>

          {/* Photo */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-2 border-violet-300/50 bg-white/5 p-1 shadow-[0_0_50px_rgba(139,92,246,0.18)] md:h-72 md:w-72"
          >
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <img
                src="/images/profile.png"
                alt="Sumeet Singh"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-px bg-gradient-to-b from-violet-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;