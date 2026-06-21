import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import herobg from '../../../herobg.webp';
import Button from '../ui/Button';

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen bg-[#070708] overflow-hidden flex items-center"
    >
      {/* Background Action Shot - Premium High-Performance Athleisure scene */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: 'center top', // Focus on top of image to make sure the head is perfectly visible
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }} // Brighter, clearer background image
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Cinematic Split Gradient Overlay (Darker on the left for maximum readability, fully transparent and clear on the right) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#070708] via-[#070708]/70 via-40% to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070708] via-transparent to-transparent" />

      {/* Glow highlight */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full blur-[150px] opacity-[0.06] select-none pointer-events-none z-10 bg-accent"
        style={{
          top: '30%',
          left: '10%',
        }}
      />

      {/* Main Container - Left-aligned text exactly like the screenshot */}
      <div className="relative z-20 w-full px-[30px] text-left flex flex-col items-start mt-12 sm:mt-0">
        
        {/* Elite Competency Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6"
        >
          <span 
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase px-4 py-2 bg-[#0E0F11]/90 border border-white/5 text-[#B2B9C1]"
          >
            PRÉPARATION ATHLÉTIQUE DE TRÈS HAUTE EXIGENCE
          </span>
        </motion.div>

        {/* Headline matching the exact layout style from the user screenshot */}
        <div className="overflow-hidden py-1 w-full max-w-4xl">
          <motion.h1
            className="font-display font-black text-white select-none leading-[1.05] tracking-tighter uppercase italic"
            style={{ fontSize: 'clamp(2.1rem, 5.8vw, 4.825rem)' }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            TRANSFORMER <span className="text-accent">L'ÉNERGIE</span> <br />
            EN PUISSANCE
          </motion.h1>
        </div>

        {/* Descriptive copy geared specifically towards demanding clients, entrepreneurs, and high-profile figures */}
        <motion.p
          className="font-sans text-[14px] sm:text-[16px] text-[#B2B9C1] max-w-xl mt-6 leading-relaxed select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Fort d’une expertise de pointe combinant biomécanique avancée, physiologie métabolique et préparation physique d’élite. Un accompagnement sur-mesure pour personnalités exigeantes, dirigeants et décideurs qui considèrent la forme physique comme leur plus grand levier stratégique.
        </motion.p>

        {/* CTA Button matching "Start Your Journey" element */}
        <motion.div
          className="mt-9"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Button
            onClick={() => {
              const el = document.getElementById('candidature-form-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="primary"
            icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
          >
            COMMENCER MON ACCOMPAGNEMENT
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
