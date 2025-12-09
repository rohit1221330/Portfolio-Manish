import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

// Components Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import WorkflowSection from './components/WorkflowSection';
import WhyHireMe from './components/WhyHireMe';
import CustomCursor from './components/CustomCursor';
import Archive from './pages/Archive'; 

// Scroll Reset Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Native scroll reset (Lenis handle karega)
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,        // Thoda badhaya taaki "Premium" feel aaye
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple style ease
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,   // Mouse wheel speed control
      smoothTouch: false,   // Mobile pe native rakho (Performance ke liye better)
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Ye zaroori hai: React renders ke baad height update karna
    const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToShowreel = () => {
    const section = document.getElementById('work');
    if (section) {
      // Lenis ka internal scroll use karna better hai
      const lenis = new Lenis(); // Instance access (simplified)
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />

      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen overflow-hidden bg-void text-ash"> 
             {/* overflow-hidden zaroori hai taaki horizontal scroll na aaye */}
            
            <div className="bg-noise"></div>
            <Navbar />
            <Hero onPlay={scrollToShowreel} />
            <AboutSection />
            <ProjectGallery />
            <SkillsSection />
            <WorkflowSection />
            <WhyHireMe />
            <ContactSection />
          </div>
        } />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;