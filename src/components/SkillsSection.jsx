import { useEffect, useRef, useState } from 'react';
import { Film, Palette, Lightbulb, Zap, Target, Music } from 'lucide-react'; // 'Music' add kiya Sound Design ke liye

// --- DATA: Rudra's Skills ---
const skills = [
  { name: 'Video Editing', level: 95, icon: Film, description: 'Premiere Pro, DaVinci Resolve' },
  { name: 'Photo Editing', level: 90, icon: Music, description: 'Photoshop' }, // Replaced 'Team Leadership'
  { name: 'Motion Graphics', level: 85, icon: Zap, description: 'After Effects, Keyframes' },
  { name: 'Color Grading', level: 80, icon: Palette, description: 'Lumetri, Color Correction' },
  { name: 'Storytelling', level: 90, icon: Lightbulb, description: 'Pacing, Narrative Flow' },
  { name: 'Project Management', level: 88, icon: Target, description: 'File Organization, Deadlines' },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, i) => {
            setTimeout(() => {
              setAnimatedLevels(prev => {
                const newLevels = [...prev];
                newLevels[i] = skill.level;
                return newLevels;
              });
            }, i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="relative px-4 py-20 overflow-hidden bg-black md:px-6 md:pt-32 md:pb-20"
    >
      {/* 1. ATMOSPHERE: Heat Haze */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Moving Magma Blob Right */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/10 to-red-900/10 rounded-full blur-[100px] animate-pulse" />
          {/* Moving Magma Blob Left */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/10 to-orange-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* 2. MOLTEN VEINS (Background Lines) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="magmaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c2d12" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="1" /> {/* Tailwind Orange-500 */}
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
          </linearGradient>
        </defs>
        {isVisible && (
          <>
            <line x1="0" y1="20%" x2="100%" y2="80%" stroke="url(#magmaGradient)" strokeWidth="2" className="drop-shadow-[0_0_5px_#f97316]" />
            <line x1="100%" y1="20%" x2="0" y2="80%" stroke="url(#magmaGradient)" strokeWidth="2" className="drop-shadow-[0_0_5px_#f97316]" />
          </>
        )}
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-4 block animate-pulse">
            Internal Core
          </span>
          <h2 className="text-5xl font-bold text-gray-200 font-cinematic md:text-7xl">
            SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-600 drop-shadow-md">ARSENAL</span>
          </h2>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
                  
                  {/* Icon & Title */}
                  <div className="relative z-10 flex items-start gap-4 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 transition-colors border rounded-lg bg-gradient-to-br from-orange-900/40 to-black border-orange-500/20 group-hover:border-orange-500/60">
                      <Icon className="w-6 h-6 text-orange-500 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(255,165,0,0.8)] transition-all" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-gray-200 font-cinematic group-hover:text-white">{skill.name}</h3>
                        <span className="font-mono text-xl text-orange-500 drop-shadow-sm">{animatedLevels[i]}%</span>
                      </div>
                      <p className="text-sm text-gray-500 font-body">{skill.description}</p>
                    </div>
                  </div>

                  {/* --- THE LAVA PROGRESS BAR --- */}
                  <div className="relative h-3 overflow-hidden border rounded-full bg-white/5 border-white/5">
                    
                    {/* 1. The Magma Flow (Animated Gradient) */}
                    <div 
                      className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out rounded-full"
                      style={{ 
                        width: `${animatedLevels[i]}%`,
                        background: 'linear-gradient(90deg, #c2410c, #f97316, #fbbf24, #f97316, #c2410c)',
                        backgroundSize: '200% 100%',
                        animation: 'magmaFlow 2s linear infinite'
                      }}
                    />
                    
                    {/* 2. Top Glare */}
                    <div 
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-b from-white/20 to-transparent"
                      style={{ width: `${animatedLevels[i]}%` }}
                    />

                    {/* 3. Outer Glow */}
                    <div 
                      className="absolute inset-y-0 left-0 bg-orange-500 blur-md opacity-40"
                      style={{ width: `${animatedLevels[i]}%` }}
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* TOOLS PILLS */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-[10px] font-mono uppercase tracking-widest mb-8">
            Software & Tech
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Premiere Pro', 'After Effects', 'Photoshop', 'CapCut',].map((tool) => (
              <div 
                key={tool}
                className="px-6 py-3 bg-[#0A0A0A] border border-white/10 rounded-full text-sm font-medium font-body text-gray-300 
                hover:border-orange-500 hover:text-white hover:bg-orange-600/20 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] 
                transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CSS Animation for Magma Flow */}
      <style>{`
        @keyframes magmaFlow {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;