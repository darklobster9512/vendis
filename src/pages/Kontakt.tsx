import { useState, useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import Reveal from '@/components/site/Reveal';
import SectionHead from '@/components/site/SectionHead';
import Photo from '@/components/site/Photo';
import { photos } from '@/lib/photos';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Send } from 'lucide-react';

const contactInfo = [
  { label: 'Telefon', value: '030 692095650', href: 'tel:+4930692095650' },
  {
    label: 'E-Mail',
    value: 'kontakt@vendis-development.de',
    href: 'mailto:kontakt@vendis-development.de',
  },
  { label: 'Adresse', value: 'Neue Schönhauser Str. 2, 10178 Berlin', href: undefined },
  { label: 'Erreichbarkeit', value: 'Mo–Fr · 09:00 – 18:00 Uhr', href: undefined },
];

const faqs = [
  {
    q: 'Für wen werden Sie tätig?',
    a: 'Wir erbringen Softwareentwicklungs- und damit zusammenhängende technische Dienstleistungen als Contract-Developer ausschließlich für verbundene Unternehmen. Eine eigene Vermarktung oder Verwertung der entstehenden Ergebnisse findet nicht statt.',
  },
  {
    q: 'Wie startet ein Entwicklungsauftrag?',
    a: 'Am Anfang steht ein kurzes Abstimmungsgespräch zum Vorhaben. Anschließend nehmen wir die Anforderungen auf und erstellen eine technische Spezifikation mit Aufwandsschätzung, Zeitrahmen und Abnahmekriterien.',
  },
  {
    q: 'Welche Leistungsphasen übernehmen Sie?',
    a: 'Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support. Wir übernehmen einzelne Phasen oder den gesamten Lebenszyklus einer Softwarelösung — je nach Auftrag.',
  },
  {
    q: 'Wem gehören die Arbeitsergebnisse?',
    a: 'Alle Arbeitsergebnisse stehen dem beauftragenden verbundenen Unternehmen zu. Wir vermarkten oder verwerten sie nicht selbst.',
  },
  {
    q: 'Wie arbeiten Sie technisch?',
    a: 'Git-basiert mit Code-Reviews, automatisierten Tests und CI/CD-Pipelines. Releases sind dokumentiert und reproduzierbar; technische Dokumentation gehört zum Lieferumfang.',
  },
];

const Kontakt = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    document.title = 'Kontakt | Vendis Development Services GmbH';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Vorhaben"
        highlight="besprechen"
        subtitle="Entwicklungsauftrag, Wartung oder Betriebs-Support — schildern Sie uns Ihr Vorhaben. Wir antworten innerhalb von 24 Stunden an Werktagen."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Kontakt' }]}
      />

      {/* Kontaktdaten + Foto */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <SectionHead
                index="§ 01"
                label="Direkter Draht"
                title="So erreichen Sie uns."
                text="Kurze Wege, feste Ansprechpartner. Für dringende Anliegen erreichen Sie uns telefonisch."
              />
              <Reveal delay={2} className="mt-10">
                <dl className="border-t border-border">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border py-4"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {item.href ? (
                          <a href={item.href} className="hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={3}>
              <Photo
                src={photos.teamMeeting}
                alt="Abstimmungsgespräch im Team"
                ratio="aspect-[4/5]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Formular */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-14 lg:gap-20">
            <div>
              <SectionHead
                index="§ 02"
                label="Anfrage"
                title="Nachricht senden."
                text="Beschreiben Sie Ihr Vorhaben in Stichpunkten — wir melden uns mit den nächsten Schritten."
              />
            </div>

            <Reveal delay={2}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Max Mustermann" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="030 692095650" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input id="subject" name="subject" placeholder="Entwicklungsauftrag" value={form.subject} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea id="message" name="message" placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={8} value={form.message} onChange={handleChange} />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Nachricht senden
                  <Send size={15} />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-14 lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-28">
                <SectionHead index="§ 03" label="FAQ" title="Häufige Fragen." />
              </div>
            </div>
            <Reveal delay={2}>
              <Accordion type="single" collapsible className="border-t border-border">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold text-foreground hover:no-underline py-6">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-6 max-w-2xl">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kontakt;
