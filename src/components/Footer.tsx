import { useLang } from '@/i18n';
import { footer, navItems, ui } from '@/content';

export default function Footer() {
  const { lang, setLang } = useLang();

  return (
    <footer className="bg-bark-900 py-12 text-cream-100/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-semibold text-cream-50">{footer.project[lang]}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">{footer.note[lang]}</p>
          </div>

          <nav aria-label={ui.footerNavigation[lang]}>
            <p className="mb-3 text-xs font-sans uppercase tracking-widest text-cream-100/60">
              {footer.sections[lang]}
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-11 items-center rounded-sm py-1 text-sm text-cream-100/80 hover:text-cream-50 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-300"
                  >
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-sans uppercase tracking-widest text-cream-100/60">
              {lang === 'en' ? 'Language' : 'Idioma'}
            </p>
            <div className="inline-flex overflow-hidden rounded-lg border border-cream-100/25" role="group" aria-label={lang === 'en' ? 'Language' : 'Idioma'}>
              {(['en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`interactive-control min-h-11 px-3 py-2 text-sm font-medium uppercase ${
                    lang === l ? 'bg-sage-500 text-cream-50' : 'text-cream-100/80 hover:bg-cream-50/10'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream-100/15 pt-6 text-xs text-cream-100/70">
          © {new Date().getFullYear()} {footer.project[lang]}. {footer.copyright[lang]}
        </div>
      </div>
    </footer>
  );
}
