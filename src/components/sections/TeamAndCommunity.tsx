import { motion } from 'motion/react';

export default function TeamAndCommunity() {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Spécialiste Force & Conditionnement',
      imageUrl: 'https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'David Lin',
      role: 'Prévention & Rééducation',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Jordan Malik',
      role: 'Expert HIIT & Nutrition',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Chris Ndlovu',
      role: 'Coach Musculation & Hypertrophie',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section
      id="team-community-section"
      className="relative bg-[#070708] py-24 sm:py-32 border-b border-border/80 overflow-hidden text-left"
    >
      {/* Subtle bottom-right decorative blur glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#CEFE00] blur-[180px] opacity-[0.02] select-none pointer-events-none" />

      <div className="w-full px-[30px] relative z-10 max-w-7xl mx-auto">
        
        {/* Header Grid matching screenshot layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          
          {/* Left Column: Title and tag */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div
              className="flex items-center gap-1.5 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-[#CEFE00] inline-block shrink-0" />
              <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-extrabold text-[#CEFE00]">
                NOTRE ÉQUIPE ET LA COMMUNAUTÉ
              </span>
            </motion.div>

            <motion.h2
              className="font-display font-black text-[28px] sm:text-[42px] lg:text-[46px] leading-[1.1] text-white uppercase italic tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              L'entraînement n'est pas seulement
              <br />
              une question de mouvement,
              <br />
              <span className="text-[#CEFE00]">c'est faire partie d'un collectif</span>
            </motion.h2>
          </div>

          {/* Right Column: Information paragraph */}
          <motion.div
            className="lg:col-span-4 lg:pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#B2B9C1] leading-relaxed">
              Découvrez ici de véritables images de nos sessions d’entraînement, de la cohésion de nos groupes et de l’atmosphère d’entraide unique créée à chaque session pour vous pousser vers le haut.
            </p>
          </motion.div>

        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 p-1 bg-[#121315] group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Rounded Image Wrapper */}
              <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Vertical Gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500" />
                
                {/* Information text placed at the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left z-10">
                  <span className="font-display font-black text-[18px] sm:text-[20px] text-white tracking-wide uppercase italic leading-none mb-1.5">
                    {member.name}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-[#CEFE00] uppercase font-bold leading-normal">
                    {member.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
