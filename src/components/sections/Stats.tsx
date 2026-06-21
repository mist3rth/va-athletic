import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

// Micro Component for high-performance viewport counters
function AnimatedCounter({ target, duration = 1800, delayMs = 100 }: { target: number; duration?: number; delayMs?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const delayTimer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = Math.floor(easeProgress * target);
        setCount(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    }, delayMs);

    return () => clearTimeout(delayTimer);
  }, [isInView, target, duration, delayMs]);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-text-primary tracking-tighter">
      {count}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 650,
      suffix: '+',
      label: 'Séances / An',
      description: 'Accompagnements d\'intensité musculaire et cardiovasculaire calibrée.',
    },
    {
      value: 12,
      suffix: ' Ans',
      label: 'D\'Expertise Terrain',
      description: 'Dédiés au suivi sportif d\'élites, de VIPs et de décideurs exigeants.',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Rétention Membres',
      description: 'Une fidélité absolue fondée sur la régularité et les résultats concrets.',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Confidentialité NDA',
      description: 'Discrétion mutuelle scellée pour chaque athlète ou chef d\'entreprise.',
    },
  ];

  return (
    <section
      id="results-section"
      className="relative bg-surface/10 py-24 border-b border-border/80 overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full px-[30px] relative z-10">
        
        {/* Upper Title Segment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-border/30 pb-12">
          <div className="text-left">
            <span 
              className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3 block text-accent"
            >
              Les Métriques de Performance
            </span>
            <h2 className="font-display font-bold text-text-primary text-3xl sm:text-4xl leading-tight tracking-tight">
              Analyse de l’activité en chiffres.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">L’impact mesurable du protocole.</span>
            </h2>
          </div>

        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start text-left border-l border-border/60 pl-6 group relative select-none"
            >
              {/* Highlight bar that heightens on hover */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-transform duration-300 origin-bottom scale-y-0 group-hover:scale-y-100 bg-accent" 
              />

              {/* Counter value container */}
              <div className="mb-2 flex items-baseline gap-1 select-all">
                <AnimatedCounter target={stat.value} delayMs={index * 150} />
                <span 
                  className="font-display font-extrabold text-2xl sm:text-3xl transition-colors duration-500 text-accent"
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Counter labelling */}
              <h3 className="font-display font-bold text-[17px] text-text-primary mb-2 tracking-tight">
                {stat.label}
              </h3>
              
              <p className="font-sans text-[12.5px] text-text-muted leading-relaxed max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
