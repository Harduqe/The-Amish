import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useLang } from '@/i18n';
import { newSections } from '@/content';

// Same Google Street View embed mechanism as DiscoverRegion: one pano or coordinates per verified point.
// Points come from newSections.places.streetViewPoints and stay empty until their locations are verified.
export default function PlacesStreetView() {
  const { lang } = useLang();
  const copy = newSections.places;
  const points = copy.streetViewPoints;
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = points[activeIndex];
  const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY?.trim();
  const panoramaTarget = activePoint?.pano
    ? `pano=${encodeURIComponent(activePoint.pano)}`
    : activePoint?.coordinates
      ? `location=${encodeURIComponent(activePoint.coordinates)}&source=outdoor&radius=${activePoint.radius ?? 100}`
      : undefined;
  const streetViewUrl = mapsKey && panoramaTarget
    ? `https://www.google.com/maps/embed/v1/streetview?key=${encodeURIComponent(mapsKey)}&${panoramaTarget}&heading=${activePoint.heading ?? 0}&pitch=${activePoint.pitch ?? 0}&fov=85`
    : undefined;

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-sage-300/40 bg-bark-900">
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
        <div role="status" className="region-viewer-fallback flex flex-col items-center justify-center bg-cream-50 px-6 text-center">
          <MapPin className="h-8 w-8 text-sage-700" aria-hidden />
          <p className="mt-4 max-w-md font-serif text-xl font-semibold text-bark-900">
            {!mapsKey ? copy.streetViewNoKey[lang] : copy.streetViewNoPoints[lang]}
          </p>
        </div>
      )}

      {points.length > 1 && (
        <div className="flex flex-wrap gap-2 border-t border-sage-300/40 bg-cream-50 p-3" role="group" aria-label={copy.mapHeading[lang]}>
          {points.map((point, i) => (
            <button
              key={point.name.en}
              type="button"
              aria-pressed={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              className="interactive-control min-h-11 rounded-full border border-sage-400 px-4 py-2 text-sm font-semibold text-sage-700 aria-pressed:bg-sage-600 aria-pressed:text-cream-50"
            >
              {point.name[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
