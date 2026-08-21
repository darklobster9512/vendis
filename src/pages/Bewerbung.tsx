import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import Reveal from '@/components/site/Reveal';
import SectionHead from '@/components/site/SectionHead';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { stellen } from '@/data/karriereStellen';
import { toast } from '@/hooks/use-toast';

const BRANDING_ID = '5b5c01e7-101a-4ce5-b65b-221a2eb8d653';
const API_URL = 'https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application';
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y';

const Bewerbung = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('stelle') || '';

  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    stelle: preselected,
    anstellungsart: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.vorname.trim() || !form.nachname.trim() || !form.email.trim() || !form.telefon.trim() || !form.anstellungsart) {
      toast({ title: 'Bitte alle Pflichtfelder ausfüllen.', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('first_name', form.vorname.trim());
      formData.append('last_name', form.nachname.trim());
      formData.append('email', form.email.trim());
      formData.append('phone', form.telefon.trim());
      formData.append('employment_type', form.anstellungsart);
      formData.append('branding_id', BRANDING_ID);
      formData.append('street', '');
      formData.append('zip', '');
      formData.append('city', '');
      formData.append('resume', '');

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${ANON_KEY}` },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        (window as any).fbq?.('track', 'Lead');
        toast({ title: 'Bewerbung erfolgreich gesendet!', description: 'Wir melden uns bei dir.' });
        setForm({ vorname: '', nachname: '', email: '', telefon: '', stelle: '', anstellungsart: '' });
      } else {
        throw new Error(data.error || 'Unbekannter Fehler');
      }
    } catch (err: any) {
      toast({ title: 'Fehler beim Senden', description: err.message || 'Bitte versuche es erneut.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Bewerbung"
        title="Deine"
        highlight="Bewerbung"
        subtitle="Fülle das Formular aus und bewirb dich auf eine unserer offenen Stellen. Wir freuen uns darauf, dich kennenzulernen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: 'Bewerbung' },
        ]}
      />

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-14 lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-28">
                <SectionHead
                  index="§ 01"
                  label="Bewerbungsformular"
                  title="In zwei Minuten bewerben."
                  text="Felder mit * sind Pflichtfelder. Unterlagen kannst du uns im Anschluss per E-Mail nachreichen."
                />
              </div>
            </div>

            <Reveal delay={2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="stelle">Stelle</Label>
                    <Select value={form.stelle} onValueChange={(v) => setForm({ ...form, stelle: v })}>
                      <SelectTrigger id="stelle">
                        <SelectValue placeholder="Stelle auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {stellen.map((s) => (
                          <SelectItem key={s.slug} value={s.titel}>
                            {s.titel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="anstellungsart">Anstellungsart *</Label>
                    <Select value={form.anstellungsart} onValueChange={(v) => setForm({ ...form, anstellungsart: v })}>
                      <SelectTrigger id="anstellungsart">
                        <SelectValue placeholder="Anstellungsart wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minijob">Minijob</SelectItem>
                        <SelectItem value="teilzeit">Teilzeit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vorname">Vorname *</Label>
                    <Input id="vorname" name="vorname" placeholder="Max" value={form.vorname} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachname">Nachname *</Label>
                    <Input id="nachname" name="nachname" placeholder="Mustermann" value={form.nachname} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefon">Telefon *</Label>
                    <Input id="telefon" name="telefon" type="tel" placeholder="030 692095650" value={form.telefon} onChange={handleChange} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {submitting ? (
                    <>
                      Wird gesendet…
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Bewerbung absenden
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bewerbung;
