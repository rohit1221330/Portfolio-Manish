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
    title: 'Client work',
    // category: 'Fashion Film',
    description: 'High contrast editorial',
    videoSrc: '/Client Work/Sample.mp4',
    orientation: 'vertical',
  },
  {
    id: 5,
    title: 'Motion Graphics',
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
      title: 'Motion Graphics',
      // category: 'VFX',
      description: 'High contrast editorial',
      videoSrc: '/Motion Graphics/Sample_7.mp4',
      orientation: 'vertical',
    },
    {
      id: 13, // Fixed: ID conflict (was 5)
      title: 'Motion Graphics',
      // category: 'VFX',
      description: 'High contrast editorial',
      videoSrc: '/Motion Graphics/Sample_8.mp4',
      orientation: 'vertical',
    },
    {
      id: 14, // Fixed: ID conflict (was 5)
      title: 'Motion Graphics',
      // category: 'VFX',
      description: 'High contrast editorial',
      videoSrc: '/Motion Graphics/Sample_9.mp4',
      orientation: 'vertical',
    },
    {
      id: 15, // Fixed: ID conflict (was 5)
      title: 'Motion Graphics',
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

const Archive = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track karega kaunsi video khuli hai

  useEffect(() => {
    setLoaded(true);
  }, []);

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
        <div className="flex flex-col items-start justify-between gap-6 mb-20 md:flex-row md:items-end">
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
               {allProjects.length < 10 ? `0${allProjects.length}` : allProjects.length} PROJECTS
             </p>
          </div>
        </div>

        {/* 3. GRID (Clickable Divs) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedVideo(project)} // Click par state update hoga
            >
              
              <div className="relative aspect-[9/16] bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,87,34,0.3)]">
                
                {/* Video Preview */}
                <video
                  src={project.videoSrc}
                  muted
                  loop
                  autoPlay
                  playsInline
                  onMouseEnter={(e) => e.target.play()} // Hover pe play
                //   onMouseLeave={(e) => e.target.pause()} // Hatne pe pause
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 opacity-60 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                
                {/* HUD Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
                
                {/* Brackets Animation */}
                <div className="absolute w-3 h-3 transition-all border-t border-l rounded-tl-sm top-3 left-3 border-white/30 group-hover:border-orange-500 group-hover:w-6 group-hover:h-6"></div>
                <div className="absolute w-3 h-3 transition-all border-t border-r rounded-tr-sm top-3 right-3 border-white/30 group-hover:border-orange-500 group-hover:w-6 group-hover:h-6"></div>
                <div className="absolute w-3 h-3 transition-all border-b border-l rounded-bl-sm bottom-20 left-3 border-white/30 group-hover:border-orange-500 group-hover:w-6 group-hover:h-6"></div>
                <div className="absolute w-3 h-3 transition-all border-b border-r rounded-br-sm bottom-20 right-3 border-white/30 group-hover:border-orange-500 group-hover:w-6 group-hover:h-6"></div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500 shadow-[0_0_20px_rgba(255,87,34,0.4)]">
                        <Play className="w-6 h-6 ml-1 text-white fill-white" />
                    </div>
                </div>

                {/* Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between h-20 px-5 transition-colors border-t bg-black/80 backdrop-blur-md border-white/10 group-hover:bg-orange-900/10">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-orange-500 mb-1">{project.category}</span>
                        <h3 className="text-lg font-bold tracking-wide text-white font-cinematic">{project.title}</h3>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 transition-all border rounded-full border-white/10 group-hover:bg-orange-500 group-hover:border-orange-500">
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 font-mono text-xs tracking-widest text-center text-gray-600 uppercase">
            End of Archive
        </div>

      </div>

      {/* --- 4. FULL SCREEN VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)} // Background click closes modal
          >
            
            {/* Close Button */}
            <button 
              className="absolute z-50 p-2 text-gray-200 transition-colors border rounded-full top-6 right-6 bg-white/10 hover:bg-orange-500 hover:text-white border-white/10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container (Adaptive Size) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`
                 relative bg-black rounded-lg overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,87,34,0.15)]
                 ${selectedVideo.orientation === 'horizontal' 
                    ? 'w-full max-w-6xl aspect-video'   // Horizontal Video
                    : 'h-[85vh] aspect-[9/16]'          // Vertical Reel
                 }
              `}
              onClick={(e) => e.stopPropagation()} // Video pe click karne se band nahi hoga
            >
               <video 
                 src={selectedVideo.videoSrc} 
                 className="object-cover w-full h-full"
                 controls 
                 autoPlay
               />
               
               {/* Optional: Agar external link bhi dikhana ho modal ke andar */}
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