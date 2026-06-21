import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';

interface TariffsProps {
  onApplyClick: () => void;
}

export default function Tariffs({ onApplyClick }: TariffsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const groupCard = {
    title: 'Entraînement en Groupe (Extérieur)',
    prices: [
      { amount: '280€', label: '8 séances', period: 'Valable sur 6 semaines' },
      { amount: '160€', label: '4 séances', period: 'Valable sur 3 semaines' }
    ],
    features: [
      'Attention personnalisée et corrections techniques en temps réel',
      'Places limitées à 6 personnes par session pour garantir la qualité',
      'Dynamique de groupe motivante et environnement d’entraide stimulant'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
  };

  const personalCard = {
    title: 'Séances Individuelles (1-à-1)',
    prices: [
      { amount: '720€', label: '8 séances', period: 'Planification d’élite sur mesure' }
    ],
    features: [
      'Suivi biomecanique millimétré et programmation 100% personnalisée',
      'Séances à domicile, en extérieur ou en studio privé selon vos besoins',
      'Bilan et ajustement hebdomadaire de la nutrition et de la récupération',
      'Support prioritaire personnalisé disponible 7j/7 avec Valentin'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
  };

  const trialCard = {
    title: 'Séance d’Essai Individuelle',
    prices: [
      { amount: '95€', label: '1 séance', period: 'Idéal pour initier le changement' }
    ],
    features: [
      '75 minutes d’analyse de posture, de mobilityé et de profil de force',
      ' diagnostic complet de vos points faibles et objectifs prioritaires',
      'Mise en pratique directe avec une première séance personnalisée',
      'Sans aucun engagement, découvrez l’exigence de notre méthode globale'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  };

  return (
    <section
      id="tariffs-section"
      className="relative bg-[#070708] py-24 sm:py-32 border-b border-border/80 overflow-hidden text-left"
      ref={containerRef}
    >
      {/* Visual ambient glows matching design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent blur-[180px] opacity-[0.02] select-none pointer-events-none" />

      <div className="w-full px-[30px] relative z-10 max-w-7xl mx-auto">
        
        {/* Header Tag with square icon exactly like requested layout */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <SectionBadge label="TARIFS" />

          {/* Huge italic display heading exactly like screenshot style */}
          <motion.h2
            className="font-display font-black text-[28px] sm:text-[42px] lg:text-[46px] leading-[1.1] text-white uppercase italic tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Des plans conçus pour votre
            <br />
            <span className="text-accent">progression et croissance</span>
          </motion.h2>
        </div>

        {/* First two cards grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Group Outdoors */}
          <motion.div
            className="bg-[#0C0C0D] border border-white/10 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.012] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full h-full">
              
              {/* Product Info Left part - larger span to avoid text lack of space */}
              <div className="md:col-span-8 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-display font-black text-[20px] sm:text-[24px] text-white uppercase italic tracking-wide mb-6 leading-tight">
                    {groupCard.title}
                  </h3>

                  {/* Flexible wrapping container for pricing to ensure text breathing room */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                    {groupCard.prices.map((price, pIdx) => (
                      <div key={pIdx} className="min-w-[140px]">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[34px] sm:text-[40px] font-black text-accent font-display select-none tracking-tight leading-none">
                            {price.amount}
                          </span>
                          <span className="text-[12px] sm:text-[13px] text-white font-sans font-extrabold uppercase tracking-wide leading-none">
                            {price.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#B2B9C1] font-mono uppercase tracking-wider block mt-1.5 leading-none">
                          {price.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal visual divider line */}
                  <div className="w-full h-[1px] bg-white/10 mb-6" />

                  {/* Point-by-point features with exact • character styling and spacious description columns */}
                  <ul className="space-y-3.5 mb-8">
                    {groupCard.features.map((feature, fIdx) => (
                      <li key={fIdx} className="font-sans text-[13px] sm:text-[14px] text-[#B2B9C1] flex items-start gap-2 leading-relaxed">
                        <span className="text-white mt-1 shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Button */}
                <Button onClick={onApplyClick} variant="secondary">
                  ME CONTACTER
                </Button>
              </div>

              {/* Decorative Visual Image Right part - smaller span to give text more space */}
              <div className="md:col-span-4 relative min-h-[220px] md:min-h-full rounded-[18px] overflow-hidden">
                <img
                  src={groupCard.imageUrl}
                  alt={groupCard.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>

          {/* Card 2: Personal 1-on-1 */}
          <motion.div
            className="bg-[#0C0C0D] border border-white/10 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.012] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full h-full">
              
              {/* Product Info Left part - larger span to avoid text lack of space */}
              <div className="md:col-span-8 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-display font-black text-[20px] sm:text-[24px] text-white uppercase italic tracking-wide mb-6 leading-tight">
                    {personalCard.title}
                  </h3>

                  {/* Pricing elements with high-fidelity size and lime-green styling */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                    {personalCard.prices.map((price, pIdx) => (
                      <div key={pIdx} className="min-w-[140px]">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[34px] sm:text-[40px] font-black text-accent font-display select-none tracking-tight leading-none">
                            {price.amount}
                          </span>
                          <span className="text-[12px] sm:text-[13px] text-white font-sans font-extrabold uppercase tracking-wide leading-none">
                            {price.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#B2B9C1] font-mono uppercase tracking-wider block mt-1.5 leading-none">
                          {price.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal visual divider line */}
                  <div className="w-full h-[1px] bg-white/10 mb-6" />

                  {/* Point-by-point features with exact • character styling and spacious description columns */}
                  <ul className="space-y-3.5 mb-8">
                    {personalCard.features.map((feature, fIdx) => (
                      <li key={fIdx} className="font-sans text-[13px] sm:text-[14px] text-[#B2B9C1] flex items-start gap-2 leading-relaxed">
                        <span className="text-white mt-1 shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Button */}
                <Button onClick={onApplyClick} variant="secondary">
                  ME CONTACTER
                </Button>
              </div>

              {/* Decorative Visual Image Right part - smaller span to give text more space */}
              <div className="md:col-span-4 relative min-h-[220px] md:min-h-full rounded-[18px] overflow-hidden">
                <img
                  src={personalCard.imageUrl}
                  alt={personalCard.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>

        {/* Third centered card: The Trial Offer */}
        <div className="flex justify-center w-full">
          <motion.div
            className="bg-[#0C0C0D] border border-white/10 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.012] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group w-full xl:max-w-[calc(50%-16px)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full h-full">
              
              {/* Product Info Left part - larger span to avoid text lack of space */}
              <div className="md:col-span-8 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-display font-black text-[20px] sm:text-[24px] text-white uppercase italic tracking-wide mb-6 leading-tight">
                    {trialCard.title}
                  </h3>

                  {/* Pricing elements with high-fidelity size and lime-green styling */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                    {trialCard.prices.map((price, pIdx) => (
                      <div key={pIdx} className="min-w-[140px]">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[34px] sm:text-[40px] font-black text-accent font-display select-none tracking-tight leading-none">
                            {price.amount}
                          </span>
                          <span className="text-[12px] sm:text-[13px] text-white font-sans font-extrabold uppercase tracking-wide leading-none">
                            {price.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#B2B9C1] font-mono uppercase tracking-wider block mt-1.5 leading-none">
                          {price.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal visual divider line */}
                  <div className="w-full h-[1px] bg-white/10 mb-6" />

                  {/* Point-by-point features with exact • character styling and spacious description columns */}
                  <ul className="space-y-3.5 mb-8">
                    {trialCard.features.map((feature, fIdx) => (
                      <li key={fIdx} className="font-sans text-[13px] sm:text-[14px] text-[#B2B9C1] flex items-start gap-2 leading-relaxed">
                        <span className="text-white mt-1 shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action Button */}
                <Button onClick={onApplyClick} variant="secondary">
                  ME CONTACTER
                </Button>
              </div>

              {/* Decorative Visual Image Right part - smaller span to give text more space */}
              <div className="md:col-span-4 relative min-h-[220px] md:min-h-full rounded-[18px] overflow-hidden">
                <img
                  src={trialCard.imageUrl}
                  alt={trialCard.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
