import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[20%] top-[15%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.025] blur-[120px]" />

        <div className="absolute right-[10%] top-[55%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Profiles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;