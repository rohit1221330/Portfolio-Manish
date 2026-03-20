import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const VideoCard = ({ project, onClick }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Intersection Observer — tab hi play karo jab card screen pe aaye
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Pehli baar visible hone pe src set karo (lazy load)
          if (!video.src) {
            video.src = project.videoSrc;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: '100px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [project.videoSrc]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative cursor-pointer group"
      ref={containerRef}
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-[9/16] bg-[#0A0A0A] rounded-lg overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,87,34,0.3)]">

        {/* Placeholder — jab tak video load na ho */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
            <div className="w-6 h-6 border-2 rounded-full border-orange-500/40 border-t-orange-500 animate-spin" />
          </div>
        )}

        {/* Video — src intentionally blank, observer set karega */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setIsLoaded(true)}
          className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 opacity-60 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0 ${isLoaded ? 'block' : 'hidden'}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

        {/* Corner Decorations */}
        <div className="absolute w-2 h-2 transition-all border-t border-l rounded-tl-sm top-2 left-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4" />
        <div className="absolute w-2 h-2 transition-all border-t border-r rounded-tr-sm top-2 right-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4" />
        <div className="absolute w-2 h-2 transition-all border-b border-l rounded-bl-sm bottom-16 left-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4" />
        <div className="absolute w-2 h-2 transition-all border-b border-r rounded-br-sm bottom-16 right-2 border-white/30 group-hover:border-orange-500 group-hover:w-4 group-hover:h-4" />

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100">
          <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500 shadow-[0_0_20px_rgba(255,87,34,0.4)]">
            <Play className="w-4 h-4 md:w-6 md:h-6 ml-0.5 text-white fill-white" />
          </div>
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 transition-colors border-t h-14 md:h-20 md:px-5 bg-black/80 backdrop-blur-md border-white/10 group-hover:bg-orange-900/10">
          <div className="flex flex-col min-w-0 pr-2">
            <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-orange-500 mb-0.5 truncate">
              {project.category}
            </span>
            <h3 className="text-xs font-bold tracking-wide text-white truncate md:text-lg font-cinematic">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center justify-center w-6 h-6 transition-all border rounded-full md:w-8 md:h-8 border-white/10 group-hover:bg-orange-500 group-hover:border-orange-500 shrink-0">
            <ArrowUpRight className="w-3 h-3 text-gray-400 md:w-4 md:h-4 group-hover:text-white" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default VideoCard;