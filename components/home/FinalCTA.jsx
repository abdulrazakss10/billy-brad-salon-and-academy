import ScrollReveal from '../common/ScrollReveal';
import CTAButton from '../common/CTAButton';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] text-white text-center border-t border-[#3a3a3a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready for your transformation?
          </h2>
          <p className="text-[#9a9a9a] text-base md:text-lg mb-10 max-w-xl mx-auto">
            Book your appointment today at our Thuckalay or Nagercoil branch and experience premium beauty care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/book-appointment" variant="primary" className="bg-[#c9a86c] text-[#1a1a1a] hover:bg-white border-none">
              Book Appointment
            </CTAButton>
            <CTAButton href="/contact" variant="whiteOutline" icon={false}>
              Contact Us
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
