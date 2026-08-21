# Meta Pixel ID aktualisieren

## Änderung
In `index.html` die bestehende Meta-Pixel-ID `1392479466142470` durch `1047205781357414` ersetzen — sowohl im `fbq('init', …)`-Aufruf als auch in der `<noscript>`-Fallback-`<img>`-URL. Der restliche Pixel-Code bleibt unverändert.

## Betroffene Stelle
- `index.html` Zeile 57 (`fbq('init', '1392479466142470')`)
- `index.html` Zeile 65 (`src`-URL des noscript-IMG mit `id=1392479466142470`)

## Ergebnis
Der Meta Pixel feuert siteweit mit der neuen ID `1047205781357414`.
