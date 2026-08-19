import { motion } from "motion/react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/30">
                Contact
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Let's build
                <br />
                <span className="text-white/30">something.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                Have an opportunity, project, or just want to connect?
                Feel free to reach out.
              </p>
            </div>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139,92,246,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              href="mailto:sumeetsingh273152@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white"
            >
              <FaEnvelope />
              Get in touch
            </motion.a>
          </div>

          <div className="mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-sm text-white/40">
              <FaEnvelope className="text-white/25" />
              sumeetsingh273152@gmail.com
            </div>

            <div className="flex items-center gap-3 text-sm text-white/40">
              <FaMapMarkerAlt className="text-white/25" />
              Bhilai, Chhattisgarh, India
            </div>

            <a
              href="https://www.linkedin.com/in/iam-sumeet-singh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/40 transition hover:text-white"
            >
              <FaLinkedinIn className="text-white/25" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;