import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useLang } from '@/i18n';
import { toolkit } from '@/content';

interface PodcastPlayerProps {
  src: string;
  title: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export default function PodcastPlayer({ src, title }: PodcastPlayerProps) {
  const { lang } = useLang();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);

  const labels = toolkit.player;
  const progress = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;
  const volumePercent = Math.round((muted ? 0 : volume) * 100);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || failed) return;
    if (audio.paused) {
      audio.play().catch(() => setFailed(true));
    } else {
      audio.pause();
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (audio) audio.currentTime = value;
    setCurrent(value);
  };

  return (
    <div className="podcast-player rounded-2xl border border-cream-100/10 bg-bark-900 p-5 text-cream-50 shadow-[0_18px_40px_rgb(34_28_22/22%)] sm:p-7">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onError={() => setFailed(true)}
      >
        {labels.unsupported[lang]}
      </audio>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={togglePlay}
          disabled={failed}
          aria-label={playing ? labels.pause[lang] : labels.play[lang]}
          className="interactive-control flex h-16 w-16 flex-none items-center justify-center rounded-full bg-sage-400 text-bark-900 shadow-lg hover:bg-sage-300 focus-visible:outline-cream-50 disabled:cursor-not-allowed disabled:opacity-50 sm:h-20 sm:w-20"
        >
          {playing ? <Pause className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden fill="currentColor" /> : <Play className="ml-1 h-7 w-7 sm:h-9 sm:w-9" aria-hidden fill="currentColor" />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="font-serif text-lg font-semibold leading-snug sm:text-xl">{title}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cream-100/60">
            {toolkit.series[lang]}
          </p>
          <div className="mt-3 flex items-end gap-[3px] sm:gap-[4px]" aria-hidden>
            <span className={`podcast-eq ${playing ? 'is-playing' : ''}`}>
              <i /><i /><i /><i /><i />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step="any"
          value={Math.min(current, duration || 0)}
          disabled={!duration || failed}
          onChange={(e) => seek(Number(e.target.value))}
          aria-label={labels.seek[lang]}
          aria-valuetext={`${formatTime(current)} / ${formatTime(duration)}`}
          className="podcast-range"
          style={{ '--progress': `${progress}%` } as CSSProperties}
        />
        <div className="mt-2 flex items-center justify-between text-xs tabular-nums text-cream-100/75">
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-cream-100/10 pt-4">
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? labels.unmute[lang] : labels.mute[lang]}
          aria-pressed={muted}
          className="interactive-control inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-cream-100/85 hover:bg-cream-50/10 hover:text-cream-50"
        >
          {muted || volume === 0 ? <VolumeX className="h-5 w-5" aria-hidden /> : <Volume2 className="h-5 w-5" aria-hidden />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={muted ? 0 : volume}
          onChange={(e) => {
            const next = Number(e.target.value);
            setVolume(next);
            setMuted(next === 0);
          }}
          aria-label={labels.volume[lang]}
          aria-valuetext={`${volumePercent}%`}
          className="podcast-range podcast-range--volume min-w-0 flex-1 sm:max-w-xs"
          style={{ '--progress': `${muted ? 0 : volume * 100}%` } as CSSProperties}
        />
        <span className="w-10 text-right text-xs tabular-nums text-cream-100/75" aria-hidden>
          {volumePercent}%
        </span>
      </div>

      {failed && (
        <p role="alert" className="mt-4 text-sm text-cream-100/85">
          {labels.error[lang]}
        </p>
      )}
    </div>
  );
}
