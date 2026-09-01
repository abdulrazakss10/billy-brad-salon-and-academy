import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS, getWhatsAppLink, getTelLink } from '@/data/business';
import { BRANCHES } from '@/data/branches';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                Billy Brad
              </div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#c9a86c] mt-1">
                Salon & Academy
              </div>
            </div>
            <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6">
              {BUSINESS.tagline}
            </p>
            <p className="text-[#9a9a9a] text-xs leading-relaxed mb-6">
              {BUSINESS.salonPositioning}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#3a3a3a] flex items-center justify-center text-[#9a9a9a] hover:border-[#c9a86c] hover:text-[#c9a86c] transition-colors"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href={BUSINESS.social.instagramThuckalay}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#3a3a3a] flex items-center justify-center text-[#9a9a9a] hover:border-[#c9a86c] hover:text-[#c9a86c] transition-colors"
                aria-label="Instagram Thuckalay"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={BUSINESS.social.instagramNagercoil}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#3a3a3a] flex items-center justify-center text-[#9a9a9a] hover:border-[#c9a86c] hover:text-[#c9a86c] transition-colors"
                aria-label="Instagram Nagercoil"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#3a3a3a] flex items-center justify-center text-[#9a9a9a] hover:border-[#c9a86c] hover:text-[#c9a86c] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Academy', href: '/academy' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Offers', href: '/offers' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact', href: '/contact' },
                { label: 'Book Appointment', href: '/book-appointment' },
                { label: 'Academy Admission', href: '/admission' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9a9a9a] text-xs hover:text-[#c9a86c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Hair Services', href: '/services/hair' },
                { label: 'Hair Spa', href: '/services/hair-spa' },
                { label: 'Hair Color', href: '/services/color' },
                { label: 'Skin & Facial', href: '/services/skin' },
                { label: 'Makeup', href: '/services/makeup' },
                { label: 'Bridal', href: '/services/bridal' },
                { label: 'Nail Care', href: '/services/nails' },
                { label: 'Groom', href: '/services/groom' },
                { label: 'Kids', href: '/services/kids' },
                { label: 'Head Massage', href: '/services/massage' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9a9a9a] text-xs hover:text-[#c9a86c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Branches */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              {BRANCHES.map((branch) => (
                <div key={branch.id} className="">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white font-semibold mb-1.5">
                    {branch.name}
                  </p>
                  <div className="flex gap-2">
                    <MapPin size={12} className="text-[#c9a86c] flex-shrink-0 mt-0.5" />
                    <p className="text-[#9a9a9a] text-xs leading-relaxed">
                      {branch.addressSingle}
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href={getTelLink(BUSINESS.contact.phone)}
                  className="flex items-center gap-2 text-[#9a9a9a] text-xs hover:text-[#c9a86c] transition-colors"
                >
                  <Phone size={12} className="text-[#c9a86c]" />
                  {BUSINESS.contact.phoneFormatted}
                </a>
                <a
                  href={`mailto:${BUSINESS.contact.email}`}
                  className="flex items-center gap-2 text-[#9a9a9a] text-xs hover:text-[#c9a86c] transition-colors"
                >
                  <Mail size={12} className="text-[#c9a86c]" />
                  {BUSINESS.contact.email}
                </a>
                <div className="flex items-center gap-2 text-[#9a9a9a] text-xs">
                  <Clock size={12} className="text-[#c9a86c]" />
                  {BUSINESS.hours.display}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5a5a5a] text-[11px] tracking-wide">
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#5a5a5a] text-[10px] tracking-wider uppercase hover:text-[#c9a86c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[#5a5a5a] text-[10px] tracking-wider uppercase hover:text-[#c9a86c] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
