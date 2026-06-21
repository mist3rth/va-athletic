import { motion } from 'motion/react';

export default function Methodology() {
  const accentColor = '#CEFE00';

  const cards = [
    {
      title: 'Entraînement Fonctionnel Complet',
      description: 'Nous travaillons sur tous les piliers du mouvement humain : force, agilité, puissance, souplesse, coordination et impact. Nous nous entraînons pour la vraie vie, pas seulement pour l\'esthétique.',
      imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Nutrition Basée sur la Vraie Santé',
      description: 'Une alimentation axée sur de vrais aliments, adaptée à chaque individu et orientée spécifiquement vers la santé digestive et l\'énergie constante.',
      imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Santé Holistique & Globale',
      description: 'La connexion avec la nature, un repos de qualité et des relations humaines saines comme fondations absolues d\'un corps robuste et d\'un esprit résilient.',
      imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section
      id="methodology-section"
      className="relative bg-[#070708] py-24 sm:py-32 border-b border-border/80 overflow-hidden"
    >
      {/* Background visual atmosphere glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#CEFE00] blur-[160px] opacity-[0.02] select-none pointer-events-none" />

      <div className="w-full px-[30px] relative z-10">
        
        {/* Header Tag and Beautiful Big Text Block */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            className="flex items-center gap-1.5 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-[#CEFE00] inline-block shrink-0" />
            <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-extrabold text-[#CEFE00]">
              Ma Méthode
            </span>
          </motion.div>

          {/* Headline matching user attachment font and structure */}
          <motion.h2
            className="font-display font-black text-[28px] sm:text-[42px] lg:text-[46px] leading-[1.1] text-white uppercase italic tracking-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Un entraînement intelligent pour
            <br />
            <span className="text-[#CEFE00]">un véritable bien-être</span>
          </motion.h2>
        </div>

        {/* 3 cards grid layout matching the attachment precisely */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 p-1 bg-[#121315] group cursor-pointer transition-all duration-500 hover:scale-[1.015] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card main image wrapper */}
              <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient vignette and overlay gradient matching the layout */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500" />
                
                {/* Text Content Overlay positioned at the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-left">
                  <h3 className="font-display font-black text-[18px] sm:text-[22px] text-white tracking-wide uppercase italic mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#B2B9C1] leading-relaxed group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
