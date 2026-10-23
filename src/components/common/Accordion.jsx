import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible FAQ Accordion Item
 */
export function AccordionItem({
  id,
  question,
  answer,
  isOpenDefault = false,
  onToggle = null,
  isOpenControlled = null,
}) {
  const [internalOpen, setInternalOpen] = useState(isOpenDefault);
  const isExpanded = isOpenControlled !== null ? isOpenControlled : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="border-b border-[#293046]/80 last:border-b-0 transition-colors">
      <button
        type="button"
        id={`faq-btn-${id}`}
        aria-expanded={isExpanded}
        aria-controls={`faq-content-${id}`}
        onClick={handleToggle}
        className="w-full py-5 px-1 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9BD88] rounded-lg"
      >
        <span className="text-base sm:text-lg font-medium text-[#FFF5E7] group-hover:text-[#D9BD88] transition-colors leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-[#293046] flex items-center justify-center text-[#D9BD88] transition-transform duration-300 ${
            isExpanded ? 'rotate-180 bg-[#D9BD88]/10 border-[#D9BD88]/40' : 'bg-transparent'
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <div
        id={`faq-content-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 pb-5 pt-1' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <p className="text-sm sm:text-base text-[#FFF5E7]/75 leading-relaxed pr-6">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function AccordionGroup({ items = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`divide-y divide-[#293046]/60 rounded-2xl bg-[#151926]/50 border border-[#293046] p-4 sm:p-6 backdrop-blur-md ${className}`}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={idx}
          question={item.question}
          answer={item.answer}
          isOpenControlled={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}
