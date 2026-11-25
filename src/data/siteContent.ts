export interface OfferingItem {
  id: string;
  sceneId: 'writ' | 'civil' | 'adr' | 'mentorship' | 'workshops' | 'compendium';
  category: 'High Court Practice' | 'ADR & Advisory' | 'Mentorship & Education';
  badge?: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface AudienceCard {
  title: string;
  description: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: { question: string; answer: string }[];
}

export interface LegalClause {
  id: string;
  title: string;
  paragraphs: string[];
}

export const SITE_CONFIG = {
  brandName: 'VākLegal',
  tagline: 'Counsel · Clarity · Continuity',
  advocateName: 'Advocate Akshita Pendyem',
  designation: 'Advocate · High Court for the State of Telangana',
  courtName: 'High Court for the State of Telangana, Hyderabad',
  chamberAddress: {
    line1: 'Chambers of Advocate Akshita Pendyem',
    line2: 'High Court for the State of Telangana',
    line3: 'High Court Road, Rikab Gunj, Ghansi Bazaar',
    cityStatePin: 'Hyderabad, Telangana – 500066',
  },
  // Update these direct contact details once confirmed
  contact: {
    email: 'chambers@vaklegal.in',
    phone: '+91 40 2345 6789 (Chamber Desk)',
    hours: 'Monday – Saturday · 10:00 AM to 6:30 PM IST (By Prior Appointment)',
  },
  credentials: [
    'High Court for the State of Telangana',
    'ADR Training — NALSAR University of Law',
    'Accredited Mediation & Dispute Resolution',
    'Hyderabad Bar & Legal Mentorship',
  ],
  // Drop a portrait at public/akshita.jpg and set to '/akshita.jpg' to render a real photo
  portraitUrl: '',
};

export const HERO_CONTENT = {
  eyebrow: 'High Court for the State of Telangana · Hyderabad',
  title: 'Principled advocacy in court. Clear guidance beyond the bench.',
  subtitle:
    'VākLegal brings together the litigation and advisory chambers of Advocate Akshita Pendyem alongside structured legal workshops, ADR insight, and mentorship for emerging counsel.',
  primaryCta: 'Explore Practice & Initiatives',
  secondaryCta: 'Chambers & Correspondence',
};

export const ABOUT_INTRO = {
  eyebrow: 'The VākLegal Ethos',
  heading: 'What is VākLegal?',
  lead:
    'In legal practice as in law school, lasting confidence comes from clarity: understanding not only what a statute says on paper, but how courts, procedures, and human disputes actually unfold in real life.',
  paragraphs: [
    'VākLegal is the chamber platform and legal knowledge initiative led by Advocate Akshita Pendyem, practising before the High Court for the State of Telangana in Hyderabad. Built on disciplined courtroom preparation and a strong foundation in Alternative Dispute Resolution, VākLegal pairs High Court representation with clear, accessible legal education.',
    'Drawing from the same peer cohort values of open mentorship and practical learning, this space serves two complementary purposes: presenting transparent information about Advocate Akshita Pendyem’s areas of practice and chambers, and nurturing young lawyers, law students, and citizens who seek to understand how the law works in practice.',
  ],
};

export const ADVOCATE_BIO = {
  eyebrow: 'Meet the Counsel',
  heading: 'An advocate shaped by constitutional rigour, mediation training, and purposeful mentorship.',
  name: 'Advocate Akshita Pendyem',
  role: 'Practising Advocate · High Court for the State of Telangana',
  paragraphs: [
    'Advocate Akshita Pendyem practises before the High Court for the State of Telangana, City Civil and Commercial Courts, and allied statutory tribunals in Hyderabad. Her courtroom work spans constitutional writ jurisdiction, civil and property disputes, contractual remedies, and appellate advocacy.',
    'Committed to balanced dispute resolution beyond adversarial litigation alone, she completed specialised training in Alternative Dispute Resolution (ADR) at NALSAR University of Law, Hyderabad, alongside accredited mediation training. That perspective informs every matter she handles: identifying where settlement preserves value, and where firm High Court intervention is essential.',
    'Throughout her academic years and early career at the Bar, she watched talented law graduates and first-generation entrants hesitate — not from lack of intellect or diligence, but because courtroom craft, drafting nuance, and procedural navigation are rarely taught in textbooks.',
    'Through VākLegal, Advocate Akshita Pendyem combines her active High Court chambers with structured educational sessions, moot preparation, and practical chamber guidance — ensuring that clarity in law is shared openly from one generation of counsel to the next.',
  ],
};

export const OFFERINGS: OfferingItem[] = [
  {
    id: 'writ-constitutional',
    sceneId: 'writ',
    category: 'High Court Practice',
    badge: 'Telangana High Court',
    title: 'Constitutional & Writ Advocacy',
    description:
      'Representation and procedural briefing in Writ Petitions under Article 226, administrative law challenges, service matters, and judicial review of state action before the High Court.',
    highlights: [
      'Article 226 Writ Petitions & Interim Applications',
      'Administrative & Statutory Authority Review',
      'Appellate & Revisional High Court Briefs',
    ],
  },
  {
    id: 'civil-commercial',
    sceneId: 'civil',
    category: 'High Court Practice',
    badge: 'Litigation & Advisory',
    title: 'Civil, Property & Commercial Disputes',
    description:
      'Structured representation across title and possession suits, specific performance, injunctions, contractual enforcement, and commercial litigation in Hyderabad courts.',
    highlights: [
      'Title, Partition & Injunction Proceedings',
      'Contractual Breaches & Specific Relief',
      'First & Second Appeals before the High Court',
    ],
  },
  {
    id: 'adr-mediation',
    sceneId: 'adr',
    category: 'ADR & Advisory',
    badge: 'NALSAR ADR Foundation',
    title: 'Mediation & Alternative Dispute Resolution',
    description:
      'Informed by specialised ADR training at NALSAR and mediation accreditation: assisting parties in evaluating negotiated settlements, arbitration clauses, and conciliation pathways.',
    highlights: [
      'Pre-Litigation & Court-Annexed Mediation Strategy',
      'Arbitration Petitions & Section 9 / 11 / 34 Briefs',
      'Constructive Settlement Structuring',
    ],
  },
  {
    id: 'chamber-mentorship',
    sceneId: 'mentorship',
    category: 'Mentorship & Education',
    badge: 'Young Counsel Initiative',
    title: 'Chamber Mentorship & Moot Guidance',
    description:
      'Practical guidance for law students and junior advocates on case-file reading, High Court filing etiquette, memorial drafting, and structured oral advocacy.',
    highlights: [
      'High Court Filing & Roster Orientation',
      'Memorial Drafting & Oral Submission Craft',
      'First-Generation Advocate Support',
    ],
  },
  {
    id: 'legal-workshops',
    sceneId: 'workshops',
    category: 'Mentorship & Education',
    badge: 'Interactive Sessions',
    title: 'Applied Legal Workshops & Briefings',
    description:
      'Focused academic sessions connecting statutory provisions — including BNS, BNSS, and BSA transitions — with real courtroom pleadings and procedural timelines.',
    highlights: [
      'Pleading & Conveyancing Fundamentals',
      'BNS / BNSS / BSA Procedural Discussions',
      'Q&A Seminars for Law Aspirants & Students',
    ],
  },
  {
    id: 'statutory-compendiums',
    sceneId: 'compendium',
    category: 'Mentorship & Education',
    badge: 'Upcoming',
    title: 'Case Notes & Procedural Compendiums',
    description:
      'Curated digests of landmark Telangana High Court and Supreme Court jurisprudence, procedural checklists, and reference guides for students and young practitioners.',
    highlights: [
      'Telangana High Court Practice Notes',
      'Bilingual-Friendly Citizen Law Explainers',
      'Periodic Statutory Amendment Briefs',
    ],
  },
];

export const WHO_IT_IS_FOR: AudienceCard[] = [
  {
    title: 'Litigants & Institutions',
    description:
      'Individuals, families, and enterprises seeking clear procedural understanding and principled representation before the Telangana High Court.',
  },
  {
    title: 'Law Students & Mooters',
    description:
      'Undergraduates and scholars looking to bridge doctrinal coursework with real pleadings, court etiquette, and appellate research.',
  },
  {
    title: 'Junior & First-Gen Advocates',
    description:
      'Newly enrolled counsel finding their footing in drafting, filing registries, interim reliefs, and confident courtroom advocacy.',
  },
  {
    title: 'Citizens & Legal Learners',
    description:
      'Anyone wishing to understand constitutional remedies, mediation options, and everyday legal frameworks in plain, accurate language.',
  },
];

export const PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'Preparation Over Theatre',
    description:
      'Every High Court brief begins with exhaustive record scrutiny, statutory precision, and calm, structured argument rather than ornament.',
  },
  {
    number: '02',
    title: 'Resolution Before Escalation',
    description:
      'Grounded in ADR and mediation training, we evaluate constructive settlement avenues whenever dignity and client interests align.',
  },
  {
    number: '03',
    title: 'Clarity for Every Reader',
    description:
      'Whether explaining an interim order to a family or a writ standard to a student, legal language should illuminate rather than obscure.',
  },
  {
    number: '04',
    title: 'Continuity of Mentorship',
    description:
      'Honouring the spirit of senior-to-junior guidance, VākLegal keeps the door open for students and young professionals eager to learn seriously.',
  },
];

