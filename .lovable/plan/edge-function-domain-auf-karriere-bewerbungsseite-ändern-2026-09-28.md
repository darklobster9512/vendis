# Edge Function Domain auf Karriere-Bewerbungsseite ändern

## Änderung
In `src/pages/Bewerbung.tsx` eine Konstante aktualisieren:

1. **Edge Function URL** (Zeile 22)
   - Alt: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
   - Neu: `https://dgkailowvrbugapykyan.supabase.co/functions/v1/submit-application`

## Unverändert bleiben
- Pfad `/functions/v1/submit-application` bleibt gleich
- `BRANDING_ID` = `d1d0efc1-884c-43f9-af0a-82bb5899882d` bleibt unverändert
- `ANON_KEY` bleibt unverändert (Live-Test der neuen Funktion bestätigt: CORS-Preflight 200, gleiche Antwort wie bisherige Funktion — gleicher Funktionsname `submit-application`)
- Keine weiteren Vorkommen der alten URL im Projekt

## Verifikation
- Build prüfen
- Per Request prüfen, dass die neue Funktion unter der neuen Domain erreichbar ist (erledigt im Vorfeld, 200/400 wie erwartet)
