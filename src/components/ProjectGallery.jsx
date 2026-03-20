import React, { useEffect, useRef, useState } from 'react';
import { Play, ArrowUpRight, X, Clapperboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- DATA ---
const projects = [
  {
    id: 1,
    title: 'Client Work',
    description: 'Hip-hop visual experience',
    videoSrc: '/Client Work/Final Day 5.mp4',
    orientation: 'vertical',
  },
  {
    id: 2,
    title: 'Typography Video',
    description: 'High contrast editorial',
    videoSrc: '/Client Work/Sample.mp4',
    orientation: 'vertical',
  },
  {
    id: 3,
    title: 'Motion Graphics',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_1.mp4',
    orientation: 'vertical',
  },
  {
    id: 4,
    title: 'Talking Head Video',
    description: 'High contrast editorial',
    videoSrc: '/Motion Graphics/Sample_8.mp4',
    orientation: 'vertical',
  },
];

// --- LAZY VIDEO CARD ---
const VideoCard = ({ project, index, isVisible, onPlay }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pehli baar visible hone pe hi src set karo
          if (!video.src) {
            video.src = project.videoSrc;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: '80px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [project.videoSrc]);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[9/16] bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 shadow-xl hover:shadow-[0_0_40px_-10px_rgba(255,87,34,0.3)] transition-all duration-500">

        {/* Spinner placeholder */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
            <div className="w-6 h-6 border-2 rounded-full border-orange-500/40 border-t-orange-500 animate-spin" />
          </div>
        )}

        {/* Video — src observer set karega */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 object-cover w-full h-full transition-transform duration-700 opacity-60 group-hover:scale-110 group-hover:opacity-80 ${videoLoaded ? 'block' : 'hidden'}`}
        />

        {/* Texture & Gradient */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(#FF5722 1px, transparent 1px), linear-gradient(90deg, #FF5722 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* HUD Brackets */}
        <div className="absolute w-4 h-4 transition-all border-t-2 border-l-2 rounded-tl-sm top-3 left-3 border-orange-500/60 group-hover:border-orange-500" />
        <div className="absolute w-4 h-4 transition-all border-t-2 border-r-2 rounded-tr-sm top-3 right-3 border-orange-500/60 group-hover:border-orange-500" />
        <div className="absolute w-4 h-4 transition-all border-b-2 border-l-2 rounded-bl-sm bottom-24 left-3 border-orange-500/60 group-hover:border-orange-500" />
        <div className="absolute w-4 h-4 transition-all border-b-2 border-r-2 rounded-br-sm bottom-24 right-3 border-orange-500/60 group-hover:border-orange-500" />

        {/* Center Play Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 cursor-pointer ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          onClick={() => onPlay(project)}
        >
          <div className="relative">
            <div className="absolute inset-0 border-2 rounded-full border-orange-500/50 animate-pulse" />
            <div className="flex items-center justify-center w-14 h-14 border rounded-full bg-orange-500/10 backdrop-blur-md border-orange-500/50 shadow-[0_0_30px_rgba(255,87,34,0.4)]">
              <Play className="w-5 h-5 ml-1 text-orange-500 fill-orange-500" />
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between h-20 px-5 transition-colors border-t bg-black/90 backdrop-blur-md border-white/5 group-hover:bg-orange-500/5">
          <div className="flex flex-col">
            <span className="text-[9px] font-mono tracking-widest uppercase text-orange-500 mb-1 flex items-center gap-2">
              <span className="w-1 h-1 bg-orange-500 rounded-full" />
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-gray-200 font-cinematic">{project.title}</h3>
          </div>
          <div
            className="flex items-center justify-center w-8 h-8 transition-colors border rounded-full cursor-pointer bg-white/5 border-white/10 hover:bg-orange-500 hover:border-orange-500 group/icon"
            onClick={(e) => { e.stopPropagation(); onPlay(project); }}
          >
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/icon:text-white" />
          </div>
        </div>

      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const ProjectGallery = () => {
  const sectionRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Modal video — tab hi src set karo jab modal khule
  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.src = selectedVideo.videoSrc;
      modalVideoRef.current.play().catch(() => {});
    }
  }, [selectedVideo]);

  return (
    <section id="work" ref={sectionRef} className="relative px-4 py-20 overflow-hidden bg-black md:px-6 md:pt-32 md:pb-20">

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 z-10 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase">Selected Work</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-200 font-cinematic md:text-7xl">
            PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">GALLERY</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, i) => (
            <VideoCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
              onPlay={setSelectedVideo}
            />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/archive">
            <button className="relative px-8 py-4 overflow-hidden font-mono text-sm font-bold tracking-widest text-gray-300 uppercase transition-all duration-300 bg-transparent border rounded-full border-white/10 hover:border-orange-500 hover:text-white group">
              <span className="relative z-10 flex items-center gap-2">
                View Full Archive <Clapperboard className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 transition-transform duration-500 ease-out origin-left scale-x-0 bg-orange-500/10 group-hover:scale-x-100" />
            </button>
          </Link>
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute z-50 p-2 text-gray-200 transition-colors rounded-full top-6 right-6 bg-white/10 hover:bg-orange-500 hover:text-white"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`
                relative bg-black rounded-lg overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,87,34,0.2)]
                ${selectedVideo.orientation?.toLowerCase() === 'horizontal'
                  ? 'w-full max-w-6xl aspect-video'
                  : 'h-[85vh] aspect-[9/16]'}
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                className="object-cover w-full h-full"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectGallery;