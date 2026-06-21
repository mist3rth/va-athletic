import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fill transition begins after stroke animation completes
    const fillTimer = setTimeout(() => {
      setIsFilled(true);
    }, 1200);

    // Start preloader fade out
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2100);

    // Trigger onComplete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const accentColor = '#CEFE00';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader-overlay"
          className="fixed inset-0 bg-bg z-50 flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="relative flex flex-col items-center select-none pointer-events-none">
            {/* Elegant Monogram Monolith SVG */}
            <svg
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 animate-pulse"
            >
              {/* Stroke-animated Outer Frame */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke={accentColor}
                strokeWidth="2"
                className="animate-svg-logo"
              />
              {/* Inner Monogram V representing physical verticality, velocity and victory */}
              <motion.path
                d="M32 35 L50 72 L68 35"
                stroke={accentColor}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-svg-logo"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              {/* Star-like apex of training balance that fills in gracefully */}
              <motion.polygon
                points="50,22 53,28 59,28 54,32 56,38 50,34 44,38 46,32 41,28 47,28"
                fill={isFilled ? accentColor : 'transparent'}
                stroke={accentColor}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: isFilled ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </svg>

            {/* Subtitle fading in organically */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display font-black tracking-[0.3em] text-[15px] text-text-primary uppercase mb-1 italic">
                VALENTIN ATHLETIC
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1.5px] w-4" style={{ backgroundColor: accentColor }} />
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B2B9C1]">
                  HAUTE PERFORMANCE CLINIQUE
                </p>
                <span className="h-[1.5px] w-4" style={{ backgroundColor: accentColor }} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
