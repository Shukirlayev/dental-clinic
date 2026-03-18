import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const doctorColors = [
  {
    bg: 'from-slate-700 to-slate-800',
    accent: 'bg-gold/20',
    initials: 'R',
    years: 12,
  },
  {
    bg: 'from-blue-900 to-slate-800',
    accent: 'bg-blue-400/20',
    initials: 'K',
    years: 8,
  },
  {
    bg: 'from-slate-800 to-slate-900',
    accent: 'bg-emerald-400/20',
    initials: 'T',
    years: 6,
  },
  {
    bg: 'from-slate-700 to-blue-900',
    accent: 'bg-purple-400/20',
    initials: 'N',
    years: 5,
  },
];

export default function Doctors() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  const doctors = [
    { nameKey: 'doctors.d1_name', roleKey: 'doctors.d1_role', isFounder: true },
    {
      nameKey: 'doctors.d2_name',
      roleKey: 'doctors.d2_role',
      isFounder: false,
    },
    {
      nameKey: 'doctors.d3_name',
      roleKey: 'doctors.d3_role',
      isFounder: false,
    },
    {
      nameKey: 'doctors.d4_name',
      roleKey: 'doctors.d4_role',
      isFounder: false,
    },
  ];

  return (
    <section id="doctors" ref={ref} className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            {t('doctors.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3 mb-4">
            {t('doctors.headline')}
          </h2>
          <p className="text-navy/50 text-base max-w-xl mx-auto font-light">
            {t('doctors.subtext')}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => {
            const color = doctorColors[i];
            return (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-navy/15 transition-all duration-500 hover:-translate-y-2 ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${doc.isFounder ? 'ring-2 ring-gold/40' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image area */}
                <div
                  className={`relative h-72 bg-gradient-to-b ${color.bg} flex items-end justify-center`}
                >
                  {/* Doctor avatar (CSS) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-28 h-28 rounded-full ${color.accent} backdrop-blur-sm border border-white/20 flex items-center justify-center`}
                    >
                      <span className="font-display text-4xl font-bold text-white/80">
                        {color.initials}
                      </span>
                    </div>
                  </div>

                  {/* Founder badge */}
                  {doc.isFounder && (
                    <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      {t('doctors.founder_badge')}
                    </div>
                  )}

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-navy/70 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-white/10">
                    <span className="text-white text-xs font-semibold">
                      {color.years}+ {t('doctors.experience')}
                    </span>
                  </div>

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>

                {/* Info area */}
                <div className="bg-white p-6 border-x border-b border-slate-100 rounded-b-3xl">
                  <h3 className="font-display text-navy text-lg font-semibold">
                    {t(doc.nameKey)}
                  </h3>
                  <p className="text-navy/50 text-sm mt-1 font-light">
                    {t(doc.roleKey)}
                  </p>
                  {/* Social placeholders */}
                  <div className="flex gap-2 mt-4">
                    {['in', 'tw'].map((s) => (
                      <div
                        key={s}
                        className="w-7 h-7 rounded-full bg-navy/5 hover:bg-navy/10 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <span className="text-navy/40 text-[10px] font-bold">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gold accent line for founder */}
                {doc.isFounder && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
