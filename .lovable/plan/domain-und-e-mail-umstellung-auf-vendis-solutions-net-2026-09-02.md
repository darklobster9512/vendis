# Domain- und E-Mail-Umstellung auf vendis-solutions.net

## Ziel
Überall im Projekt:
- `vendis-solutions.net` → `vendis-solutions.net`
- `kontakt@vendis-solutions.net` → `kontakt@vendis-solutions.net`

## Betroffene Stellen (verifiziert)

### Domain `vendis-solutions.net` → `vendis-solutions.net`
- `vite.config.ts` (Z. 14): `allowedHosts` — `vendis-solutions.net`/`www.vendis-solutions.net` ersetzen (for-tel-Einträge bleiben)
- `index.html` (JSON-LD): `"url": "https://vendis-solutions.net"` und `"logo": "https://vendis-solutions.net/favicon-512.png"`
- `public/robots.txt`: Sitemap-URL
- `public/sitemap.xml`: alle 9 `<loc>`-Einträge
- `src/pages/Impressum.tsx`: Link `https://vendis-solutions.net` + sichtbarer Text
- `src/components/landing/HeroSection.tsx`: `app.vendis-solutions.net/...` → `app.vendis-solutions.net/...`

### E-Mail `kontakt@vendis-solutions.net` → `kontakt@vendis-solutions.net`
- `index.html` (JSON-LD `"email"`)
- `src/pages/Kontakt.tsx`, `src/pages/Karriere.tsx`, `src/pages/Impressum.tsx`, `src/pages/Datenschutz.tsx`
- `src/components/landing/Footer.tsx`, `src/components/landing/Navbar.tsx`
(jeweils `mailto:`-href und sichtbarer Text)

## Zusätzlich sinnvoll (im selben Zug)
- `public/sitemap.xml`: veraltete Pfade `/leistungen`, `/software`, `/methodik` auf die aktuellen Routen `/entwicklung`, `/technologien`, `/prozess` korrigieren (Rest stimmt bereits).
- `src/components/site/Seo.tsx`: Canonical/og:url aktuell relativ — auf absolute URLs mit `https://vendis-solutions.net` umstellen, damit Canonicals bei Google korrekt greifen.

## Hinweis (extern, nicht im Code)
Auf dem VPS nach dem Deploy: `pm2 restart vendis --update-env`, damit Vite die neue `allowedHosts`-Config lädt. DNS/A-Records für die neue Domain müssen auf den Server zeigen.
