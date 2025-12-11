import React, { useEffect, useRef, useState } from 'react';
import { Brain, Magnet, Zap } from 'lucide-react'; // New Icons for new content

// --- UPDATED DATA: Psychology Based ---
const steps = [
  {
    icon: Brain, // Represents "Thinking/Psychology"
    title: 'Creator-First Thinking',
    description: 'I edit from audience psychology — not random cuts. Understanding the "Why" before the "How".',
    color: 'from-orange-500 to-red-500', 
  },
  {
    icon: Magnet, // Represents "Retention/Magnetism"
    title: 'Built for Retention',
    description: 'Every second crafted to keep viewers watching. No dead air, just pure engagement.',
    color: 'from-red-500 to-orange-600', 
  },
  {
    icon: Zap, // Represents "Flow/Energy"
    title: 'Premium Visual Flow',
    description: 'Clean pacing, crisp audio, modern storytelling. Turning chaos into coherence.',
    color: 'from-orange-600 to-amber-500', 
  },
];

const WorkflowSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll logic (Slightly slower for better reading)
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
  id="process"
  ref={sectionRef}
  className="relative px-4 py-20 overflow-hidden bg-black md:px-6 md:py-32"
>
  {/* 1. ATMOSPHERE */}
  <div className="absolute top-0 left-0 z-10 w-full h-20 pointer-events-none bg-gradient-to-b from-black to-transparent" />
  
  {/* Background Particles (Reduced for mobile) */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[80px]" />
  </div>

  <div className="relative z-20 max-w-5xl mx-auto">

    {/* HEADER */}
    <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <span className="text-orange-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-2 block">
        The Blueprint
      </span>
      <h2 className="text-3xl font-bold text-gray-200 font-cinematic md:text-5xl lg:text-7xl">
        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">WORKFLOW</span>
      </h2>
    </div>

    {/* --- TIMELINE CONTAINER --- */}
    <div className="relative">

      {/* 🟢 MOBILE ONLY: Vertical Connecting Line (The Circuit Cable) */}
      <div className="absolute left-[19px] top-6 bottom-12 w-[2px] bg-white/10 lg:hidden">
        {/* Animated Beam jo line par chalta hai */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500 to-transparent opacity-50 blur-[2px] animate-pulse" />
      </div>

      {/* 🔵 DESKTOP ONLY: Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent hidden lg:block" />

      <div className="flex flex-col gap-8 lg:gap-0 lg:block lg:space-y-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;
          const isActive = activeStep === i;

          return (
            <div
              key={step.title}
              // Mobile: Simple relative div | Desktop: Grid
              className={`relative lg:grid lg:grid-cols-2 lg:gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              
              {/* 🟢 MOBILE ONLY: The Timeline Dot (Circuit Node) */}
              <div className="absolute left-3 top-8 z-20 lg:hidden">
                 <div className={`
                    w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center
                    ${isActive ? 'border-orange-500 bg-black scale-125 shadow-[0_0_15px_#f97316]' : 'border-white/20 bg-black'}
                 `}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-orange-500' : 'bg-white/20'}`} />
                 </div>
              </div>

              {/* CARD CONTENT */}
              {/* Mobile: pl-12 (Jagah banayi line ke liye) | Desktop: Normal padding */}
              <div className={`pl-12 lg:pl-0 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                
                <div
                  className={`
                    group relative p-5 md:p-8 rounded-xl transition-all duration-500 border
                    ${isActive
                      ? 'bg-white/5 border-orange-500/50 shadow-[0_0_20px_-5px_rgba(255,87,34,0.2)]'
                      : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'}
                  `}
                  // Click karne par bhi active ho jaye mobile pe
                  onClick={() => setActiveStep(i)} 
                  onMouseEnter={() => setActiveStep(i)}
                >
                  
                  {/* Content Wrapper */}
                  <div className={`relative z-10 flex flex-col gap-3 md:gap-6 items-start ${isLeft ? 'lg:items-end' : 'lg:items-start'}`}>

                    {/* Header Row: Icon + Title */}
                    <div className={`flex items-center gap-4 w-full ${isLeft ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                        
                        {/* Icon */}
                        <div className={`
                          w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0
                          ${isActive
                            ? `bg-gradient-to-br ${step.color} border-transparent text-white shadow-lg`
                            : 'bg-white/5 border-white/10 text-orange-500'}
                        `}>
                          <Icon className="w-5 h-5 md:w-8 md:h-8" />
                        </div>

                        <div className="flex-1">
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Step 0{i + 1}</span>
                             </div>
                             <h3 className="text-lg md:text-3xl font-bold text-white font-cinematic leading-none">
                                {step.title}
                             </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs md:text-lg leading-relaxed text-gray-400 group-hover:text-gray-300">
                        {step.description}
                    </p>

                  </div>
                </div>
              </div>

              {/* CENTER CONNECTOR DOT (Desktop Only - Mobile wala upar alag hai) */}
              <div className="absolute items-center justify-center hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:flex">
                <div className={`w-4 h-4 rounded-full transition-all duration-500 ${isActive ? 'bg-orange-500 shadow-[0_0_20px_#FF5722] scale-150' : 'bg-gray-800 border border-white/20'}`}></div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
};

export default WorkflowSection;