import { useEffect, useMemo, useState } from 'react';

const services = [
  {
    title: 'Stack Rationalization',
    blurb: 'Saving 20%+ on SaaS by removing overlap and shelfware.',
    caseStudy:
      'Consolidated 11 tools into 6 and removed $410k annual waste without reducing campaign velocity.'
  },
  {
    title: 'Agentic AI Workflows',
    blurb: 'Replacing manual data glue with self-directed orchestration.',
    caseStudy:
      'Built AI agents for lead enrichment and routing, cutting response time from 36h to under 2h.'
  },
  {
    title: 'CDP & 1st Party Data',
    blurb: 'Future-proofing measurement and personalization for 2026.',
    caseStudy:
      'Deployed event governance and identity stitching, raising match rates by 28% in 90 days.'
  },
  {
    title: 'Operations Governance',
    blurb: 'Scaling global teams with SOPs, controls, and ownership maps.',
    caseStudy:
      'Standardized launch workflows across 4 regions and reduced production incidents by 42%.'
  }
];

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Methodology', id: 'methodology' },
  { label: 'Contact', id: 'contact' }
];

const technologies = ['HubSpot', 'Salesforce', 'Segment', 'Braze', 'Firebase', 'Marketo', 'Snowflake'];

const formSteps = [
  {
    id: 'company',
    title: 'Company Context',
    fields: [
      { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Acme Inc.' },
      { id: 'website', label: 'Website', type: 'url', placeholder: 'https://acme.com' }
    ]
  },
  {
    id: 'stack',
    title: 'Current Stack',
    fields: [
      { id: 'tools', label: 'Key Platforms', type: 'text', placeholder: 'Salesforce, HubSpot, Segment...' },
      { id: 'challenge', label: 'Top Challenge', type: 'text', placeholder: 'Attribution, data quality, orchestration...' }
    ]
  },
  {
    id: 'contact',
    title: 'Point of Contact',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe' },
      { id: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@acme.com' }
    ]
  }
];

const gains = [
  'Estimated productivity gain: 8%',
  'Estimated productivity gain: 16%',
  'Estimated productivity gain: 24%',
  'Estimated productivity gain: 33%',
  'Estimated productivity gain: 41%',
  'Estimated productivity gain: 52%'
];

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.12, 60);
      document.documentElement.style.setProperty('--hero-offset', `-${offset}px`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [maturity, setMaturity] = useState(2);
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    tools: '',
    challenge: '',
    name: '',
    email: ''
  });

  const stage = useMemo(() => {
    const labels = ['Manual', 'Reactive', 'Integrated', 'Predictive', 'Orchestrated', 'Autonomous'];
    return labels[maturity];
  }, [maturity]);

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const canProceed = formSteps[step].fields.every((field) => formData[field.id].trim().length > 0);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, formSteps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setStep(0);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-base text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-line/80 bg-base/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10" aria-label="Main navigation">
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/90">
            Nexus MarTech Advisory
          </a>
          <ul className="flex items-center gap-6 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-ink focus-visible:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-20 md:px-10 md:pt-28">
          <div className="hero-bg" aria-hidden="true" />
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.25em] text-accent">The Implementation Architect</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tightest text-ink md:text-6xl lg:text-7xl">
                We Turn Your Stack into a Revenue Engine.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                Agentic AI, Data Governance, and MarTech Orchestration for the Modern Enterprise.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-base transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  Start Your Audit
                </button>
                <a
                  href="#methodology"
                  className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition hover:border-accent/80"
                >
                  See Methodology
                </a>
              </div>
            </div>

            <aside className="panel min-h-[290px]">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Core Pillars</p>
              <div className="mt-6 space-y-4 text-lg">
                <p>Data Integrity</p>
                <p>AI Orchestration</p>
                <p>Operational Governance</p>
              </div>
              <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
                Bridging shelfware and revenue with measurable implementation outcomes.
              </div>
            </aside>
          </div>
        </section>

        <section aria-label="Technologies we optimize" className="border-y border-line/80 py-4">
          <div className="ticker-wrap">
            <div className="ticker-track">
              {[...technologies, ...technologies].map((tech, index) => (
                <span key={`${tech}-${index}`} className="ticker-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Services</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightest md:text-5xl">The Solution Architecture</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Three phases: Diagnostic, Engine, and Future. Designed to close high-value operational gaps quickly.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-2">
            {services.map((service, idx) => (
              <article key={service.title} className={`service-card ${idx === 0 ? 'md:col-span-2' : ''}`}>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-lg text-muted">{service.blurb}</p>
                <div className="case-snippet mt-6 rounded-xl border border-line bg-base/75 p-4 text-sm text-ink/85">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">Case Study</span>
                  <p className="mt-3 leading-relaxed">{service.caseStudy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="methodology" className="border-y border-line/80 bg-card/30 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Maturity Assessment</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightest md:text-5xl">Manual to Autonomous</h2>
              <p className="mt-6 max-w-2xl text-muted">
                Move the slider to estimate the impact of orchestration depth across data quality, speed, and conversion readiness.
              </p>

              <div className="mt-10 panel">
                <label htmlFor="maturity" className="text-sm uppercase tracking-[0.16em] text-muted">
                  Current Operating Model
                </label>
                <input
                  id="maturity"
                  type="range"
                  min="0"
                  max="5"
                  value={maturity}
                  onChange={(e) => setMaturity(Number(e.target.value))}
                  className="mt-6 w-full accent-accent"
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xl font-semibold">{stage}</p>
                  <p className="text-sm text-accent">{gains[maturity]}</p>
                </div>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="panel">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Phase 1</p>
                <h3 className="mt-3 text-xl font-semibold">The Diagnostic</h3>
                <p className="mt-3 text-sm text-muted">Stack audit, rationalization, and data health check.</p>
              </li>
              <li className="panel">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Phase 2</p>
                <h3 className="mt-3 text-xl font-semibold">The Engine</h3>
                <p className="mt-3 text-sm text-muted">Lifecycle automation and first-party data foundation.</p>
              </li>
              <li className="panel">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Phase 3</p>
                <h3 className="mt-3 text-xl font-semibold">The Future</h3>
                <p className="mt-3 text-sm text-muted">Agentic workflows and governance for global scale.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="panel flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Engagement</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightest md:text-4xl">
                Start with a targeted stack audit.
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                We scope implementation pathways, estimate efficiency gains, and define execution governance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-base transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Start Your Audit
            </button>
          </div>
        </section>
      </main>

      {formOpen ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-form-title"
        >
          <div className="glass-panel max-h-[90vh] w-full max-w-xl overflow-auto p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Audit Intake</p>
                <h3 id="audit-form-title" className="mt-3 text-2xl font-semibold tracking-tight">
                  {submitted ? 'Request Submitted' : formSteps[step].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeForm}
                className="rounded-md border border-line px-3 py-1 text-sm text-muted hover:text-ink"
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="space-y-4 text-sm text-muted">
                <p>
                  Thanks, {formData.name || 'team'}. We will follow up at {formData.email || 'your provided email'} with next
                  steps for a focused diagnostic.
                </p>
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-base"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submitForm} className="space-y-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Step {step + 1} of {formSteps.length}
                </p>
                {formSteps[step].fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="mb-2 block text-sm text-ink/95">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-line bg-black/30 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                    />
                  </div>
                ))}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 0}
                    className="rounded-full border border-line px-5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>
                  {step < formSteps.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceed}
                      className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-base disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      Continue
                    </button>
                  ) : (
                    <button type="submit" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-base">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
