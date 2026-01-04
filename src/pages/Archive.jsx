import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Play, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATA ---
// Orientation add kar dena (horizontal/vertical) taaki player sahi size ka khule
const allProjects = [
  {
    id: 1,
    title: 'Client Work',
    // category: 'Music Video',
    description: 'Hip-hop visual experience',
    videoSrc: '/Client Work/Final Day 5.mp4',
    orientation: 'vertical',
  },
  {
    id: 2,
    title: 'Client Work',
    // category: 'Commercial',
    description: 'Sports brand campaign',
    videoSrc: '/Client Work/Final Day 2.mp4',
    orientation: 'vertical', // Fixed: Lowercase
  },
  {
    id: 3,
    title: 'Client Work',
    // category: 'Music Video',
    description: 'Hip-hop visual experience',
    videoSrc: '/Client Work/Final Day 4.mp4',
    orientation: 'vertical',
  },
  {
    id: 4,
    title: 'Typography',
    // category: 'Fashion Film',
    description: 'High contrast editorial',
    videoSrc: '/Client Work/Sample.mp4',
    orientation: 'vertical',
  },
  {
    id: 5,
    title: 'Typography',
    // category: 'Motion Graphics',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_1.mp4',
    orientation: 'vertical',
  },
  {
    id: 6,
    title: 'Motion Graphics',
    // category: 'Reels Edit',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_2.mp4',
    orientation: 'vertical',
  },
  {
    id: 7, // Fixed: ID conflict (was 5)
    title: 'Motion Graphics',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_3.mp4',
    orientation: 'vertical',
  },
  {
    id: 8,
    title: 'Motion Graphics',
    // category: 'Documentary',
    description: 'Industrial manufacturing story',
    videoSrc: '/videos/Showreel.mp4',
    orientation: 'horizontal',
  },
  {
    id: 9, // Fixed: ID conflict (was 5)
    title: 'Motion Graphics',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_4.mp4',
    orientation: 'vertical',
  },
  {
    id: 10, // Fixed: ID conflict (was 5)
    title: 'Motion Graphics',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_5.mp4',
    orientation: 'vertical',
  },
  {
    id: 11, // Fixed: ID conflict (was 5)
    title: 'Motion Graphics',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_6.mp4',
    orientation: 'horizontal',
  },
  {
    id: 12, // Fixed: ID conflict (was 5)
    title: 'Typography',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_7.mp4',
    orientation: 'vertical',
  },
  {
    id: 13, // Fixed: ID conflict (was 5)
    title: 'Talking Heads',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_8.mp4',
    orientation: 'vertical',
  },
  {
    id: 14, // Fixed: ID conflict (was 5)
    title: 'Talking Heads',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_9.mp4',
    orientation: 'vertical',
  },
  {
    id: 15, // Fixed: ID conflict (was 5)
    title: 'Talking Heads',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_10.mp4',
    orientation: 'vertical',
  },
  {
    id: 16, // Fixed: ID conflict (was 5)
    title: 'Motion Graphics',
    // category: 'VFX',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_11.mp4',
    orientation: 'vertical',
  },
];

// --- 1. TITLE FILTERS NIKALO (Logic Change) ---
const uniqueTitles = ['All', ...new Set(allProjects.map(p => p.title).filter(Boolean))];

