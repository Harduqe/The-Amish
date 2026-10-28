import { useEffect, useRef, useState } from 'react';
import { Menu, X, Languages, ArrowUp } from 'lucide-react';
import { useLang } from '@/i18n';
import { navItems, ui } from '@/content';

export default function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigateFromMenu = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.focus({ preventScroll: true });
    }, 0);
  };

  useEffect(() => {
    let frame = 0;
    const updatePosition = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);

      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
      const sectionMarker = Math.min(160, window.innerHeight * 0.25);
      const threshold = window.scrollY + headerHeight + sectionMarker;
      let currentSection = navItems[0].id;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= threshold) {
          currentSection = item.id;
        }
      }
      setActiveSection(currentSection);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-bark-900/5 bg-cream-50/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-3 py-2 sm:gap-4">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="min-w-0 rounded-sm font-serif text-base font-semibold tracking-tight text-bark-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 sm:text-lg"
          >
            <span className="text-sage-600">{ui.siteName[lang]}</span>
            <span className="ml-2 hidden text-xs font-sans font-normal uppercase tracking-widest text-bark-700/60 sm:inline">
              {ui.tagline[lang]}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={ui.mainNavigation[lang]}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sage-300/30 hover:text-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 ${activeSection === item.id ? 'bg-sage-300/30 text-sage-700' : 'text-bark-800'}`}
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="inline-flex items-center overflow-hidden rounded-md border border-sage-300/60"
              role="group"
              aria-label={ui.langLabel[lang]}
            >
              <Languages className="mx-2 h-4 w-4 text-sage-600" aria-hidden />
              {(['en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  aria-pressed={lang === l}
                  className={`interactive-control min-h-11 px-2.5 py-2 text-sm font-medium uppercase ${
                    lang === l ? 'bg-sage-500 text-cream-50' : 'text-bark-700 hover:bg-sage-300/30'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              ref={menuButtonRef}
              className="interactive-control rounded-lg p-2.5 text-bark-800 hover:bg-sage-300/30 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? ui.closeMenu[lang] : ui.openMenu[lang]}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          hidden={!open}
          className="border-t border-sage-300/40 pb-4 pt-2 lg:hidden"
          aria-label={ui.mobileNavigation[lang]}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => navigateFromMenu(item.id)}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className={`block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium hover:bg-sage-300/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 ${activeSection === item.id ? 'bg-sage-300/30 text-sage-700' : 'text-bark-800'}`}
            >
              {item.label[lang]}
            </a>
          ))}
        </nav>
      </div>
    </header>
    {scrolled && (
      <button
        type="button"
        onClick={() => window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })}
        aria-label={ui.backToTop[lang]}
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sage-300 bg-cream-50/95 text-sage-700 shadow-md backdrop-blur transition-colors hover:bg-sage-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700 motion-reduce:scroll-auto"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    )}
    </>
  );
}
