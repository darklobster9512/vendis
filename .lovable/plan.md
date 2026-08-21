# Fix: Vite allowedHosts um vendis.solutions erweitern

## Problem
Beim Aufruf der Seite über `vendis.solutions` blockt Vite die Anfrage:
`Blocked request. This host ("vendis.solutions") is not allowed.`

In `vite.config.ts` (Zeile 14) steht aktuell:
```ts
allowedHosts: ["for-tel.solutions", "www.for-tel.solutions"],
```
Die neue Domain `vendis.solutions` fehlt.

## Änderung
In `vite.config.ts` die `allowedHosts`-Zeile ersetzen durch:
```ts
allowedHosts: ["for-tel.solutions", "www.for-tel.solutions", "vendis.solutions", "www.vendis.solutions"],
```

## Nach dem Deploy
Auf dem VPS einmal neu starten, damit Vite die Config neu lädt:
```bash
pm2 restart vendis --update-env
```

Keine weiteren Code-Änderungen erforderlich.
