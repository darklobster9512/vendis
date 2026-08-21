# Logo, Favicon und Metadaten

## Logo
Aktuell ist das Logo in Navbar und Footer als getippte Wortmarke ("vendis" + Punkt) umgesetzt. Beides wird durch das hochgeladene Vendis-Logo (Häkchen-V + Wortmarke) ersetzt:

- Das Bild wird als CDN-Asset abgelegt und in Header und Footer als `<img>` mit Alt-Text "Vendis Development Services" eingebunden (Header ca. 28 px hoch, Footer ca. 32 px), Link weiterhin zur Startseite.
- Die alte Text-Wortmarke inkl. Punkt-Akzent wird entfernt, ebenso das nicht mehr genutzte alte `logo.png`-Import, falls vorhanden.
- Das Logo ist schwarz; auf hellem Hintergrund passt es direkt. Im dunklen Footer-/CTA-Bereich wird es per CSS invertiert, damit es weiß erscheint.

## Favicon
Das zweite Bild (nur das V-Zeichen) wird zum Favicon:

- Als echte Datei `public/favicon.png` (quadratisch, 64x64, transparent gepaddet) ablegen und die bisherige Favicon-Datei ersetzen.
- Zusätzlich `public/apple-touch-icon.png` (180x180) und ein 512px-Icon für Google.
- Google zeigt Favicons nur, wenn sie quadratisch, ab 48x48 (Vielfaches von 48) und stabil verlinkt sind. Deshalb: `<link rel="icon" sizes="any">` plus `site.webmanifest` mit 192px/512px-Icons, verlinkt aus dem `<head>`.
- Hinweis: Google aktualisiert Favicons erst beim nächsten Crawl der Startseite — das kann einige Tage dauern.

## Seitentitel und Meta-Texte
`react-helmet-async` wird eingebunden (Provider in `main.tsx`), damit jede Route eigene Titel/Descriptions bekommt. Die sitewide Basis in `index.html` bleibt als Fallback für Social-Crawler und wird auf die Testing-/Entwicklungs-Positionierung geschärft.

Geplante Titel/Descriptions (Titel < 60 Zeichen, Description < 160):

| Route | Titel | Description (Kurzfassung) |
|---|---|---|
| `/` | Vendis Development Services – Softwareentwicklung | Auftragsentwicklung: Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support. |
| `/entwicklung` | Softwareentwicklung im Auftrag – Vendis | Leistungen entlang des gesamten Software-Lebenszyklus. |
| `/technologien` | Technologien & Stack – Vendis | React, TypeScript, Node.js, Cloud- und Testing-Tooling im Einsatz. |
| `/prozess` | Entwicklungsprozess – Vendis | Wie Analyse, Umsetzung, Qualitätssicherung und Support ineinandergreifen. |
| `/team` | Team – Vendis Development Services | Die Menschen hinter Entwicklung, Test und Betrieb. |
| `/karriere` | Karriere & Jobs – Vendis | Offene Stellen, remote und flexibel, inkl. bezahlter Test-Tätigkeiten. |
| `/karriere/:slug` | Stellentitel – Karriere bei Vendis | Aufgaben, Profil und Konditionen der jeweiligen Stelle (dynamisch). |
| `/karriere/bewerbung` | Bewerbung – Vendis | Direkt online bewerben, wenige Minuten. |
| `/kontakt` | Kontakt – Vendis Development Services | Anschrift, E-Mail, Telefon und Kontaktformular. |
| `/impressum` | Impressum – Vendis | Pflichtangaben nach § 5 TMG. |
| `/datenschutz` | Datenschutz – Vendis | Informationen zur Verarbeitung personenbezogener Daten. |

Zusätzlich pro Seite: selbstreferenzierender `canonical`, `og:title`/`og:description`/`og:url`. Das Organization-JSON-LD in `index.html` wird auf die Auftragsentwicklung angepasst und bekommt `logo` mit der Favicon-/Logo-URL — das hilft Google beim Zuordnen des Markenlogos.

## Technische Details
- Neues Paket: `react-helmet-async` (Installation mit `--legacy-peer-deps`).
- Neue Komponente `src/components/site/Seo.tsx` mit Props `title`, `description`, `path`, die den Helmet-Block kapselt; Einsatz in jeder Seitenkomponente.
- Logo-Asset via `lovable-assets` als `.asset.json`-Pointer; Favicons als echte Dateien in `public/` (mit `magick` skaliert).
- Einschränkung: Da die App eine statische Vite-SPA ohne SSR ist, sehen Social-Preview-Crawler nur den `<head>` aus `index.html`; Google (rendert JS) sieht die Per-Route-Tags.
