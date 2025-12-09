import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  // { label: 'Showreel', href: '#showreel' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' }, // Projects ko 'Work' rename kiya for clean look
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' }, // Workflow -> Process
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isScrolled ? 'pt-4 pb-0' : 'py-6'}`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-out flex items-center justify-between
            ${isScrolled
              ? 'max-w-5xl bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
              : 'max-w-7xl px-6 bg-transparent border-transparent'
            }
          `}
        >

          {/* 1. LOGO */}
          <a href="#" className="z-50 flex items-center gap-3 group">

            {/* Option 1: Sirf Image Logo (Recommended) */}
            <div className="relative w-10 h-10 overflow-hidden transition-transform duration-300 border-2 border-transparent rounded-full group-hover:scale-110 group-hover:border-orange-500/50">
              <img
                src="/Manish.jpg"  // Yahan apni file ka naam likho
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Part (Agar tumhe text bhi chahiye photo ke saath) */}
            <span className={`font-clash font-bold text-xl tracking-wide transition-colors ${isScrolled ? 'text-ash' : 'text-white'}`}>
              PORTFOLIO<span className="text-lava animate-pulse">.</span>
            </span>

          </a>

          {/* 2. DESKTOP NAV (Hidden on Mobile) */}
          <div className="items-center hidden gap-1 px-2 py-1 border rounded-full md:flex bg-white/5 border-white/5 backdrop-blur-sm">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2 overflow-hidden text-xs font-bold tracking-wider uppercase transition-colors rounded-full text-smoke hover:text-white group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover Background */}
                <span className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-lava/10 group-hover:scale-100"></span>
              </a>
            ))}
          </div>

          {/* 3. CTA BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">

            {/* Let's Talk Button */}
            <a
              href="#contact"
              className={`hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full border transition-all duration-300 group
                ${isScrolled
                  ? 'bg-ash text-void border-ash hover:bg-lava hover:border-lava hover:text-white'
                  : 'bg-transparent text-ash border-white/20 hover:border-lava hover:text-white'
                }
              `}
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="z-50 flex items-center justify-center w-10 h-10 transition-all border rounded-full md:hidden bg-white/5 border-white/10 text-ash hover:bg-lava hover:border-lava hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-void to-void"></div>

            <div className="relative z-10 flex flex-col items-center w-full gap-8 px-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-bold transition-colors font-clash text-ash hover:text-lava"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-px my-4 bg-white/10"
              />

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full py-4 bg-lava text-white text-center font-bold tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;