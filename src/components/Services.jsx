import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const serviceIcons = ['🦷', '🔩', '✨', '😁', '👨‍👩‍👧‍👦', '🔬'];

export default function Services() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  const services = [1, 2, 3, 4, 5, 6].map(n => ({
    icon: serviceIcons[n - 1],
    title: t(`services.s${n}_title`),
    desc: t(`services.s${n}_desc`),
  }));

  return (
    <section id="services" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('services.label')}</span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3 mb-4">{t('services.headline')}</h2>
          <p className="text-navy/50 text-base max-w-xl mx-auto font-light leading-relaxed">{t('services.subtext')}</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative bg-ivory rounded-2xl p-8 border border-slate-100 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/8 transition-all duration-500 cursor-pointer overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/0 to-navy/0 group-hover:from-navy/[0.02] group-hover:to-navy/[0.04] transition-all duration-500 rounded-2xl" />

              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/40 to-transparent transition-all duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-navy/5 group-hover:bg-navy/8 flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-navy/5">
                <span className="text-2xl">{s.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-navy font-semibold mb-3 group-hover:text-navy transition-colors">{s.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed font-light">{s.desc}</p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-xs tracking-wider uppercase font-semibold">Learn more</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
