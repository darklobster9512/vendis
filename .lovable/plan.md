# Stellen-Pfad an Referenzprojekt angleichen

Im Referenzprojekt „vona-cloud" lautet der Pfad der Tester-Stelle `/karriere/onlineprozess-tester`. Aktuell heißt er hier `/karriere/onlineprozess-tests`.

## Änderung

- In `src/data/karriereStellen.ts` den `slug` der ersten Stelle von `onlineprozess-tests` auf `onlineprozess-tester` ändern.
- Damit ist die Detailseite unter `/karriere/onlineprozess-tester` erreichbar; die Karriere-Übersicht und die Bewerbungs-Verlinkung ziehen den Slug automatisch aus den Daten.

## Technisches

Die Route `/karriere/:slug` in `App.tsx` bleibt unverändert. Optional: eine Redirect-Route von `/karriere/onlineprozess-tests` auf den neuen Pfad, damit alte Links (z. B. aus Anzeigen) nicht ins Leere laufen — sag Bescheid, ob das gewünscht ist; standardmäßig baue ich den Redirect mit ein.

Der Stellentitel bleibt wie gehabt („Mitarbeiter (m/w/d) für Software- und Prozesstests"), nur der Pfad ändert sich.
