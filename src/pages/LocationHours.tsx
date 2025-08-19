import React from 'react';

const hours = [
  ['Monday',    '08:00 am – 05:00 pm'],
  ['Tuesday',   '08:00 am – 05:00 pm'],
  ['Wednesday', '08:00 am – 05:00 pm'],
  ['Thursday',  '08:00 am – 05:00 pm'],
  ['Friday',    '08:00 am – 05:00 pm'],
  ['Saturday',  '09:00 am – 01:00 pm'],
  ['Sunday',    'Closed'],
];

const LocationHours: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Back to Home (visible on all sizes, especially helpful on mobile) */}
        <div className="mb-6">
          <a
            href="/#header"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </a>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* LEFT: black panel with red glow */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-950 text-white p-6 sm:p-8 shadow-lg ring-1 ring-white/10">
            <div className="pointer-events-none absolute -inset-px opacity-60 blur-2xl"
                 style={{ background: 'radial-gradient(40% 40% at 20% 0%, rgba(239,68,68,.25), transparent 70%)' }} />
            <h1 className="relative text-2xl sm:text-3xl font-extrabold leading-tight">
              Welcome to <span className="whitespace-nowrap">Quick Lab</span> | Greenville, SC
            </h1>

            <p className="relative mt-3 max-w-prose text-white/85">
              Choose a test. Choose your time. <span className="font-semibold">Get your answer.</span>
              We offer lab testing that’s private, affordable, and convenient.
            </p>

            {/* Phones */}
            <div className="relative mt-5 flex flex-wrap items-center gap-4 text-white">
              <a href="tel:+18645550935" className="inline-flex items-center gap-2 hover:text-red-400">
                <PhoneIcon /> (864) 555-0935
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a href="tel:+18645559514" className="inline-flex items-center gap-2 hover:text-red-400">
                <PhoneIcon /> (864) 555-9514
              </a>
            </div>

            {/* Hours */}
            <div className="relative mt-6">
              <h2 className="text-xl font-semibold">Hours</h2>
              <div className="mt-2 h-0.5 w-16 rounded bg-red-500" />
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm sm:text-base">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between border-b border-white/10 py-2">
                    <span className="font-medium">{day}</span>
                    <span className="tabular-nums text-white/90">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Map card */}
          <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-red-200">
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Quick Lab Map"
                src="https://www.google.com/maps?q=Quick%20Lab%20Greenville%20SC&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[380px] w-full"
              />
            </div>
            <div className="px-2 py-4">
              <h3 className="text-lg font-semibold text-neutral-900">Our Location</h3>
              <p className="mt-1 text-neutral-700">123 Market Point Dr, Greenville, SC 29607</p>
              <p className="text-neutral-700">Suite 200 • Next to REI</p>
              <div className="mt-3 text-sm text-neutral-600">
                Need directions? Open in Google Maps above.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2.5 6.5c0-1.1.9-2 2-2h2.2c.9 0 1.7.6 1.9 1.5l.6 2.3c.2.7 0 1.5-.5 2l-1 1c1.2 2.3 3.1 4.2 5.4 5.4l1-1c.5-.5 1.3-.7 2-.5l2.3.6c.9.2 1.5 1 1.5 1.9V19.5c0 1.1-.9 2-2 2h-1C11.6 21.5 2.5 12.4 2.5 7.5v-1z"/>
  </svg>
);

export default LocationHours;
