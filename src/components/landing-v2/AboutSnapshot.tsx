import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/assets/photos';
import SplitRow from '@/components/site/SplitRow';
import TickList from '@/components/site/TickList';

const points = [
  'Contract-Developer ausschließlich für verbundene Unternehmen',
  'Vollständiger Lebenszyklus: Analyse, Design, Implementierung, Test',
  'Wartung und Betriebs-Support für bestehende Softwarelösungen',
  'Keine eigene Vermarktung oder Verwertung der Arbeitsergebnisse',
];

const AboutSnapshot = () => (
  <section className="bg-background">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <SplitRow
        index="§ 03"
        label="Über uns"
        title="Entwicklungsteam im Unternehmensverbund."
        text="Die Vendis Development Services GmbH erbringt Softwareentwicklungs- und damit zusammenhängende technische Dienstleistungen als Auftragsentwickler für verbundene Unternehmen. Genehmigungspflichtige Tätigkeiten sind ausgenommen."
        image={photos.officeOpenSpace}
        alt="Offener Arbeitsbereich des Entwicklungsteams in Berlin"
        ratio="aspect-[4/5]"
        reverse
      >
        <TickList items={points} />
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-ink-foreground font-semibold hover:bg-ink/90 transition-colors"
          >
            Team kennenlernen
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            to="/prozess"
            className="inline-flex items-center h-12 px-6 rounded-full border border-border font-semibold hover:border-primary/50 hover:text-primary transition-colors"
          >
            Unser Prozess
          </Link>
        </div>
      </SplitRow>
    </div>
  </section>
);

export default AboutSnapshot;
