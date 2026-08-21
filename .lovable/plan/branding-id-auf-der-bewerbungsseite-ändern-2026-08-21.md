# Branding ID auf der Bewerbungsseite ändern

## Änderung
In `src/pages/Bewerbung.tsx` (Zeile 21) die Konstante `BRANDING_ID` aktualisieren:

- **Alt:** `a49c0302-65a5-4e87-b873-5a5757f41057`
- **Neu:** `5b5c01e7-101a-4ce5-b65b-221a2eb8d653`

Die Konstante wird beim Absenden des Bewerbungsformulars als `n_id`, `n` und `branding_id` an die Edge Function übermittelt. Es ist nur diese eine Stelle im Code betroffen.

## Technische Details
- Datei: `src/pages/Bewerbung.tsx`, Zeile 21
- Keine weiteren Vorkommen der Branding ID im Projekt
