import { useRef } from 'react';
import { motion } from 'motion/react';
import SectionBadge from '../ui/SectionBadge';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about-section"
      className="relative bg-[#070708] py-24 sm:py-32 border-b border-border/80 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background radial glows matching the athlete feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent blur-[180px] opacity-[0.02] select-none pointer-events-none" />

      <div className="w-full px-[30px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Left Image */}
          <motion.div
            className="hidden lg:block lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 p-1.5 bg-[#0E0F11] rounded-[24px] group">
              <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
                  alt="Athletic training left perspective"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Center Column: The core layout with Heading, Tags, and Paragraphs */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center">
            
            {/* Interactive tag element precisely styled like the mock */}
            <SectionBadge label="À Propos" />

            {/* Huge expressive Heading resembling the user layout font */}
            <motion.h2
              className="font-display font-black text-[28px] sm:text-[42px] lg:text-[46px] leading-[1.1] text-white uppercase italic tracking-tight mb-8 drop-shadow-md select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Le fitness n'est pas seulement
              <br />
              une histoire de poids à soulever,
              <br />
              <span className="text-accent inline-block">C'est l'art de se construire.</span>
            </motion.h2>

            {/* Mobile / Tablet: Grid images when sidebars are hidden */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-8 lg:hidden">
              <div className="relative aspect-[3/4] overflow-hidden border border-white/5 p-1 bg-[#0E0F11] rounded-[16px] group">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
                  alt="Training mobile left aspect"
                  className="w-full h-full object-cover rounded-[12px] transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden border border-white/5 p-1 bg-[#0E0F11] rounded-[16px] group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                  alt="Training mobile right aspect"
                  className="w-full h-full object-cover rounded-[12px] transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Elegant copy paragraphs exactly mirroring the mock story */}
            <motion.div
              className="space-y-6 font-sans text-[14px] sm:text-[15.5px] text-[#B2B9C1] leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Nous combinons des techniques d'entraînement avancées, des programmations sur-mesure de haute précision et un accompagnement d'élite pour vous garantir des progrès durables. Quel que soit votre objectif athlétique, nous ne nous contentons pas d'entraîner votre physique, nous forgeons également votre état d'esprit. Franchissez le pas pour vivre une aventure bâtie sur la concentration.
              </p>
              <p>
                La performance véritable repose sur la synergie entre la clarté mentale, la rigueur motrice et la nutrition intelligente. Notre philosophie écarte toute méthode extrême ou promesse instantanée pour installer une transformation profonde et une prévention active des blessures.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Premium Right Image */}
          <motion.div
            className="hidden lg:block lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 p-1.5 bg-[#0E0F11] rounded-[24px] group">
              <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                  alt="Athletic training right perspective"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
