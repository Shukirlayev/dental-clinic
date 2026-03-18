import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    'nav.about',
    'nav.services',
    'nav.doctors',
    'nav.reviews',
    'nav.contact',
  ];
  const hrefs = [
    '#about',
    '#services',
    '#doctors',
    '#testimonials',
    '#contact',
  ];

  return (
    <footer style={{ background: '#070E1C' }} className="text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="text-navy font-display font-bold text-sm">
                  R
                </span>
              </div>
              <div>
                <span className="text-white font-display font-semibold text-sm block">
                  Dr. Rashid's
                </span>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em]">
                  Dental Clinic
                </span>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mt-4 font-light">
              {t('footer.tagline')}
            </p>

            {/* Social placeholders */}
            <div className="flex gap-2 mt-5">
              {['Tg', 'Ig', 'FB'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full border border-white/15 hover:border-gold/40 hover:bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <span className="text-white/40 hover:text-gold text-[10px] font-semibold">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.links_title')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((key, i) => (
                <li key={key}>
                  <a
                    href={hrefs[i]}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gold/60 text-xs mt-0.5">📍</span>
                <span className="text-white/40 text-sm leading-snug">
                  Nukus, Karakalpakstan, Uzbekistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60 text-xs">📞</span>
                <span className="text-white/40 text-sm">+998 XX XXX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60 text-xs">💬</span>
                <a
                  href="https://wa.me/998000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400/70 hover:text-emerald-400 text-sm transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.hours_title')}
            </h4>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('footer.hours_val')}
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 border border-gold/30 hover:border-gold/60 text-gold text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-gold/5"
            >
              {t('nav.book')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {year} Dr. Rashid's Dental Clinic. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse" />
            <span className="text-white/20 text-xs ml-1">
              Nukus, Uzbekistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