export const PRACTICE_INSIGHTS_TABS = [
  {
    id: 'court-practice',
    label: 'High Court Procedure',
    eyebrow: 'Telangana High Court Workflow',
    headline: 'Structured preparation from caveat check to final hearing.',
    summary:
      'Matters before the High Court for the State of Telangana demand strict adherence to High Court Rules, limitation computation, certified annexures, and concise synopsis drafting.',
    points: [
      'Pre-filing scrutiny of impugned orders, limitation, and alternative remedy thresholds',
      'Clear chronological synopsis and compilation of binding Telangana High Court & Supreme Court precedents',
      'Timely tracking of cause lists, vacate-stay applications, and compliance reporting',
    ],
  },
  {
    id: 'adr-pathway',
    label: 'ADR & Mediation',
    eyebrow: 'Constructive Dispute Resolution',
    summary:
      'Trained in ADR at NALSAR and accredited in mediation, Advocate Akshita Pendyem approaches disputes with an eye toward both courtroom viability and negotiated certainty.',
    headline: 'Reducing years of pendency where structured dialogue can prevail.',
    points: [
      'Assessment of dispute suitability for Section 89 CPC / court-annexed or private mediation',
      'Drafting enforceable Memorandum of Compromise and consent decrees',
      'Representation in arbitration applications and award-challenge proceedings',
    ],
  },
  {
    id: 'mentorship-track',
    label: 'Workshops & Internships',
    eyebrow: 'Academic & Chamber Engagement',
    headline: 'Practical exposure built on real courtcraft, not passive observation.',
    summary:
      'Inspired by the collaborative senior-junior culture across Hyderabad’s law schools and Bar, VākLegal hosts periodic sessions and guided reading for aspiring lawyers.',
    points: [
      'Hands-on orientation on reading High Court dockets, cause titles, and prayer clauses',
      'Interactive sessions comparing legacy codes with BNS, BNSS, and BSA 2023 frameworks',
      'Constructive feedback for moot court memorials and young advocate oral submissions',
    ],
  },
];

