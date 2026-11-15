import { useId, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n';
import { newSections, ui, type TopicBlock } from '@/content';

interface TopicPanelProps {
  index: number;
  title: Record<'en' | 'es', string>;
  blocks: TopicBlock[];
}

// Accessible expandable topic: a button controls a region; several topics can be open at once.
export default function TopicPanel({ index, title, blocks }: TopicPanelProps) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;
  const copy = newSections.places;

  return (
    <div className="border-b border-sage-300/40 last:border-b-0">
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="interactive-control flex min-h-11 w-full items-center gap-4 p-4 text-left hover:bg-cream-50/70 sm:p-5"
        >
          <span className="font-serif text-2xl font-semibold text-sage-500" aria-hidden>
            {String(index).padStart(2, '0')}
          </span>
          <span className="flex-1 font-serif text-lg font-semibold text-bark-900">{title[lang]}</span>
          <ChevronDown className={`h-5 w-5 flex-none text-sage-700 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>
      </h3>

      {/* The hidden attribute sits on a wrapper without a display utility so it actually hides the content. */}
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="px-4 pb-6 sm:px-5 sm:pl-[5.5rem]">
        <div className="max-w-prose space-y-5">
          {blocks.map((block, i) => {
            if (block.kind === 'text') {
              return (
                <div key={i} className="space-y-4">
                  {block.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-bark-800">
                      {p}
                    </p>
                  ))}
                </div>
              );
            }
            if (block.kind === 'list') {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5 text-base leading-relaxed text-bark-800 marker:text-sage-500">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.kind === 'places') {
              return (
                <div key={i} className="space-y-4">
                  <p className="rounded-xl border border-sage-300/50 bg-cream-100 p-4 text-sm leading-relaxed text-bark-800">
                    {copy.homesNote[lang]}
                  </p>
                  <ul className="divide-y divide-sage-300/40 rounded-xl border border-sage-300/40 bg-cream-100">
                    {block.items.map((place) => (
                      <li key={place.name} className="p-4">
                        <p className="font-serif text-lg font-semibold text-bark-900">{place.name}</p>
                        {place.location && <p className="mt-1 text-sm font-medium text-slateblue-600">{place.location}</p>}
                        <p className="mt-2 text-sm leading-relaxed text-bark-800">{place.note}</p>
                        <a
                          href={place.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external-link mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-slateblue-600 hover:text-slateblue-500"
                        >
                          {copy.visitLinkLabel[lang]}
                          <ExternalLink className="h-4 w-4" aria-hidden />
                          <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <ul key={i} className="divide-y divide-sage-300/40 rounded-xl border border-sage-300/40 bg-cream-100">
                {block.items.map((activity) => (
                  <li key={activity.title} className="p-4">
                    <p className="font-serif text-lg font-semibold text-bark-900">{activity.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-bark-800">{activity.learn}</p>
                    {activity.url && (
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-slateblue-600 hover:text-slateblue-500"
                      >
                        {copy.infoLinkLabel[lang]}
                        <ExternalLink className="h-4 w-4" aria-hidden />
                        <span className="sr-only"> — {ui.opensNewTab[lang]}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
