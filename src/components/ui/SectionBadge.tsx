import { motion } from 'motion/react';

interface SectionBadgeProps {
  label: string;
}

export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-1.5 mb-6"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="w-2 h-2 bg-accent inline-block shrink-0" />
      <span className="font-sans text-[12px] uppercase tracking-[0.2em] font-extrabold text-accent">
        {label}
      </span>
    </motion.div>
  );
}
