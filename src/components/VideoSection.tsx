import { useState } from 'react';
import { Captions, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n';
import { videoSection, ui } from '@/content';

export default function VideoSection() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const videoSrc = import.meta.env.VITE_EDUCATIONAL_VIDEO_URL;
  const captionsSrc = import.meta.env.VITE_EDUCATIONAL_VIDEO_CAPTIONS_EN;
  const captionsAvailable = Boolean(videoSrc && captionsSrc && !mediaError);

  return (
    <section id="video" tabIndex={-1} className="page-section bg-bark-900 text-cream-50">
      <div className="section-frame">
        <p className="section-kicker text-sage-300">
          {ui.sectionLabel.video[lang]}
        </p>
        <h2 className="section-title">
          {videoSection.heading[lang]}
        </h2>
        <p className="section-copy mt-3 text-cream-100/85">
          {videoSection.title[lang]} · {videoSection.durationNote[lang]}
        </p>

        <div className="content-card mt-8 overflow-hidden border border-cream-100/15 bg-bark-800">
          {videoSrc && !mediaError ? (
            <video
              className="aspect-video w-full bg-bark-900"
              controls
              preload="metadata"
              playsInline
              aria-label={videoSection.title[lang]}
              onError={() => setMediaError(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              {captionsSrc && (
                <track
                  kind="captions"
                  src={captionsSrc}
                  srcLang="en"
                  label={lang === 'en' ? 'English captions' : 'Subtítulos en inglés'}
                  default
                />
              )}
              {videoSection.unsupported[lang]}
            </video>
          ) : (
            <div
              className="flex aspect-video items-center justify-center bg-gradient-to-br from-bark-800 to-bark-900 p-6 text-center"
              role="status"
            >
              <p className="max-w-md text-sm leading-relaxed text-cream-100/80">
                {mediaError ? videoSection.playbackError[lang] : videoSection.placeholderNote[lang]}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1.5 text-xs text-cream-100/80">
            <Captions className="h-4 w-4" aria-hidden />
            {captionsAvailable
              ? lang === 'en' ? 'English subtitles available' : 'Subtítulos en inglés disponibles'
              : lang === 'en' ? 'Transcript available' : 'Transcripción disponible'}
          </span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="interactive-control inline-flex min-h-11 items-center gap-1.5 rounded-full bg-sage-500 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-sage-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-50"
            aria-controls="video-transcript"
          >
            {open ? videoSection.hideTranscript[lang] : videoSection.showTranscript[lang]}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
          </button>
        </div>

        <div
          id="video-transcript"
          hidden={!open}
          className="content-card mt-6 border border-cream-100/15 bg-bark-800/60 p-5 sm:p-7"
        >
          <h3 className="font-serif text-xl font-semibold">{videoSection.transcriptLabel[lang]}</h3>
          <div className="mt-4 space-y-5">
            {videoSection.minutes.map((m, i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-sage-300">{m.label[lang]}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cream-100/60">{ui.narration[lang]}</p>
                <p className="mt-1 max-w-prose text-sm leading-relaxed text-cream-100/90">{m.text[lang]}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cream-100/60">{ui.subtitleSummary[lang]}</p>
                <p className="mt-1 max-w-prose text-sm leading-relaxed text-cream-100/80">{m.subtitle[lang]}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cream-100/60">{ui.visualSuggestion[lang]}</p>
                <p className="mt-1 max-w-prose text-sm leading-relaxed text-cream-100/80">{m.visual[lang]}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cream-100/60">{ui.audioCue[lang]}</p>
                <p className="mt-1 max-w-prose text-sm leading-relaxed text-cream-100/80">{m.audio[lang]}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cream-100/60">{ui.videoReferences[lang]}:</span>
                  {m.references.map((reference) => (
                    <a
                      key={reference.url}
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link inline-flex min-h-11 items-center text-sm text-sage-300 hover:text-cream-50"
                    >
                      {reference.title}
                      <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
