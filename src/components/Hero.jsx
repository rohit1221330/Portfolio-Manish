import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onPlay }) => {

  // Tumhari Skills ki list
  const skills = [
    "Video Editing",
    "Motion Graphics",
    "Premiere Pro",
    "After Effect",
    "Photoshop"
  ];

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center w-full h-screen px-6 overflow-hidden bg-void">

      {/* --- LAYER 1: BACKGROUND (Subtle & Dark) --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-100"
        >
          {/* Dark abstract smoke/ink video */}
          <source src="\videos\Showreel.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
        <div className="absolute inset-0 bg-void/40 backdrop-blur-[2px]"></div>
      </div>

      {/* --- LAYER 2: MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-5xl mx-auto mt-10 text-left md:items-center md:text-center">

        {/* 1. Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
          {/* FONT CHANGE: 'font-sans' instead of 'font-mono' */}
          <span className="font-sans text-xs font-semibold tracking-wide text-gray-200 uppercase">
            Available for Freelance & Full-time
          </span>
        </motion.div>

        {/* 2. Headline (Controlled Size) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-clash font-bold text-4xl md:text-6xl lg:text-7xl text-ash leading-[1.1] mb-8"
        >
          I don’t just edit your video <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
             I upgrade your identity.
          </span>
        </motion.h1>

        {/* 3. Skills List (Glass Cards Style) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-start max-w-4xl gap-3 mb-12 md:justify-center md:gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="px-4 py-2 transition-colors duration-300 border rounded-full cursor-default border-white/10 bg-white/5 hover:bg-white/10 hover:border-lava/50"
            >
              <span className="text-sm font-medium tracking-wide text-smoke md:text-base">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. SHOWREEL BUTTON (The Main Action) */}
       <motion.button
          onClick={onPlay}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="group relative flex items-center gap-4 pl-6 pr-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          {/* Icon Circle */}
          <div className="relative flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-black rounded-full group-hover:bg-lava-dim">
            {/* Arrow Down Icon instead of Play */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex flex-col items-start">
            <span className="font-sans text-lg font-bold tracking-wide uppercase">View Selected Work</span>
            <span className="text-[10px] font-mono text-black/60 uppercase group-hover:text-black/80">Reels • Motion • Edits</span>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 transition-opacity duration-300 bg-orange-500 opacity-0 mix-blend-multiply group-hover:opacity-10"></div>
        </motion.button>

      </div>

      {/* --- LAYER 3: BOTTOM DECORATION --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-lava/10 to-transparent"
      ></motion.div>

    </section>
  );
};

export default Hero;