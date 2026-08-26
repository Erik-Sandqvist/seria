# seria

Webbplats för seria — webbutveckling och digitala lösningar.

Byggd i Next.js 16 (App Router), TypeScript och Tailwind v4. Alla sidor
förrenderas statiskt på både svenska och engelska.

## Status

Sajten är komplett och körbar, men **inte lanserad**. Två saker är öppna:

- **`src/site.config.ts` innehåller platshållare** — namn, org.nr, telefon,
  mejl och ort måste fyllas i innan publicering.
- **Case-sidan är tom med flit.** Inga påhittade referensuppdrag.

## Kom igång

Kräver Node 22.6 eller senare — `npm test` kör Nodes inbyggda testkörare med
`--experimental-strip-types`, som tillkom i 22.6.

```bash
npm install
```

```bash
npm run dev
```

Sajten ligger på <http://localhost:3000> och skickar vidare till `/sv` eller
`/en` beroende på webbläsarens språk.

| Kommando | Gör |
| --- | --- |
| `npm run dev` | Utvecklingsserver |
| `npm run build` | Produktionsbygge |
| `npm run start` | Kör produktionsbygget |
| `npm run lint` | ESLint |
| `npm test` | Enhetstester för kontaktformuläret |
| `npm run check` | Lint + tester + bygge |

## Innan lansering — fyll i det här

Allt som ska bytas ut är samlat på ett ställe: [`src/site.config.ts`](src/site.config.ts).
Sök efter `BYT UT`.

- [ ] `legalName`, `orgNumber` — registrerat firmanamn och organisationsnummer
- [ ] `url` — den riktiga domänen (används för canonical, sitemap och OG-taggar)
- [ ] `email`, `phone`, `city` — kontaktuppgifter
- [ ] `bookingUrl` — Cal.com- eller Calendly-länk. Lämnas den tom pekar
      "Boka ett samtal" på kontaktsidan i stället
- [ ] `socials` — tomma länkar döljs automatiskt i footern
- [ ] `team` — ditt namn, din roll, din bio och dina initialer
- [ ] `RESEND_API_KEY` och `CONTACT_FROM_EMAIL` i `.env.local` (se `.env.example`)
- [ ] Case-sidan — se nedan
- [ ] En OG-bild på 1200×630 px i `public/og.png`, och koppla in den i
      `src/lib/metadata.ts` under `openGraph.images`

### Case-sidan

`work.items` i språkfilerna är tom, och då visar sidan ett ärligt "vi har
precis börjat"-läge med ett erbjudande om rabatt till de tre första kunderna.
Det är medvetet: hellre det än påhittade referensuppdrag.

Så fort du lägger till ett riktigt projekt i listan byter sidan automatiskt
till case-läget. Mallen ligger som kommentar i
[`src/content/sv.ts`](src/content/sv.ts) — lägg in samma projekt i `en.ts`.

## Så hänger det ihop

```
src/
  site.config.ts        Företagsuppgifter och team — allt som ska bytas ut
  content/
    sv.ts               All svensk text. Typen Dictionary härleds härifrån
    en.ts               Engelsk text, måste matcha svenskans form
    index.ts            getDictionary(locale)
  lib/
    routes.ts           Språk, sidnycklar och slugg-karta (/sv/priser ↔ /en/pricing)
    metadata.ts         Titlar, hreflang, canonical, JSON-LD
    contact.ts          Validering och mejlinnehåll — ren logik, utan beroenden
    contact.test.ts     Tester för ovanstående
    contact-action.ts   Serveråtgärd som skickar via Resend
    reveal-script.ts    Inline-skriptet bakom infällningsanimationen
    cn.ts               Klass-sammanfogare
  components/           Logotyp, header, footer, PageShell, UI-primitiv
  sections/             Hero, tjänster, priser, process, case, FAQ, kontakt …
  views/index.tsx       Vilka sektioner varje sida består av
  app/[locale]/         Rot-layout, startsida, [slug] för övriga sidor
  proxy.ts              Skickar / vidare till rätt språk

design/                 Designriktningar — A är införd, B och C som referens
docs/
  affarsupplagg.md      Bolagsform, F-skatt, moms, avtal, prissättning
  varumarke.md          Logotyp, färg, typografi, ton
```

### Lägga till en sida

1. Lägg till nyckeln i `pageSlugs` i `src/lib/routes.ts` med slugg för båda språken.
2. Lägg till `pages.<nyckel>` (titel och beskrivning) i `sv.ts` och `en.ts`.
3. Lägg till en vy i `src/views/index.tsx`.

