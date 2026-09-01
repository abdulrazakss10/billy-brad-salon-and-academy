import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CTAButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  className,
  type = 'button',
  fullWidth = false,
  icon = true
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-[#c9a86c]",
    secondary: "bg-transparent border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
    outline: "bg-transparent border border-[#c9a86c] text-[#c9a86c] hover:bg-[#c9a86c] hover:text-white",
    white: "bg-white text-[#1a1a1a] hover:bg-[#c9a86c] hover:text-white",
    whiteOutline: "bg-transparent border border-white text-white hover:bg-white hover:text-[#1a1a1a]"
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const inner = (
    <>
      {children}
      {icon && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    // External links (maps, other domains) and special protocols (tel:, mailto:)
    // must use a plain <a> tag — Next.js <Link> is only for internal routes.
    // External http(s) links open in a new tab so we never navigate the user
    // away from the site itself.
    const isExternal = /^https?:\/\//i.test(href);
    const isSpecialProtocol = /^(tel:|mailto:|sms:)/i.test(href);

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cn(classes, "group")}>
          {inner}
        </a>
      );
    }

    if (isSpecialProtocol) {
      return (
        <a href={href} className={cn(classes, "group")}>
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={cn(classes, "group")}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {inner}
    </button>
  );
}