export const ABOUT_PAGE_DATA = {
  mission:
    'To render principled, well-prepared advocacy before the High Court for the State of Telangana while keeping practical legal knowledge and mentorship accessible to emerging lawyers and informed citizens.',
  vision:
    'A legal ecosystem in Hyderabad and beyond where courtroom excellence and generous peer mentorship walk hand in hand — so neither litigants nor young advocates navigate the law in the dark.',
  whyStarted: [
    'Between the lecture halls of law school and the corridors of the Telangana High Court lies a wide practical gulf. Textbooks explain legal doctrines, yet rarely teach how an urgent writ petition is vetted at the scrutiny counter, how an injunction affidavit is structured, or how a mediator unlocks an impasse.',
    'Having trained alongside peers deeply committed to legal education and ADR at NALSAR, Advocate Akshita Pendyem built VākLegal as a unified chamber identity: dignified and rigorous in High Court representation, and open-hearted in sharing practical clarity through workshops and educational briefings.',
  ],
  bridgeTable: [
    {
      challenge: 'Dense, intimidating legal procedures for litigants',
      approach: 'Plain-language procedural roadmaps and transparent case stage updates.',
    },
    {
      challenge: 'Gap between doctrinal law school study and High Court practice',
      approach: 'Applied drafting workshops, docket reading sessions, and moot feedback.',
    },
    {
      challenge: 'Prolonged adversarial escalation in resolvable disputes',
      approach: 'NALSAR-trained ADR evaluation and constructive mediation strategies.',
    },
    {
      challenge: 'Lack of structured guidance for first-generation advocates',
      approach: 'Approachable senior-style mentorship grounded in courtroom discipline.',
    },
    {
      challenge: 'Fragmented updates on statutory transitions (BNS / BNSS / BSA)',
      approach: 'Focused comparative sessions and upcoming procedural compendiums.',
    },
    {
      challenge: 'Hesitation among students to ask foundational procedural questions',
      approach: 'Respectful, interactive educational forums built on inquiry and rigour.',
    },
  ],
  coreValues: [
    {
      title: 'Integrity',
      description: 'Strict fidelity to Bar Council ethics, candour before the Bench, and honest counsel to every stakeholder.',
    },
    {
      title: 'Rigour',
      description: 'Thorough verification of facts, statutes, and precedent before a single page is filed or taught.',
    },
    {
      title: 'Resolution',
      description: 'Prioritising durable, practical outcomes through mediation and ADR wherever appropriate.',
    },
    {
      title: 'Continuity',
      description: 'Passing practical courtroom craft forward to students and newly enrolled advocates.',
    },
  ],
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'chambers',
    title: 'Chambers & About VākLegal',
    items: [
      {
        question: 'Who leads VākLegal and where does she practise?',
        answer:
          'VākLegal is the practice chambers and legal clarity initiative of Advocate Akshita Pendyem, who practises primarily before the High Court for the State of Telangana in Hyderabad, along with City Civil, Commercial, and allied tribunals.',
      },
      {
        question: 'Is this website an advertisement or solicitation for legal work?',
        answer:
          'No. In strict accordance with Rule 36 of the Bar Council of India Rules and the Advocates Act, 1961, this website is solely an informational and educational resource providing verified background, practice overview, chamber location, and workshop details.',
      },
      {
        question: 'Does browsing VākLegal create an advocate–client relationship?',
        answer:
          'No. Reading materials on this site or submitting a general correspondence enquiry does not establish an advocate–client relationship, nor does content here constitute formal legal advice.',
      },
    ],
  },
  {
    id: 'practice-adr',
    title: 'Courts, Procedure & ADR',
    items: [
      {
        question: 'What broad areas of law are handled by the chambers?',
        answer:
          'Primary areas include Constitutional and Writ jurisdiction before the Telangana High Court, civil and property disputes, commercial and contractual litigation, appellate briefs, and Alternative Dispute Resolution (mediation and arbitration-related proceedings).',
      },
      {
        question: 'How does ADR and mediation training assist in active disputes?',
        answer:
          'With specialised ADR training from NALSAR University of Law and mediation accreditation, matters are assessed holistically — identifying when negotiated settlement or mediation saves years of litigation, while preparing thoroughly if adjudication is required.',
      },
      {
        question: 'How can one schedule an informational chamber appointment?',
        answer:
          'You may write via the Chambers & Correspondence page with brief, non-confidential contact details and preferred dates. Appointments are confirmed by the chamber desk subject to court calendar availability.',
      },
    ],
  },
  {
    id: 'mentorship-workshops',
    title: 'Workshops, Mentorship & Students',
    items: [
      {
        question: 'Who may participate in VākLegal educational sessions and workshops?',
        answer:
          'Sessions and workshops are open to law students, CLAT/law aspirants, newly enrolled junior advocates, and anyone with a sincere interest in understanding Indian law and courtroom practice.',
      },
      {
        question: 'Are certificates or practical reading notes provided for workshops?',
        answer:
          'Yes, structured workshops and academic sessions include curated reference notes and participation acknowledgements upon full attendance and completion of practical exercises.',
      },
      {
        question: 'Does Advocate Akshita Pendyem offer moot court or drafting guidance?',
        answer:
          'Periodic mentorship slots and moot preparation clinics are conducted to help students refine issue framing, memorial structure, and courtroom poise.',
      },
    ],
  },
  {
    id: 'statutes-privacy',
    title: 'Statutory Currency & Privacy',
    items: [
      {
        question: 'Do educational briefings cover the new criminal laws (BNS, BNSS, BSA)?',
        answer:
          'Yes. Discussions address both existing proceedings governed by legacy statutes and matters under the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA), effective 1 July 2024. Readers should always verify current gazette notifications.',
      },
      {
        question: 'How is personal data submitted through the enquiry form handled?',
        answer:
          'Contact details shared through the correspondence form are used exclusively to respond to scheduling or workshop enquiries and are never sold or shared with third-party marketers. Please avoid sending confidential or privileged case documents before a formal engagement is confirmed.',
      },
    ],
  },
];

