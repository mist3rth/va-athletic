import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function Media() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const accentColor = '#CEFE00';

  const publicationLogos = [
    { name: 'VOGUE', style: 'font-serif tracking-[0.3em] font-medium text-lg' },
    { name: 'GQ', style: 'font-sans tracking-wide font-black text-2xl italic' },
    { name: 'FORBES', style: 'font-serif tracking-[0.12em] font-extrabold text-[17px]' },
    { name: "L'ÉQUIPE", style: 'font-sans tracking-tight font-black text-xl skew-x-3' },
    { name: 'THE TIMES', style: 'font-serif tracking-[0.18em] font-semibold text-base italic' },
  ];

  return (
    <section
      id="media-section"
      className="relative bg-surface/30 py-16 border-b border-border/80 select-none overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full px-[30px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left side informational heading */}
        <div className="shrink-0 flex items-center gap-3">
          <span 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <h3 className="font-mono text-[9px] tracking-[0.25em] text-[#B2B9C1] uppercase">
            Mentionné dans l'Élite de la Presse
          </h3>
        </div>

        {/* Brand Typographies Layout Block with slow hover effects */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {publicationLogos.map((pub, idx) => (
            <motion.div
              key={idx}
              className={`text-[#B2B9C1] hover:text-text-primary transition-colors duration-500 cursor-default select-none ${pub.style}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 0.5, y:0 } : {}}
              whileHover={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
            >
              {pub.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
