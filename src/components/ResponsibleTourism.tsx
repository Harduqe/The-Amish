import { ShieldCheck, CameraOff, Lock, Car, Heart, Clock, ShoppingBag } from 'lucide-react';
import { useLang } from '@/i18n';
import { responsible, ui } from '@/content';

const icons = [ShieldCheck, CameraOff, Lock, Car, Heart, Clock, ShoppingBag];

export default function ResponsibleTourism() {
  const { lang } = useLang();
  return (
    <section id="responsible" tabIndex={-1} className="page-section bg-sage-700 text-cream-50">
      <div className="section-frame">
        <p className="section-kicker text-cream-100/80">
          {ui.sectionLabel.responsible[lang]}
        </p>
        <h2 className="section-title">
          {responsible.heading[lang]}
        </h2>
        <p className="section-copy mt-4 text-cream-100/90">
          {responsible.lead[lang]}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {responsible.tips.map((tip, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <li
                key={i}
                className="content-card card-interactive border border-cream-100/20 bg-sage-600/50 p-5 hover:border-cream-100/35 hover:bg-sage-600/70"
              >
                <Icon className="mb-3 h-6 w-6 text-cream-100/90" aria-hidden />
                <p className="text-sm leading-relaxed">{tip[lang]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
