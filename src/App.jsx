import React, { useCallback, useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql, SiJavascript, SiFramer } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(8,10,13,0.95) 0%, rgba(8,10,13,0.9) 50%, rgba(56,189,248,0.05) 100%)',
      }}
    >
      {/* Multiple Tech-Inspired Wavy Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* First Wave */}
        <path
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          d="M0,200 Q120,150 240,200 T480,200 T720,200 T960,200 T1200,200 T1440,200"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,200 Q120,150 240,200 T480,200 T720,200 T960,200 T1200,200 T1440,200;
              M0,200 Q120,250 240,200 T480,200 T720,200 T960,200 T1200,200 T1440,200;
              M0,200 Q120,150 240,200 T480,200 T720,200 T960,200 T1200,200 T1440,200
            "
          />
        </path>

        {/* Second Wave */}
        <path
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="1.5"
          opacity="0.7"
          d="M0,240 Q120,190 240,240 T480,240 T720,240 T960,240 T1200,240 T1440,240"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,240 Q120,190 240,240 T480,240 T720,240 T960,240 T1200,240 T1440,240;
              M0,240 Q120,290 240,240 T480,240 T720,240 T960,240 T1200,240 T1440,240;
              M0,240 Q120,190 240,240 T480,240 T720,240 T960,240 T1200,240 T1440,240
            "
          />
        </path>

        {/* Third Wave */}
        <path
          fill="none"
          stroke="url(#waveGradient3)"
          strokeWidth="1"
          opacity="0.5"
          d="M0,280 Q120,230 240,280 T480,280 T720,280 T960,280 T1200,280 T1440,280"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,280 Q120,230 240,280 T480,280 T720,280 T960,280 T1200,280 T1440,280;
              M0,280 Q120,330 240,280 T480,280 T720,280 T960,280 T1200,280 T1440,280;
              M0,280 Q120,230 240,280 T480,280 T720,280 T960,280 T1200,280 T1440,280
            "
          />
        </path>
      </svg>

      {/* Content */}
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
            y: [0, -12, 0],
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
            src="/images/img_2.jpg"
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
  <Section id="about" className="relative overflow-hidden">
    {/* Animated Tech Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg
        className="w-full h-full animate-pulse-slow"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bgGrid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* Circuit Grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="url(#bgGrid)"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="relative grid md:grid-cols-2 gap-8 items-center">
      {/* Left Column */}
      <div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
          I'm a BS Information Systems student creating responsive, accessible
          web apps. I enjoy solving problems with clean code and pixel-perfect
          UI. <span className="text-sky-400">Specializing in modern tech stacks</span>, I aim to blend
          design with functionality for seamless user experiences.
        </p>

        {/* Info Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="group relative p-[1px] rounded-lg bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
            <div className="bg-gray-900 p-4 rounded-lg h-full group-hover:bg-gray-800 transition">
              <h4 className="text-white font-semibold">Education</h4>
              <p className="text-sm text-gray-400 mt-1">
                BS Information Systems — RHSTI
              </p>
            </div>
          </div>

          <div className="group relative p-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-400">
            <div className="bg-gray-900 p-4 rounded-lg h-full group-hover:bg-gray-800 transition">
              <h4 className="text-white font-semibold">Availability</h4>
              <p className="text-sm text-gray-400 mt-1">
                Open to internships & freelance work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Quick Facts */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative p-[1px] rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 shadow-lg"
      >
        <div className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-800">
          <h3 className="text-white font-semibold text-lg">Quick Facts</h3>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li className="hover:text-sky-400 transition">
              • Experience with PHP & MySQL-based systems (Registrar tools)
            </li>
            <li className="hover:text-sky-400 transition">
              • Built exporting tools: Word/PDF student lists
            </li>
            <li className="hover:text-sky-400 transition">
              • Familiar with Tailwind, Bootstrap, JS, and React
            </li>
            <li className="hover:text-sky-400 transition">
              • Actively learning modern frameworks & cloud deployment
            </li>
          </ul>
        </div>
      </motion.div>
    </div>

    {/* Extra Animations */}
    <style>
      {`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}
    </style>
  </Section>
);

// --- Skills ---
const skillList = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <Section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mt-2"
      >
        Technical expertise with a modern developer toolkit.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillList.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(56,189,248,0.6)" }}
            className="relative bg-gray-900/70 border border-cyan-500/30 rounded-xl p-5 backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{skill.icon}</span>
              <h4 className="text-white font-semibold">{skill.name}</h4>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 bg-gray-800 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${60 + i * 3}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 animate-gradient-x"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Work Experience ---
const TRAVEL_DOT_SIZE = 16; // px (w-4, h-4)

const experiences = [
  {
    role: "Intern - Registrar Office",
    company: "RHSTI",
    period: "2024 (On-site)",
    details: [
      "Encoded student information and maintained academic records",
      "Assisted with document management and printing modules",
      "Participated in digital filing and process automation",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2023 - Present",
    details: [
      "Developed responsive websites using React, Tailwind CSS, and PHP",
      "Built backend systems with MySQL and custom CMS features",
      "Optimized sites for performance and accessibility",
    ],
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const WorkExperience = () => {
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const controls = useAnimation();

  // callback ref factory to place each dot DOM node into dotRefs.current[i]
  const setDotRef = (index) => (el) => {
    dotRefs.current[index] = el;
  };

  useEffect(() => {
    let mounted = true;

    const loop = async () => {
      // Wait one frame so layout is stable
      await new Promise((r) => requestAnimationFrame(r));
      if (!mounted) return;

      const container = containerRef.current;
      const dots = dotRefs.current.filter(Boolean);

      if (!container || dots.length === 0) {
        // fallback continuous animation if measurement not available
        controls.start({
          y: ["0%", "100%"],
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        });
        return;
      }

      // Keep looping while mounted. Re-measure each cycle (handles resize/content changes).
      while (mounted) {
        const cTop = container.getBoundingClientRect().top;
        const positions = dots.map((el) => {
          const r = el.getBoundingClientRect();
          // center of the marker relative to container top, then offset by half traveling dot
          return r.top + r.height / 2 - cTop - TRAVEL_DOT_SIZE / 2;
        }).filter((p) => !Number.isNaN(p));

        if (positions.length === 0) {
          // fallback
          await controls.start({
            y: ["0%", "100%"],
            transition: { duration: 3, repeat: 1, ease: "easeInOut" },
          });
          continue;
        }

        // start at first position
        await controls.set({ y: positions[0] });

        // go forward visiting each marker
        for (let i = 0; i < positions.length; i++) {
          if (!mounted) return;
          await controls.start({
            y: positions[i],
            transition: { duration: 0.6, ease: "easeInOut" },
          });
          // pause slightly at the marker
          await sleep(500);
        }

        // then go back (optional, so it looks like a round trip)
        for (let i = positions.length - 2; i >= 1; i--) {
          if (!mounted) return;
          await controls.start({
            y: positions[i],
            transition: { duration: 0.6, ease: "easeInOut" },
          });
          await sleep(500);
        }

        // small pause before the cycle repeats
        await sleep(300);
      }
    };

    loop();

    // clean up
    return () => {
      mounted = false;
    };
  }, [controls]);

  return (
    <Section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
      >
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mt-2 text-center max-w-2xl mx-auto"
      >
        Roles and projects I’ve contributed to, showcasing my skills in real-world applications.
      </motion.p>

      <div ref={containerRef} className="relative mt-12">
        {/* center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full h-full" />

        {/* traveling dot - animate via controls (y in px relative to container) */}
        <motion.div
          style={{ top: 0 }}
          animate={controls}
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 z-10"
        />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex w-full mb-16"
            >
              {/* LEFT COLUMN (empty if card is right) */}
              <div className="w-1/2 pr-8 flex justify-end">
                {isLeft && (
                  <div className="bg-gray-900/70 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 transition w-full max-w-md">
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-gray-400">{exp.company} • {exp.period}</p>
                    <ul className="mt-3 text-gray-300 list-disc list-inside space-y-1">
                      {exp.details.map((d, idx) => <li key={idx} className="hover:text-sky-400 transition">{d}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {/* marker dot (we attach refs so we can measure center positions) */}
              <motion.div
                ref={setDotRef(i)}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.12 + 0.05, type: "spring", stiffness: 200 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-gray-900 shadow-lg shadow-cyan-500/40"
              />

              {/* RIGHT COLUMN (empty if card is left) */}
              <div className="w-1/2 pl-8 flex justify-start">
                {!isLeft && (
                  <div className="bg-gray-900/70 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 transition w-full max-w-md">
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-gray-400">{exp.company} • {exp.period}</p>
                    <ul className="mt-3 text-gray-300 list-disc list-inside space-y-1">
                      {exp.details.map((d, idx) => <li key={idx} className="hover:text-sky-400 transition">{d}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// --- Projects ---
const projects = new Array(6).fill(0).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: "Short description of the project goes here. Placeholder content — add links and screenshots later.",
  tech: ["React", "Tailwind"],
}));

const Projects = () => {
  return (
    <Section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mt-2"
      >
        A curated selection of projects showcasing modern UI and functionality.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.6)",
            }}
            className="relative bg-gray-900/70 border border-cyan-500/20 rounded-xl overflow-hidden backdrop-blur-md group"
          >
            {/* Image Placeholder */}
            <div className="h-44 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              <span className="text-white/50">Screenshot Placeholder</span>
            </div>

            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{p.desc}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-200 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                >
                  Live <FaExternalLinkAlt size={12} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400/10"
                >
                  Code <FaGithub />
                </motion.a>
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
export default function App() {
  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: '#0a0a0a' }}>
      {/* animated bits background */}
      <BitsBackground />

      <nav className="py-4 border-b border-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Ariel<span className="text-sky-300">.</span>
          </div>
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a> {/* Added */}
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <WorkExperience /> {/* Added between Skills and Projects */}
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

