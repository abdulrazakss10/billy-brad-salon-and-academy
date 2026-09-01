'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionHeading from '@/components/common/SectionHeading';
import BranchSelector from '@/components/common/BranchSelector';
import CTAButton from '@/components/common/CTAButton';
import { CheckCircle2, User, BookOpen, Clock, FileText } from 'lucide-react';
import { COURSES } from '@/data/courses';
import { getAdmissionWhatsAppLink } from '@/data/business';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Loader from '@/components/common/Loader';

const STEPS = [
  { id: 1, label: 'Course' },
  { id: 2, label: 'Branch' },
  { id: 3, label: 'Personal' },
  { id: 4, label: 'Education' },
  { id: 5, label: 'Schedule' },
  { id: 6, label: 'Review' }
];

function AdmissionFormInner() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get('course') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    course: initialCourse,
    branch: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    education: '',
    batchPreference: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (step === 1 && !formData.course) newErrors.course = 'Please select a course';
    if (step === 2 && !formData.branch) newErrors.branch = 'Please select a preferred branch';
    if (step === 3) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
    }
    if (step === 4 && !formData.education) newErrors.education = 'Please select highest qualification';
    if (step === 5 && !formData.batchPreference) newErrors.batchPreference = 'Please select a batch timing';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  };

  const handleBack = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = () => {
    // No backend — send the application straight to WhatsApp.
    const courseName = COURSES.find(c => c.id === formData.course)?.name || formData.course;
    const link = getAdmissionWhatsAppLink({ ...formData, course: courseName });
    window.open(link, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-10 md:p-16 border border-[#e8e0d8] text-center shadow-lg">
        <div className="w-20 h-20 bg-[#f2e8e0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#c9a86c]">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Application Received
        </h2>
        <p className="text-[#5a5a5a] mb-8 leading-relaxed max-w-md mx-auto">
          Thank you for applying to Billy Brad Academy. We&rsquo;ve opened WhatsApp with your application details — just hit send there to complete it. Our admissions team will review it and contact you within 24-48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <WhatsAppButton
            href={getAdmissionWhatsAppLink({
              ...formData,
              course: COURSES.find(c => c.id === formData.course)?.name || formData.course,
            })}
            variant="solid"
            className="flex-1"
          />
          <CTAButton href="/" variant="outline" icon={false} className="flex-1">
            Return to Home
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Stepper */}
      <div className="flex items-center justify-between mb-12 relative overflow-hidden px-4 md:px-0">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#e8e0d8] -z-10 -translate-y-1/2"></div>
        {STEPS.map((s) => (
          <div key={s.id} className="flex flex-col items-center bg-[#faf8f5] px-1 md:px-2 z-10">
            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-colors ${
              step >= s.id ? 'bg-[#c9a86c] text-white' : 'bg-white border border-[#e8e0d8] text-[#9a9a9a]'
            }`}>
              {step > s.id ? <CheckCircle2 size={14} /> : s.id}
            </div>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-wider mt-2 font-semibold ${
              step >= s.id ? 'text-[#1a1a1a]' : 'text-[#9a9a9a]'
            } hidden sm:block`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Form Container */}
      <div className="bg-white p-6 md:p-12 border border-[#e8e0d8] shadow-sm">
        
        {/* STEP 1: Course */}
        {step === 1 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Select Program</h3>
            <div className="grid grid-cols-1 gap-4">
              {COURSES.map(c => (
                <label key={c.id} className={`flex items-start gap-4 p-5 border cursor-pointer transition-all ${formData.course === c.id ? 'border-[#c9a86c] bg-[#faf8f5]' : 'border-[#e8e0d8] hover:border-[#1a1a1a]'}`}>
                  <input 
                    type="radio" 
                    name="course" 
                    className="mt-1 accent-[#c9a86c]" 
                    checked={formData.course === c.id} 
                    onChange={() => updateForm('course', c.id)}
                  />
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-lg mb-1">{c.name}</div>
                    <div className="text-xs text-[#5a5a5a]">{c.duration}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.course && <p className="text-red-500 text-xs mt-2">{errors.course}</p>}
          </div>
        )}

        {/* STEP 2: Branch */}
        {step === 2 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Preferred Campus</h3>
            <BranchSelector 
              selectedBranch={formData.branch} 
              onSelect={(val) => updateForm('branch', val)} 
            />
            {errors.branch && <p className="text-red-500 text-xs mt-2">{errors.branch}</p>}
          </div>
        )}

        {/* STEP 3: Personal Info */}
        {step === 3 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Personal Details</h3>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.firstName}
                    onChange={(e) => updateForm('firstName', e.target.value)}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.lastName}
                    onChange={(e) => updateForm('lastName', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Date of Birth *</label>
                <input 
                  type="date" 
                  className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                  value={formData.dob}
                  onChange={(e) => updateForm('dob', e.target.value)}
                />
                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Education */}
        {step === 4 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Educational Background</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Highest Qualification *</label>
                <select 
                  className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none"
                  value={formData.education}
                  onChange={(e) => updateForm('education', e.target.value)}
                >
                  <option value="">Select Qualification</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate">Undergraduate Degree</option>
                  <option value="Postgraduate">Postgraduate Degree</option>
                  <option value="Other">Other</option>
                </select>
                {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
              </div>
              <p className="text-xs text-[#7a7a7a] bg-[#faf8f5] p-4 border border-[#e8e0d8]">
                Note: The minimum eligibility for our academy courses is 10th pass. No prior beauty industry experience is required.
              </p>
            </div>
          </div>
        )}

        {/* STEP 5: Schedule */}
        {step === 5 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Batch Preference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <label className={`p-4 border cursor-pointer transition-all flex flex-col items-center justify-center text-center gap-2 ${formData.batchPreference === 'Morning' ? 'border-[#c9a86c] bg-[#faf8f5]' : 'border-[#e8e0d8] hover:border-[#1a1a1a]'}`}>
                <input type="radio" name="batch" className="sr-only" checked={formData.batchPreference === 'Morning'} onChange={() => updateForm('batchPreference', 'Morning')} />
                <span className="font-bold text-[#1a1a1a]">Morning Batch</span>
                <span className="text-xs text-[#7a7a7a]">10:00 AM - 1:00 PM</span>
              </label>
              <label className={`p-4 border cursor-pointer transition-all flex flex-col items-center justify-center text-center gap-2 ${formData.batchPreference === 'Evening' ? 'border-[#c9a86c] bg-[#faf8f5]' : 'border-[#e8e0d8] hover:border-[#1a1a1a]'}`}>
                <input type="radio" name="batch" className="sr-only" checked={formData.batchPreference === 'Evening'} onChange={() => updateForm('batchPreference', 'Evening')} />
                <span className="font-bold text-[#1a1a1a]">Evening Batch</span>
                <span className="text-xs text-[#7a7a7a]">2:00 PM - 5:00 PM</span>
              </label>
            </div>
            {errors.batchPreference && <p className="text-red-500 text-xs mt-1 mb-4">{errors.batchPreference}</p>}
            
            <div>
              <label className="block text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] mb-2">Questions or Messages for Admissions Team</label>
              <textarea 
                rows={3}
                className="w-full bg-[#faf8f5] border border-[#e8e0d8] px-4 py-3 text-sm focus:border-[#c9a86c] outline-none resize-none"
                value={formData.message}
                onChange={(e) => updateForm('message', e.target.value)}
                placeholder="Any questions about fees, EMI options, syllabus, etc."
              />
            </div>
          </div>
        )}

        {/* STEP 6: Review */}
        {step === 6 && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">Review Application</h3>
            <div className="bg-[#faf8f5] border border-[#e8e0d8] overflow-hidden">
              <div className="p-4 border-b border-[#e8e0d8] bg-white flex items-center gap-2">
                <BookOpen size={16} className="text-[#c9a86c]"/>
                <span className="font-bold text-[#1a1a1a]">{COURSES.find(c => c.id === formData.course)?.name}</span>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7a7a7a] font-semibold mb-1">Campus</div>
                  <div className="font-medium text-[#1a1a1a] uppercase">{formData.branch}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7a7a7a] font-semibold mb-1">Applicant</div>
                  <div className="font-medium text-[#1a1a1a]">{formData.firstName} {formData.lastName}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7a7a7a] font-semibold mb-1">Contact</div>
                  <div className="font-medium text-[#1a1a1a]">{formData.phone} <br/> {formData.email}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7a7a7a] font-semibold mb-1">Background</div>
                  <div className="font-medium text-[#1a1a1a]">{formData.education}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7a7a7a] font-semibold mb-1">Batch</div>
                  <div className="font-medium text-[#1a1a1a]">{formData.batchPreference}</div>
                </div>
              </div>
            </div>
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
          
          {step < 6 ? (
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
              Submit Application
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default function AdmissionPage() {
  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Join the Academy"
          title="Admission Form"
          description="Take the first step towards your professional beauty career. Fill out the application form below."
        />
        <Suspense fallback={<Loader label="Preparing Form" />}>
          <AdmissionFormInner />
        </Suspense>
      </div>
    </div>
  );
}
