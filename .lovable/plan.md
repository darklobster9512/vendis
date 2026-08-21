Ersetze projektweit alle Vorkommen der Telefonnummer `+49 711-96880944` durch `+49 211-86943272`.

Vorgehen (in Build Mode):
1. `grep -rl "96880944"` über `.tsx`, `.ts`, `.html`, `.xml`, `.txt`, `.md`, `.json` (ohne `node_modules`, `dist`).
2. `sed -i` mit allen bekannten Formatvarianten:
   - `+49 711-96880944` → `+49 211-86943272`
   - `+4971196880944` → `+4921186943272`
   - `+49 711 96880944` → `+49 211 86943272`
   - `0711-96880944` / `0711 96880944` → `0211-86943272` / `0211 86943272` (falls vorhanden)
3. Betrifft u. a.: `index.html` (inkl. JSON-LD `telephone`), `src/components/landing/Footer.tsx`, `src/components/landing/Navbar.tsx`, `src/components/landing-v2/FinalCTA.tsx`, `src/pages/Kontakt.tsx`, `src/pages/Impressum.tsx`, `src/pages/Datenschutz.tsx`, `src/pages/Bewerbung.tsx`.
4. Verifikation via `grep -r "96880944"` — muss 0 Treffer liefern.
