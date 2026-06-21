import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, MotionValue } from 'motion/react';

export default function Credo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="credo-section"
      className="relative bg-white py-24 sm:py-32 overflow-hidden text-center"
      ref={containerRef}
    >
      {/* Decorative High-Fidelity Vertical Outlined "GYM" text in top left margin */}
      <div
        className="absolute left-6 top-[100px] font-display font-black text-[80px] sm:text-[110px] xl:text-[125px] uppercase select-none pointer-events-none hidden lg:block tracking-widest leading-none z-0"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          WebkitTextStroke: '1.5px rgba(9, 9, 11, 0.06)',
          color: 'transparent'
        }}
      >
        GYM
      </div>

      <div className="w-full px-[30px] relative z-10 max-w-7xl mx-auto">
        
        {/* Centered Heading Layout exactly like the screenshot */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            className="font-display font-black text-zinc-950 text-[32px] sm:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.1] tracking-tight uppercase"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CONFIANCE &amp; PERFORMANCE
            <br />
            <span className="text-zinc-950/80">ATHLÉTIQUE ÉLITE</span>
          </motion.h2>

          <motion.p
            className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] text-zinc-500 max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Un protocole sur mesure alliant biomécanique avancée, suivi d’élite et confidentialité absolue pour les esprits et corps d’exception. Façonnez un physique résilient.
          </motion.p>
        </div>

        {/* High-Fidelity Magazine Asymmetry Grid Layout exactly like screen */}
        <motion.div
          className="w-full flex flex-col overflow-hidden border border-zinc-200/40 rounded-[20px] shadow-sm bg-zinc-50"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Row 1: Split 50 / 50 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            
            {/* Left Block of Row 1: Split 1/3 and 2/3 */}
            <div className="grid grid-cols-12 gap-[2px] h-[340px] sm:h-[420px] lg:h-[480px]">
              {/* Image 1: Narrow Weight training close-up (4 cols of 12) */}
              <div className="col-span-4 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop"
                  alt="Legs barbell training close up"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Image 2: Hoodie Athlete leaning on wall (8 cols of 12) */}
              <div className="col-span-8 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
                  alt="Female athlete leaning on concrete wall"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
            </div>

            {/* Right Block of Row 1: Horizontal Athlete resting on side (50% width) */}
            <div className="relative overflow-hidden group h-[340px] sm:h-[420px] lg:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
                alt="Female athlete resting on floor mat"
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-500" />
            </div>

          </div>

          {/* Row 2: Split 50 / 25 / 25 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px]">
            
            {/* Image 4: High intensity male sweaty athlete resting (50% width) */}
            <div className="md:col-span-2 relative overflow-hidden group h-[260px] sm:h-[340px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
                alt="Male athlete core workout recovery"
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Image 5: Yellow runner stretching flat on track (25% width) */}
            <div className="relative overflow-hidden group h-[260px] sm:h-[340px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop"
                alt="Active stretching on athletic track"
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Image 6: Double plyometric jump workout on wooden boxes (25% width) */}
            <div className="relative overflow-hidden group h-[260px] sm:h-[340px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop"
                alt="Wooden box jumps exercise"
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-500" />
            </div>

          </div>
        </motion.div>

        {/* Animated Impactful Statement Section below the Grid */}
        <div className="mt-20 sm:mt-28 md:mt-32 max-w-4xl mx-auto border-t border-zinc-100 pt-16 sm:pt-24 relative">
          <ScrollRevealSentence text="LA SOUFFRANCE EST TEMPORAIRE, LA MAÎTRISE EST ÉTERNELLE." />

          <motion.p
            className="font-sans text-[13px] sm:text-[14px] text-zinc-500 max-w-lg mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Le dépassement ne réside pas dans l'absence d'effort, mais dans la volonté d'aller au-delà de la fatigue éphémère. Créez un corps hautement performant, sculpté avec l'expertise de la biomécanique active.
          </motion.p>
        </div>

      </div>
    </section>
  );
}

interface ScrollRevealSentenceProps {
  text: string;
}

function ScrollRevealSentence({ text }: ScrollRevealSentenceProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"] // Trigger-range optimized for scrolling reveal
  });

  const words = text.split(" ");
  
  return (
    <h3 
      ref={containerRef} 
      className="font-display font-black text-zinc-950 text-[24px] sm:text-[34px] lg:text-[40px] leading-[1.3] tracking-normal uppercase select-none flex flex-wrap justify-center gap-x-3 gap-y-2 py-4"
    >
      {words.map((word, wordIndex) => {
        // Simple and robust organic overlaps
        const start = wordIndex / words.length;
        const end = Math.min(1, start + 1.6 / words.length);
        
        return (
          <ScrollRevealWord 
            key={wordIndex} 
            word={word} 
            range={[start, end]} 
            progress={scrollYProgress} 
          />
        );
      })}
    </h3>
  );
}

interface ScrollRevealWordProps {
  key?: React.Key;
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function ScrollRevealWord({ word, range, progress }: ScrollRevealWordProps) {
  // Check if it's the target word "MAÎTRISE" or "MAÎTRISE."
  const cleanWord = word.replace(/[^A-ZÎ]/gi, "");
  const isMaitrise = cleanWord === "MAÎTRISE";
  const characters = word.split("");
  
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="relative inline-flex flex-nowrap">
      {characters.map((char, charIndex) => {
        const charStart = range[0] + (step * charIndex);
        const charEnd = Math.min(1, charStart + step * 1.6);
        
        return (
          <ScrollRevealCharacter
            key={charIndex}
            char={char}
            range={[charStart, charEnd]}
            progress={progress}
            isHighlighted={isMaitrise}
          />
        );
      })}
    </span>
  );
}

interface ScrollRevealCharacterProps {
  key?: React.Key;
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
  isHighlighted: boolean;
}

function ScrollRevealCharacter({ char, range, progress, isHighlighted }: ScrollRevealCharacterProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const scale = useTransform(progress, range, [0.93, 1]);

  return (
    <span className="relative inline-block px-[1px]">
      {/* Background low-opacity text mask */}
      <span className="absolute inset-0 select-none opacity-[0.12] text-zinc-400 font-black">
        {char}
      </span>
      
      {/* Dynamic scrolling text layer */}
      <motion.span
        style={{ opacity, scale }}
        className={`inline-block select-none font-black ${
          isHighlighted 
            ? 'text-zinc-950 font-black relative cursor-pointer' 
            : 'text-zinc-900 font-black'
        }`}
        whileHover={isHighlighted ? {
          scale: 1.25,
          color: '#CEFE00',
          rotate: char.charCodeAt(0) % 2 === 0 ? 4 : -4,
          textShadow: '0px 0px 8px rgba(206,254,0,0.5)',
          transition: {
            type: 'spring',
            stiffness: 450,
            damping: 12
          }
        } : undefined}
        // Exquisite, ultra-clean reset transition to resolve any tremors instantly
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 28, // Prevents oscillation/shaking completely upon leaving
          mass: 1
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}
