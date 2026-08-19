import { motion } from "motion/react";

const experiences = [
  {
    period: "May 2025 — June 2025",
    company: "CSVTU",
    role: "Web Developer Intern",
    logo: "/experience/csvtu.png",
    description:
      "Engineered the NSS website using the MERN stack, Vite, and Tailwind CSS. Built an admin dashboard with operational modules and implemented JWT-based authentication with role-based routing.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
  {
    period: "May 2024 — June 2024",
    company: "Jindal Steel & Power",
    role: "Web Developer Intern",
    logo: "/experience/jsp.png",
    description:
      "Developed an Excel data management portal using PHP, MySQL, and JavaScript for cross-departmental business operations, including role-based authorization and backend validation.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/30">
            Experience
          </p>

          <h2 className="mb-14 text-4xl font-semibold tracking-tight md:text-5xl">
            Where I've worked
          </h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9"
              >
                <div className="flex flex-col gap-7 md:flex-row">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-white/30">
                      {experience.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-white/50">
                      {experience.company}
                    </p>

                    <p className="mt-6 max-w-4xl leading-7 text-white/50">
                      {experience.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;