const Archive = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track karega kaunsi video khuli hai

  // --- 2. STATE FOR FILTER ---

  const [activeFilter, setActiveFilter] = useState('All');
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // --- 3. FILTER LOGIC (Updated to check Title) ---
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.title === activeFilter);

 return (
    <div className="relative min-h-screen text-white bg-black selection:bg-orange-500/30">

      {/* 1. ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 z-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl md:px-6">

        {/* 2. HEADER */}
        <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-end">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 mb-6 font-mono text-sm tracking-widest text-gray-400 transition-all border rounded-full group bg-white/5 border-white/10 hover:border-orange-500 hover:text-white hover:bg-orange-500/10">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              BACK TO HOME
            </Link>
            <h1 className="text-5xl font-bold md:text-7xl font-cinematic">
              FULL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">ARCHIVE</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">Database Loaded</p>
            <p className="text-2xl font-bold text-white font-cinematic">
              {filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length} PROJECTS
            </p>
          </div>
        </div>

        {/* --- 4. FILTER BUTTONS (Based on TITLES) --- */}
        <div className="flex flex-wrap gap-3 pb-4 mb-12 overflow-x-auto scrollbar-hide">
          {uniqueTitles.map((title) => (
            <button
              key={title}
              onClick={() => setActiveFilter(title)}
              className={`
                px-6 py-2 rounded-full font-mono text-xs md:text-sm uppercase tracking-wider transition-all border whitespace-nowrap
                ${activeFilter === title 
                  ? 'bg-orange-500 text-white border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10'}
              `}
            >
              {title}
            </button>
          ))}
        </div>

        {/* 5. GRID */}
        <motion.div 
            layout 
            className="grid grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
                <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative cursor-pointer group"
                onClick={() => setSelectedVideo(project)}
                >

                <div className="relative aspect-[9/16] bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,87,34,0.3)]">

                    {/* Video */}
                    <video
                    src={project.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 opacity-60 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

                    {/* Decoration */}
                    <div className="absolute w-2 h-2 transition-all border-t border-l rounded-tl-sm top-2 left-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4"></div>
                    <div className="absolute w-2 h-2 transition-all border-t border-r rounded-tr-sm top-2 right-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4"></div>
                    <div className="absolute w-2 h-2 transition-all border-b border-l rounded-bl-sm bottom-16 left-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4"></div>
                    <div className="absolute w-2 h-2 transition-all border-b border-r rounded-br-sm bottom-16 right-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4"></div>

                    {/* Center Button */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                        <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500 shadow-[0_0_20px_rgba(255,87,34,0.4)]">
                            <Play className="w-4 h-4 md:w-6 md:h-6 ml-0.5 text-white fill-white" />
                        </div>
                    </div>

                    {/* Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 transition-colors border-t h-14 md:h-20 md:px-5 bg-black/80 backdrop-blur-md border-white/10 group-hover:bg-orange-900/10">
                        <div className="flex flex-col min-w-0 pr-2">
                            {/* Category abhi bhi dikha sakte hain reference ke liye */}
                            <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-orange-500 mb-0.5 truncate">{project.category}</span>
                            <h3 className="text-xs font-bold tracking-wide text-white truncate md:text-lg font-cinematic">{project.title}</h3>
                        </div>
                        <div className="flex items-center justify-center w-6 h-6 transition-all border rounded-full md:w-8 md:h-8 border-white/10 group-hover:bg-orange-500 group-hover:border-orange-500 shrink-0">
                            <ArrowUpRight className="w-3 h-3 text-gray-400 md:w-4 md:h-4 group-hover:text-white" />
                        </div>
                    </div>
                </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-20 font-mono text-xs tracking-widest text-center text-gray-600 uppercase">
          End of Archive
        </div>

      </div>

      {/* --- MODAL (Same as before) --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute z-50 p-2 text-gray-200 transition-colors border rounded-full top-6 right-6 bg-white/10 hover:bg-orange-500 hover:text-white border-white/10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`
                 relative bg-black rounded-lg overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,87,34,0.15)]
                 ${selectedVideo.orientation === 'horizontal'
                  ? 'w-full max-w-6xl aspect-video'
                  : 'h-[85vh] aspect-[9/16]'
                }
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.videoSrc}
                className="object-cover w-full h-full"
                controls
                autoPlay
              />
              {selectedVideo.link && (
                <a
                  href={selectedVideo.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border rounded-full bottom-6 right-6 bg-black/50 backdrop-blur border-white/20 hover:bg-orange-500 hover:border-orange-500"
                >
                  Open Original <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Archive;