# Neuausrichtung: Vendis Development Services GmbH

Die Website wird vom technischen Beratungs-/Anlagenplanungs-Auftritt (for.tel Solutions) auf einen konzerninternen Contract-Developer umgestellt: Softwareentwicklung und zugehörige technische Dienstleistungen (Analyse, Design, Implementierung, Test, Wartung, Betriebs-Support) für verbundene Unternehmen. Ton: sachlich, intern, keine Neukunden-Akquise-Sprache, keine Vermarktung eigener Produkte.

## Neue Firmendaten (überall konsistent)

Vendis Development Services GmbH, Neue Schönhauser Str. 2, 10178 Berlin ·
Amtsgericht Charlottenburg, HRB 279085 B · Geschäftsführer: Sebastian Andre Deutsch, Thomas Friedrich Witt ·
https://vendis.solutions · kontakt@vendis-development.de · 030 123456789

Alle Vorkommen von "for.tel Solutions", Filderstadt, alter Adresse, HRB 720843, Manfred Beutel, kontakt@for-tel.com, alter Telefonnummer und alter Domain werden ersetzt. Die alte USt-IdNr. wird entfernt (keine neue verfügbar) — bitte nachreichen, falls vorhanden.

## Neue Seitenstruktur

| Neu | Ersetzt | Inhalt |
|---|---|---|
| `/` | `/` | Startseite: Rolle als interner Entwicklungsdienstleister |
| `/entwicklung` | `/leistungen` | Leistungsspektrum entlang des Lebenszyklus |
| `/technologien` | `/software` | Technologie-Stack, Plattformen, Qualitäts-/Security-Standards |
| `/prozess` | `/methodik` | Zusammenarbeitsmodell, Delivery-Prozess, Betriebs-Support |
| `/team` | `/team` | Team (Texte angepasst) |
| `/kontakt` | `/kontakt` | Kontakt für verbundene Unternehmen |
| `/karriere`, `/karriere/:slug`, `/karriere/bewerbung` | unverändert | Stellen auf Software-Rollen umgestellt |
| `/impressum`, `/datenschutz` | unverändert | Rechtstexte neu |

Alte Pfade (`/leistungen`, `/software`, `/methodik`) bleiben als Redirects auf die neuen URLs bestehen, damit keine Links brechen.

## Inhaltliche Kernbotschaften

- **Startseite**: Positionierung als Auftragsentwickler im Unternehmensverbund; vier Kernleistungen (Analyse & Design, Implementierung, Test & QA, Wartung & Betriebs-Support); Prozessüberblick; Team-Kurzprofil; Kontaktabschluss. Kunden-Logos/Testimonials werden zu neutralen Aussagen über Zusammenarbeit im Verbund bzw. entfallen, wo keine belegbaren Referenzen existieren.
- **/entwicklung**: vier Leistungsblöcke statt Beratung/Projektmanagement/Personalberatung/Anlagenplanung — Anforderungsanalyse & Spezifikation, Softwarearchitektur & Design, Implementierung, Test & Qualitätssicherung, Wartung & Weiterentwicklung, Betriebs-Support/Incident-Handling.
- **/technologien**: Backend, Frontend, Datenbanken/Datenhaltung, Cloud & CI/CD, Test-Automatisierung, Security- und Code-Qualitätsstandards. Referenzblöcke werden durch neutrale Projektarten-Beschreibungen ersetzt (keine erfundenen Kundenreferenzen).
- **/prozess**: Auftragsannahme aus dem Verbund, Anforderungsklärung, iterative Entwicklung, Reviews & Tests, Übergabe, Wartungs- und Supportbetrieb; inkl. Hinweis, dass Ergebnisse beim auftraggebenden Unternehmen liegen und nicht eigenvermarktet werden.
- **/team**: Rollen als Entwicklungsteam (Engineering, QA, DevOps) statt Bau-/Technikprofilen; bestehende Fotos bleiben.
- **/kontakt**: Ansprache an verbundene Unternehmen, neue Kontaktdaten, Formulartexte angepasst.
- **/karriere**: Rahmentexte auf Softwareentwicklung; Stellen in `src/data/karriereStellen.ts` auf Software-Rollen umgestellt (u. a. Softwareentwicklung, QA/Test, DevOps, Werkstudent Entwicklung), Standort Berlin/Remote. Bestehende Testing-Stelle bleibt inhaltlich, wird sprachlich eingepasst.
- **/impressum**: neue Angaben inkl. neuem Unternehmensgegenstand im Wortlaut.
- **/datenschutz**: Verantwortlicher, Adresse und Kontaktdaten aktualisiert.
- **Navigation & Footer**: Menüpunkte Entwicklung, Technologien, Prozess, Team, Karriere, Kontakt; Footer-Spalten und Claim entsprechend.

## Technische Umsetzung

- Routen in `src/App.tsx` umbenennen, Dateien in `src/pages` umbenennen (`Leistungen`→`Entwicklung`, `Software`→`Technologien`, `Methodik`→`Prozess`), Redirect-Routen für die drei alten Pfade ergänzen.
- Texte in `src/components/landing-v2/*` (Hero, ServicesTabs, ProcessFlow, ImpactGrid, AboutSnapshot, VoicesSection, FinalCTA, TrustLogos) und `src/components/landing/*` (Navbar, Footer, PageHero-Nutzungen, CTASection, FAQ) überarbeiten.
- `document.title` und Meta-Tags in `index.html` sowie pro Seite auf den neuen Firmennamen und Zweck setzen; `public/sitemap.xml`/`robots.txt` prüfen und Routen angleichen, falls vorhanden.
- Zahlen/Kennzahlen (Stats, ImpactGrid) werden auf nicht-behauptende, neutrale Aussagen umgestellt, solange keine belegbaren Werte vorliegen.
- Design-System, Farben, Layout und Animationen bleiben unverändert. Logo-Wortmarke `for.tel` bleibt vorerst als Bilddatei bestehen — falls gewünscht, erzeuge ich ein neues Wortmarken-Logo "vendis".

## Offene Punkte

- USt-IdNr. der neuen Gesellschaft (aktuell entfernt).
- Neues Logo gewünscht? Ansonsten bleibt das bestehende Bild.
