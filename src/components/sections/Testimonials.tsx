import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      title: "« Un coaching intelligent à chaque instant. »",
      quote: "L'accompagnement de Valentin a complètement redéfini ma façon de m'entraîner. Son suivi personnalisé s’adapte à mon rythme de vie, ma récupération et mon état d'esprit chaque jour. C'est comme avoir un préparateur olympique directement à mes côtés.",
      name: "David Cole",
      role: "Marathonien & Entrepreneur",
      imageUrl: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "« Une rigueur scientifique incomparable. »",
      quote: "Après des années d'entraînement intensif parsemées de blessures, l’approche biomecanique et le suivi millimétré de Valentin ont tout changé. Force décuplée, douleur éliminée et une énergie maximale au quotidien.",
      name: "Alexandre Mercier",
      role: "Athlète amateur & Chef d'entreprise",
      imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "« Une alliance parfaite entre corps et esprit. »",
      quote: "La performance véritable exige une discipline d'acier mais aussi un équilibre de vie. Valentin m'a enseigné comment m'entraîner avec plus d'intelligence et de conscience, impactant positivement mon focus au bureau.",
      name: "Sarah Kamara",
      role: "Présidente de Cabinet & Dirigeante",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials-section"
      className="relative bg-[#070708] py-24 sm:py-32 border-b border-border/80 overflow-hidden text-left"
    >
      <div className="w-full px-[30px] relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and Subtext */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Success Stories badge */}
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-2 h-2 bg-[#CEFE00] inline-block shrink-0" />
              <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-extrabold text-[#CEFE00]">
                SUCCESS STORIES
              </span>
            </div>

            {/* Headline matching requested exact styling */}
            <h2 className="font-display font-black text-[32px] sm:text-[46px] leading-[1.1] text-white uppercase italic tracking-tight mb-6">
              Des résultats qui
              <br />
              parlent d’eux-mêmes
            </h2>

            {/* Description */}
            <p className="font-sans text-[14px] sm:text-[15.5px] text-[#B2B9C1] leading-relaxed max-w-md mb-8">
              De vraies histoires d’athlètes et de professionnels exigeants qui ont transformé leur quotidien physique et mental grâce à un accompagnement d’expert basé sur la rigueur et la clarté.
            </p>

            {/* Navigation Buttons (Desktop Placement) */}
            <div className="hidden lg:flex items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#CEFE00] hover:bg-[#DAFF33] text-[#070708] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#CEFE00]/10"
                aria-label="Témoignage précédent"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#CEFE00] hover:bg-[#DAFF33] text-[#070708] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#CEFE00]/10"
                aria-label="Témoignage suivant"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Testimonial Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#0C0C0D] border border-white/10 rounded-[24px] p-4 sm:p-5 shadow-2xl relative overflow-hidden min-h-[420px] sm:min-h-[380px] flex">
              <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                <motion.div
                  key={currentIndex}
                  initial={{ x: direction > 0 ? '100%' : '-100%' }}
                  animate={{ x: '0%' }}
                  exit={{ x: direction > 0 ? '-100%' : '100%' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
                >
                  {/* Left part of the card: Athlete Image with rounded corners and scale-in */}
                  <div className="md:col-span-5 h-[220px] md:h-full relative overflow-hidden rounded-[18px] group">
                    <img
                      src={testimonials[currentIndex].imageUrl}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover brightness-95 transition-all duration-700 ease-in-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Right part: Description / Quote / Author */}
                  <div className="md:col-span-7 flex flex-col justify-between py-2 px-1">
                    <div>
                      {/* Quote Title */}
                      <h3 className="font-display font-black text-[18px] sm:text-[21px] text-white tracking-wide uppercase italic leading-tight mb-4">
                        {testimonials[currentIndex].title}
                      </h3>
                      {/* Quote Body text */}
                      <p className="font-sans text-[13px] sm:text-[14px] text-[#B2B9C1] leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                      </p>
                    </div>

                    {/* Author signature and Slider counter */}
                    <div className="flex justify-between items-end mt-6 pt-6 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-white text-[15px] uppercase tracking-wide leading-none mb-1.5">
                          {testimonials[currentIndex].name}
                        </span>
                        <span className="font-mono text-[10px] tracking-wider text-[#CEFE00] uppercase font-bold">
                          {testimonials[currentIndex].role}
                        </span>
                      </div>

                      {/* Mono counter exactly resembling 1/3 layout style */}
                      <span className="font-mono text-[12px] text-[#B2B9C1] tracking-widest font-bold">
                        {currentIndex + 1}/{testimonials.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Buttons (Visible only on small screens below lg) */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#CEFE00] text-[#070708] flex items-center justify-center cursor-pointer hover:bg-[#DAFF33] active:scale-95 transition-all duration-300"
                aria-label="Témoignage précédent"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#CEFE00] text-[#070708] flex items-center justify-center cursor-pointer hover:bg-[#DAFF33] active:scale-95 transition-all duration-300"
                aria-label="Témoignage suivant"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
