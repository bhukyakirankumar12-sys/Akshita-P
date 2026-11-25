import React from 'react';
import { TERMS_CLAUSES, DISCLAIMER_CLAUSES, LegalClause } from '../data/siteContent';

interface LegalDocumentLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  clauses: LegalClause[];
}

const LegalDocumentLayout: React.FC<LegalDocumentLayoutProps> = ({
  eyebrow,
  title,
  subtitle,
  clauses,
}) => (
  <div>
    <section className="bg-navy-950 py-16 text-ivory sm:py-20">
      <div className="editorial-container max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ivory sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">{subtitle}</p>
      </div>
    </section>

    <section className="bg-ivory py-16 sm:py-20">
      <div className="editorial-container grid gap-10 lg:grid-cols-12">
        {/* Sticky Table of Contents */}
        <aside className="lg:col-span-4">
          <div className="rounded-xl border border-borderWarm bg-white p-6 shadow-card lg:sticky lg:top-28">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-ink">
              On This Page
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {clauses.map((clause) => (
                <li key={clause.id}>
                  <a
                    href={`#${clause.id}`}
                    className="block text-ink-muted transition-colors hover:text-navy-950"
                  >
                    {clause.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Clauses */}
        <div className="space-y-8 lg:col-span-8">
          {clauses.map((clause) => (
            <article
              key={clause.id}
              id={clause.id}
              className="scroll-mt-28 rounded-xl border border-borderWarm bg-white p-7 shadow-card"
            >
              <h2 className="font-serif text-2xl font-semibold text-navy-950">{clause.title}</h2>
              <div className="brass-rule mt-3" />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {clause.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const TermsPage: React.FC = () => (
  <LegalDocumentLayout
    eyebrow="Governance & Usage"
    title="Terms & Conditions"
    subtitle="Governing access to VākLegal chambers information, academic workshops, and published materials under Indian law."
    clauses={TERMS_CLAUSES}
  />
);

export const DisclaimerPage: React.FC = () => (
  <LegalDocumentLayout
    eyebrow="Bar Council of India Compliance"
    title="Legal Disclaimer"
    subtitle="Issued in compliance with the Advocates Act, 1961 and Rule 36 of the Bar Council of India Rules."
    clauses={DISCLAIMER_CLAUSES}
  />
);
