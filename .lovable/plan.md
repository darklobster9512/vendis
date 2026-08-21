# Visueller Relaunch: Zigzag-Editorial mit echten Fotos

Die Seite wird optisch komplett neu aufgebaut – nicht wiederzuerkennen –, während Blau als Markenfarbe und das helle Theme bleiben. Alle Inhalte (Auftragsentwicklung für verbundene Unternehmen) bleiben inhaltlich erhalten und werden nur neu inszeniert.

## Neue Designsprache

- **Typografie:** Sora für Headlines (große, enge Letter-Spacings, teils 60–80px), Manrope für Fließtext. Ersetzt Urbanist/Epilogue projektweit.
- **Farbe:** Electric Blue bleibt Primary. Neu ergänzt: tiefes Navy als Kontrastfläche für dunkle Zwischen-Bänder, warmes Off-White als Sekundär-Hintergrund statt reinem Grau – dadurch wirkt die Seite sofort anders, ohne die Marke zu brechen.
- **Form:** Größere Radien (0.75rem) für Karten und Bilder, ruhige Ein-Pixel-Rahmen statt Schatten, breite Sektions-Abstände, dünne Trennlinien mit nummerierten Sektions-Labels (01 / 02 / 03).
- **Motion:** dezente Scroll-Reveals über den bestehenden IntersectionObserver-Hook, Bilder mit leichtem Scale-Effekt beim Hovern. Keine neuen Animations-Bibliotheken.

## Layout-Prinzip: Zigzag

Jede Seite besteht aus alternierenden 50/50-Reihen: links Bild, rechts Text – dann umgekehrt. Bilder randlos bis zur Kante oder in großem Format mit Blau-Akzentrahmen. Zwischen den Reihen liegen schmale Kontrastbänder (Zahlen, Zitate, Leistungsliste) als Rhythmuswechsel.

```text
[  FOTO  ][ TEXT   ]
[ TEXT   ][  FOTO  ]
[ ===== dunkles Band mit Kennzahlen ===== ]
[  FOTO  ][ TEXT   ]
```

## Fotografie

Echte Stock-Fotos von Unsplash (keine KI-Bilder), Stil: Menschen bei der Arbeit – Entwickler:innen am Screen, Code-Reviews zu zweit, Whiteboard-Sessions, Stand-ups, Laptop-Details mit Menschen im Bild. Einheitliche Anmutung: natürliches Licht, ruhige Farbigkeit, leichte Blau-Tönung als Overlay-Option, damit alle Bilder zusammenpassen. Bilder werden heruntergeladen, optimiert und über Lovable Assets ausgeliefert; jedes Bild bekommt sinnvollen Alt-Text. Der bestehende Bildschutz (kein Rechtsklick/Drag) bleibt aktiv.

## Was neu gestaltet wird

**Rahmen**
- Navbar: weg von der Pill-Leiste, hin zu einer klaren, breiten Leiste mit Logo links, Navigation mittig und blauem CTA-Button rechts; beim Scrollen verdichtet sie sich. Mobile: Vollbild-Overlay-Menü mit großer Typo.
- Footer: neuer Aufbau mit großer Schluss-Headline, Kontaktblock und schlanker Rechtszeile (weiterhin ohne Social Media).

**Startseite** – Hero als Split mit großem Arbeitsfoto und knapper Headline, danach Zigzag-Reihen für Leistungsumfang, Prozess, Zusammenarbeit und Über-uns, ein dunkles Kennzahlen-Band und ein Foto-gestützter Abschluss-CTA.

**Entwicklung** – die vier Leistungssäulen als abwechselnde Foto/Text-Reihen statt Kartenraster, mit Detail-Listen als typografische Aufzählungen.

**Technologien** – Stack-Bereiche als große Typo-Listen mit begleitenden Arbeitsfotos, Praxis-Tags als schlichte Chip-Reihe.

**Prozess** – Phasen 1–4 als vertikale Zigzag-Stationen mit Nummer, Foto und Aktivitätenliste statt Timeline-Grafik.

**Team** – neues Raster mit größeren Portraits, Namen in Sora und Rolle als kleine Kapitälchen; bestehende Team-Fotos bleiben.

**Karriere & Stellendetail** – Stellenliste als typografische Zeilen mit Hover-Blau, Detailseite mit Foto-Header und weiterhin sticky Metadaten-Spalte.

**Bewerbung & Kontakt** – Formulare in ruhigem Zwei-Spalten-Layout mit Bildspalte, neue Feldgestaltung (Unterstrich-Inputs statt Boxen), Funktion und Felder unverändert.

**Impressum, Datenschutz, 404** – auf das neue Typo- und Raster-System gehoben; Rechtstexte bleiben wortgleich.

**Cookie-Banner** – schlichte Leiste am unteren Rand im neuen Stil statt Glas-Karte.

## Technische Umsetzung

- `src/index.css` und `tailwind.config.ts`: Font-Import auf Sora/Manrope umstellen, neue Tokens (Navy-Kontrast, Off-White-Surface, Radius, Sektionsabstände, Foto-Overlay-Gradient) ergänzen. Bestehende Utility-Klassen `bg-gradient-blue` / `text-gradient-blue` bleiben erhalten, damit nichts bricht.
- Wiederverwendbare Bausteine: `SectionLabel`, `SplitRow` (Zigzag-Reihe mit `reverse`-Prop), `StatBand`, `PhotoFrame`.
- Alle Farben weiterhin ausschließlich über semantische Tokens, keine harten Farbklassen.
- Routen, Redirects, Formular-Logik und Datenquellen bleiben unverändert – reiner UI-Umbau.
- Nicht mehr genutzte Alt-Komponenten in `src/components/landing` / `landing-v2` werden nach dem Umbau entfernt.
