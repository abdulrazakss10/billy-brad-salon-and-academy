'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS, getWhatsAppLink, getTelLink } from '@/data/business';

const MOBILE_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Hair', href: '/services/hair', sub: true },
  { label: 'Skin & Facial', href: '/services/skin', sub: true },
  { label: 'Makeup', href: '/services/makeup', sub: true },
  { label: 'Bridal', href: '/services/bridal', sub: true },
  { label: 'Groom', href: '/services/groom', sub: true },
  { label: 'Kids', href: '/services/kids', sub: true },
  { label: 'Academy', href: '/academy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Offers', href: '/offers' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#faf8f5] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e0d8]">
          <div>
            <div className="font-display text-xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Billy Brad
            </div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-[#c9a86c]">Salon & Academy</div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7a7a7a] hover:text-[#1a1a1a] transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4">
          {MOBILE_NAV.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-6 py-3.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors hover:bg-[#f2ede6] hover:text-[#c9a86c] ${
                item.sub ? 'pl-10 text-[#7a7a7a] text-[10px]' : 'text-[#1a1a1a]'
              }`}
            >
              {item.label}
              {!item.sub && <ChevronRight size={14} className="text-[#c9a86c]" />}
            </Link>
          ))}
        </nav>

        {/* Footer CTAs */}
        <div className="p-6 border-t border-[#e8e0d8] space-y-3">
          <Link
            href="/book-appointment"
            onClick={onClose}
            className="block w-full text-center py-3.5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#c9a86c] transition-colors"
          >
            Book Appointment
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 border border-[#c9a86c] text-[#c9a86c] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] hover:text-white transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href={getTelLink(BUSINESS.contact.phone)}
            className="flex items-center justify-center gap-2 text-[11px] text-[#7a7a7a] py-2"
          >
            <Phone size={14} />
            {BUSINESS.contact.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
