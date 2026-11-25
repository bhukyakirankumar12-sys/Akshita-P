import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Eye } from 'lucide-react';
import { ABOUT_PAGE_DATA, ADVOCATE_BIO, SITE_CONFIG } from '../data/siteContent';
import { AdvocatePortraitCard } from '../components/AdvocatePortraitCard';
import { RevealSection } from '../components/RevealSection';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-950 py-16 text-ivory sm:py-20">
        <div className="editorial-container max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            About Chambers & Initiative
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ivory sm:text-5xl">
            About {SITE_CONFIG.brandName}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
            Understanding the dual commitment behind {SITE_CONFIG.advocateName}’s chambers at the{' '}
            {SITE_CONFIG.courtName} and her open legal education initiative.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="editorial-container grid gap-8 md:grid-cols-2">
          <div className="card-brass-top rounded-xl border border-borderWarm bg-white p-8 shadow-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 text-brass-light">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-navy-950">Our Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {ABOUT_PAGE_DATA.mission}
            </p>
          </div>

          <div className="card-brass-top rounded-xl border border-borderWarm bg-white p-8 shadow-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 text-brass-light">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-navy-950">Our Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {ABOUT_PAGE_DATA.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Counsel Profile */}
      <section className="bg-linen py-16 sm:py-20">
        <RevealSection className="editorial-container grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <AdvocatePortraitCard />
          </div>
          <div className="space-y-5 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
              Why VākLegal Was Built
            </p>
            <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              {ADVOCATE_BIO.heading}
            </h2>
            <div className="brass-rule" />
            <div className="space-y-4 pt-2 text-base leading-relaxed text-ink-muted">
              {ABOUT_PAGE_DATA.whyStarted.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {ADVOCATE_BIO.paragraphs.slice(0, 2).map((p, i) => (
                <p key={`bio-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Bridging Practice & Learning Table */}
      <section className="bg-ivory py-16 sm:py-20">
        <RevealSection className="editorial-container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
              Practical Clarity
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              Gaps VākLegal Addresses
            </h2>
            <div className="brass-rule mt-4" />
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-borderWarm bg-white shadow-card">
            <div className="grid border-b border-borderWarm bg-navy-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass-light sm:grid-cols-2">
              <div>Common Legal or Learning Challenge</div>
              <div className="mt-1 sm:mt-0">How VākLegal Responds</div>
            </div>
            <div className="divide-y divide-borderWarm">
              {ABOUT_PAGE_DATA.bridgeTable.map((row) => (
                <div key={row.challenge} className="grid gap-3 px-6 py-5 sm:grid-cols-2 sm:gap-8">
                  <p className="font-serif text-base font-medium text-navy-950">
                    {row.challenge}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">{row.approach}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Core Values */}
      <section className="bg-linen py-16 sm:py-20">
        <RevealSection className="editorial-container">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-ink">
                Ethos
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                Our Core Values
              </h2>
              <div className="brass-rule mt-4" />
            </div>
            <Link
              to="/practice"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass-ink hover:text-navy-950"
            >
              <span>View Practice & Initiatives</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_PAGE_DATA.coreValues.map((val) => (
              <div
                key={val.title}
                className="card-brass-top rounded-lg border border-borderWarm bg-white p-6 shadow-card"
              >
                <h3 className="font-serif text-xl font-semibold text-navy-950">{val.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>
    </div>
  );
};
