import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { stellen } from '@/data/karriereStellen';

type Meta = { title: string; description: string };

const routeMeta: Record<string, Meta> = {
  '/': {
    title: 'Vendis Development Services – Softwareentwicklung',
    description:
      'Auftragsentwicklung für verbundene Unternehmen: Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support von Softwarelösungen.',
  },
  '/entwicklung': {
    title: 'Softwareentwicklung im Auftrag – Vendis',
    description:
      'Leistungen entlang des gesamten Software-Lebenszyklus: von der Anforderungsanalyse über die Implementierung bis zu Test und Betriebs-Support.',
  },
  '/technologien': {
    title: 'Technologien & Stack – Vendis',
    description:
      'React, TypeScript, Node.js, Cloud-Infrastruktur und Testing-Tooling: der Technologie-Stack, mit dem wir Softwarelösungen bauen und betreiben.',
  },
  '/prozess': {
    title: 'Entwicklungsprozess – Vendis',
    description:
      'Wie Analyse, Design, Umsetzung, Qualitätssicherung und Support bei uns ineinandergreifen – transparent, iterativ und nachvollziehbar dokumentiert.',
  },
  '/team': {
    title: 'Team – Vendis Development Services',
    description:
      'Die Menschen hinter Entwicklung, Design, Test und Betrieb: interdisziplinäre Teams für Auftragsentwicklung im Unternehmensverbund.',
  },
  '/karriere': {
    title: 'Karriere & Jobs – Vendis',
    description:
      'Offene Stellen bei Vendis Development Services: remote, flexibel und ohne lange Prozesse – inklusive bezahlter Test- und Entwicklungstätigkeiten.',
  },
  '/karriere/bewerbung': {
    title: 'Bewerbung – Vendis Development Services',
    description:
      'Bewirb dich in wenigen Minuten online bei Vendis Development Services. Kurzes Formular, schnelle Rückmeldung, keine Anschreiben nötig.',
  },
  '/kontakt': {
    title: 'Kontakt – Vendis Development Services',
    description:
      'Anschrift, E-Mail, Telefon und Kontaktformular von Vendis Development Services GmbH in Berlin. Wir melden uns kurzfristig zurück.',
  },
  '/impressum': {
    title: 'Impressum – Vendis Development Services',
    description: 'Pflichtangaben nach § 5 TMG der Vendis Development Services GmbH.',
  },
  '/datenschutz': {
    title: 'Datenschutz – Vendis Development Services',
    description:
      'Informationen zur Verarbeitung personenbezogener Daten bei Vendis Development Services GmbH gemäß DSGVO.',
  },
};

const fallback: Meta = {
  title: 'Vendis Development Services GmbH',
  description:
    'Auftragsentwicklung für verbundene Unternehmen: Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support von Softwarelösungen.',
};

const resolve = (pathname: string): Meta => {
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  if (routeMeta[path]) return routeMeta[path];

  if (path.startsWith('/karriere/')) {
    const slug = path.split('/')[2];
    const stelle = stellen.find((s) => s.slug === slug);
    if (stelle) {
      return {
        title: `${stelle.titel} – Karriere bei Vendis`.slice(0, 65),
        description: stelle.kurzbeschreibung.slice(0, 158),
      };
    }
  }

  return fallback;
};

const Seo = () => {
  const { pathname } = useLocation();
  const { title, description } = resolve(pathname);
  const url = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
