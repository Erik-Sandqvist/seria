# seria — visuell identitet

Kortfattad guide så att sajten, offerter, sociala medier och tryck ser ut att
komma från samma avsändare. Tokens finns i kod i
[`src/app/globals.css`](../src/app/globals.css).

## Idén

Namnet *seria* ligger nära "seriös". Det är hela positioneringen: en liten
studio som tar kundens verksamhet på lika stort allvar som kunden gör.
Uttrycket ska därför vara sakligt och skarpt snarare än lekfullt — mörk grund,
mycket luft, en enda accentfärg som används sparsamt och därför märks.

## Logotyp

**Ordmärke:** `seria` med gemener i Instrument Serif, följt av en punkt i
signalfärg. Punkten är en del av märket — utelämna den inte.

**Symbol:** fyra staplar i stigande höjd inuti en rundad kvadrat, där den
högsta bär signalfärgen. Den läser som en serie och som en uppåtgående kurva,
vilket knyter an till löftet om mätbara resultat. Symbolen används ensam som
favicon, profilbild och app-ikon. Källa: [`src/components/Logo.tsx`](../src/components/Logo.tsx)
och [`src/app/icon.svg`](../src/app/icon.svg).

**Regler**

- Frizon runt logotypen: minst symbolens bredd på alla sidor
- Minsta storlek: symbolen 24 px, ordmärket 80 px brett
- På ljus botten: byt ordmärket till `ink-900`, behåll punkten i signalfärg
- Rotera inte, luta inte, lägg inte till skugga eller kontur
- Placera aldrig märket på en orolig bild utan mörk platta bakom

## Färg

| Roll | Namn | Hex | Används till |
| --- | --- | --- | --- |
| Grund | `ink-950` | `#0a0d0e` | Sidans botten |
| Grund, alt | `ink-900` | `#101416` | Varannan sektion, kort |
| Linjer | `ink-800` | `#1b2327` | Ramar och avdelare |
| Dämpad text | `ink-400` | `#7c8a91` | Etiketter, bildtexter |
| Brödtext | `bone-100` | `#f3efe7` | Text på mörk botten |
| Ljus sektion | `bone-100` / `bone-50` | `#f3efe7` / `#faf8f4` | Process och case |
| Accent | `signal-500` | `#ff5a1f` | Knappar, siffror, punkten |
| Djup | `pine-500` | `#1f7a6f` | Sparsamt, i bakgrundssken |

**Regeln för accentfärgen:** högst en orange yta per skärmbild. Blir det två
konkurrerar de och ingen av dem drar blicken. Orange på `ink-950` och svart
text på orange har båda god kontrast — behåll de kombinationerna.

## Typografi

| Roll | Typsnitt | Användning |
| --- | --- | --- |
| Rubriker | **Instrument Serif** Regular | H1–H3, priser, siffror |
| Brödtext | **Geist Sans** | All löpande text och knappar |
| Etiketter | **Geist Mono** | Ögonbryn, versaler, `0.16–0.22em` teckenmellanrum |

Alla tre finns gratis via Google Fonts. Rubriker sätts tätt
(`letter-spacing: -0.02em`) och stort; det är kontrasten mellan en stor serif
och små versalgemena mono-etiketter som ger uttrycket dess karaktär.

## Ton i text

- **Rakt på.** "Fast pris. Innan vi börjar." — inte "vi strävar efter
  transparent prissättning".
- **Konkret framför säljigt.** Siffror, veckor och kronor slår adjektiv.
- **Du, inte ni.** Kunden är en människa, oftast företagaren själv.
- **Erkänn det som är sant.** Att byrån är ny står på case-sidan i klartext
  och vänds till ett erbjudande. Det bygger mer förtroende än påhittade case.
- Undvik: "helhetslösningar", "digitala resan", "skräddarsydda koncept".

## Bilder

Grunddesignen använder inga fotografier — bakgrunderna är CSS-gradienter och
ett hårfint rutnät. Det är ett val: det håller sajten snabb och gör att den
inte åldras med bildmanéren.

Lägger du till foton senare: mörka, lågmättade, gärna miljöbilder från
verkliga uppdrag. Aldrig stockfoton på leende personer vid whiteboard.
