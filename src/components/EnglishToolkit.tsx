import { useLang } from '@/i18n';
import { toolkit, ui } from '@/content';

export default function EnglishToolkit() {
  const { lang } = useLang();
  return (
    <section id="toolkit" tabIndex={-1} className="page-section bg-cream-100">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">
          {ui.sectionLabel.toolkit[lang]}
        </p>
        <h2 className="section-title text-bark-900">
          {toolkit.heading[lang]}
        </h2>
        <p className="section-copy mt-4 text-bark-800">
          {toolkit.lead[lang]}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.blocks.map((b, i) => (
            <div
              key={i}
              className="content-card card-interactive border border-sage-300/40 bg-cream-50 p-5 sm:p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-bark-900">{b.title[lang]}</h3>
              <ul className="mt-3 space-y-2">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="rounded-md border-l-2 border-slateblue-400 bg-cream-100 px-3 py-1.5 text-sm italic text-bark-800"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-2xl font-semibold text-bark-900">{toolkit.glossaryHeading[lang]}</h3>
          <p className="section-copy mt-2 text-bark-800">{toolkit.glossaryLead[lang]}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.glossary.map((item) => (
              <div key={item.term} className="content-card border border-sage-300/40 bg-cream-50 p-5">
                <dt className="font-serif text-lg font-semibold text-bark-900">{item.term}</dt>
                <dd className="mt-1 text-sm font-medium text-slateblue-600">{item.translation[lang]}</dd>
                <dd className="mt-2 text-sm leading-relaxed text-bark-800">{item.meaning[lang]}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-bark-700">
            <span className="font-semibold">{ui.glossarySources[lang]}:</span>
            {toolkit.glossaryReferences.map((reference) => (
              <a
                key={reference.url}
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link inline-flex min-h-11 items-center text-slateblue-600 hover:text-slateblue-500"
              >
                {reference.title}
                <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
