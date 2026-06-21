import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Loader2 } from 'lucide-react';
import { z } from 'zod';
import Input from '../ui/Input';

const emailSchema = z.string().nonempty({ message: 'Veuillez saisir une adresse email valide.' }).email({ message: 'Format email invalide.' });

export default function ApplicationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section
      id="candidature-form-section"
      className="relative bg-[#070708] py-28 sm:py-36 border-b border-border/80 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7, 7, 8, 0.45) 0%, rgba(7, 7, 8, 0.7) 100%), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop')`,
      }}
    >
      {/* Background glow overlay - lighter to let the image shine through clearly */}
      <div className="absolute inset-0 bg-[#070708]/30 backdrop-blur-[1px]" />

      <div className="w-full px-[30px] relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Headline in 2 lines */}
        <motion.h2
          className="font-display font-black text-[38px] sm:text-[56px] leading-[1.05] text-white uppercase italic tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Are You
          <br />
          <span className="text-accent">Waiting For?</span>
        </motion.h2>

        {/* Subtitle description */}
        <motion.p
          className="font-sans text-[14px] sm:text-[16px] text-[#B2B9C1] max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Commencez à vous entraîner intelligemment dès aujourd'hui, en extérieur et entouré de personnes
          partageant les mêmes aspirations. Les places sont limitées. Les inscriptions ferment lorsque tous les
          créneaux sont remplis.
        </motion.p>

        {/* Form Container */}
        <motion.div
          className="max-w-[550px] mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row gap-3 items-end">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    disabled={isSubmitting}
                    error={error}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent-light active:scale-[0.98] text-[#0A0A0A] font-sans font-bold text-[13px] px-6 py-3.5 rounded-[5px] cursor-pointer transition-all duration-300 shrink-0 flex items-center justify-center gap-2 font-black tracking-wide h-[48px] mb-[2px]"
                  >
                    {isSubmitting ? (
                      <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Traitement...
                      </>
                    ) : (
                      "Réserver ma place maintenant"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                className="bg-[#0F0F10] border border-accent/30 p-6 rounded-[5px] text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-black text-[18px] text-white uppercase italic tracking-wider mb-2">
                  PLACE RÉSERVÉE
                </h4>
                <p className="font-sans text-[13.5px] text-text-muted leading-relaxed">
                  Merci ! Votre adresse email a été enregistrée avec succès. Valentin prendra contact avec vous d'ici quelques heures pour valider votre place et préparer votre premier accompagnement.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 font-sans text-[11px] uppercase tracking-wider text-accent hover:underline cursor-pointer"
                >
                  S'inscrire avec un autre email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
