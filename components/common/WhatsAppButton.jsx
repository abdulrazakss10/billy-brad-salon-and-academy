import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/business';

export default function WhatsAppButton({ message, href: hrefProp, className, variant = 'solid' }) {
  // If a fully-built wa.me link is passed via `href`, use it directly.
  // Otherwise treat `message` as plain text to encode into a new wa.me link.
  const href = hrefProp || (message ? getWhatsAppLink(message) : getWhatsAppLink());
  
  if (variant === 'outline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-[11px] tracking-wider uppercase font-semibold ${className}`}
      >
        <MessageCircle size={16} />
        WhatsApp Us
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors text-[11px] tracking-wider uppercase font-semibold ${className}`}
    >
      <MessageCircle size={16} />
      WhatsApp Us
    </a>
  );
}
