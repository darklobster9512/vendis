# Vite allowedHosts um vendis-solutions.de erweitern

## Problem
Der Aufruf der Seite über `vendis-solutions.de` wird von Vite blockiert:
`Blocked request. This host ("vendis-solutions.de") is not allowed.`

In `vite.config.ts` (Zeile 14) sind aktuell nur diese Hosts freigegeben:
`for-tel.solutions`, `www.for-tel.solutions`, `vendis-solutions.net`, `www.vendis-solutions.net`

`vendis-solutions.de` fehlt.

## Umsetzung
Zeile 14 in `vite.config.ts` ersetzen durch:

```ts
allowedHosts: [
  "for-tel.solutions",
  "www.for-tel.solutions",
  "vendis-solutions.net",
  "www.vendis-solutions.net",
  "vendis-solutions.de",
  "www.vendis-solutions.de",
],
```

Bestehende Einträge bleiben unverändert. Canonicals, Sitemap, robots.txt, JSON-LD und Impressum bleiben auf `vendis-solutions.net` — .de wird nur zusätzlich freigegeben.

## Nach dem Deploy auf dem VPS
Vite lädt die Config nur beim Start neu:

```bash
pm2 restart vendis --update-env
```

Voraussetzung: Die DNS-Einträge (A/AAAA-Record) für `vendis-solutions.de` und `www.vendis-solutions.de` zeigen auf den Server.
