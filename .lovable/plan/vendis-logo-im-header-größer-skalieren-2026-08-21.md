# Vendis-Logo im Header größer skalieren

## Änderung
In `src/components/landing/Navbar.tsx` die Höhenklasse des `<img>`-Logo anpassen:

- Vorher: `scrolled ? 'h-6' : 'h-7 sm:h-8'`
- Nachher: `scrolled ? 'h-8' : 'h-9 sm:h-10'`

Das Logo wird dadurch im normalen Header von 28/32 px auf 36/40 px und im gescrollten Header von 24 px auf 32 px vergrößert. Breite skaliert proportional (`w-auto`).

## Technische Details
- Keine Layout-Verschiebung, da der Header-Container `items-center` nutzt und das Logo `shrink-0` ist.
- `transition-all duration-300` sorgt für flüssige Skalierung beim Scrollen.
