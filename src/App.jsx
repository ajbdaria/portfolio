import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


// -------------------------
// BitsBackground component
// -------------------------
const BitsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // loadSlim gives us a lightweight bundle (better perf)
    await loadSlim(engine);
  }, []);

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: true,
    particles: {
      number: { value: 35, density: { enable: true, area: 800 } },
      color: { value: "#38bdf8" }, // neon cyan
      shape: { type: "square" },
      opacity: { value: 0.75, random: { enable: true, minimumValue: 0.4 } },
      size: { value: { min: 3, max: 6 } },
      rotate: {
        value: 45,
        random: true,
        animation: { enable: true, speed: 4, sync: false }
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      // "shadow" creates a soft glow around each particle
      shadow: { enable: true, color: "#38bdf8", blur: 12 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 2 }
      }
    },
    // fewer particles on small screens for performance
    responsive: [
      { maxWidth: 640, options: { particles: { number: { value: 18 } } } }
    ]
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

// --- Helper: Animated Section wrapper ---
const Section = ({ id, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6 }}
    className="max-w-6xl mx-auto px-6 py-16"
  >
    {children}
  </motion.section>
);

// --- Hero Component ---
const Hero = () => {
  return (
    <header
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        background:
          'linear-gradient(180deg, rgba(8,10,13,0.95) 0%, rgba(8,10,13,0.9) 50%, rgba(56,189,248,0.05) 100%)',
      }}
    >
      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Name */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl leading-tight"
        >
          Ariel John Daria
        </motion.h1>

        {/* Overlapping Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -12, 0], // floating animation
          }}
          transition={{
            delay: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="relative -mt-24 md:-mt-32 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl z-20"
        >
          <img
            src="/images/img_1.jpg"
            alt="Ariel John Bañadera Daria"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          BS Information Systems student & aspiring Web Developer — crafting
          modern, accessible web experiences with style.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full shadow-lg text-white font-medium"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #38bdf8)',
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </header>
  );
};


// --- About Component ---
const About = () => (
  <Section id="about">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-xl">I'm a BS Information Systems student creating responsive, accessible web apps. I enjoy solving problems with clean code and pixel-perfect UI. Placeholder: add your academic highlights, internships, and achievements here.</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h4 className="text-white font-semibold">Education</h4>
            <p className="text-sm text-gray-400 mt-1">BS Information Systems — RHSTI (placeholder)</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h4 className="text-white font-semibold">Availability</h4>
            <p className="text-sm text-gray-400 mt-1">Open to internships & freelance work</p>
          </div>
        </div>
      </div>

      <div>
        <motion.div
          initial={{ rotateY: 15, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-transparent border border-gray-800"
        >
          <h3 className="text-white font-semibold">Quick Facts</h3>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li>• Experience with PHP & MySQL-based systems (Registrar tools)</li>
            <li>• Built exporting tools: Word/PDF student lists</li>
            <li>• Familiar with Tailwind, Bootstrap, JS, and React</li>
            <li>• Placeholder: Add project-specific achievements here</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </Section>
);

// --- Skills ---
const Skills = () => {
  const skillList = [
    'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'MySQL', 'Framer Motion'
  ];

  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold text-white">Skills</h2>
      <p className="text-gray-400 mt-2">Technical and soft skills — placeholder percentages are illustrative.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {skillList.map((s, i) => (
          <motion.div key={s} whileHover={{ scale: 1.03 }} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h4 className="text-white font-medium">{s}</h4>
            <div className="mt-3 bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="h-2 rounded-full" style={{ width: `${60 + i*3}%`, background: 'linear-gradient(90deg,#06b6d4,#38bdf8)' }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Projects ---
const Projects = () => {
  const projects = new Array(6).fill(0).map((_, i) => ({
    title: `Project ${i+1}`,
    desc: 'Short description of the project goes here. Placeholder content — add links and screenshots later.',
    tech: ['React','Tailwind']
  }));

  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <p className="text-gray-400 mt-2">A curated selection of projects. Click a card to view details (placeholder behavior).</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div key={idx} whileHover={{ y: -6 }} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
            <div className="h-44 bg-gradient-to-br from-sky-500/10 to-transparent flex items-center justify-center">
              <div className="text-white/60">Screenshot Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-200">{t}</span>)}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="btn btn-sm" style={{background: 'linear-gradient(90deg,#06b6d4,#38bdf8)'}}>Live</button>
                <button className="btn btn-sm btn-outline-light">Code</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Contact ---
const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-800">
        <h2 className="text-2xl font-bold text-white">Get in touch</h2>
        <p className="text-gray-400 mt-2">Placeholder contact form — this does not send messages yet. Replace with your backend or use Formspree / Netlify Forms.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="bg-gray-800 border border-gray-700 p-3 rounded-md text-white" placeholder="Your name" />
          <input className="bg-gray-800 border border-gray-700 p-3 rounded-md text-white" placeholder="Your email" />
          <textarea className="bg-gray-800 border border-gray-700 p-3 rounded-md text-white md:col-span-2" rows={5} placeholder="Message"></textarea>
          <div className="md:col-span-2 flex items-center justify-between">
            <small className="text-gray-400">Or email me at: <span className="text-sky-300">your.email@example.com</span></small>
            <button type="button" className="px-5 py-2 rounded-full" style={{background: 'linear-gradient(90deg,#06b6d4,#38bdf8)'}}>Send Message</button>
          </div>
        </form>
      </div>
    </Section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="py-8">
    <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
      <div className="mb-4">© {new Date().getFullYear()} Ariel John — Portfolio (placeholder)</div>
      <div className="flex items-center justify-center gap-4">
        <a className="hover:text-white" href="#"><FaGithub /></a>
        <a className="hover:text-white" href="#"><FaLinkedin /></a>
        <a className="hover:text-white" href="#"><FaEnvelope /></a>
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App(){
  return (
    <div className="min-h-screen text-white font-sans" style={{backgroundColor: '#0a0a0a'}}>
      {/* animated bits background (particles use fullScreen with zIndex -1 so content sits above) */}
      <BitsBackground />

      <nav className="py-4 border-b border-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold text-white">Ariel<span className="text-sky-300">.</span></div>
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
