import { ExternalLink, MapPin } from 'lucide-react';
import { useLang } from '@/i18n';
import { region, ui } from '@/content';

export default function DiscoverRegion() {
  const { lang } = useLang();
  return (
    <section id="region" tabIndex={-1} className="page-section bg-cream-100">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">
          {ui.sectionLabel.region[lang]}
        </p>
        <h2 className="section-title text-bark-900">
          {region.heading[lang]}
        </h2>
        <p className="section-copy mt-4 text-bark-800">
          {region.lead[lang]}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="content-card min-h-64 overflow-hidden border border-sage-300/50 bg-cream-50 sm:min-h-80 lg:min-h-[30rem]">
            <iframe
              title={lang === 'en' ? 'Map of Lancaster County, Pennsylvania' : 'Mapa de Lancaster County, Pensilvania'}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-76.6%2C39.9%2C-75.9%2C40.2&layer=mapnik&marker=40.0379%2C-76.3056"
              className="h-64 w-full sm:h-80 lg:h-[30rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <ul className="space-y-3">
            {region.points.map((pt) => (
              <li
                key={pt.name[lang]}
                className="content-card card-interactive flex gap-3 border border-sage-300/40 bg-cream-50 p-4"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" aria-hidden />
                <div>
                  <p className="font-serif text-lg font-semibold text-bark-900">{pt.name[lang]}</p>
                  <p className="text-sm leading-relaxed text-bark-800">{pt.role[lang]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-bark-700/80">
          <p>{region.mapAttribution[lang]}</p>
          <a
            href="https://www.openstreetmap.org/?mlat=40.0379&mlon=-76.3056#map=10/40.0379/-76.3056"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link inline-flex min-h-10 items-center gap-1.5 rounded-md font-semibold text-slateblue-600 underline decoration-slateblue-400 underline-offset-4 hover:text-slateblue-500"
          >
            {lang === 'en' ? 'Open map' : 'Abrir mapa'}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">{ui.opensNewTab[lang]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
