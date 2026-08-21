# Alle Bilder in den public-Ordner verschieben

Ziel: Keine Bilder mehr über CDN-URLs (`/__l5e/...`) oder Bundler-Imports laden, sondern alles als statische Dateien unter `public/images/` — damit die Seite auf dem eigenen VPS (vendis.solutions) alle Bilder ausliefert.

## Was passiert

1. **Stock-Fotos (10 Stück)** — aktuell nur als CDN-Pointer vorhanden (`src/assets/photos/*.asset.json`). Sie werden vom CDN heruntergeladen und als echte Dateien nach `public/images/photos/` gelegt (z. B. `/images/photos/team-hero.jpg`).
2. **Vendis-Logo** — ebenfalls vom CDN geholt und als `public/images/vendis-logo.png` abgelegt.
3. **Tech-Icons (9 SVGs)** — von `src/assets/tech/` nach `public/images/tech/` verschoben.
4. **Ungenutzte Bilder aufräumen** — `src/assets/team/` (10 Fotos) und `src/assets/landing/` (4 Fotos) werden nirgends mehr referenziert (~580 KB). Vorschlag: löschen statt mitverschieben.
5. **Referenzen anpassen**:
   - `src/assets/photos/index.ts` → nach `src/lib/photos.ts` mit Pfaden wie `/images/photos/team-hero.jpg`; die 8 importierenden Dateien werden auf den neuen Pfad umgestellt.
   - `Navbar.tsx` / `Footer.tsx`: `.asset.json`-Import raus, stattdessen `src="/images/vendis-logo.png"`.
   - `TrustBar.tsx`: 9 SVG-Imports raus, stattdessen `/images/tech/*.svg`.
6. **Alte Artefakte entfernen**: alle `.asset.json`-Pointer und die leeren Ordner unter `src/assets/`.

Favicons und `public/images/logomail.png` liegen bereits richtig und bleiben unverändert.

## Technische Hinweise

- Public-Dateien werden 1:1 mit ihrem Pfad ausgeliefert und nicht gehasht — Caching läuft dann über den Webserver, nicht über Vite. Für diesen Anwendungsfall (eigener VPS) ist das gewollt.
- Bilder werden nicht mehr von Vite optimiert/komprimiert; die Dateien werden unverändert übernommen (Größen wie bisher, je 130–390 KB).
- Danach: Build-Check, dass keine Referenz auf `/__l5e/` oder `@/assets` mehr existiert.
