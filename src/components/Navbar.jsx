import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.doctors', href: '#doctors' },
    { key: 'nav.reviews', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.12)]'
            : 'bg-[#0B1C36]/95 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-7">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light shadow-md shadow-gold/25">
              <span className="font-display text-sm font-bold text-navy">
                R
              </span>
            </div>

            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                Dr. Rashid&apos;s
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? 'text-navy/75 hover:text-navy'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {t(l.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-1 transition-all duration-300 ${
                scrolled
                  ? 'bg-navy/5 border border-navy/10'
                  : 'bg-white/10 border border-white/10'
              }`}
            >
              {LANGS.map((lang, i) => (
                <React.Fragment key={lang.code}>
                  <button
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-widest transition-all duration-200 ${
                      i18n.language === lang.code
                        ? 'bg-gold text-navy'
                        : scrolled
                          ? 'text-navy/55 hover:text-navy'
                          : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>

                  {i < LANGS.length - 1 && (
                    <span
                      className={
                        scrolled
                          ? 'text-navy/20 text-xs'
                          : 'text-white/20 text-xs'
                      }
                    >
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {t('nav.book')}
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div
              className={`mb-1.5 h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <div
              className={`mb-1.5 h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <div
              className={`h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`flex flex-col gap-5 border-t px-5 py-5 ${
              scrolled
                ? 'border-slate-200/70 bg-white/90'
                : 'border-white/10 bg-[#0C1D3A]/92'
            }`}
          >
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-navy/80 hover:text-navy'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {t(l.key)}
              </a>
            ))}

            <div
              className={`flex items-center gap-2 border-t pt-3 ${
                scrolled ? 'border-slate-200' : 'border-white/10'
              }`}
            >
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-widest transition-all ${
                    i18n.language === lang.code
                      ? 'bg-gold text-navy'
                      : scrolled
                        ? 'border border-slate-300 text-navy/60'
                        : 'border border-white/20 text-white/60'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              {t('nav.book')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
