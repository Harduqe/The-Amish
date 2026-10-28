import { Play, ArrowDown } from 'lucide-react';
import { useLang } from '@/i18n';
import { hero, photoCredits, ui } from '@/content';
import { pexelsImageUrl, pexelsSrcSet } from '@/imageSources';

export default function Hero() {
  const { lang } = useLang();
  const heroImage = photoCredits.find((photo) => photo.url.includes('/photos/37410126/'))?.url
    ?? 'https://images.pexels.com/photos/37410126/pexels-photo-37410126.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';
  const heroWidths = [640, 960, 1280, 1920];

  return (
    <section id="home" tabIndex={-1} className="hero-section relative flex min-h-[82svh] items-center overflow-hidden sm:min-h-screen">
      <picture className="absolute inset-0 h-full w-full">
        <source type="image/avif" srcSet={pexelsSrcSet(heroImage, heroWidths, 1.6, 'avif')} sizes="100vw" />
        <source type="image/webp" srcSet={pexelsSrcSet(heroImage, heroWidths, 1.6, 'webp')} sizes="100vw" />
        <img
          src={pexelsImageUrl(heroImage, 1920, 1.6)}
          srcSet={pexelsSrcSet(heroImage, heroWidths, 1.6)}
          sizes="100vw"
          width="1920"
          height="1200"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-bark-900/85 via-bark-900/55 to-bark-900/15" />
      <div className="section-frame relative py-32 sm:py-36">
        <div className="max-w-3xl">
          <p className="section-kicker mb-5 text-cream-100/90">
            Lancaster County · Pennsylvania
          </p>
          <h1 className="max-w-[14ch] font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
            {hero.title[lang]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/95 sm:text-xl sm:leading-8">
            {hero.subtitle[lang]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#culture"
              className="interactive-control inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-sage-600 px-5 py-3 text-sm font-semibold text-cream-50 shadow-md hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-50"
            >
              <ArrowDown className="h-4 w-4" /> {ui.explore[lang]}
            </a>
            <a
              href="#video"
              className="interactive-control inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cream-100/60 bg-bark-900/20 px-5 py-3 text-sm font-semibold text-cream-50 hover:bg-cream-50/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-50"
            >
              <Play className="h-4 w-4" /> {ui.watchVideo[lang]}
            </a>
          </div>
        </div>
      </div>
      <span className="hero-credit">{hero.photoCredit[lang]}</span>
    </section>
  );
}
