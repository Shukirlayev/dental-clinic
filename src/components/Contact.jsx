import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  const infoItems = [
    { icon: '📍', label: t('contact.address_label'), value: t('contact.address') },
    { icon: '📞', label: t('contact.phone_label'), value: t('contact.phone') },
    { icon: '🕐', label: t('contact.hours_label'), value: t('contact.hours') },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">{t('contact.label')}</span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy font-semibold mt-3">{t('contact.headline')}</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Map placeholder (3 cols) */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 relative shadow-lg shadow-navy/5">
              {/* Map placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <div
                  className="w-full h-full absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(#94a3b8 1px, transparent 1px),
                      linear-gradient(90deg, #94a3b8 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Road lines */}
                <div className="absolute w-full h-3 bg-slate-300/80 top-1/2 -translate-y-1/2" />
                <div className="absolute w-3 h-full bg-slate-300/80 left-1/2 -translate-x-1/2" />
                {/* Pin */}
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-14 h-14 rounded-full bg-navy shadow-xl shadow-navy/30 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-display font-bold text-base">R</span>
                  </div>
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-navy -mt-0.5" />
                  <div className="mt-3 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-slate-200 text-center">
                    <p className="text-navy font-semibold text-xs">Dr. Rashid's Clinic</p>
                    <p className="text-navy/50 text-[11px] mt-0.5">Nukus, Uzbekistan</p>
                  </div>
                </div>
              </div>
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
          </div>

          {/* Contact Info (2 cols) */}
          <div className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

            {/* Info cards */}
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-ivory rounded-2xl p-5 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-navy/8 flex items-center justify-center flex-shrink-0 text-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="text-navy text-sm font-medium leading-snug">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <a
              href="https://wa.me/998000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span className="text-xl">💬</span>
              <span className="text-sm">{t('contact.whatsapp')}</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-white font-semibold py-4 rounded-2xl transition-all duration-200 border border-gold/20 hover:border-gold/40 hover:-translate-y-0.5"
            >
              <span className="text-xl">📅</span>
              <span className="text-sm">{t('contact.book_cta')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
