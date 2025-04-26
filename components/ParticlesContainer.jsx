"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "@/utils/particles-config";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      className="w-full h-full absolute inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticlesContainer;
