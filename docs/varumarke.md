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

**Ordmärke:** `seria` med gemener i Instrument Serif. Ingen punkt efter
namnet — accentfärgen bärs av symbolen i stället.

**Symbol:** fyra staplar i stigande höjd, fristående utan platta bakom, där
den högsta bär signalfärgen. Den läser som en serie och som en uppåtgående
kurva, vilket knyter an till löftet om mätbara resultat. Symbolen används
ensam som favicon, profilbild och app-ikon. Källa:
[`src/components/Logo.tsx`](../src/components/Logo.tsx) och
[`src/app/icon.svg`](../src/app/icon.svg).

**Regler**

- Frizon runt logotypen: minst symbolens bredd på alla sidor
- Minsta storlek: symbolen 24 px, ordmärket 80 px brett
- På ljus botten: byt ordmärket till `ink-900`, behåll staplarna som de är
- Rotera inte, luta inte, lägg inte till skugga eller kontur
- Placera aldrig märket på en orolig bild utan mörk platta bakom

## Färg

| Roll | Namn | Hex | Används till |
| --- | --- | --- | --- |
| Grund | `ink-950` | `#12171a` | Sidans botten |
| Grund, alt | `ink-900` | `#191f22` | Varannan sektion, kort |
| Linjer | `ink-800` | `#273035` | Ramar och avdelare |
| Dämpad text | `ink-400` | `#93a0a7` | Etiketter, bildtexter |
| Brödtext | `bone-100` | `#f3efe7` | Text på mörk botten |
| Ljus sektion | `bone-100` / `bone-50` | `#f3efe7` / `#faf8f4` | Process och case |
| Knappyta | `bone-50` | `#faf8f4` | Primärknapp på mörk botten |
| Accent | `signal-500` | `#2fa98f` | Logotypens stapel, understrykningar, tillgänglighetspricken |
| Djup | `pine-500` | `#1f7a6f` | Sparsamt, i bakgrundssken |

**Regeln för accentfärgen:** högst en accentyta per skärmbild, och den bär
aldrig en hel knapp. Primärknappen är benvit; accenten sitter kvar i små
detaljer och märks därför. Tall på `ink-950` och mörk
text på tall ligger båda på ~6:1 — behåll de kombinationerna.

## Typografi

| Roll | Typsnitt | Användning |
| --- | --- | --- |
| Display | **Instrument Serif** 400 | H1–H2, priser, stora siffror |
| Brödtext | **Instrument Sans** | All löpande text, H3, etiketter, knappar |

Två snitt, inga fler. Båda finns gratis via Google Fonts och kommer ur samma
familj, så paret är avsiktligt och inte hopplockat. Karaktären ligger i
hoppet mellan en högkontrastserif i stor grad och en neutral grotesk i allt
annat — inte i att lägga displaysnittet på varje rubriknivå. Serifen dras ihop
måttligt (-0.021em i display, -0.014em i title); kursiven bär betoningen i
rubriker i stället för en andra färg.

Rubriker på H3-nivå och nedåt sätts i Instrument Sans `font-medium`. Etiketter
sätts i vanlig gemen, aldrig i versal monospace med brett teckenmellanrum.
Sajten laddar inget monotypsnitt.

## Ton i text

- **Rakt på.** "Vad det kostar, och vad som ingår." — inte "vi strävar efter
  transparent prissättning".
- **Konkret framför säljigt.** Siffror, veckor och kronor slår adjektiv. Men
  bara siffror som betyder något: "100 % egen kod" och "< 24 h" är påhittad
  precision och står inte längre i hero.
- **Skriv hela meningar.** Undvik tankstrecket som andningspaus och undvik
  paret av korta motsatser ("X är lätt. Y är svårt."). Två sådana i rad låter
  som en maskin, hur bra var och en än är.
- **Du, inte ni.** Kunden är en människa, oftast företagaren själv.
- **Erkänn det som är sant.** Att byrån är ny står på case-sidan i klartext
  och vänds till ett erbjudande. Det bygger mer förtroende än påhittade case.
- Undvik: "helhetslösningar", "digitala resan", "skräddarsydda koncept".

## Bilder

Hero har ett fullbrett bildband. Bilden sätts i
[`src/site.config.ts`](../src/site.config.ts) via `heroImage` och ligger i
`public/`. Tom sträng stänger av bandet och lämnar hero som ren typografi.

Bilden läggs på med en dämpande platta (`ink-950/25`) och en toning mot
grunden i underkant, så att den sitter i paletten i stället för att lysa som
ett främmande element.

Riktlinje för vad som får ligga där: mörka, lågmättade bilder, gärna
miljöbilder från verkliga uppdrag. Aldrig stockfoton på leende personer vid
whiteboard. Ett motiv som varken hör ihop med verksamheten eller med paletten
drar ned uttrycket även när bilden i sig är snygg.
