import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function FinalCTA() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0A1628 0%, #0D1E3C 60%, #0F2347 100%)',
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-gold/10 rounded-full" />
        <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/8 rounded-full" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto px-6 lg:px-10 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Gold line ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-24 h-px bg-gold/40" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="w-24 h-px bg-gold/40" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <h2 className="font-display text-4xl lg:text-6xl text-white font-semibold leading-tight mb-6">
          {t('cta.headline')}
        </h2>

        <p className="text-white/55 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
          {t('cta.subtext')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-1"
          >
            {t('cta.primary')}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="tel:+998000000000"
            className="group border border-white/25 hover:border-white/50 text-white font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-white/5"
          >
            <span className="mr-2">📞</span>
            {t('cta.secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
