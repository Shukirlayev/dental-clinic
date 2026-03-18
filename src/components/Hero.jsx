import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              setTimeout(() => el.classList.add('animate-in'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0A1628 0%, #0D1E3C 50%, #0F2347 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[38%] h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT: Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700"
          >
            <h1 className="font-display leading-[1.05] text-white">
              <span className="block text-5xl lg:text-7xl font-light">
                {t('hero.headline1')}
              </span>
              <span className="block text-5xl lg:text-7xl font-semibold text-gold mt-1">
                {t('hero.headline2')}
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700"
          >
            <p className="text-white/60 text-lg leading-relaxed max-w-lg font-light">
              {t('hero.subtext')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-1 text-center"
            >
              {t('hero.cta_primary')}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="tel:+998000000000"
              className="group border border-white/25 hover:border-white/50 text-white font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-white/5 text-center"
            >
              <span className="mr-2">📞</span>
              {t('hero.cta_secondary')}
            </a>
          </div>

          {/* Rating Badge */}
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/40 to-blue-600/40 border-2 border-navy flex items-center justify-center text-xs"
                >
                  {['👤', '👤', '👤', '👤', '👤'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xs">
                    ★
                  </span>
                ))}
                <span className="text-white font-semibold text-sm ml-1">
                  5.0
                </span>
              </div>
              <p className="text-white/40 text-xs">{t('hero.rating_sub')}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-animate
          style={{ transitionDelay: '200ms' }}
        >
          {/* Main image frame */}
          <div className="relative">
            {/* Background decorative circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-blue-500/10 rounded-3xl blur-2xl scale-110" />

            {/* Image placeholder – premium clinic visual */}
            <div className="relative w-[340px] lg:w-[420px] h-[480px] lg:h-[560px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
              {/* Realistic clinic visual using CSS art */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full h-full relative">
                  {/* Room background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 to-slate-800/80 rounded-2xl" />
                  {/* Dental chair silhouette */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%]">
                    <div className="w-full h-2 bg-gold/30 rounded-full mb-2" />
                    <div className="w-3/4 mx-auto h-24 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-2xl flex items-center justify-center">
                      <div className="w-[85%] h-[70%] bg-white/5 rounded-xl border border-white/10" />
                    </div>
                    <div className="w-1/2 mx-auto h-4 bg-slate-700 rounded-b-xl" />
                  </div>
                  {/* Overhead light */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-1 h-8 bg-slate-500" />
                    <div className="w-16 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full shadow-lg shadow-gold/10" />
                    <div className="w-20 h-3 bg-gradient-to-b from-gold/30 to-transparent mt-0.5 rounded-b-full blur-sm" />
                  </div>
                  {/* Equipment detail */}
                  <div className="absolute top-1/4 right-4 w-10 h-32 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg border border-white/5 flex flex-col gap-2 p-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-2 bg-gold/20 rounded-full"
                      />
                    ))}
                  </div>
                  {/* Premium clinic label overlay */}
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-gold/20">
                    <p className="text-gold text-[10px] font-semibold tracking-widest uppercase">
                      Premium Care
                    </p>
                    <p className="text-white/60 text-[9px] mt-0.5">
                      Nukus, Uzbekistan
                    </p>
                  </div>
                </div>
              </div>
              {/* Gold top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            {/* Floating Info Cards */}
            {/* Card 1 – top left */}
            <div
              className="absolute -left-6 top-12 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-navy/20 w-44 border border-white/50 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🩺</span>
                </div>
                <div>
                  <p className="text-navy font-semibold text-xs leading-tight">
                    {t('hero.card1_title')}
                  </p>
                  <p className="text-navy/50 text-[11px] mt-0.5">
                    {t('hero.card1_sub')}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 – bottom right */}
            <div
              className="absolute -right-6 bottom-24 bg-navy/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl w-44 border border-white/10 animate-float"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⚙️</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs leading-tight">
                    {t('hero.card2_title')}
                  </p>
                  <p className="text-white/40 text-[11px] mt-0.5">
                    {t('hero.card2_sub')}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 – center left */}
            <div
              className="absolute -left-8 bottom-1/3 bg-gold/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl w-40 border border-gold/50 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-navy/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✨</span>
                </div>
                <div>
                  <p className="text-navy font-semibold text-xs leading-tight">
                    {t('hero.card3_title')}
                  </p>
                  <p className="text-navy/60 text-[11px] mt-0.5">
                    {t('hero.card3_sub')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
