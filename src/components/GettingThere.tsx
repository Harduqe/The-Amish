import { Train, Bus, Car, Bike, Route, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { gettingThere, ui } from '@/content';

const icons = [Train, Bus, Car, Bike];

export default function GettingThere() {
  const { lang } = useLang();
  return (
    <section id="getting-there" tabIndex={-1} className="page-section bg-cream-50">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">
          {ui.sectionLabel.getting[lang]}
        </p>
        <h2 className="section-title text-bark-900">
          {gettingThere.heading[lang]}
        </h2>
        <p className="section-copy mt-4 text-bark-800">
          {gettingThere.lead[lang]}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {gettingThere.cards.map((c, i) => {
            const Icon = icons[i] ?? Route;
            return (
              <div
                key={c.title[lang]}
                className="content-card card-interactive border border-sage-300/40 bg-cream-100 p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500/10 text-sage-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-bark-900">{c.title[lang]}</h3>
                </div>
                <p className="text-sm leading-relaxed text-bark-800">{c.body[lang]}</p>
                {c.title.en === 'By Train' && (
                  <a
                    href={gettingThere.trainLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link mt-4 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-slateblue-600 hover:text-slateblue-500"
                  >
                    {gettingThere.trainLink.label[lang]}
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{ui.opensNewTab[lang]}</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="content-card border border-sage-300/40 bg-cream-100 p-5 sm:p-6">
            <h3 className="font-serif text-xl font-semibold text-bark-900">
              {gettingThere.directionsHeading[lang]}
            </h3>
            <ul className="mt-4 space-y-3">
              {gettingThere.directions.map((d, i) => (
                <li
                  key={i}
                  className="rounded-md border-l-2 border-slateblue-500 bg-cream-50 px-3 py-2 text-sm italic text-bark-800"
                >
                  “{d[lang]}”
                </li>
              ))}
            </ul>
          </div>

          <div className="content-card border border-sage-300/40 bg-cream-100 p-5 sm:p-6">
            <h3 className="font-serif text-xl font-semibold text-bark-900">
              {gettingThere.safetyHeading[lang]}
            </h3>
            <ul className="mt-4 space-y-3">
              {gettingThere.safety.map((d, i) => (
                <li key={i} className="flex gap-2 text-sm text-bark-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" aria-hidden />
                  {d[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
