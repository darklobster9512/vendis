# Team-Seite: Foto-Band entfernen & Team neu besetzen

## Was sich ändert

1. **Foto-Band entfernen** — die drei hochformatigen Stock-Fotos direkt unter dem Hero fallen weg. Das Hero-Foto bleibt. Die Bereichsliste rückt damit direkt unter den Seitenkopf.

2. **Geschäftsführung getrennt darstellen** — statt eines gemeinsamen Eintrags mit beiden Namen bekommen Sebastian Andre Deutsch und Thomas Friedrich Witt je einen eigenen Eintrag mit eigener Kurzbeschreibung (Rolle jeweils „Geschäftsführer"). Die beiden GF-Namen bleiben unverändert.

3. **Alle übrigen Namen neu vergeben** — sämtliche Mitarbeitenden in den Bereichen Betrieb & Finanzen, People & Community, Technologie, Qualitätssicherung sowie Anforderungen & Abstimmung erhalten neue, deutsche Namen. Rollen, Bereiche und Beschreibungstexte bleiben inhaltlich bestehen.
   - **Recruiting & Community** und **Projektleiter** bleiben männlich besetzt (männlicher Vor- und Nachname).
   - Die übrigen Rollen werden gemischt besetzt; weibliche Rollenbezeichnungen (z. B. „Leiterin Finanzen", „Testkoordinatorin", „Auftragskoordinatorin") behalten passend weibliche Namen, damit Bezeichnung und Name zusammenpassen.

## Technisch

- Datei: `src/pages/Team.tsx`
- `departments[0].members` wird auf zwei Objekte aufgeteilt (rendert automatisch im bestehenden 2-Spalten-Grid).
- Die `<section>` mit dem 3er-Foto-Grid wird gelöscht; dadurch nicht mehr genutzte Importe (`Photo`, ggf. `Reveal` bleibt für die Bereichsliste) werden bereinigt, `photos` bleibt für das Hero-Bild.
- Kein Eingriff in Layout, Tokens oder andere Seiten.
