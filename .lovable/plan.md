# PM2-Fehler „vite: not found“ beheben

Im Projekt ist `vite` als `devDependency` eingetragen und das Startskript ruft direkt `vite` auf. Auf dem VPS fehlt daher die lokale Installation unter `node_modules` – häufig, weil nur Production-Abhängigkeiten installiert wurden.

## Reparatur

Im Projektverzeichnis auf dem VPS diesen Befehl ausführen:

```bash
npm install --legacy-peer-deps --include=dev && pm2 restart vendis --update-env
```

Damit werden auch die für den aktuellen PM2-Start benötigten Entwicklungsabhängigkeiten installiert und anschließend der Prozess `vendis` neu gestartet.

## Kontrolle

Danach mit `pm2 logs vendis --lines 50` prüfen, dass Vite startet und der Prozess nicht erneut in den Fehlerstatus wechselt. Es sind keine Änderungen am Projektcode erforderlich.
