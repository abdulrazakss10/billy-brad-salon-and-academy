'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { BUSINESS, getTelLink } from '@/data/business';
import MobileMenu from './MobileMenu';

const SERVICE_DROPDOWN = [
  { label: 'Hair', href: '/services/hair' },
  { label: 'Skin & Facial', href: '/services/skin' },
  { label: 'Makeup', href: '/services/makeup' },
  { label: 'Nail Care', href: '/services/nails' },
  { label: 'Groom', href: '/services/groom' },
  { label: 'Bridal', href: '/services/bridal' },
  { label: 'Kids', href: '/services/kids' },
  { label: 'Hair Spa', href: '/services/hair-spa' },
  { label: 'Color', href: '/services/color' },
  { label: 'Waxing', href: '/services/waxing' },
  { label: 'Threading', href: '/services/threading' },
  { label: 'Head Massage', href: '/services/massage' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Academy', href: '/academy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm border-b border-[#e8e0d8]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex flex-col">
                <span
                  className="font-display text-xl lg:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-none"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Billy Brad
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-medium mt-0.5">
                  Salon & Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium text-[#3a3a3a] hover:text-[#c9a86c] transition-colors duration-200"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white border border-[#e8e0d8] shadow-xl rounded-sm py-2 z-50">
                        <div className="grid grid-cols-2 gap-0">
                          {SERVICE_DROPDOWN.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-[11px] tracking-wider uppercase text-[#3a3a3a] hover:bg-[#faf8f5] hover:text-[#c9a86c] transition-colors duration-150"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-[#e8e0d8] mt-2 pt-2 px-4">
                          <Link
                            href="/services"
                            className="text-[10px] tracking-wider uppercase text-[#c9a86c] font-semibold hover:underline"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 link-underline ${
                      pathname === link.href
                        ? 'text-[#c9a86c]'
                        : 'text-[#3a3a3a] hover:text-[#c9a86c]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right side CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={getTelLink(BUSINESS.contact.phone)}
                className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-[#7a7a7a] hover:text-[#c9a86c] transition-colors"
              >
                <Phone size={13} />
                {BUSINESS.contact.phoneFormatted}
              </a>
              <Link
                href="/book-appointment"
                className="px-5 py-2.5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] transition-colors duration-300"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#1a1a1a]"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