export const TERMS_CLAUSES: LegalClause[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing or using the VākLegal website (operated for the chambers and educational initiatives of Advocate Akshita Pendyem), you agree to be bound by these Terms and Conditions and applicable Indian laws, including the Information Technology Act, 2000.',
    ],
  },
  {
    id: 'informational-nature',
    title: '2. Informational and Educational Scope',
    paragraphs: [
      'All content published on this platform—including chamber profiles, practice summaries, procedural notes, and workshop descriptions—is provided strictly for general information and academic clarity. Nothing herein constitutes legal advice, a formal opinion, or an invitation to solicit legal representation.',
    ],
  },
  {
    id: 'no-client-relationship',
    title: '3. No Advocate–Client Relationship',
    paragraphs: [
      'Viewing this website, attending an open educational workshop, or sending an initial correspondence message does not create an advocate–client relationship. Formal representation arises only upon mutual confirmation, conflict checks, and execution of a Vakalatnama or written engagement mandate.',
    ],
  },
  {
    id: 'events-workshops',
    title: '4. Workshops, Mentorship & Participation',
    paragraphs: [
      'Registration for educational sessions or workshops is subject to seat availability and respectful conduct. Participants agree not to record, redistribute, or commercially repurpose workshop slides, live discussions, or reading materials without prior written permission.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    paragraphs: [
      'The VākLegal name, bespoke crest emblem, original editorial text, illustrations, and workshop compendiums are protected under the Copyright Act, 1957 and Trade Marks Act, 1999. Statutory texts and judicial pronouncements remain in the public domain.',
    ],
  },
  {
    id: 'limitation',
    title: '6. Limitation of Liability & Governing Law',
    paragraphs: [
      'While care is taken to maintain accurate and timely information, no warranty is given regarding uninterrupted availability or completeness. These Terms are governed by the laws of India, with exclusive jurisdiction vested in the competent courts at Hyderabad, Telangana.',
    ],
  },
];

