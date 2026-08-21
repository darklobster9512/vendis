# Telefonnummer aktualisieren

## Ziel
Die alte Telefonnummer `030 123456789` (href `tel:+4930123456789`) projektweit durch die neue Nummer `030 692095650` (href `tel:+4930692095650`) ersetzen.

## Geänderte Dateien (6)
Ersetzung jeweils Anzeige-Text `030 123456789` → `030 692095650` und href `tel:+4930123456789` → `tel:+4930692095650`:

1. **src/components/landing/Navbar.tsx** (Mobile-Menü, Z. 142–143)
2. **src/components/landing/Footer.tsx** (Kontakt-Spalte, Z. 106–107)
3. **src/pages/Kontakt.tsx** (Kontaktdaten Z. 21, Input-Placeholder Z. 156)
4. **src/pages/Impressum.tsx** (Kontakt-Abschnitt Z. 58–59)
5. **src/pages/Datenschutz.tsx** (Z. 30–31)
6. **src/pages/Bewerbung.tsx** (Input-Placeholder Telefon Z. 165)

## Prüfung
- Build via `/tmp/observability/build-errors.log` verifizieren.
- Grep auf `123456789` liefert keine Treffer mehr.

Keine weiteren Dateien enthalten die alte Nummer (public/, index.html, webmanifest sind frei).
