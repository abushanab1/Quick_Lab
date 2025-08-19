import React from 'react';

type Item = { src: string; title: string; desc: string };

const items: Item[] = [
  { src: '/STD_test.png',           title: 'Discreet service with fast, accurate results', desc: 'Confidential screening with quick turnaround and clear reporting.' },
  { src: '/Vitamin_injections.png', title: 'Get a vitamin boost', desc: 'Targeted vitamin injections to support energy and overall wellness.' },
  { src: '/Food.png',               title: 'Food intolerances & sensitivities', desc: 'Identify potential triggers with lab-based intolerance and sensitivity testing.' },
  { src: '/DNA.png',                title: 'Accurate DNA testing with no hidden fees', desc: 'Transparent pricing and dependable results for family and personal answers.' },
];

export const Tests: React.FC = () => {
  return (
    <section id="tests" className="scroll-mt-16 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Featured Tests & Services
          </h2>
          <p className="mt-3 text-neutral-600">
            A selection of our most requested options. Ask us about anything you don’t see here.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                   style={{ background: 'radial-gradient(40% 40% at 50% 0%, rgba(244,63,94,0.12), transparent 70%)' }} />
              <div className="relative m-px rounded-2xl bg-gradient-to-br from-white via-neutral-50 to-red-50/30 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="shrink-0">
                    <img
                      src={it.src}
                      alt={it.title}
                      className="h-16 w-16 rounded-xl border border-neutral-200 bg-white object-contain p-2"
                      onError={(ev) => { (ev.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-neutral-900">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{it.desc}</p>
                  </div>
                </div>
                <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-red-600 opacity-70" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
