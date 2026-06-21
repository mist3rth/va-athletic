import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const isPrimary = variant === 'primary';

  const baseStyles =
    'font-display font-black text-[11px] tracking-[0.18em] uppercase cursor-pointer rounded-[5px] transition-all duration-300 flex items-center justify-center gap-3 select-none';

  const variantStyles = isPrimary
    ? 'px-8 py-4.5 bg-accent text-[#070708] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(206,254,0,0.3)]'
    : 'w-full py-4 bg-white text-black hover:bg-accent hover:scale-[1.01] hover:text-[#070708] shadow-md';

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
