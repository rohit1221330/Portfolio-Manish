import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, Maximize, Clapperboard } from 'lucide-react';

const ShowreelSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stats Data
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '08', label: 'Years Experience' },
    { value: '50+', label: 'Happy Clients' },
    { value: '12', label: 'Awards Won' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="showreel"
      ref={sectionRef}
      className="relative px-6 py-32 overflow-hidden bg-void"
    >
      {/* --- 1. THE MAGMA VORTEX (Background Animation) --- */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Rotating Lava Gradient */}
        <div className="w-[150vw] h-[150vw] bg-[conic-gradient(from_0deg,transparent_0deg,#7c2d12_100deg,#ea580c_180deg,transparent_360deg)] opacity-20 blur-[100px] animate-spin-slow rounded-full"></div>
        
        {/* Core Glow */}
        <div className="absolute w-[60vw] h-[60vw] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      </div>

      {/* --- 2. CYBER GRID TEXTURE (Tech Feel) --- */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>
      
      {/* Top/Bottom Fade for Seamless Blend */}
      <div className="absolute top-0 left-0 z-10 w-full h-40 bg-gradient-to-b from-void to-transparent" />
      <div className="absolute bottom-0 left-0 z-10 w-full h-40 bg-gradient-to-t from-void to-transparent" />


      <div className="relative z-20 mx-auto max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
            <Clapperboard className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase">
              Selected Works
            </span>
          </div>
          
          <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl font-clash">
            VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">SHOWCASE</span>
          </h2>
        </div>

        {/* --- 3. THE VIDEO PLAYER CONTAINER --- */}
        <div 
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* MASSIVE BACKGROUND TEXT (Fills empty space) */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none font-clash tracking-tighter select-none">
            CINEMATIC
          </h1>

          {/* Player Box */}
          <div className="relative max-w-5xl mx-auto aspect-video bg-[#050505] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(234,88,12,0.3)] group z-10">
            
            {isPlaying ? (
              // ACTIVE VIDEO
              <video 
                src="/videos/Showreel.mp4" 
                className="object-cover w-full h-full"
                controls 
                autoPlay 
                playsInline
              />
            ) : (
              // THUMBNAIL STATE
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                
                {/* Image */}
                <img 
                   src="https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                   alt="Thumbnail"
                   className="object-cover w-full h-full transition-opacity duration-700 ease-out opacity-60 group-hover:opacity-40"
                />
                
                {/* Glass Reflection Overlay (Shiny look) */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* --- HUD BRACKETS (Orange Glow) --- */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-[3px] border-l-[3px] border-orange-500 rounded-tl-lg drop-shadow-[0_0_10px_#f97316]"></div>
                <div className="absolute top-6 right-6 w-12 h-12 border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-lg drop-shadow-[0_0_10px_#f97316]"></div>
                <div className="absolute bottom-20 left-6 w-12 h-12 border-b-[3px] border-l-[3px] border-orange-500 rounded-bl-lg drop-shadow-[0_0_10px_#f97316]"></div>
                <div className="absolute bottom-20 right-6 w-12 h-12 border-b-[3px] border-r-[3px] border-orange-500 rounded-br-lg drop-shadow-[0_0_10px_#f97316]"></div>

                {/* --- CENTER PULSING PLAY BUTTON --- */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative transition-transform duration-500 group-hover:scale-110">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 border rounded-full opacity-75 border-orange-500/60 animate-ping"></div>
                    <div className="absolute inset-0 border rounded-full opacity-50 border-orange-500/40 animate-ping animation-delay-500"></div>
                    
                    {/* Main Button */}
                    <div className="w-24 h-24 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-orange-500 shadow-[0_0_50px_rgba(234,88,12,0.4)] relative z-10">
                       <Play className="w-8 h-8 ml-1 text-orange-500 fill-orange-500" />
                    </div>
                  </div>
                </div>

                {/* --- FAKE UI CONTROL BAR --- */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center h-20 gap-6 px-8 border-t bg-black/80 backdrop-blur-md border-white/10">
                   <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                     <Play className="w-3 h-3 text-white" />
                   </div>
                   
                   {/* Progress Bar */}
                   <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[35%] h-full bg-gradient-to-r from-orange-600 to-yellow-500 shadow-[0_0_15px_#f97316]"></div>
                   </div>
                   
                   <span className="font-mono text-xs tracking-widest text-white/50">01:23 / 03:45</span>
                   
                   <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                      <Volume2 className="w-4 h-4 transition-colors text-white/50 hover:text-white" />
                      <Maximize className="w-4 h-4 transition-colors text-white/50 hover:text-white" />
                   </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* --- 4. STATS (Integrated Design) --- */}
        <div className={`mt-24 pt-12 border-t border-white/5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative p-4 text-center transition-colors duration-300 group rounded-xl hover:bg-white/5">
                <div className="mb-2 text-4xl font-bold text-white transition-all duration-300 font-clash md:text-6xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-orange-500 transition-colors">
                  {stat.label}
                </div>
                {/* Small decor dot */}
                <div className="absolute w-1 h-1 transition-opacity bg-orange-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowreelSection;