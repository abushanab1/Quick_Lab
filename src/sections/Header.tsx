import React from 'react';

const NAV_HEIGHT = 64;
const THEME: 'red' | 'black' = 'red';

export const Header: React.FC = () => {
  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', `#${targetId}`);
  };

  const isRed = THEME === 'red';

  const cardBase = 'max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-10 backdrop-blur-md';
  const cardClasses = isRed
    ? `${cardBase} bg-black/60 border border-red-500/40 text-white`
    : `${cardBase} bg-white/90 border border-black/10 text-black`;

  const titleClasses = isRed
    ? 'text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent'
    : 'text-4xl sm:text-6xl font-extrabold tracking-tight text-black';

  const taglineClasses = isRed
    ? 'mt-4 text-xs sm:text-sm font-semibold tracking-widest text-red-400'
    : 'mt-4 text-xs sm:text-sm font-semibold tracking-widest text-black';

  const bodyClasses = isRed
    ? 'mt-3 text-base sm:text-lg leading-relaxed text-white/90'
    : 'mt-3 text-base sm:text-lg leading-relaxed text-black/80';

  const buttonClasses = isRed
    ? 'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-medium bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-red-300/60 active:scale-[0.98] shadow-lg shadow-red-500/20'
    : 'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-medium bg-black text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black/30 active:scale-[0.98] shadow-lg shadow-black/20';

  return (
    <section
      id="header"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url('/homeLab.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 ${isRed ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/80' : 'bg-white/40'}`} />
      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="min-h-screen flex items-center justify-center text-center py-16">
          <div className={cardClasses}>
            <h1 className={titleClasses}>Quick Lab</h1>
            <p className={taglineClasses}>WE ARE PRIVATE, AFFORDABLE, AND CONVENIENT</p>
            <p className={bodyClasses}>
              Getting a lab test is easy. Generally, we'll have you in and out in 15 minutes.
              Many test results will be available in 24–72 hours. With Quick Lab there's no better way to evaluate your health.
            </p>
            <div className="mt-6">
              <button onClick={() => scrollToSection('contact')} className={buttonClasses}>
                Contact Us Now
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.5 5.75A2.75 2.75 0 0 1 5.25 3h9.5A2.75 2.75 0 0 1 17.5 5.75v8.5A2.75 2.75 0 0 1 14.75 17h-9.5A2.75 2.75 0 0 1 2.5 14.25v-8.5Zm2-.75a.75.75 0 0 0-.75.75v.38l6.08 3.34a1.5 1.5 0 0 0 1.34 0l6.08-3.34v-.38a.75.75 0 0 0-.75-.75h-12Zm12 2.42-4.94 2.71a3 3 0 0 1-2.62 0L4.5 7.42v6.83c0 .41.34.75.75.75h9.5c.41 0 .75-.34.75-.75V7.42Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
