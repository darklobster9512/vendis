import StatBand from '@/components/site/StatBand';

const stats = [
  { value: '6', label: 'Disziplinen entlang des Software-Lebenszyklus' },
  { value: '4', label: 'Phasen je Entwicklungsauftrag — Analyse bis Betrieb' },
  { value: '24 h', label: 'Reaktionszeit auf Anfragen an Werktagen' },
  { value: '100 %', label: 'Arbeitsergebnisse beim beauftragenden Unternehmen' },
];

const ImpactGrid = () => (
  <StatBand
    stats={stats}
    note="Kennzahlen beschreiben unser Leistungsmodell als Auftragsentwickler für verbundene Unternehmen. Genehmigungspflichtige Tätigkeiten sind vom Leistungsspektrum ausgenommen."
  />
);

export default ImpactGrid;
