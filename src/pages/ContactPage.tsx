import React, { useState } from 'react';
import { MapPin, Clock, Mail, Phone, Copy, Check, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'Chamber Appointment',
    message: '',
    acknowledged: false,
  });

  const fullAddress = `${SITE_CONFIG.chamberAddress.line1}, ${SITE_CONFIG.chamberAddress.line2}, ${SITE_CONFIG.chamberAddress.line3}, ${SITE_CONFIG.chamberAddress.cityStatePin}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored in restricted contexts
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.acknowledged) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-950 py-16 text-ivory sm:py-20">
        <div className="editorial-container max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
            Chambers & Correspondence
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-ivory sm:text-5xl">
            Chambers Location & Enquiries
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
            For scheduling informational chamber meetings, academic workshops, or mentorship
            enquiries with {SITE_CONFIG.advocateName}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="editorial-container grid gap-10 lg:grid-cols-12">
          {/* Left: Chamber Details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="card-brass-top rounded-xl border border-borderWarm bg-white p-7 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-ink">
                    High Court Chambers
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-navy-950">
                    {SITE_CONFIG.advocateName}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 rounded-md border border-borderWarm bg-ivory px-3 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-brass"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-brass-ink" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm text-ink-muted">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-ink" />
                  <div className="leading-relaxed">
                    <p className="font-medium text-navy-950">{SITE_CONFIG.chamberAddress.line2}</p>
                    <p>{SITE_CONFIG.chamberAddress.line3}</p>
                    <p>{SITE_CONFIG.chamberAddress.cityStatePin}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-ink" />
                  <p>{SITE_CONFIG.contact.hours}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-ink" />
                  <p>{SITE_CONFIG.contact.email}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-ink" />
                  <p>{SITE_CONFIG.contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Landmark Visual Card */}
            <div className="rounded-xl border border-borderWarm bg-navy-950 p-7 text-ivory shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-light">
                Judicial Precinct · Hyderabad
              </p>
              <h3 className="mt-1.5 font-serif text-xl font-semibold">
                High Court for the State of Telangana
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ivory/75">
                Located along the historic Musi Riverfront on High Court Road, Ghansi Bazaar
                (PIN 500066), accessible via Nayapul & Madina Circle.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-xs text-ivory/80">
                <AlertCircle className="h-4 w-4 flex-shrink-0 text-brass" />
                <span>
                  Please refrain from transmitting privileged or confidential case files before a
                  formal chamber confirmation.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Correspondence Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-borderWarm bg-white p-7 shadow-card sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-ink">
                Written Correspondence
              </p>
              <h2 className="mt-1.5 font-serif text-2xl font-semibold text-navy-950 sm:text-3xl">
                Send a Chamber Enquiry
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Share brief, non-confidential contact details and the nature of your enquiry.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-brass/40 bg-brass-pale/60 p-7 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-brass-ink" />
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-950">
                    Correspondence Recorded
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                    Thank you, <strong>{formState.fullName}</strong>. Your{' '}
                    <strong>{formState.topic}</strong> note has been formatted for the chamber desk.
                    You may also email directly at{' '}
                    <span className="font-medium text-navy-950">{SITE_CONFIG.contact.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        fullName: '',
                        email: '',
                        phone: '',
                        topic: 'Chamber Appointment',
                        message: '',
                        acknowledged: false,
                      });
                    }}
                    className="mt-6 rounded-lg bg-navy-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-navy-800"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-navy-950"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, fullName: e.target.value }))
                        }
                        placeholder="Your name"
                        className="mt-1.5 w-full rounded-lg border border-borderStrong bg-ivory/60 px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-brass focus:bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-navy-950"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-lg border border-borderStrong bg-ivory/60 px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-brass focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-navy-950"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, phone: e.target.value }))
                        }
                        placeholder="+91 98XXX XXXXX"
                        className="mt-1.5 w-full rounded-lg border border-borderStrong bg-ivory/60 px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-brass focus:bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="topic"
                        className="block text-xs font-semibold uppercase tracking-wider text-navy-950"
                      >
                        Subject Area
                      </label>
                      <select
                        id="topic"
                        value={formState.topic}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, topic: e.target.value }))
                        }
                        className="mt-1.5 w-full rounded-lg border border-borderStrong bg-ivory/60 px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-brass focus:bg-white"
                      >
                        <option>Chamber Appointment</option>
                        <option>ADR / Mediation Enquiry</option>
                        <option>Workshop or Academic Session</option>
                        <option>Chamber Mentorship / Internship</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-950"
                    >
                      Brief Non-Confidential Note *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Briefly describe your scheduling request or workshop enquiry without attaching sensitive case records..."
                      className="mt-1.5 w-full rounded-lg border border-borderStrong bg-ivory/60 px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-brass focus:bg-white"
                    />
                  </div>

                  <label className="flex items-start gap-3 rounded-lg border border-borderWarm bg-linen/70 p-4 text-xs leading-relaxed text-ink-muted">
                    <input
                      type="checkbox"
                      required
                      checked={formState.acknowledged}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, acknowledged: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 rounded border-borderStrong accent-navy-950"
                    />
                    <span>
                      I understand that submitting this note is purely informational, does not
                      create an advocate–client relationship, and I have omitted privileged or
                      confidential documents.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-navy-950 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-navy-800 sm:w-auto"
                  >
                    Submit Chamber Note
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
