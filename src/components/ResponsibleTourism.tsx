import { ShieldCheck, CameraOff, Lock, Car, Heart, Clock, ShoppingBag } from 'lucide-react';
import { useLang } from '@/i18n';
import { photoCredits, responsible, ui } from '@/content';
import { pexelsImageUrl } from '@/imageSources';

const icons = [ShieldCheck, CameraOff, Lock, Car, Heart, Clock, ShoppingBag];

export default function ResponsibleTourism() {
  const { lang } = useLang();
  const backgroundPhoto = photoCredits.find((photo) => photo.url.includes('/photos/32678634/'));
  return (
    <section id="responsible" tabIndex={-1} className="page-section relative isolate overflow-hidden bg-bark-900 text-cream-50">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={pexelsImageUrl(backgroundPhoto?.url ?? 'https://images.pexels.com/photos/32678634/pexels-photo-32678634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1920, 16 / 9)}
          alt=""
          className="h-full w-full object-cover object-center opacity-80"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bark-900/55 via-sage-700/45 to-bark-900/60" />
      </div>
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="section-kicker text-sage-300">
            {ui.sectionLabel.responsible[lang]}
          </p>
          <h2 className="section-title">
            {responsible.heading[lang]}
          </h2>
          <p className="section-copy mt-4 text-cream-100/90">
            {responsible.lead[lang]}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {responsible.tips.map((tip, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <li
                key={i}
                className={`content-card card-interactive group border border-cream-100/25 bg-bark-900/60 p-5 shadow-lg shadow-bark-900/30 backdrop-blur-sm hover:-translate-y-1 hover:border-sage-300/60 hover:bg-bark-900/75 ${i === responsible.tips.length - 1 ? 'lg:col-start-2' : ''}`}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 bg-cream-50/10 text-cream-100 transition-colors group-hover:bg-cream-50/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-relaxed text-cream-50">{tip[lang]}</p>
              </li>
            );
          })}
        </ul>
        {backgroundPhoto && (
          <p className="mt-6 text-right text-xs text-cream-100/70">
            {lang === 'en' ? 'Photo by' : 'Foto de'} {backgroundPhoto.photographer} / Pexels
          </p>
        )}
      </div>
    </section>
  );
}
