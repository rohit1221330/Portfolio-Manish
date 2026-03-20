import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard.jsx'; // ← apna path check karna

// --- DATA ---
const allProjects = [
  { id: 1,  title: 'Client Work',      description: 'Hip-hop visual experience',       videoSrc: '/Client Work/Final Day 5.mp4',        orientation: 'vertical'   },
  { id: 2,  title: 'Client Work',      description: 'Sports brand campaign',            videoSrc: '/Client Work/Final Day 2.mp4',        orientation: 'vertical'   },
  { id: 3,  title: 'Client Work',      description: 'Hip-hop visual experience',        videoSrc: '/Client Work/Final Day 4.mp4',        orientation: 'vertical'   },
  { id: 4,  title: 'Typography',       description: 'High contrast editorial',          videoSrc: '/Client Work/Sample.mp4',             orientation: 'vertical'   },
  { id: 5,  title: 'Typography',       description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_1.mp4',       orientation: 'vertical'   },
  { id: 6,  title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_2.mp4',       orientation: 'vertical'   },
  { id: 7,  title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_3.mp4',       orientation: 'vertical'   },
  { id: 8,  title: 'Motion Graphics',  description: 'Industrial manufacturing story',   videoSrc: '/videos/Showreel.mp4',                orientation: 'horizontal' },
  { id: 9,  title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_4.mp4',       orientation: 'vertical'   },
  { id: 10, title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_5.mp4',       orientation: 'vertical'   },
  { id: 11, title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_6.mp4',       orientation: 'horizontal' },
  { id: 12, title: 'Typography',       description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_7.mp4',       orientation: 'vertical'   },
  { id: 13, title: 'Talking Heads',    description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_8.mp4',       orientation: 'vertical'   },
  { id: 14, title: 'Talking Heads',    description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_9.mp4',       orientation: 'vertical'   },
  { id: 15, title: 'Talking Heads',    description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_10.mp4',      orientation: 'vertical'   },
  { id: 16, title: 'Motion Graphics',  description: 'High contrast editorial',          videoSrc: '/Motion Graphics/Sample_11.mp4',      orientation: 'vertical'   },
];

const uniqueTitles = ['All', ...new Set(allProjects.map(p => p.title).filter(Boolean))];

const Archive = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const modalVideoRef = useRef(null);

  // Modal video — tab hi play karo jab khule
  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.src = selectedVideo.videoSrc;
      modalVideoRef.current.play().catch(() => {});
    }
  }, [selectedVideo]);

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.title === activeFilter);

  return (
    <div className="relative min-h-screen text-white bg-black selection:bg-orange-500/30">

      {/* ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
        <div className="absolute top-0 left-0 z-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl md:px-6">

        {/* HEADER */}
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

        {/* FILTER BUTTONS */}
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

        {/* GRID — VideoCard use kar raha hai ab */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onClick={setSelectedVideo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-20 font-mono text-xs tracking-widest text-center text-gray-600 uppercase">
          End of Archive
        </div>

      </div>

      {/* MODAL */}
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
                  : 'h-[85vh] aspect-[9/16]'}
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal video — src useEffect se set hoga */}
              <video
                ref={modalVideoRef}
                className="object-cover w-full h-full"
                controls
                autoPlay
                playsInline
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