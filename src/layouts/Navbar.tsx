import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCandidatureClick: () => void;
}

export default function Navbar({ onCandidatureClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'À Propos', id: 'about-section', num: '01' },
    { label: 'Pour qui ?', id: 'credo-section', num: '02' },
    { label: 'Ma Méthode', id: 'methodology-section', num: '03' },
    { label: 'Tarifs', id: 'tariffs-section', num: '04' }
  ];

  return (
    <>
      <motion.nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0E0F11]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-[30px] flex items-center justify-between">
          {/* Left Side: Brand Identity matching the screenshot */}
          <a
            href="#"
            className="flex items-center group focus-visible:outline-none"
            aria-label="VA-Athletic Coaching Privé"
          >
            <span className="font-display tracking-tight text-[15px] xs:text-[17px] sm:text-[20px] font-black italic text-white uppercase select-none">
              VA-<span className="text-accent">ATHLETIC</span>
            </span>
          </a>

          {/* Center: Desktop Navigation Anchor Links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-display text-[12px] tracking-[0.12em] uppercase font-bold text-text-muted transition-colors duration-300 hover:text-accent cursor-pointer relative py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side: Elite Button & Hamburger Menu on mobile */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onCandidatureClick}
              className="relative p-3.5 sm:px-6 sm:py-3 rounded-[5px] text-[11px] tracking-[0.15em] uppercase font-display font-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(206,254,0,0.2)] select-none cursor-pointer bg-accent text-[#070708] flex items-center justify-center gap-2"
              aria-label="Contactez-moi"
            >
              <Mail className="w-4.5 h-4.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline-block">CONTACTEZ-MOI</span>
            </button>

            {/* Hamburger Button on mobile screens */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-[5px] text-white hover:text-accent hover:bg-white/5 transition-all duration-300 focus:outline-none cursor-pointer border border-white/10"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* High-Fidelity Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[72px] h-[calc(100vh-72px)] bg-[#070708]/98 backdrop-blur-lg z-35 md:hidden border-t border-white/5 flex flex-col justify-between py-12 px-[30px]"
          >
            {/* Nav links vertical list */}
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left font-display text-[20px] tracking-wide uppercase font-black text-white hover:text-accent transition-colors duration-200 py-3 block border-b border-white/5 flex items-baseline gap-4"
                  >
                    <span className="font-mono text-[11px] text-accent tracking-widest font-normal">{link.num}</span>
                    <span>{link.label}</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Quick Elite Brand details bottom drawer */}
            <div className="border-t border-white/10 pt-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-extrabold text-accent block mb-2">
                EXCELLENCE ATHLÉTIQUE
              </span>
              <p className="font-sans text-[12px] text-zinc-400 leading-relaxed max-w-xs">
                Performance sur mesure, biomécanique avancée et suivi d’élite.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
