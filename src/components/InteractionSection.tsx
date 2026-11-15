import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { newSections, photoCredits, ui } from '@/content';

// Final Canva MP4 served from public/video. VITE_FINAL_VIDEO_URL can override it (for example a CDN).
// If the file cannot be loaded, the fallback message is shown instead of a broken player.
const FINAL_VIDEO_SRC: string = import.meta.env.VITE_FINAL_VIDEO_URL || '/video/TheAmishVideo.mp4';
const POSTER_PHOTO_ID = '/photos/33777986/';

const scriptStyles: Record<'one' | 'two' | 'both', { card: string; label: string }> = {
  one: {
    card: 'mr-0 border-l-4 border-sage-400 bg-cream-50 text-bark-900 sm:mr-16',
    label: 'text-sage-600',
  },
  two: {
    card: 'ml-0 border-l-4 border-slateblue-400 bg-slateblue-500/10 text-bark-900 sm:ml-16',
    label: 'text-slateblue-600',
  },
  both: {
    card: 'mx-0 border border-cream-100/20 bg-bark-800 text-cream-50 text-center sm:mx-8',
    label: 'text-sage-300',
  },
};

function PartHeading({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-serif text-lg font-semibold text-sage-500" aria-hidden>
        {letter}
      </span>
      <h3 className="font-serif text-2xl font-semibold text-bark-900">{title}</h3>
    </div>
  );
}

export default function InteractionSection() {
  const { lang } = useLang();
  const copy = newSections.interaction;
  const [scriptOpen, setScriptOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const poster = photoCredits.find((p) => p.url.includes(POSTER_PHOTO_ID)) ?? photoCredits[0];

  return (
    <section id="interaction" tabIndex={-1} className="page-section bg-cream-100">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">{ui.sectionLabel.interaction[lang]}</p>
        <h2 className="section-title text-bark-900">{copy.heading[lang]}</h2>
        <p className="section-copy mt-4 text-bark-800">{copy.lead[lang]}</p>

        <div className="mt-12 space-y-14">
          {/* A. Introduction */}
          <div>
            <PartHeading letter="A" title={copy.parts.intro[lang]} />
            <p className="mt-5 max-w-prose text-base leading-relaxed text-bark-800">{copy.introText}</p>
          </div>

          {/* B. Original tourism content */}
          <div>
            <PartHeading letter="B" title={copy.parts.original[lang]} />
            <figure className="mt-5 m-0 rounded-2xl border-l-4 border-slateblue-400 bg-cream-50 p-5 sm:p-6">
              <figcaption className="text-xs font-semibold uppercase tracking-[0.12em] text-slateblue-600">
                {copy.originalLabel[lang]} · {copy.originalOrg[lang]}
              </figcaption>
              <blockquote className="mt-3 font-serif text-lg leading-relaxed text-bark-900">
                “{copy.originalExcerpt}”
              </blockquote>
              <a
                href={copy.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-slateblue-600 hover:text-slateblue-500"
              >
                {copy.originalLinkLabel[lang]}
                <ExternalLink className="h-4 w-4" aria-hidden />
                <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
              </a>
            </figure>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-bark-700">{copy.originalNote[lang]}</p>
          </div>

          {/* C. Critical analysis */}
          <div>
            <PartHeading letter="C" title={copy.parts.analysis[lang]} />
            <div className="mt-6 space-y-8">
              {copy.analysis.map((item) => (
                <div key={item.title.en}>
                  <h4 className="font-serif text-xl font-semibold text-bark-900">{item.title[lang]}</h4>
                  <div className="mt-3 max-w-prose space-y-4">
                    {item.paragraphs.map((p) => (
                      <p key={p} className="text-base leading-relaxed text-bark-800">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* D. Cultural adaptation */}
          <div>
            <PartHeading letter="D" title={copy.parts.adaptation[lang]} />
            <figure className="mt-6 m-0 rounded-2xl bg-sage-600 p-6 text-cream-50 sm:p-8">
              <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-sage-300">
                {copy.adaptedTitle[lang]}
              </figcaption>
              <blockquote className="mt-4 max-w-prose font-serif text-xl leading-relaxed">“{copy.adaptedMessage}”</blockquote>
            </figure>

            <h4 className="mt-10 font-serif text-xl font-semibold text-bark-900">{copy.decisionsTitle[lang]}</h4>
            <ol className="mt-4 max-w-prose list-decimal space-y-3 pl-5 text-base leading-relaxed text-bark-800 marker:font-semibold marker:text-sage-600">
              {copy.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ol>

            <h4 className="mt-10 font-serif text-xl font-semibold text-bark-900">{copy.responsibleTitle[lang]}</h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {copy.responsible.map((r) => (
                <li key={r} className="rounded-xl border border-sage-300/40 bg-cream-50 px-4 py-3 text-sm font-medium text-bark-800">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* E. Video */}
          <div>
            <PartHeading letter="E" title={copy.parts.video[lang]} />
            <p className="mt-3 text-sm font-semibold text-bark-800">{copy.videoTitle[lang]}</p>
            <div className="mt-5 overflow-hidden rounded-3xl bg-bark-900 shadow-[0_18px_40px_rgb(34_28_22/18%)]">
              {!videoFailed ? (
                <video
                  className="aspect-video w-full bg-bark-900"
                  src={FINAL_VIDEO_SRC}
                  controls
                  preload="none"
                  playsInline
                  poster={poster.url}
                  aria-label={copy.videoTitle[lang]}
                  onError={() => setVideoFailed(true)}
                >
                  {copy.videoUnsupported[lang]}
                </video>
              ) : (
                <div className="relative flex aspect-video items-center justify-center">
                  <img
                    src={poster.url}
                    alt=""
                    width={940}
                    height={650}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                  <p role="status" className="relative max-w-md px-6 text-center text-sm leading-relaxed text-cream-100">
                    {copy.videoError[lang]}
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setScriptOpen((o) => !o)}
              aria-expanded={scriptOpen}
              aria-controls="video-script"
              className="interactive-control mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-sage-600 px-5 py-2 text-sm font-semibold text-sage-700 hover:bg-sage-600 hover:text-cream-50"
            >
              {scriptOpen ? copy.scriptToggleHide[lang] : copy.scriptToggleShow[lang]}
              <ChevronDown className={`h-4 w-4 transition-transform ${scriptOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {/* hidden sits on a wrapper without a display utility so it actually hides the script. */}
            <div id="video-script" hidden={!scriptOpen} className="mt-6">
              <h4 className="font-serif text-xl font-semibold text-bark-900">{copy.scriptHeading[lang]}</h4>
              <ol className="mt-5 flex flex-col gap-4 rounded-3xl bg-cream-50 p-4 sm:p-6">
                {copy.videoScript.map((turn, i) => (
                  <li key={i} className={`rounded-2xl p-5 leading-relaxed shadow-sm sm:p-6 ${scriptStyles[turn.speaker].card}`}>
                    <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${scriptStyles[turn.speaker].label}`}>
                      {copy.scriptSpeakers[turn.speaker][lang]}
                    </p>
                    <p className="text-base">{turn.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