Routing, sitemap, hreflang och navigation följer automatiskt med.

### Ändra texter

All copy ligger i `src/content/sv.ts` och `src/content/en.ts` — ingen text är
inbakad i komponenterna. `en.ts` är typad mot svenskans form, så glömmer du
översätta ett fält säger `npm run build` ifrån.

## Design

Färger, typsnitt och typografiska skalor är tokens i `@theme`-blocket överst i
[`src/app/globals.css`](src/app/globals.css). Ändra där, inte i komponenterna.
[`docs/varumarke.md`](docs/varumarke.md) har reglerna för logotyp och ton.

- **ink** — mörk grund, `ink-950` är sidans botten
- **bone** — varm off-white för text och ljusa sektioner
- **signal** — tallgrön accent, används sparsamt: knappar, siffror, understrykningar
- Rubriker i Familjen Grotesk 700, brödtext i Instrument Sans, etiketter i Geist Mono
- Tätheten trappas med storleken: -0.045em i display, -0.038em i title,
  -0.022em i övrigt. Reglerna ligger utanför Tailwinds lager i `globals.css`
  och vinner därför över storleksverktygen

### Designriktningar

[`design/`](design/) innehåller tre riktningar för sajtens typografi och
rörelse, som artboards på en delad canvas. **Riktning A är vald och införd i
`src/`** — B och C ligger kvar som referens och jämförelse.

| Fil | Riktning |
| --- | --- |
| `Main.dc.html` | **A · Svensk grotesk** — Familjen Grotesk + Instrument Sans (vald) |
| `Redaktionell.dc.html` | B · Redaktionell — Newsreader + Archivo, ljus botten |
| `Teknisk.dc.html` | C · Teknisk precision — Outfit + Geist + JetBrains Mono |
| `Typsnitt.dc.html` | De tre mot nuvarande uppsättning, samma ord och storlekar |
| `Geometriskt.dc.html` | Fyra geometriska snitt för C: Outfit, Sora, Onest, Gabarito |
| `Rorelse.dc.html` | Sex rörelsemönster med varaktighet och easing |
| `canvas.json` | Placering, rubriker och anteckningar på canvasen |

`seria-designriktningar.html` är den publicerade canvasen. Den byggs om från
källfilerna ovan — redigera aldrig den direkt.

Rubrikstorlekarna i A, B och C är uppmätta mot sina kolumnbredder, inte
uppskattade. Byter du typsnitt eller kolumnbredd behöver de mätas om — geometriska
och groteska snitt skiljer sig kraftigt i bredd vid samma punktstorlek.

### Infällningsanimationen

Rörelsen körs av ett inline-skript ([`src/lib/reveal-script.ts`](src/lib/reveal-script.ts)),
inte av React. Innehållet är därför läsbart även utan JavaScript, och
animationen kostar inget klient-JS.

Tre detaljer som är lätta att råka ta bort:

- Skriptet sätter **`data-reveal="in"`**, inte en klass. `className` ägs av
  React — ändrar man den utifrån blir det en hydreringsavvikelse.
- `Reveal` har **`suppressHydrationWarning`** just därför: klienten har ett
  attribut servern aldrig renderade, och det är avsikten. React 19 rapporterar
  annars även attribut den inte själv renderat.
- Ett **skyddsnät** efter 1,2 s visar allt om IntersectionObserver inte svarar.
  Utan det kan sidan bli helt tom i miljöer som inte ritar bildrutor.

## Publicera

Enklast på [Vercel](https://vercel.com): importera repot, lägg in
`RESEND_API_KEY` och `CONTACT_FROM_EMAIL` som miljövariabler, peka domänen dit.

Sajten är helt statisk förutom kontaktformuläret och språkomdirigeringen, så
den fungerar lika bra på Netlify, Cloudflare eller en egen Node-server
(`npm run build && npm run start`).

## Tillgänglighet och prestanda

- Ett `<h1>` per sida, rubriknivåerna hänger ihop
- Hoppa-till-innehåll-länk, synlig tangentbordsfokus, `aria-current` i menyn
- `prefers-reduced-motion` stänger av all rörelse
- Inga bilder att ladda i grunddesignen — bakgrunder är CSS-gradienter
- Endast två klientkomponenter: menyn och kontaktformuläret

Kör gärna Lighthouse mot produktionsbygget innan lansering.
