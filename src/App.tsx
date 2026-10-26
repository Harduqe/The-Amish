import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import DiscoverRegion from '@/components/DiscoverRegion';
import GettingThere from '@/components/GettingThere';
import VideoSection from '@/components/VideoSection';
import ResponsibleTourism from '@/components/ResponsibleTourism';
import EnglishToolkit from '@/components/EnglishToolkit';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';
import { LanguageProvider, useLang } from '@/i18n';
import { metadata, ui } from '@/content';

function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

function Page() {
  const { lang } = useLang();

  useEffect(() => {
    document.title = metadata.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description[lang]);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title[lang]);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description[lang]);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'en' ? 'en_US' : 'es_ES');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title[lang]);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description[lang]);
  }, [lang]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sage-700 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
      >
        {ui.skipToContent[lang]}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Introduction />
        <DiscoverRegion />
        <GettingThere />
        <VideoSection />
        <ResponsibleTourism />
        <EnglishToolkit />
        <Sources />
      </main>
      <Footer />
    </>
  );
}

export default App;
