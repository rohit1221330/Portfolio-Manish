import { useEffect, useRef, useState } from 'react';
import { Quote, Zap, Clock } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-4 py-20 overflow-hidden bg-black md:px-6 md:pt-32 md:pb-20"
    >
      {/* 1. SEAMLESS BLEND GRADIENTS */}
      <div className="absolute top-0 left-0 z-10 w-full h-32 pointer-events-none bg-gradient-to-b from-black via-black to-transparent" />
      <div className="absolute bottom-0 left-0 z-10 w-full h-32 pointer-events-none bg-gradient-to-t from-black via-black to-transparent" />

      {/* 2. BACKGROUND AMBIENCE */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="relative z-20 max-w-6xl mx-auto">

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

          {/* --- LEFT SIDE: THE IMAGE (The Molten Frame) --- */}
          <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Back Glow (Heat Source) */}
            <div className="absolute transition-opacity duration-500 -inset-4 bg-gradient-to-r from-orange-600 to-red-900 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 animate-pulse" />

            {/* The Image Container */}
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A]">

              {/* Image */}
              <img
                src="/Manish.jpg"
                alt="Rudra Gupta"
                className="object-cover w-full h-full transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />

              {/* Dark Gradient Overlay (Bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Floating Badge (Experience) */}
              <div className="absolute flex items-center gap-3 px-4 py-3 border rounded-lg bottom-6 left-6 bg-white/5 backdrop-blur-md border-white/10">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-orange-500 rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  {/* MATCHING FONT: font-mono */}
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Experience</p>
                  <p className="font-bold text-white font-clash">1+ Year</p>
                </div>
              </div>

            </div>

            {/* Decoration Lines */}
            <div className="absolute w-12 h-12 border-t-2 border-l-2 -top-6 -left-6 border-orange-500/50" />
            <div className="absolute w-12 h-12 border-b-2 border-r-2 -bottom-6 -right-6 border-orange-500/50" />
          </div>


          {/* --- RIGHT SIDE: THE CONTENT (The Story) --- */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-orange-500" />
              {/* MATCHING FONT: font-mono */}
              <span className="text-orange-500 text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
                About The Creator
              </span>
            </div>

            {/* MATCHING FONT: font-clash */}
            <h2 className="mb-8 text-4xl font-bold leading-tight text-white font-clash md:text-6xl">
              I turn <span className="text-gray-500 line-through decoration-lava-glow decoration-2">chaos</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                into Coherence
              </span>
            </h2>
            

            <div className="space-y-8 font-sans text-lg leading-relaxed text-gray-400">

              {/* Paragraph 1: Philosophy */}
              <p>
                I’m a <span className="font-medium text-white">creator first</span>, an editor second.
                That’s why my edits feel intentional and made for <span className="text-white">real people</span> — not algorithms.
              </p>

              {/* Paragraph 2: Methodology */}
              <p>
                I don’t chase transitions. I focus on <span className="text-white">attention, clarity, and clean storytelling</span>.
                I understand today’s audience because <span className="text-white border-b border-orange-500/50 pb-0.5">I am the audience</span>.
              </p>

              {/* The "Outperform" Line - Chaos into Coherence */}
            

            </div>

            {/* Stats / Philosophy Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 transition-colors border rounded-lg bg-white/5 border-white/5 hover:border-orange-500/30">
                <Quote className="w-6 h-6 mb-2 text-orange-500" />
                {/* MATCHING FONT: font-clash */}
                <h4 className="mb-1 font-bold text-white font-clash">Modern Style</h4>
                <p className="font-mono text-xs text-gray-400">Clean cuts, dynamic motion.</p>
              </div>
              <div className="p-4 transition-colors border rounded-lg bg-white/5 border-white/5 hover:border-orange-500/30">
                <Zap className="w-6 h-6 mb-2 text-orange-500" />
                {/* MATCHING FONT: font-clash */}
                <h4 className="mb-1 font-bold text-white font-clash">Engaging</h4>
                <p className="font-mono text-xs text-gray-400">Content that retains attention.</p>
              </div>
            </div>

            {/* Signature Area */}
            <div className="flex items-center justify-between pt-10 mt-10 border-t border-white/5">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-mono">Current Status</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
                  </span>
                  <span className="font-mono text-sm text-gray-200">Accepting New Projects</span>
                </div>
              </div>
              {/* SIGNATURE STYLE */}
              <div className="font-clash font-bold text-2xl text-white/20 italic rotate-[-5deg]">
                Manish Mehar
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;