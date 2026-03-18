import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const equipItems = [
  { icon: '🔬', colorFrom: 'from-blue-900', colorTo: 'to-slate-900' },
  { icon: '⚡', colorFrom: 'from-slate-800', colorTo: 'to-slate-900' },
  { icon: '🎯', colorFrom: 'from-navy', colorTo: 'to-blue-900' },
  { icon: '🛡️', colorFrom: 'from-slate-900', colorTo: 'to-navy' },
];

export default function Equipment() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Equipment cards */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {[1, 2, 3, 4].map(n => {
              const item = equipItems[n - 1];
              return (
                <div
                  key={n}
                  className={`group relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br ${item.colorFrom} ${item.colorTo} shadow-lg shadow-navy/15 hover:shadow-xl hover:shadow-navy/25 transition-all duration-500 cursor-pointer hover:-translate-y-1`}
                >
                  {/* Background grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-white/15 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{t(`equipment.e${n}_title`)}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{t(`equipment.e${n}_desc`)}</p>
                    </div>
                  </div>

                  {/* Gold top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/50 to-transparent transition-all duration-500" />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Content */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('equipment.label')}</span>
            <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3 mb-6 leading-tight">
              {t('equipment.headline')}
            </h2>
            <p className="text-navy/55 text-base leading-relaxed font-light mb-10">
              {t('equipment.subtext')}
            </p>

            {/* Visual trust elements */}
            <div className="space-y-4">
              {[
                { label: 'European Standards', pct: 100 },
                { label: 'Digital Diagnostics', pct: 95 },
                { label: 'Sterility Protocol', pct: 100 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-navy text-sm font-medium">{bar.label}</span>
                    <span className="text-gold text-xs font-semibold">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000 ${inView ? '' : 'w-0'}`}
                      style={{ width: inView ? `${bar.pct}%` : '0%', transitionDelay: `${i * 200 + 400}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
