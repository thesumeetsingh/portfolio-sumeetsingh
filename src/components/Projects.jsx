import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/30">
              Projects
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Things I've built
            </h2>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:border-violet-400/20"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative h-52 shrink-0 overflow-hidden border-b border-white/10 bg-white md:h-auto md:w-[38%] md:border-b-0 md:border-r">
                    <img
                      src={project.image}
                      alt={`${project.title} homepage`}
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                      <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-md">
                        View Project
                      </span>
                    </div>

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/75 px-3 py-1 text-xs text-white/60 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight">
                            {project.title}
                          </h3>

                          <p className="mt-2 text-sm text-white/40">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="flex shrink-0 gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-violet-400/40 hover:bg-violet-400/5 hover:text-violet-300"
                          >
                            <FaGithub size={16} />
                          </a>

                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} live demo`}
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-violet-400/40 hover:bg-violet-400/5 hover:text-violet-300"
                            >
                              <FaExternalLinkAlt size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/40"
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

export default Projects;