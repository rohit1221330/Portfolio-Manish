import { useState, useRef, useEffect } from 'react';
import { Mail, Instagram, Linkedin, ArrowUpRight, Send, MapPin, Phone, Loader2, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // --- YE LOGIC ADD KIYA HAI (Form Submit ke liye) ---
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- FUNCTION: Email Bhejne ke liye ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page reload rokne ke liye
    setLoading(true);   // Loading start

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // FormSubmit.co service use kar rahe hain (Free & No Login)
      const response = await fetch("https://formsubmit.co/ajax/Manishmehar2006@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      if (response.ok) {
        setSuccess(true); // Success message dikhao
        e.target.reset(); // Form khali karo
        setTimeout(() => setSuccess(false), 5000); // 5 sec baad wapas form lao
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Submission failed. Check your internet connection.");
    } finally {
      setLoading(false); // Loading stop
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-4 py-20 overflow-hidden md:px-6 md:pt-32 md:pb-20 bg-void"
    >
      {/* 1. SEAMLESS BLEND (Top Gradient) */}
      <div className="absolute top-0 left-0 z-10 w-full h-40 pointer-events-none bg-gradient-to-b from-void to-transparent" />

      {/* 2. ATMOSPHERE: Floating Embers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-lava rounded-full opacity-60 blur-[1px] animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + 50 + '%',
              animationDuration: Math.random() * 10 + 10 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}

        {/* Deep Glow Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lava-dim/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">

        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">

          {/* --- LEFT SIDE: THE STORY --- */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Tag */}
            <span className="text-lava text-[10px] font-mono tracking-[0.3em] uppercase mb-6 block">
              Contact
            </span>

            {/* Headline */}
            <h2 className="mb-8 text-5xl font-bold leading-tight font-cinematic md:text-6xl text-ash">
              READY TO START <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-glow">CREATING?</span>
            </h2>

            {/* Bio Text */}
            {/* <p className="max-w-md mb-8 text-lg leading-relaxed text-smoke font-body">
              I'm currently available for freelance projects and full-time opportunities.
              If you have a project that needs a <span className="font-medium text-white">cinematic touch</span>, let's talk.
            </p> */}

            {/* Contact Details List */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-smoke group">
                <MapPin className="w-5 h-5 transition-colors text-lava group-hover:text-lava-glow" />
                <span className="font-mono text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-smoke group">
                <Phone className="w-5 h-5 transition-colors text-lava group-hover:text-lava-glow" />
                <a href="https://wa.me/919716885435" className="font-mono text-sm transition-colors hover:text-ash">
                  +91 97168 85435
                </a>
              </div>
              <div className="flex items-center gap-3 text-smoke group">
                <Mail className="w-5 h-5 transition-colors text-lava group-hover:text-lava-glow" />
                <a href="mailto:Manishmehar2006@gmail.com" className="font-mono text-sm transition-colors hover:text-ash">
                  Manishmehar2006@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/editormanish_365/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full border-ash/10 text-smoke hover:border-lava hover:text-lava hover:bg-lava/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>


          {/* --- RIGHT SIDE: CONTACT FORM --- */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Glass Card */}
            <div className="relative p-10 overflow-hidden transition-colors duration-500 border bg-surface border-ash/10 rounded-2xl group hover:border-lava/30">

              {/* Background Magma Flow */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lava-dim/40 via-transparent to-transparent"></div>

              <h3 className="mb-2 text-3xl font-bold font-cinematic text-ash">Drop a Message</h3>
              <p className="mb-8 font-mono text-sm text-smoke/60">Let's craft something legendary together.</p>

              {/* FORM LOGIC: SUCCESS or FORM */}
              {success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-pulse">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-500/20">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="mb-2 text-2xl font-cinematic text-ash">Message Sent!</h4>
                  <p className="text-sm text-smoke font-body">Thanks Manish, I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Settings for FormSubmit */}
                  <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-4 transition-colors border rounded-lg bg-white/5 border-ash/10 text-ash placeholder:text-smoke/50 focus:outline-none focus:border-lava font-body"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-4 transition-colors border rounded-lg bg-white/5 border-ash/10 text-ash placeholder:text-smoke/50 focus:outline-none focus:border-lava font-body"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows="3"
                      required
                      className="w-full px-4 py-4 transition-colors border rounded-lg resize-none bg-white/5 border-ash/10 text-ash placeholder:text-smoke/50 focus:outline-none focus:border-lava font-body"
                    />
                  </div>

                  {/* THE MAGMA BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative overflow-hidden group/btn rounded-lg bg-lava p-[1px] disabled:opacity-70"
                  >
                    <div className="relative bg-surface rounded-[7px] px-6 py-4 transition-all duration-300 group-hover/btn:bg-opacity-0">
                      <div className="flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 text-ash animate-spin" />
                            <span className="font-mono text-sm font-bold tracking-widest uppercase text-ash">Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="font-mono text-sm font-bold tracking-widest uppercase transition-colors text-ash group-hover/btn:text-void">
                              Send Message
                            </span>
                            <Send className="w-4 h-4 transition-colors text-ash group-hover/btn:text-void" />
                          </>
                        )}
                      </div>
                    </div>

                    {/* Button Glow on Hover */}

                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* --- FOOTER --- */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-32 text-center border-t border-ash/10 md:flex-row md:text-left">
          <p className="font-mono text-xs text-smoke/60">
            © 2025 Manish Maher. All Rights Reserved.
          </p>
          <p className="font-mono text-xs text-smoke/60">
            Based in <span className="text-lava">Delhi, India</span>
          </p>
        </div>

      </div>

      {/* Floating Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes magmaFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-magmaFlow {
           background-size: 200% 200%;
           animation: magmaFlow 2s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default ContactSection;