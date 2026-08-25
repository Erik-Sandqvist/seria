import { site } from "@/site.config";
import type { Dictionary } from "./sv";

const en: Dictionary = {
  locale: "en",
  localeName: "English",
  htmlLang: "en",

  nav: {
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
    menu: "Menu",
    close: "Close",
    switchTo: "På svenska",
  },

  pages: {
    home: {
      title: `${site.name} — web development & digital solutions`,
      description:
        "seria is a small web studio building fast, sharp and measurable websites and digital solutions for companies. Fixed pricing, a clear process, delivery in weeks.",
    },
    services: {
      title: "Services",
      description:
        "Websites, web apps, e-commerce, design and technical SEO. Built from scratch — no templates.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Fixed prices, no surprises. Landing page from SEK 14,900, full company site from SEK 29,900.",
    },
    process: {
      title: "Process",
      description:
        "From the first call to a live site in three weeks. Here is how it works, step by step.",
    },
    work: {
      title: "Work",
      description: "Projects we have built and what they did for the client.",
    },
    about: {
      title: "About",
      description: "Who we are, how we work and why we started seria.",
    },
    contact: {
      title: "Contact",
      description:
        "Tell us about your project and we will come back within 24 hours with a fixed price.",
    },
  },

  hero: {
    eyebrow: "Web studio · Sweden",
    titleLead: "Digital work,",
    titleAccent: "built to be taken seriously.",
    lead: "seria is a small studio building websites and digital tools for companies that want to grow. A fixed price before we start, a clear process, and delivery in weeks — not months.",
    primaryCta: "Book a call",
    secondaryCta: "See pricing",
    stats: [
      { value: "2–3 wk", label: "typical delivery" },
      { value: "Fixed", label: "price up front" },
      { value: "< 24 h", label: "quote turnaround" },
      { value: "100 %", label: "custom code, no templates" },
    ],
  },

  manifesto: {
    eyebrow: "What we stand for",
    title: "A good-looking site is easy. A site that does the work is serious craft.",
    lead: "We do not build websites to tick a box. We build them to bring in customers, load instantly and still feel current three years from now.",
    pillars: [
      {
        title: "Built, not assembled",
        body: "Every line is written from scratch in modern tools — Next.js, TypeScript and React. No heavy theme dragging the site down and locking you in.",
      },
      {
        title: "Speed is a feature",
        body: "Every site we ship should load in under a second on mobile. Google notices, and so does everyone who decides whether to stay.",
      },
      {
        title: "A human who answers",
        body: "You talk to the person actually building your site. No account manager in between, no ticket numbers.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "Everything you need to be seen and sell online.",
    allLabel: "All services",
    lead: "We handle the whole chain — strategy, design, code and hosting. You do not have to coordinate three different suppliers.",
    items: [
      {
        number: "01",
        title: "Websites",
        body: "Company sites, landing pages and campaign sites. Designed from scratch and built to load fast, rank in Google and turn visitors into customers.",
        bullets: [
          "Custom design",
          "Mobile first",
          "CMS so you can update it yourself",
          "Technical SEO from day one",
        ],
      },
      {
        number: "02",
        title: "Web apps & systems",
        body: "For when a regular website is not enough. Customer portals, booking systems, quote tools and internal systems that remove manual work.",
        bullets: [
          "Login and roles",
          "Database and API",
          "Integrations with your existing systems",
          "Built to grow",
        ],
      },
      {
        number: "03",
        title: "E-commerce",
        body: "Shopify stores or headless setups with a custom frontend. From product feed to checkout, payment and shipping.",
        bullets: [
          "Shopify or headless",
          "Swish, Klarna and cards",
          "Product feeds",
          "Conversion analysis",
        ],
      },
      {
        number: "04",
        title: "Design & brand",
        body: "Logo, colour, typography and a design system that holds everything together — on the web, in social media and in print.",
        bullets: [
          "Logo and symbol",
          "Colour and typography",
          "Design system",
          "Social media templates",
        ],
      },
      {
        number: "05",
        title: "SEO & measurement",
        body: "Technical SEO, Core Web Vitals and analytics that show what actually brings in customers — not just visitor counts.",
        bullets: [
          "Technical SEO audit",
          "Performance work",
          "Analytics with goal tracking",
          "Monthly report",
        ],
      },
      {
        number: "06",
        title: "Hosting & care",
        body: "Updates, monitoring, backups and continuous improvement. A site is not finished at launch — that is where it starts.",
        bullets: [
          "Round-the-clock monitoring",
          "Security updates",
          "Backups",
          "Ongoing small changes",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "How it works.",
    lead: "Four steps, no surprises. You know what happens, what it costs and when you get the site.",
    steps: [
      {
        step: "Step 01",
        when: "Day 0",
        title: "The call",
        body: "Thirty minutes on the phone or video. We go through what you sell, to whom, and what the site needs to achieve. Then you get a fixed price and a delivery plan — before any work starts.",
      },
      {
        step: "Step 02",
        when: "Week 1",
        title: "Structure & design",
        body: "We settle the page structure, the copy and a design direction. You see the drafts and weigh in before a single line of code is written. This is where changes are cheap.",
      },
      {
        step: "Step 03",
        when: "Week 2",
        title: "Build",
        body: "We build the real thing. You follow along on a live link and leave comments directly on the site — no long email threads full of screenshots.",
      },
      {
        step: "Step 04",
        when: "Week 3 →",
        title: "Launch & after",
        body: "We publish, connect the domain and analytics, and walk you through running the site yourself. Then we stay available — on a care plan if you want one, or just a call away if you do not.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "A fixed price. Before we start.",
    lead: "You should know exactly what it costs before you say yes. All prices exclude VAT and cover a complete, launched project.",
    popularLabel: "Most chosen",
    ctaLabel: "Get started",
    customCtaLabel: "Request a quote",
    includesLabel: "Includes",
    timelineLabel: "Timeline",
    tiers: [
      {
        id: "start",
        name: "Start",
        price: "SEK 14,900",
        priceNote: "excl. VAT",
        popular: false,
        tagline: "One strong page that does one thing really well.",
        for: "For you who needs to be out there fast: a new company, a single service to sell or a campaign that has to land.",
        timeline: "About 1 week",
        features: [
          "Landing page, up to 5 sections",
          "Custom design to match your brand",
          "Mobile, tablet and desktop",
          "Contact form straight to your inbox",
          "Basic SEO and analytics",
          "Publishing and domain setup",
          "One round of revisions",
        ],
      },
      {
        id: "studio",
        name: "Studio",
        price: "SEK 29,900",
        priceNote: "excl. VAT",
        popular: true,
        tagline: "A complete company site you can grow into.",
        for: "For established companies that need several pages, want to update content themselves and take their online presence seriously.",
        timeline: "About 2–3 weeks",
        features: [
          "Up to 8 pages",
          "Custom design and a design system",
          "CMS — you edit text and images yourself",
          "Booking, forms or a quote flow",
          "Technical SEO and performance work",
          "Analytics with goal tracking",
          "Two rounds of revisions",
          "30 days of support after launch",
        ],
      },
      {
        id: "skala",
        name: "Scale",
        price: "From SEK 59,000",
        priceNote: "quoted per project",
        popular: false,
        tagline: "When it is not a site but a system.",
        for: "For web apps, e-commerce, multilingual sites and integrations with systems you already use.",
        timeline: "From 4 weeks",
        features: [
          "Web app, portal or e-commerce",
          "Login, roles and database",
          "Integrations and APIs",
          "Multilingual site",
          "Discovery and technical architecture",
          "Ongoing development in sprints",
        ],
      },
    ],
    addonsTitle: "Add when you need it",
    addons: [
      {
        name: "Visual identity",
        price: "SEK 12,000",
        note: "Logo, colour, typography and guidelines",
      },
      {
        name: "Logo only",
        price: "SEK 6,000",
        note: "Three directions, one refined and finished",
      },
      {
        name: "Copywriting",
        price: "SEK 4,500",
        note: "We write the content for your site",
      },
      {
        name: "Extra page",
        price: "SEK 2,500",
        note: "Beyond the pages in your package",
      },
      {
        name: "Hosting & care",
        price: "SEK 1,490/mo",
        note: "Updates, monitoring, backups, small changes",
      },
      {
        name: "Photography",
        price: "On request",
        note: "On-location and product photography",
      },
    ],
    footnote:
      "All prices exclude VAT. Payment is 50 % at start and 50 % at launch. You own the site, the code and all material once the final invoice is paid.",
  },

  work: {
    eyebrow: "Work",
    title: "We have just started — and that is your advantage.",
    lead: `seria launched in ${site.founded}. We are building our portfolio right now, which means the first clients get an unreasonable amount of attention per krona.`,
    emptyState: {
      title: "Be one of our first cases",
      body: "The first three projects get 30 % off in exchange for letting us show the result here. You get a site built by someone with everything to prove.",
      cta: "Talk to us",
    },
    items: [],
    resultsLabel: "Results",
    visitLabel: "Visit the site",
  },

  about: {
    eyebrow: "About",
    title: "Small studio. Serious care for the details.",
    lead: `seria is a web studio based in ${site.city}, building websites and digital solutions for companies across Sweden. We are small on purpose — it means you talk to the person building, and nothing falls through the cracks.`,
    story: [
      "We started seria because too many companies pay too much for too little. Either they get a theme that looks like a thousand other sites, or an agency process where half the budget goes to meetings.",
      "We do the opposite: one call, one fixed price, then we build. Modern code, custom design and a site fast enough to notice.",
      "The name roughly means serious — and that is the bar. We take your business as seriously as you do.",
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Fixed price",
        body: "You get the price before we start. If it turns out to be more work than we estimated, that is our problem, not yours.",
      },
      {
        title: "Open process",
        body: "You watch the site take shape on a live link from day one. No surprises at delivery.",
      },
      {
        title: "You own everything",
        body: "Code, design, domain and accounts are yours. We do not lock you into our platform.",
      },
      {
        title: "AI where it helps",
        body: "We use AI to move faster through research, code and drafts. The decisions — design, structure and tone — are ours.",
      },
    ],
    teamTitle: "Who you will work with",
  },

  faq: {
    eyebrow: "FAQ",
    title: "What you are wondering before you get in touch.",
    items: [
      {
        q: "What does a site actually cost?",
        a: "A landing page lands at SEK 14,900 and a complete company site at SEK 29,900, excluding VAT. Larger projects are quoted. You get a fixed price after the first call — no hourly billing that runs away.",
      },
      {
        q: "How long does it take?",
        a: "A landing page takes about a week, a company site two to three weeks from the moment we have your content. What usually slows things down is text and images — get them to us early and it goes fast.",
      },
      {
        q: "Do I need my copy and images ready?",
        a: "No. We can write the copy for you as an add-on, and we will help you find good imagery. If you already have content, it just goes quicker.",
      },
      {
        q: "Can I update the site myself?",
        a: "Yes. Studio and up include a CMS where you change text, images and pages without touching code. We walk you through it at launch.",
      },
      {
        q: "Who owns the site when it is done?",
        a: "You do. Code, design, domain and every account is in your name. If you switch supplier later, you take all of it with you.",
      },
      {
        q: "What happens after launch?",
        a: "Studio includes 30 days of support. After that you can take a care plan at SEK 1,490 per month, or just get in touch when something is needed and pay per job.",
      },
      {
        q: "Do you use AI?",
        a: "Yes, as a tool. AI helps us move faster through research, routine code and drafts. Design, structure and tone are decided by people — otherwise your site would sound like everyone else's.",
      },
      {
        q: "Do we have to meet in person?",
        a: `No. We work with clients across Sweden and handle everything remotely. If you are near ${site.city}, we are happy to meet over a coffee.`,
      },
    ],
  },

  ctaBand: {
    title: "Got a project coming up?",
    body: "Thirty minutes is enough to know whether we are a fit. You get a fixed price and a timeline — with no commitment.",
    primary: "Book a call",
    secondary: "Send a message",
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us about the project.",
    lead: "Fill in the form and we will get back to you within 24 hours on weekdays. If you would rather talk, call us or book a slot.",
    directTitle: "Straight to us",
    emailLabel: "Email",
    phoneLabel: "Phone",
    bookLabel: "Book a slot",
    bookCta: "Pick a time in the calendar",
    responseNote: "We normally reply the same working day.",
    form: {
      name: "Name",
      namePlaceholder: "Anna Andersson",
      email: "Email",
      emailPlaceholder: "anna@company.com",
      company: "Company",
      companyPlaceholder: "Company Ltd",
      phone: "Phone (optional)",
      phonePlaceholder: "+46 70 123 45 67",
      projectType: "What is it about?",
      projectTypeOptions: [
        "New website",
        "Rebuild an existing site",
        "Web app or system",
        "E-commerce",
        "Design and brand",
        "Hosting and care",
        "Something else",
      ],
      budget: "Approximate budget",
      budgetOptions: [
        "Under SEK 15,000",
        "SEK 15,000 – 30,000",
        "SEK 30,000 – 60,000",
        "Over SEK 60,000",
        "Not sure yet",
      ],
      selectPlaceholder: "Choose an option",
      message: "Tell us more",
      messagePlaceholder: "What should the site do, and when do you need it?",
      submit: "Send enquiry",
      submitting: "Sending …",
      privacy: "We use your details only to answer your enquiry.",
      successTitle: "Thanks — your message is on its way.",
      successBody:
        "We will get back to you within 24 hours on weekdays. If it is urgent, give us a call.",
      errorTitle: "Something went wrong.",
      errorGeneric:
        "The message could not be sent. Try again or email us directly.",
      errorRequired: "Please fill in name, email and message.",
      errorEmail: "Please check the email address.",
      errorNotConfigured:
        "The form is not connected to an email service yet. Please email us directly in the meantime.",
      sendAnother: "Send another message",
    },
  },

  footer: {
    tagline: "Websites and digital solutions for companies that want to grow.",
    navTitle: "Pages",
    contactTitle: "Contact",
    legalTitle: "Legal",
    privacy: "Privacy policy",
    terms: "Terms",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js. Fast on purpose.",
  },

  notFound: {
    code: "404",
    title: "This page does not exist.",
    body: "The link may be old or misspelled. Try the home page instead.",
    cta: "Go to the home page",
  },
};

export default en;
