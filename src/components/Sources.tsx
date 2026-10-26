import { ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { sources, ui } from '@/content';

export default function Sources() {
  const { lang } = useLang();
  return (
    <section id="sources" tabIndex={-1} className="page-section bg-cream-50">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">
          {ui.sectionLabel.sources[lang]}
        </p>
        <h2 className="section-title text-bark-900">
          {sources.heading[lang]}
        </h2>
        <p className="section-copy mt-4 text-bark-800">
          {sources.lead[lang]}
        </p>

        <ul className="mt-10 divide-y divide-sage-300/40 rounded-lg border border-sage-300/40 bg-cream-100">
          {sources.list.map((s) => (
            <li key={s.url} className="border-0 border-b border-sage-300/40 p-4 last:border-b-0 sm:p-5">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 flex-wrap items-start justify-between gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-600"
              >
                <span>
                  <span className="break-words font-serif text-lg font-semibold text-slateblue-600 group-hover:underline">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm text-bark-800">{s.org}</span>
                  <span className="mt-1 block text-sm text-bark-700/80">{s.note[lang]}</span>
                </span>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slateblue-500" aria-hidden />
                <span className="sr-only">{ui.opensNewTab[lang]}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-bark-700/70">{sources.consultedOn[lang]}</p>
      </div>
    </section>
  );
}
