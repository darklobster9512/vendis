# Plan: Bewerbungsseite — Foto entfernen & Stellen-Dropdown Padding fixen

## Änderungen an `src/pages/Bewerbung.tsx`

### 1. Stock Photo entfernen
Den `<Reveal>`-Block mit dem `<Photo>`-Element (Zeilen 114–120) aus der linken Sidebar-Spalte löschen. Die `SectionHead` bleibt stehen, darunter wird der Platz einfach freigegeben. Der `Photo`-Import kann mit entfernt werden, falls er sonst nirgends in der Datei genutzt wird (er ist es nicht).

Außerdem der nun ungenutzte `photos`-Import aus `@/assets/photos` entfernen, sofern keine weitere Verwendung in der Datei besteht (bestätigt: keine).

### 2. Zu viel Platz vor dem Stellentitel im Dropdown
Im Dropdown (`SelectItem`, `src/components/ui/select.tsx`) reserviert `pl-8` (2rem) Platz für das Check-Icon. Das erzeugt eine sichtbare Lücke vor jedem Stellentitel.

Fix: `pl-8` → `pl-7` reduzieren, sodass der Text etwas näher am linken Rand steht, während die Check-Indikator-Position (`left-2`) erhalten bleibt. Minimaler, gezielter Eingriff am globalen Select-Component — wirkt sich auf alle Select-Dropdowns aus, ist aber visisch einheitlich und gewollt.

## Keine weiteren Änderungen
- Formular-Logik, Edge-Function-Integration und übriges Layout bleiben unangetastet.
