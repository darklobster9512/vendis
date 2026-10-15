# Domain .net → .de umstellen

Alle Vorkommen von `vendis-solutions.net` werden zu `vendis-solutions.de` (Webadresse und E-Mail `kontakt@vendis-solutions.de`).

Betroffen: Sitemap, robots.txt, index.html (Firmendaten), Seitentitel-/Canonical-Basis (Seo.tsx), Navbar, Footer, Hero-Mockup, Karriere, Kontakt, Impressum, Datenschutz.

Ausnahme: In `vite.config.ts` bleiben die .net-Einträge in der Host-Freigabe zusätzlich erhalten (die .de-Einträge sind schon drin), damit die alte Adresse nicht plötzlich blockiert wird.

Danach auf dem Server: `pm2 restart vendis --update-env`.
