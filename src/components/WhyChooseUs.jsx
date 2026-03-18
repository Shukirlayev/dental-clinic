import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const featureIcons = ['🎓', '⚡', '🤝', '💊', '❤️', '📋'];

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  const features = [1, 2, 3, 4, 5, 6].map(n => ({
    icon: featureIcons[n - 1],
    title: t(`why.f${n}_title`),
    desc: t(`why.f${n}_desc`),
  }));

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1E3C 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('why.label')}</span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 max-w-xl leading-tight">
            {t('why.headline')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 border border-white/8 hover:border-gold/25 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number label */}
              <div className="absolute top-6 right-6 text-white/8 font-display font-bold text-5xl group-hover:text-white/12 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                <span className="text-xl">{f.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg text-white font-semibold mb-3">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed font-light">{f.desc}</p>

              {/* Gold accent bottom line on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/30 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
