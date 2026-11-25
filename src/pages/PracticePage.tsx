import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Info } from 'lucide-react';
import { OFFERINGS } from '../data/siteContent';
import { PracticeSceneIllustration } from '../components/EditorialIllustrations';

const CATEGORIES = ['All', 'High Court Practice', 'ADR & Advisory', 'Mentorship & Education'] as const;

export const PracticePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const filtered =
    selectedCategory === 'All'
      ? OFFERINGS
      : OFFERINGS.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-950 py-16 text-ivory sm:py-20">
        <div className="editorial-container max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Chambers & Educational Scope
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ivory sm:text-5xl">
            Practice Areas & Initiatives
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
            An overview of Advocate Akshita Pendyem’s litigation and ADR work before the High Court
            for the State of Telangana, alongside applied legal workshops and mentorship.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-borderWarm pb-6">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                      active
                        ? 'bg-navy-950 text-ivory'
                        : 'border border-borderStrong bg-white text-ink-muted hover:border-brass hover:text-navy-950'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-ink-muted">
              Showing {filtered.length} of {OFFERINGS.length} areas
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-borderWarm bg-white shadow-card"
              >
                <div className="relative aspect-[16/10] w-full bg-navy-950">
                  <PracticeSceneIllustration sceneId={item.sceneId} />
                  {item.badge && (
                    <span className="absolute right-4 top-4 rounded-full border border-brass/40 bg-navy-950/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brass-light">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brass-ink">
                    {item.category}
                  </p>
                  <h2 className="mt-1.5 font-serif text-2xl font-semibold text-navy-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-borderWarm pt-4 text-xs text-ink sm:text-sm">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass-ink" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Informational Note */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-borderWarm bg-linen p-7 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3.5">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-ink" />
              <div className="text-sm leading-relaxed text-ink-muted">
                <span className="font-semibold text-navy-950">Informational Note:</span> Practice
                descriptions above are strictly factual overviews of areas handled in chambers and
                academic sessions, in compliance with Bar Council of India rules.
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-navy-950 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-800"
            >
              <span>Chamber Correspondence</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
