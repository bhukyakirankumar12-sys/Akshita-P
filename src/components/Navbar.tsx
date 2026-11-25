import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenNotice: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice & Initiatives', to: '/practice' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenNotice }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-borderWarm bg-ivory/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-ivory'
      }`}
    >
      <div className="editorial-container flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="VākLegal Home" className="focus:outline-none">
          <BrandLogo variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-navy-950'
                    : 'text-ink-muted hover:text-navy-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-brass" />
                )}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={onOpenNotice}
            className="inline-flex items-center gap-1.5 rounded-full border border-borderStrong bg-white px-3.5 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-brass hover:bg-brass-pale"
            title="View Bar Council of India Informational Notice"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brass-ink" />
            <span>BCI Notice</span>
          </button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-borderWarm bg-white text-navy-950 transition-colors hover:border-brass lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-borderWarm bg-ivory px-5 pb-6 pt-3 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-l-2 border-brass bg-linen text-navy-950'
                      : 'text-ink-muted hover:bg-linen/60 hover:text-navy-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenNotice();
              }}
              className="mt-3 flex items-center justify-center gap-2 rounded-md border border-borderStrong bg-white px-4 py-2.5 text-xs font-medium text-navy-950"
            >
              <ShieldCheck className="h-4 w-4 text-brass-ink" />
              <span>View BCI Informational Notice</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
