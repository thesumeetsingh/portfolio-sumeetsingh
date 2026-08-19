import { motion } from "motion/react";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;