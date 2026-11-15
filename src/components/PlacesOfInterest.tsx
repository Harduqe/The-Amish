import { useLang } from '@/i18n';
import { newSections, photoCredits, ui } from '@/content';
import PlacesStreetView from '@/components/PlacesStreetView';
import TopicPanel from '@/components/TopicPanel';

const PHOTO_IDS = ['/photos/32678634/', '/photos/462038/'];

export default function PlacesOfInterest() {
  const { lang } = useLang();
  const copy = newSections.places;
  const photos = PHOTO_IDS.map((id) => photoCredits.find((p) => p.url.includes(id))).filter(
    (p): p is (typeof photoCredits)[number] => Boolean(p),
  );

  return (
    <section id="places" tabIndex={-1} className="page-section bg-cream-50">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">{ui.sectionLabel.places[lang]}</p>
        <h2 className="section-title text-bark-900">{copy.heading[lang]}</h2>
        <p className="mt-3 font-serif text-xl italic text-slateblue-600">{copy.subtitle[lang]}</p>
        <p className="section-copy mt-4 text-bark-800">{copy.lead[lang]}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.url} className="m-0 overflow-hidden rounded-2xl bg-cream-100">
              <img
                src={photo.url}
                alt={photo.alt[lang]}
                width={940}
                height={650}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-4 py-2 text-xs text-bark-700/80">
                {lang === 'en' ? 'Photo' : 'Foto'}: {photo.photographer} / Pexels
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-sm font-semibold text-bark-700">{copy.topicsHint[lang]}</p>
        <div className="mt-4 rounded-2xl border border-sage-300/40 bg-cream-100">
          {copy.topics.map((topic, i) => (
            <TopicPanel key={topic.id} index={i + 1} title={topic.title} blocks={topic.blocks} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-2xl font-semibold text-bark-900">{copy.mapHeading[lang]}</h3>
          <PlacesStreetView />
          <p className="mt-3 text-sm text-bark-700">{copy.mapNote[lang]}</p>
        </div>
      </div>
    </section>
  );
}
