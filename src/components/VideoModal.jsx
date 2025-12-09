import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void/90 backdrop-blur-md p-4 md:p-10"
          onClick={onClose}
        >
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute z-50 p-2 transition-colors rounded-full top-6 right-6 text-ash hover:text-lava-DEFAULT bg-black/20 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Local Video Player Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,87,34,0.3)] border border-white/10"
            onClick={(e) => e.stopPropagation()} // Click karne par band na ho
          >
            <video 
              controls 
              autoPlay 
              playsInline
              className="w-full h-auto max-h-[80vh] object-contain"
            >
              {/* Yahan se file uthayega */}
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;