export const DISCLAIMER_CLAUSES: LegalClause[] = [
  {
    id: 'bci-rule-36',
    title: '1. Bar Council of India Compliance (Rule 36)',
    paragraphs: [
      'Under the rules of the Bar Council of India, advocates in India are prohibited from soliciting work or advertising. By proceeding to view this website, the user acknowledges that they are accessing information about Advocate Akshita Pendyem and VākLegal of their own volition for informational and educational purposes.',
      'There has been no form of solicitation, advertisement, personal communication, or inducement of any sort whatsoever from Advocate Akshita Pendyem or her chambers.',
    ],
  },
  {
    id: 'no-legal-advice',
    title: '2. Not Legal Advice',
    paragraphs: [
      'Materials on VākLegal—including overviews of constitutional remedies, civil litigation, mediation, or statutory briefings—are general in nature and must not be relied upon as a substitute for qualified legal counsel tailored to specific facts and records.',
    ],
  },
  {
    id: 'statutory-updates',
    title: '3. Currency of Statutory & Judicial References',
    paragraphs: [
      'Law in India evolves continuously through legislative amendments—including the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) effective 1 July 2024—as well as pronouncements of the Supreme Court of India and the High Court for the State of Telangana. Users should independently verify current enactments and rules before acting.',
    ],
  },
  {
    id: 'confidentiality-warning',
    title: '4. Unsolicited Communications Not Privileged',
    paragraphs: [
      'Do not transmit confidential, sensitive, or time-critical litigation documents through the general website contact form prior to an explicit confirmation of representation and conflict clearance.',
    ],
  },
  {
    id: 'independence',
    title: '5. Institutional Independence',
    paragraphs: [
      'References to courts, universities (including NALSAR University of Law), or mediation bodies are strictly biographical and factual. VākLegal is an independent chamber and educational initiative and does not represent or speak on behalf of any judicial body, Bar Council, or academic institution.',
    ],
  },
];
