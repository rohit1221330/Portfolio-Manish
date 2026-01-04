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
  className="relative px-3 py-16 overflow-hidden bg-black md:px-6 md:py-20"
>
  {/* 1. ATMOSPHERE (Same as before) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-orange-600/10 to-red-900/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-red-600/10 to-orange-900/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
  </div>

  {/* 2. BACKGROUND LINES */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 md:opacity-40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="magmaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c2d12" stopOpacity="0" />
        <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
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
    <div className={`text-center mb-10 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <span className="text-orange-500 text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase mb-3 block animate-pulse">
        Internal Core
      </span>
      <h2 className="text-3xl font-bold text-gray-200 font-cinematic md:text-5xl lg:text-7xl">
        SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-600 drop-shadow-md">ARSENAL</span>
      </h2>
    </div>

    {/* SKILLS GRID - UPDATED FOR 2 COLUMNS ON MOBILE */}
    <div className="grid grid-cols-2 gap-3 md:gap-8 md:grid-cols-2">
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Glass Card - Padding reduced heavily for mobile layout */}
            <div className="relative h-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 md:p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] flex flex-col justify-between">

              {/* Top Section */}
              <div className="relative z-10 mb-4">
                {/* Header: Icon + Percent */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center justify-center w-8 h-8 transition-colors border rounded-lg md:w-12 md:h-12 bg-gradient-to-br from-orange-900/40 to-black border-orange-500/20 group-hover:border-orange-500/60 shrink-0">
                    <Icon className="w-4 h-4 text-orange-500 transition-all md:w-6 md:h-6 group-hover:text-orange-400" />
                  </div>
                  <span className="font-mono text-sm font-bold text-orange-500 md:text-xl drop-shadow-sm">{animatedLevels[i]}%</span>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="mb-1 text-sm font-bold leading-tight text-gray-200 md:text-lg font-cinematic group-hover:text-white">{skill.name}</h3>
                  {/* Mobile pe description hide kar sakte hain agar congested lage, filhal chota kiya hai */}
                  <p className="text-[10px] md:text-sm text-gray-500 font-body leading-tight line-clamp-2 md:line-clamp-none">{skill.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-1.5 md:h-3 overflow-hidden border rounded-full bg-white/5 border-white/5 mt-auto">
                <div
                  className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: `${animatedLevels[i]}%`,
                    background: 'linear-gradient(90deg, #c2410c, #f97316, #fbbf24, #f97316, #c2410c)',
                    backgroundSize: '200% 100%',
                    animation: 'magmaFlow 2s linear infinite'
                  }}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>

    {/* TOOLS PILLS */}
    <div className={`mt-10 md:mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="inline-block px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-[9px] md:text-[10px] font-mono uppercase tracking-widest mb-6">
        Software & Tech
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {['Premiere Pro', 'After Effects', 'Photoshop', 'CapCut','Davinci resolve'].map((tool) => (
          <div
            key={tool}
            className="px-3 py-2 md:px-6 md:py-3 bg-[#0A0A0A] border border-white/10 rounded-full text-[10px] md:text-sm font-medium font-body text-gray-300 
            hover:border-orange-500 hover:text-white hover:bg-orange-600/20 
            transition-all duration-300 cursor-default"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>

  </div>

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