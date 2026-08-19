import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Profiles", id: "profiles" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);

      const scrollPosition = scrollTop + 180;
      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold tracking-tight"
          >
            Sumeet<span className="text-violet-400">.</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative rounded-lg px-3 py-2 text-xs transition-colors"
                >
                  <span
                    className={
                      active
                        ? "text-white"
                        : "text-white/45 hover:text-white"
                    }
                  >
                    {item.name}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-violet-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;