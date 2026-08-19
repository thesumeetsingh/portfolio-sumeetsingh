import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/30">
            Certifications
          </p>

          <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            Learning & certifications
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.a
                key={certificate.title}
                href={certificate.link || undefined}
                target={certificate.link ? "_blank" : undefined}
                rel={certificate.link ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.035]"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                    <img
                      src={certificate.logo}
                      alt={certificate.issuer}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {certificate.link && (
                    <FaExternalLinkAlt
                      size={12}
                      className="text-white/20 transition-colors group-hover:text-violet-300"
                    />
                  )}
                </div>

                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                  {certificate.issuer}
                </p>

                <h3 className="mt-2 text-lg font-medium leading-6">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-xs text-white/30">
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