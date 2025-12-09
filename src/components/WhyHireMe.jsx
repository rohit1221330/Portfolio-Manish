import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowDown } from 'lucide-react';

const WhyHireMe = () => {
  return (
    <section className="relative px-4 py-24 overflow-hidden bg-black">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* 1. HEADLINE: THE QUESTION */}
        <div className="mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
            <span className="font-mono text-orange-500 text-xs tracking-[0.3em] uppercase mb-2 block">
              Decision Matrix
            </span>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl font-cinematic">
              WHAT IF YOU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                HIRE ME?
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* 2. THE POSITIVE OUTCOME (The "Unlock") */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 overflow-hidden transition-colors border bg-white/5 border-white/10 backdrop-blur-sm rounded-2xl md:p-10 group hover:border-orange-500/30"
          >
             {/* Glowing Corner */}
             <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-orange-500/10 blur-xl"></div>

             <h3 className="pb-4 mb-8 text-xl text-white border-b font-cinematic border-white/10">
               SYSTEM STATUS: <span className="text-green-400">OPTIMIZED</span>
             </h3>

             <ul className="space-y-6">
               {[
                 "Your footage finally makes sense.",
                 "Your story finally holds attention.",
                 "Your content finally looks intentional."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="mt-1 min-w-[20px]">
                     <CheckCircle2 className="w-5 h-5 text-orange-500" />
                   </div>
                   <span className="font-sans text-lg leading-relaxed text-gray-200">
                     {item}
                   </span>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* 3. THE NEGATIVE OUTCOME (The "Warning") */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative p-8 md:p-10"
          >
             <div className="absolute top-0 bottom-0 left-0 hidden w-1 bg-gradient-to-b from-gray-800 to-transparent md:block"></div>
             
             <div className="pl-0 space-y-8 md:pl-8">
               
               {/* The Pain Point */}
               <div className="transition-opacity duration-500 opacity-60 hover:opacity-100">
                 <div className="flex items-center gap-2 mb-3 font-mono text-xs tracking-widest text-gray-500 uppercase">
                   <AlertCircle className="w-4 h-4" /> Alternative Scenario
                 </div>
                 <p className="font-sans text-2xl leading-relaxed text-gray-400">
                   And if you don’t... <br />
                   <span className="text-gray-600">
                     you’ll keep wondering why your videos don’t perform.
                   </span>
                 </p>
               </div>

               {/* The Bridge / Closing Statement */}
               <div className="pt-8 border-t border-white/5">
                 <p className="text-lg italic font-medium text-white">
                   “If you’ve reached this far… <br className="md:hidden"/>
                   <span className="not-italic text-orange-500">you’re already closer to better content.</span>”
                 </p>
                 
                 {/* Visual Arrow pointing to Contact */}
                 <div className="flex items-center gap-2 mt-6 font-mono text-sm text-gray-500 animate-bounce">
                    <ArrowDown className="w-4 h-4" />
                    START PROJECT BELOW
                 </div>
               </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;