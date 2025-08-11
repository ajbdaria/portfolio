import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BitsBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ pointerEvents: "none" }}
      options={{
        background: { color: "#0a0a0a" },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#00ff9f" }, // neon green
          shape: {
            type: "char",
            character: [
              { value: "0", font: "monospace", style: "", weight: "400" },
              { value: "1", font: "monospace", style: "", weight: "400" }
            ]
          },
          opacity: { value: 0.8, random: true },
          size: { value: { min: 8, max: 14 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "bottom",
            straight: true,
            outModes: { default: "out" }
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        }
      }}
    />
  );
}
