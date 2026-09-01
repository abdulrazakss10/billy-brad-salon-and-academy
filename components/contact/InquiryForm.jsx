'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { getContactWhatsAppLink } from '@/data/business';

export default function InquiryForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // No backend — send the inquiry straight to WhatsApp.
    const link = getContactWhatsAppLink(formData);
    window.open(link, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-[#f2e8e0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#c9a86c]">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
          Inquiry Sent to WhatsApp
        </h3>
        <p className="text-[#5a5a5a] mb-8 leading-relaxed max-w-md mx-auto">
          We&rsquo;ve opened WhatsApp with your message pre-filled — just hit send there and our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({ name: '', phone: '', email: '', message: '' });
            setSent(false);
          }}
          className="px-8 py-3 border border-[#c9a86c] text-[#c9a86c] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] hover:text-white transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Name</label>
          <input
            type="text"
            className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none transition-colors"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Phone</label>
          <input
            type="tel"
            className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none transition-colors"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Email (Optional)</label>
        <input
          type="email"
          className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none transition-colors"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Message</label>
        <textarea
          rows={4}
          className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none transition-colors resize-none"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1a1a1a] text-white py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] transition-colors"
      >
        Send Message
      </button>
      <p className="text-[10px] text-center text-[#9a9a9a] uppercase tracking-wider mt-4">
        * Sent directly to us via WhatsApp for the fastest response.
      </p>
    </form>
  );
}
