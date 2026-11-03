import { ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { intro, photoCredits, ui } from '@/content';
import { pexelsImageUrl, pexelsSrcSet } from '@/imageSources';

export default function Introduction() {
  const { lang } = useLang();
  const firstPhoto = photoCredits.find((photo) => photo.url.includes('/photos/33777986/'));
  const secondPhoto = photoCredits.find((photo) => photo.url.includes('/photos/34627886/'));
  const firstPhotoUrl = firstPhoto?.url ?? 'https://images.pexels.com/photos/33777986/pexels-photo-33777986.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
  const secondPhotoUrl = secondPhoto?.url ?? 'https://images.pexels.com/photos/34627886/pexels-photo-34627886.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000';
  const firstWidths = [480, 720, 960, 1200, 1600];

  return (
    <section id="culture" tabIndex={-1} className="page-section relative isolate overflow-hidden bg-cream-50">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={pexelsImageUrl(secondPhotoUrl, 1920, 16 / 9)}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-cream-50/80" />
      </div>
      <div className="section-frame">
          <div>
            <p className="section-kicker text-sage-600">
              {ui.sectionLabel.intro[lang]}
            </p>
            <h2 className="section-title text-bark-900">
              {intro.heading[lang]}
            </h2>
            <div className="mt-6 font-sans text-base leading-relaxed text-bark-800 sm:mt-8">
              {intro.paragraphs[lang].map((p, i) => (
                <div key={i}>
                  {i === 1 && (
                    <figure className="mb-5 mt-1 w-full sm:float-right sm:mb-4 sm:ml-7 sm:w-[44%] sm:max-w-[480px]">
                      <picture>
                        <source type="image/avif" srcSet={pexelsSrcSet(firstPhotoUrl, firstWidths, 4 / 3, 'avif')} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 44vw, calc(100vw - 2rem)" />
                        <source type="image/webp" srcSet={pexelsSrcSet(firstPhotoUrl, firstWidths, 4 / 3, 'webp')} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 44vw, calc(100vw - 2rem)" />
                        <img
                          src={pexelsImageUrl(firstPhotoUrl, 1200, 4 / 3)}
                          srcSet={pexelsSrcSet(firstPhotoUrl, firstWidths, 4 / 3)}
                          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 44vw, calc(100vw - 2rem)"
                          width="1200"
                          height="900"
                          alt={firstPhoto?.alt[lang] ?? intro.figureCaption[lang]}
                          loading="lazy"
                          className="content-card aspect-[4/3] w-full bg-cream-200 object-cover shadow-xl ring-1 ring-bark-900/10"
                          decoding="async"
                        />
                      </picture>
                      <figcaption className="mt-2 text-xs text-bark-700/80">
                        {lang === 'en' ? 'Photo by' : 'Foto de'} {firstPhoto?.photographer} / Pexels
                      </figcaption>
                    </figure>
                  )}
                  <p className="mb-5 max-w-prose sm:mb-6">{p}</p>
                </div>
              ))}
            </div>
            <div className="clear-both mt-7 border-t border-sage-300/60 pt-5">
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
      </div>
    </section>
  );
}
