import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaCode,
} from "react-icons/fa";
import { SiCodechef, SiGooglecloud } from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    description: "Projects & source code",
    url: "https://github.com/thesumeetsingh",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    description: "Professional network",
    url: "https://www.linkedin.com/in/iam-sumeet-singh/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "LeetCode",
    description: "DSA & problem solving",
    url: "https://leetcode.com/u/thesumeetsingh/",
    icon: <FaCode />,
  },
  {
    name: "CodeChef",
    description: "Competitive programming",
    url: "",
    icon: <SiCodechef />,
  },
  {
    name: "Google Cloud",
    description: "Cloud skills & badges",
    url: "",
    icon: <SiGooglecloud />,
  },
];

function Profiles() {
  return (
    <section id="profiles" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/30">
              Profiles
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Find me online
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url || "#"}
                target={profile.url ? "_blank" : undefined}
                rel={profile.url ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white/60 transition group-hover:text-white">
                  {profile.icon}
                </div>

                <h3 className="text-sm font-medium">
                  {profile.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/30">
                  {profile.description}
                </p>

                <div className="mt-5 text-xs text-white/20 transition group-hover:text-violet-300">
                  Visit profile ↗
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profiles;