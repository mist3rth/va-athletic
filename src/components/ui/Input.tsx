import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2.5 w-full">
        {label && (
          <label className="font-sans font-medium text-[13px] text-white tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-[#0e0e0f]/80 border ${
            error ? 'border-red-500' : 'border-white/20'
          } hover:border-white/40 focus:border-accent text-white text-[14px] px-4 py-3.5 rounded-[5px] transition-all duration-300 flex-grow focus:outline-none ${className}`}
          {...props}
        />
        {error && (
          <p className="text-[12px] text-red-400 font-sans italic mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
