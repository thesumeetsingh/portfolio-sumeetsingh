import { motion } from "motion/react";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/30">
            Certifications
          </p>

          <h2 className="mb-14 text-4xl font-semibold tracking-tight md:text-5xl">
            Learning & certifications
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.a
                key={certificate.title}
                href={certificate.link || "#"}
                target={certificate.link ? "_blank" : undefined}
                rel={certificate.link ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                  <img
                    src={certificate.logo}
                    alt={certificate.issuer}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <p className="text-xs uppercase tracking-wider text-white/30">
                  {certificate.issuer}
                </p>

                <h3 className="mt-2 text-lg font-medium transition-colors group-hover:text-white">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-sm text-white/30">
                  {certificate.year}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;