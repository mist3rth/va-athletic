import { Instagram, Linkedin, Timer } from 'lucide-react';

export default function Footer() {
  const accentColor = '#CEFE00';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'À Propos', id: 'about-section' },
    { label: 'Pour qui ?', id: 'credo-section' },
    { label: 'Ma Méthode', id: 'methodology-section' },
    { label: 'Tarifs', id: 'tariffs-section' },
  ];

  return (
    <footer id="footer" className="relative bg-[#070708] py-16 sm:py-20 border-t border-border/80 select-none">
      <div className="w-full px-[30px] flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Side branding */}
        <div className="flex flex-col items-start max-w-md gap-4">
          <div className="flex items-center gap-2 text-[#CEFE00]">
            <Timer className="w-5 h-5 animate-pulse" />
            <span className="font-display font-black tracking-[0.1em] text-[15px] uppercase italic text-white">
              VA-<span className="text-[#CEFE00]">ATHLETIC</span>
            </span>
          </div>
          
          <p className="font-sans text-[13px] text-text-muted leading-relaxed text-left">
             Commencez à vous entraîner intelligemment dès aujourd'hui, en extérieur et entouré de personnes partageant la même philosophie que vous.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#CEFE00]/30 hover:bg-[#CEFE00]/5 flex items-center justify-center text-text-muted hover:text-[#CEFE00] transition-all duration-300"
              rel="noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#CEFE00]/30 hover:bg-[#CEFE00]/5 flex items-center justify-center text-text-muted hover:text-[#CEFE00] transition-all duration-400"
              rel="noreferrer"
            >
              <span className="font-sans font-bold text-[10px] tracking-tight">TikTok</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#CEFE00]/30 hover:bg-[#CEFE00]/5 flex items-center justify-center text-text-muted hover:text-[#CEFE00] transition-all duration-300"
              rel="noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="font-sans text-[11px] text-text-muted mt-8">
            Copyright © 2026 VA-Athletic. Tous droits réservés.
          </p>
        </div>

        {/* Right side Links in column fashion */}
        <div className="flex flex-col items-start gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-sans text-[13.5px] font-medium text-text-muted hover:text-[#CEFE00] transition-colors duration-300 text-left py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

      </div>
    </footer>
  );
}
