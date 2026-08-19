import { motion } from "motion/react";

const education = [
  {
    year: "2022 — 2026",
    title: "B.Tech — Computer Science & Engineering",
    institution: "Bhilai Institute of Technology, Durg",
    detail: "CGPA: 9.07 / 10",
    logo: "/education/bit.png",
  },
  {
    year: "2019 — 2021",
    title: "Senior Secondary — CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Raigarh",
    detail: "Percentage: 90.8% · Computer Science",
    logo: "/education/jnv.png",
  },
  {
    year: "2019",
    title: "Secondary — CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Raigarh",
    detail: "Percentage: 95.2%",
    logo: "/education/jnv.png",
  },
];

function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/30">
            Education
          </p>

          <h2 className="mb-14 text-4xl font-semibold tracking-tight md:text-5xl">
            Academic journey
          </h2>

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.year}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-[80px_150px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <p className="self-center text-sm text-white/30">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/50">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-sm text-white/30">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;