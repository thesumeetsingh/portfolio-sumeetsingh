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
    url: "https://www.codechef.com/users/thesumeetsingh",
    icon: <SiCodechef />,
  },
  {
    name: "Google Cloud",
    description: "Cloud skills & badges",
    url: "https://www.skills.google/public_profiles/1d797603-2e65-4ef8-a68f-d40cf48ce42c",
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

          <div className="grid gap-3">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url || "#"}
                target={profile.url ? "_blank" : undefined}
                rel={profile.url ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white/50 transition group-hover:border-violet-400/30 group-hover:text-violet-300">
                  {profile.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium">
                    {profile.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/30">
                    {profile.description}
                  </p>
                </div>

                <span className="text-sm text-white/20 transition group-hover:translate-x-1 group-hover:text-violet-300">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profiles;