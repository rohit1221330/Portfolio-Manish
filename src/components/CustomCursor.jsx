import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Mouse Movement Track karo
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // 2. Check karo agar mouse kisi button/link par hai
      const target = e.target;
      const isClickable = (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      );
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <>
      {/* Sirf Desktop par dikhao (Mobile pe cursor nahi hota) */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        
        {/* Main Dot (Jo mouse ke saath chipak ke chalta hai) */}
        <motion.div
          className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full mix-blend-difference"
          animate={{
            x: mousePos.x - 6, // Center karne ke liye half width minus kiya
            y: mousePos.y - 6,
            scale: isHovering ? 0 : 1 // Hover karne par gayab ho jaye
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />

        {/* Trailing Ring (Jo peeche smoothly follow karta hai) */}
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full mix-blend-difference"
          animate={{
            x: mousePos.x - 20,
            y: mousePos.y - 20,
            scale: isHovering ? 2.5 : 1, // Hover pe bada ho jaye
            backgroundColor: isHovering ? "white" : "transparent", // Hover pe solid ho jaye
            borderColor: isHovering ? "transparent" : "white"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 150, 
            damping: 15, 
            mass: 0.5 
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;