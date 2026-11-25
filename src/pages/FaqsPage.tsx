import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CATEGORIES } from '../data/siteContent';

export const FaqsPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({
    chambers: 0,
  });

  const toggleItem = (catId: string, idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [catId]: prev[catId] === idx ? null : idx,
    }));
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-950 py-16 text-ivory sm:py-20">
        <div className="editorial-container max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Frequently Asked Questions
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ivory sm:text-5xl">
            Answers & Guidance
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
            Clear answers regarding Advocate Akshita Pendyem’s chambers at the Telangana High Court,
            ADR orientation, educational workshops, and statutory compliance.
          </p>

          {/* Category Jump Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-ivory/90 transition-colors hover:border-brass-light hover:text-brass-light"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="editorial-container max-w-4xl space-y-14">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <h2 className="font-serif text-2xl font-semibold text-navy-950 sm:text-3xl">
                {cat.title}
              </h2>
              <div className="brass-rule mt-3" />

              <div className="mt-6 space-y-3">
                {cat.items.map((item, idx) => {
                  const isOpen = openItems[cat.id] === idx;
                  return (
                    <div
                      key={item.question}
                      className="overflow-hidden rounded-xl border border-borderWarm bg-white shadow-sm transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(cat.id, idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ivory/60"
                      >
                        <span className="font-serif text-lg font-medium text-navy-950">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-brass-ink transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-borderWarm bg-ivory/40 px-6 py-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
