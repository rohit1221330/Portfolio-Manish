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
      className="relative px-4 py-24 overflow-hidden bg-black md:px-6 md:py-32"
    >
      {/* 1. ATMOSPHERE */}
      <div className="absolute top-0 left-0 z-10 w-full h-32 pointer-events-none bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 z-10 w-full h-32 pointer-events-none bg-gradient-to-t from-black to-transparent" />

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                The Methodology
              </span>
            </div>
          <h2 className="text-5xl font-bold text-gray-200 font-cinematic md:text-7xl">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava-glow to-lava-dim">Workflow</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          
          {/* Central Line (Connecting the flow) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent hidden lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0; // Zig-Zag Pattern
              const isActive = activeStep === i;

              return (
                <div
                  key={step.title}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-20 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  
                  {/* CARD CONTENT */}
                  <div className={`${isLeft ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <div 
                      className={`
                        group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer border
                        ${isActive 
                          ? 'bg-white/5 border-orange-500/50 shadow-[0_0_40px_-10px_rgba(255,87,34,0.3)] translate-y-[-5px]' 
                          : 'bg-[#0A0A0A] border-white/5 hover:border-white/10 hover:bg-white/5'}
                      `}
                      onMouseEnter={() => setActiveStep(i)}
                    >
                      {/* Number Watermark (Background me bada number) */}
                      <span className={`absolute top-2 ${isLeft ? 'left-4' : 'right-4'} text-6xl font-black text-white/5 font-cinematic select-none transition-colors group-hover:text-white/10`}>
                        0{i + 1}
                      </span>

                      <div className={`relative z-10 flex flex-col gap-6 ${isLeft ? 'lg:items-end' : 'lg:items-start'}`}>
                        
                        {/* Icon */}
                        <div className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0
                          ${isActive 
                             ? `bg-gradient-to-br ${step.color} border-transparent shadow-lg text-white scale-110 rotate-3` 
                             : 'bg-white/5 border-white/10 text-orange-500 group-hover:text-white group-hover:bg-white/10'}
                        `}>
                          <Icon className="w-8 h-8" />
                        </div>

                        <div>
                          <h3 className="mb-3 text-2xl font-bold text-white transition-colors md:text-3xl font-cinematic">
                            {step.title}
                          </h3>
                          <p className="font-sans text-base leading-relaxed text-gray-400 md:text-lg group-hover:text-gray-300">
                            {step.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* CENTER CONNECTOR DOT (Desktop Only) */}
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