'use client';

import { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import BranchSelector from '@/components/common/BranchSelector';
import CTAButton from '@/components/common/CTAButton';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { getBookingWhatsAppLink } from '@/data/business';
import { CheckCircle2, Calendar as CalendarIcon, Clock, Scissors } from 'lucide-react';
import { SERVICES } from '@/data/services';

const STEPS = [
  { id: 1, label: 'Branch' },
  { id: 2, label: 'Service' },
  { id: 3, label: 'Date & Time' },
  { id: 4, label: 'Details' },
  { id: 5, label: 'Review' }
];

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    branch: '',
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (step === 1 && !formData.branch) newErrors.branch = 'Please select a branch';
    if (step === 2 && !formData.service) newErrors.service = 'Please select a service';
    if (step === 3) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.time) newErrors.time = 'Please select a preferred time';
    }
    if (step === 4) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  };

  const handleBack = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = () => {
    // No backend — send the appointment request straight to WhatsApp.
    const link = getBookingWhatsAppLink(formData);
    window.open(link, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-[#faf8f5] min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 md:p-16 border border-[#e8e0d8] max-w-xl w-full text-center shadow-lg">
          <div className="w-20 h-20 bg-[#f2e8e0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#c9a86c]">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Appointment Request Received
          </h2>
          <p className="text-[#5a5a5a] mb-8 leading-relaxed">
            Thank you, {formData.name}. We&rsquo;ve opened WhatsApp with your appointment request for {formData.service} at our {formData.branch} branch — just hit send there to confirm. Our team will get back to you shortly.
          </p>
          <div className="space-y-4">
            <WhatsAppButton 
              href={getBookingWhatsAppLink(formData)} 
              variant="solid" 
              className="w-full"
            />
            <CTAButton href="/" variant="outline" fullWidth icon={false}>
              Return to Home
            </CTAButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Book Online"
          title="Reserve Your Time"
          description="Select your preferred branch, service, and time. We'll make sure you look your best."
        />

        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#e8e0d8] -z-10 -translate-y-1/2"></div>
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center bg-[#faf8f5] px-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s.id ? 'bg-[#c9a86c] text-white' : 'bg-white border border-[#e8e0d8] text-[#9a9a9a]'
              }`}>
                {step > s.id ? <CheckCircle2 size={16} /> : s.id}
              </div>
              <span className={`text-[9px] uppercase tracking-wider mt-2 font-semibold ${
                step >= s.id ? 'text-[#1a1a1a]' : 'text-[#9a9a9a]'
              } hidden sm:block`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 border border-[#e8e0d8] shadow-sm">
          
          {/* STEP 1: Branch */}
          {step === 1 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">1. Choose Branch</h3>
              <BranchSelector 
                selectedBranch={formData.branch} 
                onSelect={(val) => updateForm('branch', val)} 
              />
              {errors.branch && <p className="text-red-500 text-xs mt-2">{errors.branch}</p>}
            </div>
          )}

          {/* STEP 2: Service */}
          {step === 2 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">2. Select Service</h3>
              <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2">
                <select 
                  className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-4 text-sm focus:border-[#c9a86c] outline-none transition-colors"
                  value={formData.service}
                  onChange={(e) => updateForm('service', e.target.value)}
                >
                  <option value="">-- Select a primary service --</option>
                  {SERVICES.filter(s => s.featured).map(s => (
                    <option key={s.id} value={s.name}>{s.name} ({s.category.replace('-', ' ')})</option>
                  ))}
                  <option value="Other Hair Service">Other Hair Service</option>
                  <option value="Other Skin Service">Other Skin Service</option>
                  <option value="Bridal / Pre-Bridal">Bridal / Pre-Bridal</option>
                </select>
                <p className="text-xs text-[#7a7a7a] mt-2">
                  * For a full list of specific variants or packages, please browse our <a href="/services" target="_blank" className="text-[#c9a86c] hover:underline">Services Catalogue</a>. You can specify exact needs in the Details step.
                </p>
              </div>
              {errors.service && <p className="text-red-500 text-xs mt-2">{errors.service}</p>}
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">3. Preferred Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2 flex items-center gap-2">
                    <CalendarIcon size={14} /> Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.date}
                    onChange={(e) => updateForm('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-2">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2 flex items-center gap-2">
                    <Clock size={14} /> Time
                  </label>
                  <select 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.time}
                    onChange={(e) => updateForm('time', e.target.value)}
                  >
                    <option value="">Select Time</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-2">{errors.time}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Details */}
          {step === 4 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">4. Your Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    placeholder="Your contact number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7a7a7a] mb-2">Additional Notes (Optional)</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => updateForm('message', e.target.value)}
                    placeholder="Specific requests, stylist preference, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Review */}
          {step === 5 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">5. Review Request</h3>
              <div className="bg-[#faf8f5] p-6 space-y-4 text-sm border border-[#e8e0d8]">
                <div className="flex justify-between border-b border-[#e8e0d8] pb-2">
                  <span className="text-[#7a7a7a] uppercase text-[10px] tracking-wider font-semibold">Branch</span>
                  <span className="font-bold text-[#1a1a1a] uppercase">{formData.branch}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e0d8] pb-2">
                  <span className="text-[#7a7a7a] uppercase text-[10px] tracking-wider font-semibold">Service</span>
                  <span className="font-bold text-[#1a1a1a]">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e0d8] pb-2">
                  <span className="text-[#7a7a7a] uppercase text-[10px] tracking-wider font-semibold">Schedule</span>
                  <span className="font-bold text-[#1a1a1a] text-right">{formData.date} <br/> {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e0d8] pb-2">
                  <span className="text-[#7a7a7a] uppercase text-[10px] tracking-wider font-semibold">Name</span>
                  <span className="font-bold text-[#1a1a1a]">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a7a] uppercase text-[10px] tracking-wider font-semibold">Phone</span>
                  <span className="font-bold text-[#1a1a1a]">{formData.phone}</span>
                </div>
              </div>
              <p className="text-[10px] tracking-wider text-center text-[#7a7a7a] uppercase mt-6">
                * By submitting, you request an appointment. Our team will contact you to confirm.
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="mt-10 pt-6 border-t border-[#e8e0d8] flex items-center justify-between">
            {step > 1 ? (
              <button 
                onClick={handleBack}
                className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7a7a7a] hover:text-[#1a1a1a] transition-colors"
              >
                Back
              </button>
            ) : <div></div>}
            
            {step < 5 ? (
              <button 
                onClick={handleNext}
                className="px-8 py-3 bg-[#1a1a1a] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 bg-[#c9a86c] text-[#1a1a1a] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Confirm Request
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
