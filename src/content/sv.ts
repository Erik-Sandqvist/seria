import { site } from "@/site.config";

const sv = {
  locale: "sv",
  localeName: "Svenska",
  htmlLang: "sv-SE",

  nav: {
    services: "Tjänster",
    pricing: "Priser",
    process: "Process",
    work: "Case",
    about: "Om oss",
    contact: "Kontakt",
    cta: "Boka ett samtal",
    menu: "Meny",
    close: "Stäng",
    switchTo: "In English",
  },

  pages: {
    home: {
      title: `${site.name} — webbutveckling & digitala lösningar`,
      description:
        "seria är en liten webbstudio som bygger snabba, snygga och mätbara webbplatser och digitala lösningar åt företag. Fast pris, tydlig process, leverans på veckor.",
    },
    services: {
      title: "Tjänster",
      description:
        "Webbplatser, webbappar, e-handel, design och teknisk SEO. Allt byggt från grunden, inga mallar.",
    },
    pricing: {
      title: "Priser",
      description:
        "Fasta priser utan överraskningar. Landningssida från 14\u00a0900 kr, komplett företagssajt från 29\u00a0900 kr.",
    },
    process: {
      title: "Process",
      description:
        "Från första samtal till driftsatt sajt på tre veckor. Så här går det till, steg för steg.",
    },
    work: {
      title: "Case",
      description: "Projekt vi byggt och vad de gav kunden.",
    },
    about: {
      title: "Om oss",
      description: "Vilka vi är, hur vi jobbar och varför vi startade seria.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Berätta om ditt projekt så återkommer vi inom 24 timmar med ett fast pris.",
    },
    privacy: {
      title: "Integritetspolicy",
      description:
        "Vilka personuppgifter vi behandlar, varför, hur länge och vilka rättigheter du har.",
    },
    terms: {
      title: "Villkor",
      description: "Villkoren för den här webbplatsen och för uppdrag hos seria.",
    },
  },

  legal: {
    updatedLabel: "Senast uppdaterad",
    backLabel: "Till startsidan",
    privacy: {
      title: "Integritetspolicy",
      intro:
        "Vi samlar in så lite som möjligt och säljer aldrig vidare något. Den här sidan beskriver exakt vad som händer med de uppgifter du lämnar.",
      sections: [
        {
          h: "Vem som ansvarar",
          body: [
            `${site.legalName}, org.nr [BYT UT], är personuppgiftsansvarig för behandlingen som beskrivs här. Kontakta oss på ${site.email} om du har frågor eller vill utöva någon av dina rättigheter.`,
          ],
        },
        {
          h: "Vilka uppgifter vi behandlar",
          body: [
            "Skickar du kontaktformuläret behandlar vi namn, mejladress och meddelande, samt företag, telefonnummer, projekttyp och budget om du fyller i dem. Inget av de fälten är obligatoriskt utöver namn, mejladress och meddelande.",
            "Mejlar eller ringer du oss direkt behandlar vi de uppgifter du själv lämnar i den kontakten.",
          ],
        },
        {
          h: "Varför, och med vilket stöd",
          body: [
            "Uppgifterna används enbart för att besvara din förfrågan och för att kunna lämna en offert. Den rättsliga grunden är berättigat intresse: du har hört av dig till oss, och vi har ett berättigat intresse av att kunna svara.",
            "Blir det ett uppdrag behandlas uppgifterna därefter för att fullgöra avtalet med dig, och i den utsträckning bokföringslagen kräver det.",
          ],
        },
        {
          h: "Hur länge vi sparar dem",
          body: [
            "Förfrågningar som inte leder till uppdrag raderas senast tolv månader efter senaste kontakt. Blir det ett uppdrag sparas underlag som rör affären så länge bokföringslagen kräver, för närvarande sju år.",
          ],
        },
        {
          h: "Vilka mer som ser dem",
          body: [
            `Formulärmejlen skickas via ${site.emailProvider} och webbplatsen driftas hos ${site.hostingProvider}. Båda är personuppgiftsbiträden åt oss och behandlar uppgifterna enbart på våra instruktioner.`,
            "Båda leverantörerna kan behandla uppgifter utanför EU/EES. Överföringen sker i så fall med stöd av EU-kommissionens standardavtalsklausuler. [BYT UT om du byter leverantör — kontrollera vad som gäller hos den nya.]",
            "I övrigt lämnar vi inte ut dina uppgifter till någon, och vi säljer dem aldrig vidare.",
          ],
        },
        {
          h: "Kakor och mätning",
          body: [
            "Den här webbplatsen sätter inga kakor och använder ingen besöksmätning. Det finns inget att samtycka till, och därför ingen kakruta.",
            "[BYT UT: lägger du till analysverktyg senare måste den här texten skrivas om och en samtyckesruta läggas till.]",
          ],
        },
        {
          h: "Dina rättigheter",
          body: [
            "Du har rätt att få veta vilka uppgifter vi har om dig, att få dem rättade eller raderade, att invända mot behandlingen, att begära begränsning och att få ut dem i ett maskinläsbart format.",
            `Hör av dig till ${site.email} så löser vi det. Tycker du att vi hanterar dina uppgifter felaktigt har du rätt att klaga till Integritetsskyddsmyndigheten, imy.se.`,
          ],
        },
      ],
    },
    terms: {
      title: "Villkor",
      intro:
        "Villkoren nedan gäller den här webbplatsen. Villkoren för ett enskilt uppdrag står alltid i den offert du godkänner — den gäller före det som står här.",
      sections: [
        {
          h: "Om innehållet",
          body: [
            "Vi håller innehållet på sajten aktuellt så gott vi kan, men lämnar inga garantier för att allt är korrekt eller fullständigt vid varje tidpunkt.",
            "Priserna som anges är exklusive moms och gäller det som beskrivs i respektive paket. De är riktpriser: bindande pris får du först i en skriftlig offert.",
          ],
        },
        {
          h: "När ett avtal uppstår",
          body: [
            "Ingenting på den här sajten är ett bindande erbjudande. Ett avtal uppstår först när du skriftligen godkänt en offert från oss.",
          ],
        },
        {
          h: "Upphovsrätt",
          body: [
            `Text, bilder, kod och formgivning på den här webbplatsen tillhör ${site.legalName} om inget annat anges. Du får gärna länka hit och citera med källhänvisning, men inte återpublicera innehållet som ditt eget.`,
            "Material vi tar fram i ett uppdrag övergår till kunden enligt vad som står i offerten — normalt när slutfakturan är betald.",
          ],
        },
        {
          h: "Länkar till andra",
          body: [
            "Sajten kan länka vidare till tjänster vi inte råder över. Vi ansvarar inte för innehållet där.",
          ],
        },
        {
          h: "Ansvar",
          body: [
            "Vi ansvarar inte för skada som uppstår av att du använt informationen på den här webbplatsen. Vårt ansvar i ett uppdrag regleras i offerten och är där begränsat till det belopp du betalat för uppdraget.",
          ],
        },
        {
          h: "Tillämplig lag",
          body: [
            "Svensk lag gäller. Tvister avgörs av svensk allmän domstol, om vi inte kommer överens om något annat.",
          ],
        },
      ],
    },
  },

  hero: {
    eyebrow: `Webbstudio i ${site.city}`,
    titleLead: "Digitala lösningar,",
    titleAccent: "byggda på allvar.",
    lead: "seria är en liten studio som bygger webbplatser och digitala verktyg åt företag som vill växa. Du får ett fast pris innan vi börjar, och en sajt som är i drift på några veckor.",
    primaryCta: "Boka ett samtal",
    secondaryCta: "Se priser",
    note: "Vi tar ett fåtal projekt i taget. Det betyder att du pratar med den som faktiskt skriver koden, och att vi ibland säger nej till uppdrag vi inte hinner göra ordentligt.",
    noteRole: "grundare",
    // Håll den här raden aktuell. En gammal tillgänglighetsnotis är värre
    // än ingen alls.
    availability: "Vi har plats för nya projekt just nu",
    location: `${site.city} · arbetar i hela ${site.country}`,
  },

  manifesto: {
    eyebrow: "Vad vi står för",
    title: "Det som avgör om en sajt fungerar syns sällan i skissen.",
    lead: "En sajt ska dra in kunder, ladda snabbt även på dålig uppkoppling och gå att uppdatera utan att något går sönder. Det är svårare än det låter, och det är där vi lägger tiden.",
    pillars: [
      {
        title: "Vi skriver koden själva",
        body: "All kod skrivs från grunden i Next.js, TypeScript och React. Ingen tung tema-mall som drar ner sajten och låser in dig hos en leverantör.",
      },
      {
        title: "Laddtid är ett krav, inte en förhoppning",
        body: "Varje sajt vi lämnar ifrån oss ska ladda på under en sekund i mobilen. Det syns i Google, och det syns i hur många som stannar kvar.",
      },
      {
        title: "Du pratar med den som bygger",
        body: "Ingen projektledare i mellanhand, inga ärendenummer. Har du en fråga om sajten svarar den som skrev koden.",
      },
    ],
  },

  services: {
    eyebrow: "Tjänster",
    title: "Webbplatser, webbappar och allt som hör till.",
    allLabel: "Alla tjänster",
    lead: "Vi tar hela kedjan: strategi, design, kod och drift. Du behöver inte samordna tre olika leverantörer.",
    items: [
      {
        number: "01",
        title: "Webbplatser",
        body: "Företagssajter, landningssidor och kampanjsajter. Designade från grunden och byggda för att ladda snabbt, ranka i Google och göra besökare till kunder.",
        bullets: [
          "Egen design",
          "Mobilanpassat",
          "CMS så du kan uppdatera själv",
          "Teknisk SEO från start",
        ],
      },
      {
        number: "02",
        title: "Webbappar & system",
        body: "När en vanlig sajt inte räcker. Kundportaler, bokningssystem, offertverktyg och interna system som tar bort manuellt arbete.",
        bullets: [
          "Inloggning och roller",
          "Databas och API",
          "Integrationer mot befintliga system",
          "Byggt för att växa",
        ],
      },
      {
        number: "03",
        title: "E-handel",
        body: "Butiker i Shopify eller headless-lösningar med egen frontend. Från produktflöde till kassa, betalning och frakt.",
        bullets: [
          "Shopify eller headless",
          "Swish, Klarna och kort",
          "Produktflöden",
          "Konverteringsanalys",
        ],
      },
      {
        number: "04",
        title: "Design & varumärke",
        body: "Logotyp, färger, typografi och ett designsystem som håller ihop allt du gör, på webben, i sociala medier och i tryck.",
        bullets: [
          "Logotyp och symbol",
          "Färg och typografi",
          "Designsystem",
          "Mallar för sociala medier",
        ],
      },
      {
        number: "05",
        title: "SEO & mätning",
        body: "Teknisk SEO, Core Web Vitals och en uppsättning mätning som visar vad som faktiskt ger dig kunder, inte bara antal besök.",
        bullets: [
          "Teknisk SEO-genomgång",
          "Prestandaoptimering",
          "Analytics med målspårning",
          "Månadsrapport",
        ],
      },
      {
        number: "06",
        title: "Drift & förvaltning",
        body: "Uppdateringar, övervakning, säkerhetskopior och löpande förbättringar. Sajten är inte klar vid lansering. Det är då den börjar.",
        bullets: [
          "Övervakning dygnet runt",
          "Säkerhetsuppdateringar",
          "Säkerhetskopior",
          "Löpande småändringar",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "Så går det till.",
    lead: "Fyra steg, inga överraskningar. Du vet vad som händer, vad det kostar och när du får sajten.",
    steps: [
      {
        when: "Dag 0",
        title: "Samtal",
        body: "Trettio minuter på telefon eller video. Vi går igenom vad du säljer, till vem, och vad sajten ska åstadkomma. Därefter får du ett fast pris och en leveransplan, innan något arbete påbörjas.",
      },
      {
        when: "Vecka 1",
        title: "Struktur & design",
        body: "Vi sätter sidstruktur, texter och en designriktning. Du får se skisser och tycka till innan en enda rad kod skrivs. Det är här ändringar är billiga.",
      },
      {
        when: "Vecka 2",
        title: "Bygge",
        body: "Vi bygger sajten på riktigt. Du följer arbetet på en live-länk och kan lämna kommentarer direkt i sajten, i stället för i långa mejltrådar med skärmdumpar.",
      },
      {
        when: "Vecka 3 →",
        title: "Lansering & efter",
        body: "Vi publicerar, kopplar domän och mätning, och går igenom hur du sköter sajten själv. Sen finns vi kvar, med förvaltning om du vill ha det och annars bara ett samtal bort.",
      },
    ],
  },

  pricing: {
    eyebrow: "Priser",
    title: "Vad det kostar, och vad som ingår.",
    lead: "Du ska veta exakt vad det kostar innan du säger ja. Alla priser är exklusive moms och gäller ett komplett, driftsatt projekt.",
    popularLabel: "Vanligaste valet",
    ctaLabel: "Kom igång",
    customCtaLabel: "Begär offert",
    includesLabel: "Ingår",
    timelineLabel: "Tid",
    tiers: [
      {
        id: "start",
        name: "Start",
        price: "14\u00a0900 kr",
        priceNote: "ex moms",
        popular: false,
        tagline: "En stark sida som gör en sak riktigt bra.",
        for: "För dig som behöver komma ut snabbt: nystartat företag, en tjänst att sälja eller en kampanj som ska landa.",
        timeline: "Cirka 2 veckor",
        features: [
          "Landningssida, upp till 5 sektioner",
          "Egen design efter ditt varumärke",
          "Mobil, surfplatta och dator",
          "Kontaktformulär till din mejl",
          "Grundläggande SEO och mätning",
          "Publicering och domänkoppling",
          "En revisionsrunda",
        ],
      },
      {
        id: "studio",
        name: "Studio",
        price: "29\u00a0900 kr",
        priceNote: "ex moms",
        popular: true,
        tagline: "En komplett företagssajt du kan växa i.",
        for: "För etablerade företag som behöver flera sidor, vill kunna uppdatera själva och tar sin närvaro på nätet på allvar.",
        timeline: "Cirka 2–3 veckor",
        features: [
          "Upp till 8 sidor",
          "Egen design och designsystem",
          "CMS där du uppdaterar texter och bilder själv",
          "Bokning, formulär eller offertflöde",
          "Teknisk SEO och prestandaoptimering",
          "Analytics med målspårning",
          "Två revisionsrundor",
          "30 dagars support efter lansering",
        ],
      },
      {
        id: "skala",
        name: "Skala",
        price: "Från 59\u00a0000 kr",
        priceNote: "offert per projekt",
        popular: false,
        tagline: "När det inte är en sajt utan ett system.",
        for: "För webbappar, e-handel, flerspråkiga sajter och integrationer mot system du redan använder.",
        timeline: "Från 4 veckor",
        features: [
          "Webbapp, portal eller e-handel",
          "Inloggning, roller och databas",
          "Integrationer och API:er",
          "Flerspråkig sajt",
          "Förstudie och teknisk arkitektur",
          "Löpande utveckling i sprintar",
        ],
      },
    ],
    addonsTitle: "Lägg till vid behov",
    addons: [
      {
        name: "Visuell identitet",
        price: "12\u00a0000 kr",
        note: "Logotyp, färg, typografi och riktlinjer",
      },
      {
        name: "Enbart logotyp",
        price: "6\u00a0000 kr",
        note: "Tre förslag, ett vidareutvecklat och färdigställt",
      },
      {
        name: "Texter och copy",
        price: "4\u00a0500 kr",
        note: "Vi skriver sajtens innehåll åt dig",
      },
      {
        name: "Extra sida",
        price: "2\u00a0500 kr",
        note: "Utöver paketets sidantal",
      },
      {
        name: "Drift & förvaltning",
        price: "1\u00a0490 kr/mån",
        note: "Uppdateringar, övervakning, säkerhetskopior, småändringar",
      },
      {
        name: "Fotografering",
        price: "Offert",
        note: "Miljö- och produktbilder på plats",
      },
    ],
    footnote:
      "Alla priser är exklusive moms. Betalning sker med 50 % vid start och 50 % vid lansering. Du äger sajten, koden och allt material när slutfakturan är betald.",
  },

  work: {
    eyebrow: "Case",
    title: "Vi har precis börjat, och det är din fördel.",
    lead: `seria startade ${site.founded}. Vi bygger vår portfolio just nu, vilket betyder att de första kunderna får oförskämt mycket uppmärksamhet per krona.`,
    emptyState: {
      title: "Bli ett av våra första case",
      body: "De tre första projekten får 30 % rabatt mot att vi får visa upp resultatet här. Du får en sajt byggd av någon som har allt att bevisa.",
      cta: "Prata med oss",
    },
    // Fyll på med riktiga projekt här. Så snart listan innehåller något visas
    // den i stället för tomt-läget ovan. Håll samma fält i en.ts.
    items: [] as {
      client: string;
      sector: string;
      year: string;
      title: string;
      body: string;
      results: string[];
      url?: string;
    }[],
    resultsLabel: "Resultat",
    visitLabel: "Besök sajten",
  },

  about: {
    eyebrow: "Om oss",
    title: "Liten studio. Stor omsorg om detaljerna.",
    lead: `seria är en webbstudio från ${site.city} som bygger webbplatser och digitala lösningar åt företag i hela Sverige. Vi är små med flit. Det betyder att du pratar med den som bygger, och att inget faller mellan stolarna.`,
    story: [
      "Vi startade seria för att för många företag betalar för mycket för för lite. Antingen får de en tema-mall som ser ut som tusen andra sajter, eller en byråprocess där halva budgeten går åt till möten.",
      "Vi gör tvärtom: ett samtal, ett fast pris, och sen bygger vi. Modern kod, egen design och en sajt som är snabb nog att märkas.",
      "Namnet betyder ungefär seriös, och det är ribban. Vi tar din verksamhet på lika stort allvar som du gör.",
    ],
    valuesTitle: "Så jobbar vi",
    values: [
      {
        title: "Fast pris",
        body: "Du får priset innan vi börjar. Blir det mer jobb än vi räknade med är det vårt problem, inte ditt.",
      },
      {
        title: "Öppen process",
        body: "Du ser sajten växa fram på en live-länk från dag ett. Inga överraskningar vid leverans.",
      },
      {
        title: "Du äger allt",
        body: "Kod, design, domän och konton är dina. Vi låser inte in dig i vår plattform.",
      },
      {
        title: "AI där det hjälper",
        body: "Vi använder AI för att gå snabbare genom research, kod och utkast. Besluten om design, struktur och ton tar vi.",
      },
    ],
    teamTitle: "Vem du får jobba med",
  },

  faq: {
    eyebrow: "Vanliga frågor",
    title: "Det du undrar innan du hör av dig.",
    items: [
      {
        q: "Vad kostar en sajt egentligen?",
        a: "En landningssida landar på 14\u00a0900 kr och en komplett företagssajt på 29\u00a0900 kr, exklusive moms. Större projekt offereras. Du får ett fast pris efter första samtalet. Ingen timdebitering som skenar.",
      },
      {
        q: "Hur lång tid tar det?",
        a: "En landningssida tar ungefär en vecka, en företagssajt två till tre veckor från att vi fått ditt innehåll. Det som oftast drar ut på tiden är texter och bilder. Får vi dem tidigt går det fort.",
      },
      {
        q: "Måste jag ha texter och bilder klara?",
        a: "Nej. Vi kan skriva texterna åt dig som tillägg, och vi hjälper dig hitta bra bildmaterial. Har du redan innehåll går det bara snabbare.",
      },
      {
        q: "Kan jag uppdatera sajten själv?",
        a: "Ja. I Studio-paketet och uppåt ingår ett CMS där du ändrar texter, bilder och sidor utan att röra kod. Vi går igenom det med dig vid lansering.",
      },
      {
        q: "Vem äger sajten när den är klar?",
        a: "Du. Kod, design, domän och alla konton står i ditt namn. Vill du byta leverantör senare tar du med dig allt.",
      },
      {
        q: "Vad händer efter lansering?",
        a: "I Studio ingår 30 dagars support. Därefter kan du teckna drift och förvaltning för 1\u00a0490 kr per månad, eller höra av dig när något behövs och betala per gång.",
      },
      {
        q: "Använder ni AI?",
        a: "Ja, som verktyg. AI hjälper oss gå fortare genom research, kodrutiner och utkast. Design, struktur och ton bestämmer människor. Annars hade din sajt låtit som alla andras.",
      },
      {
        q: "Måste vi ses fysiskt?",
        a: `Nej, vi jobbar med kunder i hela Sverige och sköter allt digitalt. Är du i ${site.city}-trakten ses vi gärna över en kaffe.`,
      },
    ],
  },

  ctaBand: {
    title: "Har du ett projekt på gång?",
    body: "Trettio minuter räcker för att veta om vi passar ihop. Du får ett fast pris och en tidsplan, utan att binda dig vid något.",
    primary: "Boka ett samtal",
    secondary: "Skicka ett meddelande",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Berätta om projektet.",
    lead: "Fyll i formuläret så hör vi av oss inom 24 timmar på vardagar. Vill du hellre prata direkt går det lika bra att ringa eller boka en tid.",
    directTitle: "Direkt till oss",
    emailLabel: "Mejl",
    phoneLabel: "Telefon",
    bookLabel: "Boka en tid",
    bookCta: "Välj en tid i kalendern",
    responseNote: "Vi svarar normalt samma arbetsdag.",
    form: {
      name: "Namn",
      namePlaceholder: "Anna Andersson",
      email: "Mejladress",
      emailPlaceholder: "anna@foretaget.se",
      company: "Företag",
      companyPlaceholder: "Företaget AB",
      phone: "Telefon (frivilligt)",
      phonePlaceholder: "070-123 45 67",
      projectType: "Vad gäller det?",
      projectTypeOptions: [
        "Ny webbplats",
        "Bygga om befintlig sajt",
        "Webbapp eller system",
        "E-handel",
        "Design och varumärke",
        "Drift och förvaltning",
        "Annat",
      ],
      budget: "Ungefärlig budget",
      budgetOptions: [
        "Under 15\u00a0000 kr",
        "15\u00a0000 – 30\u00a0000 kr",
        "30\u00a0000 – 60\u00a0000 kr",
        "Över 60\u00a0000 kr",
        "Vet inte än",
      ],
      selectPlaceholder: "Välj ett alternativ",
      message: "Berätta mer",
      messagePlaceholder: "Vad ska sajten göra, och när behöver du den?",
      submit: "Skicka förfrågan",
      submitting: "Skickar …",
      privacy: "Vi använder dina uppgifter enbart för att svara på din förfrågan.",
      successTitle: "Tack, meddelandet är skickat.",
      successBody:
        "Vi hör av oss inom 24 timmar på vardagar. Brådskar det får du gärna ringa.",
      errorTitle: "Något gick fel.",
      errorGeneric:
        "Meddelandet kunde inte skickas. Försök igen eller mejla oss direkt.",
      errorRequired: "Fyll i namn, mejladress och meddelande.",
      errorEmail: "Kontrollera mejladressen.",
      errorNotConfigured:
        "Formuläret är inte kopplat till någon mejltjänst ännu. Mejla oss direkt så länge.",
      sendAnother: "Skicka ett till meddelande",
    },
  },

  footer: {
    tagline: "Webbplatser och digitala lösningar för företag som vill växa.",
    navTitle: "Sidor",
    contactTitle: "Kontakt",
    legalTitle: "Juridiskt",
    privacy: "Integritetspolicy",
    terms: "Villkor",
    rights: "Alla rättigheter förbehållna.",
    builtWith: "Byggd i Next.js",
  },

  notFound: {
    code: "404",
    title: "Sidan finns inte.",
    body: "Länken kan vara gammal eller felstavad. Prova startsidan i stället.",
    cta: "Till startsidan",
  },
};

export default sv;
export type Dictionary = typeof sv;
