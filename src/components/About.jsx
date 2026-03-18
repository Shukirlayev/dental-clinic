import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  const stats = [
    { num: t('about.stat1_num'), label: t('about.stat1_label') },
    { num: t('about.stat2_num'), label: t('about.stat2_label') },
    { num: t('about.stat3_num'), label: t('about.stat3_label') },
  ];

  return (
    <section id="about" ref={ref} className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT: Visual */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Main visual block */}
            <div className="relative">
              {/* Large image placeholder */}
              <div className="w-full h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-navy to-navy-light shadow-2xl shadow-navy/15 relative">
                {/* CSS dental interior */}
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <div className="w-full h-3/4 bg-gradient-to-t from-navy/40 to-transparent absolute bottom-0" />
                  {/* Reception desk visual */}
                  <div className="relative w-full h-full flex flex-col justify-end items-center p-8 pb-0">
                    {/* Back wall */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-slate-700/30 to-transparent" />
                    {/* Logo on wall */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/30 flex items-center justify-center">
                        <span className="text-gold font-display font-bold text-2xl">R</span>
                      </div>
                      <div className="text-white/60 text-xs font-display tracking-[0.4em] uppercase">Dr. Rashid's</div>
                    </div>
                    {/* Plants */}
                    <div className="absolute bottom-0 left-8 flex gap-1">
                      <div className="w-2 h-16 bg-emerald-700/60 rounded-t-full" />
                      <div className="w-2 h-20 bg-emerald-600/60 rounded-t-full" />
                      <div className="w-2 h-14 bg-emerald-700/60 rounded-t-full" />
                    </div>
                    {/* Reception counter */}
                    <div className="w-3/4 h-24 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-2xl border-t border-slate-500/50" />
                  </div>
                </div>
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                {/* Premium label */}
                <div className="absolute bottom-6 right-6 bg-navy/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-gold/20">
                  <p className="text-gold font-display text-sm font-semibold">Since 2014</p>
                </div>
              </div>

              {/* Small accent card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl shadow-navy/10 border border-slate-100 w-52">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <span className="text-navy font-semibold text-sm">Nukus #1</span>
                </div>
                <p className="text-navy/50 text-xs leading-relaxed">
                  Top-rated dental clinic by patient reviews
                </p>
                <div className="flex mt-3 gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-xs">★</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('about.label')}</span>
            <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3 mb-6 leading-tight">
              {t('about.headline')}
            </h2>
            <p className="text-navy/60 text-base leading-relaxed mb-5 font-light">
              {t('about.body1')}
            </p>
            <p className="text-navy/60 text-base leading-relaxed font-light">
              {t('about.body2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200">
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-display text-3xl font-semibold text-navy">{s.num}</div>
                  <div className="text-navy/50 text-xs mt-1 font-medium leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
