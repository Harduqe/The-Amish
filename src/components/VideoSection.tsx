import { useState } from 'react';
import { Captions, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n';
import { videoSection, ui } from '@/content';

const spokenTranscript = `00:00 Lancaster County and the Amish community. Introduction and location. Lancaster County is in South East Pennsylvania.

00:11 It has a city with museum and restaurant and also a quiet countryside. With farms and a small towns.

00:21 Amish country, it has one of the oldest and biggest Amish communities in the United States. History and faith. The Amish group started in Europe in the 16th century. The first big group come to Lancaster in the early 18th century.

00:41 Religion. They are Christians, people decide to get baptized and join the church when they are adults.

00:50 Daily life and technology. The ordinance. This is a set of rules for the community. Each church group has different rules, rules for clothes, work and technology.

01:11 They do not hate modern things. They just use technology carefully. For example, some people do not use public electricity or own cars, but they use other power sources when needed.

01:20 Languages, Pennsylvania Dutch. They speak this language at home. English, they learn English for school and to talk to visitors. Classic German, they use it for church and religion reading.

01:41 You can talk to them in English. Work and local life. Amish people work in farming, woodworking, construction, and small shops.

02:00 Living together. Amish and non-Amish neighbors live and work together in the same area. You can support local businesses, but please respect their private life.

02:20 Tips for visitors: respect privacy. Always ask before taking a photo of people. Do not enter private homes or farms. Remember that not all Amish families have the exact same rules.

02:40 How to get around. You can travel to Lancaster County by train, bus, or car. Walking or riding a basic bicycle are great options because the land is flat. Public transport does not go to rural roads, so it is best to stay in a town center.

03:00 Useful phrases for directions: “Excuse me, how do I get to Lancaster station?” “Follow the signs to the town center.” “Go north on Route 222. Then turn left at the second traffic light. The marker is next to the plaza near the visitor center.”

03:31 Road safety rules. Slow down when you see a horse carriage. Do not pass a carriage on a sharp curve. Give extra space when you try to pass a carriage. Do not use the horn near horses because it can scare them.`;

export default function VideoSection() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const videoSrc = import.meta.env.VITE_EDUCATIONAL_VIDEO_URL || '/video/AmishVideo.mp4';
  const captionsSrc = import.meta.env.VITE_EDUCATIONAL_VIDEO_CAPTIONS_EN || '/video/AmishVideo.en.vtt';
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
          <div className="mt-4 border-b border-cream-100/15 pb-6">
            <p className="text-sm font-semibold text-sage-300">
              {lang === 'en' ? 'Spoken transcript (English)' : 'Transcripción del audio (inglés)'}
            </p>
            <p className="mt-3 max-w-prose whitespace-pre-line text-sm leading-relaxed text-cream-100/90">
              {spokenTranscript}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
