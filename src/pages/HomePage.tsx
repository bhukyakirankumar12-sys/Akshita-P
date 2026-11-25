import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Scale } from 'lucide-react';
import {
  HERO_CONTENT,
  ABOUT_INTRO,
  ADVOCATE_BIO,
  OFFERINGS,
  WHO_IT_IS_FOR,
  PILLARS,
  PRACTICE_INSIGHTS_TABS,
  SITE_CONFIG,
} from '../data/siteContent';
import {
  TelanganaCourtBackdrop,
  PracticeSceneIllustration,
} from '../components/EditorialIllustrations';
import { AdvocatePortraitCard } from '../components/AdvocatePortraitCard';
import { RevealSection } from '../components/RevealSection';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRACTICE_INSIGHTS_TABS[0].id);
  const currentTab =
    PRACTICE_INSIGHTS_TABS.find((t) => t.id === activeTab) || PRACTICE_INSIGHTS_TABS[0];

  return (
    <div>
      {/* 0. HERO BANNER — Midnight Navy + Heritage Telangana High Court Architecture */}
      <section className="relative overflow-hidden bg-navy-950 text-ivory">
        <TelanganaCourtBackdrop />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/75 to-navy-950" />

        <div className="editorial-container relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brass/35 bg-navy-900/75 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-light">
              <Scale className="h-3.5 w-3.5 text-brass" />
              <span>{HERO_CONTENT.eyebrow}</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-ivory sm:text-5xl lg:text-[3.5rem]">
              {HERO_CONTENT.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-brass-light"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-brass-light hover:bg-white/10"
              >
                <MapPin className="h-4 w-4 text-brass-light" />
                <span>{HERO_CONTENT.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Credentials Strip */}
          <div className="mt-14 grid grid-cols-1 gap-3 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {SITE_CONFIG.credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-2.5 text-xs text-ivory/75">
                <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                <span>{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. WHAT IS VĀKLEGAL? — 5fr / 7fr Editorial Sticky Split */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="editorial-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
                  {ABOUT_INTRO.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                  {ABOUT_INTRO.heading}
                </h2>
                <div className="brass-rule mt-5" />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <p className="font-serif text-xl leading-relaxed text-navy-950 sm:text-2xl">
                {ABOUT_INTRO.lead}
              </p>
              <div className="space-y-4 border-t border-borderWarm pt-6 text-base leading-relaxed text-ink-muted">
                {ABOUT_INTRO.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass-ink transition-colors hover:text-navy-950"
                >
                  <span>Read our mission, vision & philosophy</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET ADVOCATE AKSHITA PENDYEM — Muted Linen Section */}
      <section className="bg-linen py-20 sm:py-24">
        <RevealSection className="editorial-container">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <AdvocatePortraitCard />
            </div>

            <div className="space-y-5 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
                {ADVOCATE_BIO.eyebrow}
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-snug text-navy-950 sm:text-4xl">
                {ADVOCATE_BIO.heading}
              </h2>
              <div className="brass-rule" />

              <div className="space-y-4 pt-2 text-base leading-relaxed text-ink-muted">
                {ADVOCATE_BIO.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-6 rounded-r-lg border-l-2 border-brass bg-white/80 px-5 py-4 font-serif text-base italic text-navy-950 shadow-sm">
                “Clarity in law should never be an insider privilege. Whether before the Hon’ble
                High Court or across a seminar table, disciplined preparation makes justice more
                intelligible to everyone.”
              </blockquote>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* 3. PRACTICE FOCUS & INITIATIVES — 6 Editorial Cards with Custom Navy/Brass SVG Scenes */}
      <section className="bg-ivory py-20 sm:py-24">
        <RevealSection className="editorial-container">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
                Areas of Work & Guidance
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                Chambers Practice & Legal Initiatives
              </h2>
              <div className="brass-rule mt-4" />
            </div>
            <Link
              to="/practice"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass-ink hover:text-navy-950"
            >
              <span>Filter & explore all areas</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {OFFERINGS.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-xl border border-borderWarm bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/60 hover:shadow-editorial"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
                  <PracticeSceneIllustration sceneId={item.sceneId} />
                  {item.badge && (
                    <span className="absolute right-4 top-4 rounded-full border border-brass/40 bg-navy-950/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brass-light backdrop-blur-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brass-ink">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-borderWarm pt-4 text-xs text-ink">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brass-ink" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* 4. INTERACTIVE WORKFLOW SNAPSHOT — Rich Legal Feature */}
      <section className="bg-linen py-20 sm:py-24">
        <RevealSection className="editorial-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
              How We Approach Every Brief & Session
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              From High Court Dockets to Mediation Tables
            </h2>
            <div className="brass-rule mx-auto mt-4" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {PRACTICE_INSIGHTS_TABS.map((tab) => {
              const selected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all sm:text-sm ${
                    selected
                      ? 'bg-navy-950 text-ivory shadow-sm'
                      : 'border border-borderStrong bg-white text-ink-muted hover:border-brass hover:text-navy-950'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-borderWarm bg-white p-7 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-3 lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-ink">
                  {currentTab.eyebrow}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-navy-950 sm:text-3xl">
                  {currentTab.headline}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {currentTab.summary}
                </p>
              </div>
              <div className="space-y-3 rounded-lg border border-borderWarm bg-ivory p-6 lg:col-span-6">
                {currentTab.points.map((pt, i) => (
                  <div key={pt} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-950 font-serif text-xs font-semibold text-brass-light">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* 5. WHO VĀKLEGAL SERVES — 4 Brass-Topped Cards */}
      <section className="bg-ivory py-20 sm:py-24">
        <RevealSection className="editorial-container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
              Our Community & Readers
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              Who VākLegal Is Built For
            </h2>
            <div className="brass-rule mt-4" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_IT_IS_FOR.map((card) => (
              <div
                key={card.title}
                className="card-brass-top rounded-lg border border-borderWarm bg-white p-6 shadow-card transition-shadow hover:shadow-editorial"
              >
                <h3 className="font-serif text-xl font-semibold text-navy-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* 6. WHY VĀKLEGAL? — 4 Numbered Pillars (01–04) */}
      <section className="bg-linen py-20 sm:py-24">
        <RevealSection className="editorial-container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
              Guiding Standards
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              Four Pillars of Counsel & Clarity
            </h2>
            <div className="brass-rule mt-4" />
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-navy-950/25 pt-6">
                <span className="font-serif text-3xl font-semibold text-brass-ink">
                  {pillar.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* 7. CLOSING CHAMBER BANNER */}
      <section className="border-t-2 border-brass bg-navy-900 py-16 text-ivory sm:py-20">
        <div className="editorial-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
              Chambers · High Court for the State of Telangana
            </p>
            <h2 className="font-serif text-3xl font-semibold text-ivory sm:text-4xl">
              Clear legal guidance begins with a structured conversation.
            </h2>
            <p className="text-sm leading-relaxed text-ivory/75 sm:text-base">
              Reach out for informational chamber correspondence, workshop schedules, or academic
              sessions in Hyderabad.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-light"
            >
              <span>Chambers & Contact</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-brass-light hover:bg-white/5"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
