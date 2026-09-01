'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { BRANCHES } from '@/data/branches';

export default function BranchSelector({ selectedBranch, onSelect, className = '' }) {
  const [active, setActive] = useState(selectedBranch || BRANCHES[0].id);

  useEffect(() => {
    if (selectedBranch) {
      setActive(selectedBranch);
    }
  }, [selectedBranch]);

  const handleSelect = (id) => {
    setActive(id);
    if (onSelect) {
      onSelect(id);
    }
    // Save preference to localStorage
    try {
      localStorage.setItem('preferredBranch', id);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  // Try to load preferred branch on mount if not provided
  useEffect(() => {
    if (!selectedBranch) {
      try {
        const saved = localStorage.getItem('preferredBranch');
        if (saved && BRANCHES.some(b => b.id === saved)) {
          setActive(saved);
          if (onSelect) onSelect(saved);
        }
      } catch (e) {
        // Ignore
      }
    }
  }, [selectedBranch, onSelect]);

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {BRANCHES.map((branch) => (
        <button
          key={branch.id}
          type="button"
          onClick={() => handleSelect(branch.id)}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 border transition-all duration-300 ${
            active === branch.id
              ? 'border-[#c9a86c] bg-[#faf8f5] text-[#1a1a1a]'
              : 'border-[#e8e0d8] bg-white text-[#7a7a7a] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
          }`}
        >
          <MapPin size={16} className={active === branch.id ? 'text-[#c9a86c]' : ''} />
          <span className="text-[11px] tracking-[0.15em] uppercase font-semibold">
            {branch.name}
          </span>
        </button>
      ))}
    </div>
  );
}
