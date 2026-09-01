export default function SectionHeading({ 
  subtitle, 
  title, 
  description, 
  alignment = 'center',
  light = false 
}) {
  return (
    <div className={`mb-12 md:mb-16 ${
      alignment === 'center' ? 'text-center mx-auto' : 'text-left'
    } max-w-2xl`}>
      {subtitle && (
        <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-3">
          {subtitle}
        </span>
      )}
      
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-[#1a1a1a]'
      }`} style={{ fontFamily: 'var(--font-playfair)' }}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-sm md:text-base leading-relaxed ${
          light ? 'text-[#e8e0d8]' : 'text-[#5a5a5a]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
