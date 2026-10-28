import { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { useLang } from '@/i18n';
import { region, ui } from '@/content';

export default function DiscoverRegion() {
  const { lang } = useLang();
  const [activePointIndex, setActivePointIndex] = useState(() => {
    const firstVerifiedPanorama = region.points.findIndex((point) => Boolean(point.pano || point.coordinates));
    return firstVerifiedPanorama >= 0 ? firstVerifiedPanorama : 0;
  });
  const activePoint = region.points[activePointIndex];
  const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY?.trim();
  const panoramaTarget = activePoint.pano
    ? `pano=${encodeURIComponent(activePoint.pano)}`
    : activePoint.coordinates
      ? `location=${encodeURIComponent(activePoint.coordinates)}&source=outdoor&radius=${activePoint.radius ?? 100}`
      : undefined;
  const streetViewUrl = mapsKey && panoramaTarget
    ? `https://www.google.com/maps/embed/v1/streetview?key=${encodeURIComponent(mapsKey)}&${panoramaTarget}&heading=${activePoint.heading ?? 0}&pitch=${activePoint.pitch ?? 0}&fov=85`
    : undefined;

  return (
    <section id="region" tabIndex={-1} className="page-section bg-cream-100">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">{ui.sectionLabel.region[lang]}</p>
        <h2 className="section-title text-bark-900">{region.heading[lang]}</h2>
        <p className="section-copy mt-4 text-bark-800">{region.lead[lang]}</p>
      </div>

      <div className="region-viewer-bleed mt-8 bg-bark-900">
        {streetViewUrl ? (
          <iframe
            key={activePoint.pano ?? activePoint.coordinates}
            title={lang === 'en' ? `Google Street View panorama near ${activePoint.location.en}` : `Panorámica de Google Street View cerca de ${activePoint.location.es}`}
            src={streetViewUrl}
            className="region-viewer-frame"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div
            role="status"
            className="region-viewer-fallback flex flex-col items-center justify-center bg-cream-50 px-6 text-center"
          >
            <MapPin className="h-8 w-8 text-sage-700" aria-hidden />
            <p className="mt-4 max-w-md font-serif text-xl font-semibold text-bark-900">
              {!mapsKey
                ? lang === 'en' ? 'Street View is not configured' : 'Street View no está configurado'
                : lang === 'en' ? 'No verified outdoor panorama for this point' : 'No hay una panorámica exterior verificada para este punto'}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-bark-800">
              {!mapsKey
                ? lang === 'en'
                  ? 'Set VITE_GOOGLE_MAPS_EMBED_API_KEY in .env.local, allow this page origin in its referrer restrictions, and restart Vite.'
                  : 'Configura VITE_GOOGLE_MAPS_EMBED_API_KEY en .env.local, permite el origen de esta página en las restricciones de referencia y reinicia Vite.'
                : lang === 'en'
                  ? 'Select another destination with verified Street View coverage.'
                  : 'Selecciona otro destino con cobertura de Street View verificada.'}
            </p>
          </div>
        )}
      </div>

      <div className="section-frame mt-4">
        <article className="content-card mx-auto flex w-full max-w-5xl flex-col gap-3 border border-sage-300/50 bg-cream-50 p-3 text-bark-900 sm:p-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-sage-700" aria-hidden />
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold leading-tight">{activePoint.name[lang]}</h3>
                <p className="mt-0.5 text-xs font-medium text-bark-700">{activePoint.location[lang]}</p>
              </div>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-bark-800">{activePoint.role[lang]}</p>
          </div>

          <nav
            aria-label={lang === 'en' ? 'Choose a Street View destination' : 'Elige un destino de Street View'}
            className="flex flex-wrap gap-1.5"
          >
            {region.points.map((point, index) => {
              const selected = index === activePointIndex;
              return (
                <button
                  key={point.name.en}
                  type="button"
                  onClick={() => setActivePointIndex(index)}
                  aria-pressed={selected}
                  className={`min-h-10 rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700 ${selected ? 'border-sage-700 bg-sage-700 text-cream-50' : 'border-sage-300 bg-cream-50 text-bark-800 hover:border-sage-600 hover:bg-sage-100'}`}
                >
                  {point.name[lang]}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-sage-200 pt-2 text-sm font-semibold">
            <a
              href={activePoint.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link inline-flex min-h-9 items-center gap-1 text-slateblue-700 underline decoration-slateblue-400 underline-offset-4 hover:text-slateblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"
            >
              {lang === 'en' ? 'Visitor information' : 'Información para visitantes'}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only"> — {activePoint.name[lang]} ({ui.opensNewTab[lang]})</span>
            </a>
            <a
              href={activePoint.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link inline-flex min-h-9 items-center gap-1 text-slateblue-700 underline decoration-slateblue-400 underline-offset-4 hover:text-slateblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"
            >
              {lang === 'en' ? 'Google Maps' : 'Google Maps'}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
            </a>
          </div>
        </article>
        <p className="mt-3 text-xs leading-relaxed text-bark-700/80">{region.streetViewNote[lang]}</p>
      </div>
    </section>
  );
}
