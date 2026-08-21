import { useState, useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '+49 211-86943272', href: 'tel:+4921186943272' },
  { icon: Mail, label: 'E-Mail', value: 'kontakt@for-tel.com', href: 'mailto:kontakt@for-tel.com' },
  { icon: MapPin, label: 'Adresse', value: 'Hornbergstr. 35, 70794 Filderstadt', href: undefined },
  { icon: Clock, label: 'Öffnungszeiten', value: 'Mo–Fr · 09:00 – 18:00 Uhr', href: undefined },
];

const faqs = [
  {
    q: 'Wie läuft ein typisches Erstgespräch ab?',
    a: 'Wir vereinbaren einen 30-minütigen Termin — telefonisch oder vor Ort in Filderstadt. Ziel ist es, Ihr Vorhaben, den zeitlichen Rahmen und mögliche Engpässe zu verstehen. Im Anschluss erhalten Sie eine schriftliche Einschätzung und einen Vorschlag für das weitere Vorgehen. Das Erstgespräch ist kostenfrei und unverbindlich.',
  },
  {
    q: 'In welcher Region sind Sie tätig?',
    a: 'Unser Hauptsitz ist in Filderstadt bei Stuttgart. Projekte realisieren wir im gesamten DACH-Raum — mit Schwerpunkt Baden-Württemberg, Bayern und Hessen. Für überregionale Auftraggeber sind wir bundesweit im Einsatz.',
  },
  {
    q: 'Welche Kosten entstehen für eine Erstberatung?',
    a: 'Das Erstgespräch und die schriftliche Erst­ein­schätzung sind kostenfrei. Konkrete Leistungs­pakete (Anlagenplanung, Projektsteuerung, Personalberatung) kalkulieren wir transparent als Festpreis oder nach Aufwand — abhängig von Umfang und Komplexität.',
  },
  {
    q: 'Mit welchen Branchen arbeiten Sie?',
    a: 'Schwerpunkte sind Energieversorgung, Telekommunikation, öffentliche Auftraggeber sowie Industrie- und Infrastrukturprojekte. Unsere Expertise liegt in elektro- und fernmelde­technischen Anlagen, von der Planung bis zur Inbetriebnahme.',
  },
  {
    q: 'Wie schnell erhalten wir Personalvorschläge?',
    a: 'Nach dem Briefing erhalten Sie in der Regel innerhalb von zwei Wochen eine qualifizierte Shortlist. Für spezialisierte Profile (z. B. Bauleitung Fernmeldetechnik) planen wir je nach Markt­situation entsprechend mehr Zeit ein — wir kommunizieren das transparent.',
  },
];

const Kontakt = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Kontakt"
        highlight="aufnehmen"
        subtitle="Beratung, Projektsteuerung, Personal oder Anlagenplanung — sprechen Sie uns an. Wir antworten innerhalb von 24 Stunden an Werktagen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kontakt' },
        ]}
      />

      <section ref={ref} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky Sidebar */}
            <aside className={`w-full lg:w-[300px] shrink-0 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-5">
                  Direkter Draht
                </p>
                <ul className="divide-y divide-border/60 border-y border-border/60">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3 py-4">
                        <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-foreground break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} className="block hover:bg-muted/40 -mx-2 px-2 transition-colors">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 p-4 border border-border/60 bg-muted/30 rounded-md">
                  <p className="text-xs font-semibold text-foreground mb-1">Reaktionszeit</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Antwort innerhalb von 24 Stunden an Werktagen. Dringende Anliegen
                    bitte telefonisch.
                  </p>
                </div>
              </div>
            </aside>

            {/* Hauptbereich */}
            <div className={`flex-1 min-w-0 scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground mb-1.5">
                Nachricht senden
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Max Mustermann" value={form.name} onChange={handleChange} className="rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} className="rounded-md" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+49 211-86943272" value={form.phone} onChange={handleChange} className="rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input id="subject" name="subject" placeholder="Projektanfrage" value={form.subject} onChange={handleChange} className="rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea id="message" name="message" placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={7} value={form.message} onChange={handleChange} className="rounded-md" />
                </div>
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200"
                  >
                    Nachricht senden
                    <Send size={15} />
                  </button>
                </div>
              </form>

              {/* FAQ */}
              <div className="mt-16 pt-12 border-t border-border/60">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
                  FAQ
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground mb-8">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="border-y border-border/60">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60 last:border-b-0">
                      <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:no-underline py-5">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kontakt;
