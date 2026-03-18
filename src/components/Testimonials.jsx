import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  const testimonials = [1, 2, 3, 4].map(n => ({
    text: t(`testimonials.t${n}_text`),
    name: t(`testimonials.t${n}_name`),
    role: t(`testimonials.t${n}_role`),
  }));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('testimonials.label')}</span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3">{t('testimonials.headline')}</h2>
        </div>

        {/* Featured testimonial */}
        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-3xl mx-auto text-center mb-12">
            {/* Large quote mark */}
            <div className="font-display text-[120px] leading-none text-gold/15 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">"</div>

            {/* Active testimonial */}
            <div className="relative pt-8">
              <p className="font-display text-xl lg:text-2xl text-navy font-light leading-relaxed italic mb-8 transition-all duration-500">
                "{testimonials[active]?.text}"
              </p>
              {/* Reviewer */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <span className="text-white font-display font-semibold text-sm">
                    {testimonials[active]?.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-navy font-semibold text-sm">{testimonials[active]?.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-xs">★</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t_item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left rounded-2xl p-6 border transition-all duration-300 ${
                active === i
                  ? 'border-gold/30 bg-gold/5 shadow-lg shadow-gold/10'
                  : 'border-slate-100 bg-ivory hover:border-slate-200 hover:shadow-md'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80 + 300}ms` }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <span key={j} className="text-gold text-xs">★</span>)}
              </div>
              <p className="text-navy/60 text-xs leading-relaxed font-light line-clamp-3">{t_item.text}</p>
              <p className="text-navy font-semibold text-xs mt-3">{t_item.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
