import React from 'react';

export const Call: React.FC = () => (
  <section id="call" className="relative scroll-mt-16 bg-white py-16 sm:py-24">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(244,63,94,0.08),transparent_70%)]" />
    <div className="relative mx-auto max-w-screen-xl px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Walk-ins Welcome — Call Us
          <span className="mx-auto mt-4 block h-1.5 w-24 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-red-600" />
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-600">Prefer to book or ask a question? Call anytime.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-3 rounded-xl border border-red-200 bg-white px-6 py-4 text-lg sm:text-xl font-semibold text-red-600 shadow-sm hover:shadow-md hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <PhoneIcon /> (555) 123-4567
          </a>
          <span className="hidden sm:inline text-neutral-400">—</span>
          <span className="text-sm sm:text-base text-neutral-500">We’re ready to help today.</span>
        </div>
      </div>
    </div>
  </section>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2.5 6.5c0-1.1.9-2 2-2h2.2c.9 0 1.7.6 1.9 1.5l.6 2.3c.2.7 0 1.5-.5 2l-1 1c1.2 2.3 3.1 4.2 5.4 5.4l1-1c.5-.5 1.3-.7 2-.5l2.3.6c.9.2 1.5 1 1.5 1.9V19.5c0 1.1-.9 2-2 2h-1C11.6 21.5 2.5 12.4 2.5 7.5v-1z" fill="currentColor" />
  </svg>
);
