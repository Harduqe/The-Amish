import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n';
import { photoCredits, toolkit, ui, type PodcastSpeaker } from '@/content';
import PodcastPlayer from '@/components/PodcastPlayer';

const AUDIO_SRC = '/audio/Travel_Toolkit_Podcast.mp3';
const COVER_PHOTO_ID = '/photos/33777986/';

const speakerStyles: Record<PodcastSpeaker, { card: string; label: string }> = {
  host: {
    card: 'mr-0 border-l-4 border-sage-400 bg-cream-50 text-bark-900 sm:mr-16',
    label: 'text-sage-600',
  },
  guide: {
    card: 'ml-0 border-l-4 border-slateblue-400 bg-slateblue-500/10 text-bark-900 sm:ml-16',
    label: 'text-slateblue-600',
  },
  both: {
    card: 'mx-0 border border-cream-100/20 bg-bark-800 text-cream-50 text-center sm:mx-8',
    label: 'text-sage-300',
  },
};

export default function EnglishToolkit() {
  const { lang } = useLang();
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const cover = photoCredits.find((photo) => photo.url.includes(COVER_PHOTO_ID)) ?? photoCredits[0];

  return (
    <section id="toolkit" tabIndex={-1} className="page-section bg-cream-100">
      <div className="section-frame">
        <p className="section-kicker text-sage-600">{ui.sectionLabel.toolkit[lang]}</p>
        <h2 className="section-title text-bark-900">{toolkit.heading[lang]}</h2>

        {/* Podcast cover */}
        <article className="mt-10 grid overflow-hidden rounded-3xl bg-bark-900 text-cream-50 shadow-[0_18px_40px_rgb(34_28_22/18%)] md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <figure className="relative m-0 aspect-[4/3] md:aspect-auto md:min-h-full">
            <img
              src={cover.url}
              alt={cover.alt[lang]}
              width={940}
              height={650}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-bark-900/70 px-3 py-1 text-[0.7rem] tracking-wide text-cream-100/90">
              {lang === 'en' ? 'Photo' : 'Foto'}: {cover.photographer} / Pexels
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-4 p-6 sm:p-9">
            <p className="section-kicker mb-0 text-sage-300">{toolkit.series[lang]}</p>
            <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {toolkit.episodeTitle[lang]}
            </h3>
            <p className="max-w-prose text-base leading-relaxed text-cream-100/85">{toolkit.episodeDescription[lang]}</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm" aria-label={lang === 'en' ? 'Participants' : 'Participantes'}>
              <li className="rounded-full border border-sage-300/50 bg-sage-600/30 px-3 py-1.5 font-medium">
                {toolkit.speakers.host[lang]}
              </li>
              <li className="rounded-full border border-slateblue-400/60 bg-slateblue-500/25 px-3 py-1.5 font-medium">
                {toolkit.speakers.guide[lang]}
              </li>
            </ul>
          </div>
        </article>

        {/* Featured player */}
        <div className="mt-6">
          <PodcastPlayer src={AUDIO_SRC} title={toolkit.episodeTitle[lang]} />
          <p className="mt-3 text-sm text-bark-700">{toolkit.audioNote[lang]}</p>
        </div>

        {/* Transcript */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl font-semibold text-bark-900">{toolkit.transcriptHeading[lang]}</h3>
          <p className="section-copy mt-2 text-bark-800">{toolkit.transcriptLead[lang]}</p>
          <button
            type="button"
            onClick={() => setTranscriptOpen((open) => !open)}
            aria-expanded={transcriptOpen}
            aria-controls="podcast-transcript"
            className="interactive-control mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-sage-600 px-5 py-2 text-sm font-semibold text-sage-700 hover:bg-sage-600 hover:text-cream-50"
          >
            {transcriptOpen ? toolkit.hideTranscript[lang] : toolkit.showTranscript[lang]}
            <ChevronDown className={`h-4 w-4 transition-transform ${transcriptOpen ? 'rotate-180' : ''}`} aria-hidden />
          </button>
          {/* The hidden attribute sits on a wrapper without a display utility, so it actually hides the list. */}
          <div id="podcast-transcript" hidden={!transcriptOpen} className="mt-6">
            <ol className="flex flex-col gap-4 rounded-3xl bg-cream-50 p-4 sm:p-6">
              {toolkit.transcript.map((turn, i) => (
                <li key={i} className={`rounded-2xl p-5 leading-relaxed shadow-sm sm:p-6 ${speakerStyles[turn.speaker].card}`}>
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${speakerStyles[turn.speaker].label}`}>
                    {toolkit.speakers[turn.speaker][lang]}
                  </p>
                  <p className="text-base">{turn.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Cultural vocabulary */}
        <div className="mt-14">
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
                {reference.title[lang]}
                <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
