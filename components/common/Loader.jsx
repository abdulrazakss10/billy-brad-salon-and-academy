export default function Loader({ label = 'Loading', fullScreen = false, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        fullScreen ? 'min-h-[60vh]' : 'py-16'
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative w-14 h-14">
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-2 border-[#e8e0d8]" />
        {/* Spinning gold arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#c9a86c] border-r-[#c9a86c] animate-spin" />
        {/* Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[11px] font-bold tracking-wide text-[#c9a86c]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            BB
          </span>
        </div>
      </div>
      {label && (
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#7a7a7a]">
          {label}
        </span>
      )}
      <span className="sr-only">Loading…</span>
    </div>
  );
}
