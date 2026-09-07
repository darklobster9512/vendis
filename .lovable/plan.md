# Edge Function und Branding ID in Bewerbung ändern

## Änderung
In `src/pages/Bewerbung.tsx` zwei Konstanten aktualisieren:

1. **Edge Function URL**
   - Alt: `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`
   - Neu: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
   - Die Funktion `submit-application` existiert im Referenzprojekt `vic-automation`, daher bleibt der Funktionsname unverändert.

2. **Branding ID**
   - Alt: `5b5c01e7-101a-4ce5-b65b-221a2eb8d653`
   - Neu: `d1d0efc1-884c-43f9-af0a-82bb5899882d`

## Technische Details
- Datei: `src/pages/Bewerbung.tsx`, Zeilen 21–22
- Keine weiteren Vorkommen im Projekt
- Keine Änderungen an Pfaden, Komponenten oder Design
