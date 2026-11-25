import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Scale } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG } from '../data/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-brass bg-navy-950 text-ivory">
      <div className="editorial-container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & Chambers Intro */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="light" />
            <p className="max-w-md text-sm leading-relaxed text-ivory/75">
              Legal practice chambers and structured legal clarity initiative led by{' '}
              <span className="font-medium text-ivory">{SITE_CONFIG.advocateName}</span>,
              practising before the {SITE_CONFIG.courtName}.
            </p>
            <div className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-ivory/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
              <div>
                <p className="font-medium text-ivory/90">{SITE_CONFIG.chamberAddress.line2}</p>
                <p>{SITE_CONFIG.chamberAddress.line3}</p>
                <p>{SITE_CONFIG.chamberAddress.cityStatePin}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ivory/70">
              <Clock className="h-4 w-4 flex-shrink-0 text-brass" />
              <span>{SITE_CONFIG.contact.hours}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brass-light">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/75">
              <li>
                <Link to="/" className="transition-colors hover:text-ivory">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-ivory">
                  About Chambers & Counsel
                </Link>
              </li>
              <li>
                <Link to="/practice" className="transition-colors hover:text-ivory">
                  Practice & Initiatives
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="transition-colors hover:text-ivory">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-ivory">
                  Chambers & Correspondence
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brass-light">
              Compliance & Governance
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/75">
              <li>
                <Link to="/disclaimer" className="transition-colors hover:text-ivory">
                  Disclaimer & BCI Rule 36 Notice
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-ivory">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-4 rounded-lg border border-white/10 bg-navy-900/70 p-4 text-xs leading-relaxed text-ivory/70">
              <div className="mb-1.5 flex items-center gap-1.5 font-medium text-brass-light">
                <Scale className="h-3.5 w-3.5" />
                <span>Bar Council Compliance</span>
              </div>
              This platform is strictly informational and educational. It does not constitute
              advertisement, solicitation, or legal advice.
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName} · {SITE_CONFIG.advocateName}. All
            rights reserved.
          </p>
          <p>
            High Court for the State of Telangana · Informational & Educational Resource Only
          </p>
        </div>
      </div>
    </footer>
  );
};
