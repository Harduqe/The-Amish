import { ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { intro, photoCredits, ui } from '@/content';

export default function Introduction() {
  const { lang } = useLang();
  const firstPhoto = photoCredits.find((photo) => photo.url.includes('/photos/33777986/'));
  const secondPhoto = photoCredits.find((photo) => photo.url.includes('/photos/34627886/'));

  return (
    <section id="culture" tabIndex={-1} className="page-section bg-cream-50">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <p className="section-kicker text-sage-600">
              {ui.sectionLabel.intro[lang]}
            </p>
            <h2 className="section-title text-bark-900">
              {intro.heading[lang]}
            </h2>
            <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-bark-800 sm:mt-8 sm:space-y-6">
              {intro.paragraphs[lang].map((p, i) => (
                <p key={i} className="max-w-prose">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-7 border-t border-sage-300/60 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-bark-700">
                {ui.references[lang]}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {intro.references.map((reference) => (
                  <li key={reference.url}>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link inline-flex min-h-11 items-center gap-1 text-sm font-medium text-slateblue-600 hover:text-slateblue-500"
                    >
                      {reference.title[lang]}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only"> — {reference.org}. {ui.opensNewTab[lang]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <figure>
              <img
                src="https://images.pexels.com/photos/33777986/pexels-photo-33777986.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt={firstPhoto?.alt[lang] ?? intro.figureCaption[lang]}
                loading="lazy"
                className="content-card aspect-[4/5] w-full bg-cream-200 object-cover"
                decoding="async"
              />
              <figcaption className="mt-2 text-xs text-bark-700/80">
                {lang === 'en' ? 'Photo by' : 'Foto de'} {firstPhoto?.photographer} / Pexels
              </figcaption>
            </figure>
            <figure>
              <img
                src="https://images.pexels.com/photos/34627886/pexels-photo-34627886.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000"
                alt={secondPhoto?.alt[lang] ?? intro.figureCaption[lang]}
                loading="lazy"
                className="content-card aspect-[4/3] w-full bg-cream-200 object-cover"
                decoding="async"
              />
              <figcaption className="mt-2 text-xs text-bark-700/80">
                {lang === 'en' ? 'Photo by' : 'Foto de'} {secondPhoto?.photographer} / Pexels
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
