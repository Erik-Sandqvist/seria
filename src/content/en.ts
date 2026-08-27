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
        "Websites, web apps, e-commerce, design and technical SEO. Built from scratch, no templates.",
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
    privacy: {
      title: "Privacy policy",
      description:
        "What personal data we process, why, for how long and what rights you have.",
    },
    terms: {
      title: "Terms",
      description: "The terms for this website and for working with seria.",
    },
  },

  legal: {
    updatedLabel: "Last updated",
    backLabel: "Back to the home page",
    privacy: {
      title: "Privacy policy",
      intro:
        "We collect as little as possible and never pass anything on. This page describes exactly what happens to the details you give us.",
      sections: [
        {
          h: "Who is responsible",
          body: [
            `${site.legalName}, company reg. no. [REPLACE], is the data controller for the processing described here. Contact us at ${site.email} with any questions, or to exercise any of your rights.`,
          ],
        },
        {
          h: "What we process",
          body: [
            "If you send the contact form we process your name, email address and message, plus company, phone number, project type and budget if you fill those in. None of those extra fields are required — only name, email and message.",
            "If you email or call us directly, we process whatever you choose to share in that contact.",
          ],
        },
        {
          h: "Why, and on what basis",
          body: [
            "The details are used solely to answer your enquiry and to be able to quote. The legal basis is legitimate interest: you contacted us, and we have a legitimate interest in being able to reply.",
            "If it turns into a project, the details are then processed to perform the contract with you, and to the extent Swedish accounting law requires.",
          ],
        },
        {
          h: "How long we keep them",
          body: [
            "Enquiries that do not lead to work are deleted no later than twelve months after the last contact. If it becomes a project, records relating to the business are kept for as long as accounting law requires — currently seven years.",
          ],
        },
        {
          h: "Who else sees them",
          body: [
            `Form emails are sent via ${site.emailProvider}, and the site is hosted with ${site.hostingProvider}. Both act as our data processors and handle the details only on our instructions.`,
            "Both providers may process data outside the EU/EEA. Where that happens, the transfer relies on the European Commission's standard contractual clauses. [REPLACE if you change provider — check what applies with the new one.]",
            "Beyond that we do not share your details with anyone, and we never sell them.",
          ],
        },
        {
          h: "Cookies and analytics",
          body: [
            "This website sets no cookies and runs no visitor analytics. There is nothing to consent to, and therefore no cookie banner.",
            "[REPLACE: if you add analytics later, this text must be rewritten and a consent banner added.]",
          ],
        },
        {
          h: "Your rights",
          body: [
            "You have the right to know what data we hold about you, to have it corrected or erased, to object to the processing, to request restriction, and to receive it in a machine-readable format.",
            `Get in touch at ${site.email} and we will sort it out. If you believe we are handling your data incorrectly, you have the right to complain to the Swedish Authority for Privacy Protection (IMY), imy.se.`,
          ],
        },
      ],
    },
    terms: {
      title: "Terms",
      intro:
        "The terms below cover this website. The terms for an individual project are always set out in the quote you approve — that takes precedence over this page.",
      sections: [
        {
          h: "About the content",
          body: [
            "We keep the content on this site current as best we can, but give no guarantee that everything is accurate or complete at any given moment.",
            "Prices shown exclude VAT and cover what is described in each package. They are indicative: a binding price comes only in a written quote.",
          ],
        },
        {
          h: "When an agreement is formed",
          body: [
            "Nothing on this site is a binding offer. An agreement is formed only once you have approved a quote from us in writing.",
          ],
        },
        {
          h: "Copyright",
          body: [
            `Text, images, code and design on this website belong to ${site.legalName} unless stated otherwise. You are welcome to link here and to quote with attribution, but not to republish the content as your own.`,
            "Material we produce in a project transfers to the client as set out in the quote — normally once the final invoice is paid.",
          ],
        },
        {
          h: "Links to others",
          body: [
            "The site may link on to services we do not control. We are not responsible for the content there.",
          ],
        },
        {
          h: "Liability",
          body: [
            "We are not liable for loss arising from your use of the information on this website. Our liability in a project is governed by the quote, and is limited there to the amount you paid for that project.",
          ],
        },
        {
          h: "Governing law",
          body: [
            "Swedish law applies. Disputes are settled by the Swedish general courts, unless we agree otherwise.",
          ],
        },
      ],
    },
  },

  hero: {
    eyebrow: `Web studio in ${site.city}`,
    titleLead: "Digital work,",
    titleAccent: "built to be taken seriously.",
    lead: "seria is a small studio building websites and digital tools for companies that want to grow. You get a fixed price before we start, and a site that is live within a few weeks.",
    primaryCta: "Book a call",
    secondaryCta: "See pricing",
    // Keep this line current. A stale availability note is worse than none.
    availability: "We have room for new projects right now",
    location: `${site.city} · working across Sweden`,
  },

  manifesto: {
    eyebrow: "What we stand for",
    title: "What decides whether a site works rarely shows up in the mockup.",
    // Asterisks tint the word with the accent colour, see lib/highlight.tsx.
    // The Swedish copy marks different words on purpose — the key phrase in a
    // sentence rarely lands in the same place after translation.
    lead: "A site has to *bring in customers*, *load fast* on a bad connection and *be editable* without breaking. That is harder than it sounds, and it is where our time goes.",
    pillars: [
      {
        title: "We write the code ourselves",
        body: "Every line is written *from scratch* in Next.js, TypeScript and React. No heavy theme dragging the site down and locking you in with one supplier.",
      },
      {
        title: "Load time is a requirement, not a hope",
        body: "Every site we ship should load in *under a second* on mobile. Google notices, and so does everyone who decides whether to stay.",
      },
      {
        title: "You talk to the person building it",
        body: "No account manager in between, no ticket numbers. Ask a question about the site and *the person who wrote the code* answers.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "Websites, web apps and everything around them.",
    allLabel: "All services",
    indexLabel: "Jump to a service",
    talkLabel: "Talk about this",
    lead: "We handle the whole chain: strategy, design, code and hosting. You do not have to coordinate three different suppliers.",
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
        body: "Logo, colour, typography and a design system that holds everything together, on the web, in social media and in print.",
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
        body: "Technical SEO, Core Web Vitals and analytics that show what actually brings in customers, not just visitor counts.",
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
        body: "Updates, monitoring, backups and continuous improvement. A site is not finished at launch. That is where it starts.",
        bullets: [
          "Round-the-clock monitoring",
          "Security updates",
          "Backups",
          "Ongoing small changes",
        ],
      },
      {
        number: "07",
        title: "Consulting",
        body: "Need to reinforce your own team? We take consulting assignments in testing, DevOps and web development — on site in Gothenburg or remote, short engagements as well as long ones.",
        bullets: [
          "Testing & QA",
          "DevOps & CI/CD",
          "Web development",
          "Short or long engagements",
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
        when: "Day 0",
        title: "The call",
        body: "Thirty minutes on the phone or video. We go through what you sell, to whom, and what the site needs to achieve. Then you get a fixed price and a delivery plan, before any work starts.",
      },
      {
        when: "Week 1",
        title: "Structure & design",
        body: "We settle the page structure, the copy and a design direction. You see the drafts and weigh in before a single line of code is written. This is where changes are cheap.",
      },
      {
        when: "Week 2",
        title: "Build",
        body: "We build the real thing. You follow along on a live link and leave comments directly on the site, instead of in long email threads full of screenshots.",
      },
      {
        when: "Week 3 →",
        title: "Launch & after",
        body: "We publish, connect the domain and analytics, and walk you through running the site yourself. Then we stay available, on a care plan if you want one and otherwise just a call away.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "What it costs, and what you get for it.",
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
          "CMS where you edit text and images yourself",
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
    title: "We have just started, and that is your advantage.",
    lead: `seria launched in ${site.founded}. We are building our portfolio right now, which means the first clients get an unreasonable amount of attention per krona.`,
    emptyState: {
      title: "Be one of our first cases",
      body: "The first three projects get 30 % off in exchange for letting us show the result here. You get a site built by someone with everything to prove.",
      cta: "Talk to us",
    },
    // Samma slug som i sv.ts — den binder ihop språken.
    items: [
      {
        slug: "exempelkund",
        client: "Exempelkund AB",
        sector: "Sector",
        year: "2026",
        title: "A headline that says what the project gave the client.",
        body: "Two sentences in the list: what the client needed and what they got. Save the detail for the case page — this is the hook, not the whole story.",
        results: ["Metric 01", "Metric 02", "Metric 03"],
        url: "",
        detail: {
          lead: "An intro on the case page that frames the engagement: who the client is, what was at stake and what the work resulted in.",
          role: "Design, development, hosting",
          duration: "6 weeks",
          stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
          sections: [
            {
              h: "The brief",
              body: [
                "Describe the starting point. What did the client have, what was not working, and what made them get in touch? Be concrete — an old site that loaded slowly is a better opening than “they wanted to modernise”.",
                "Include the constraints too: timeline, budget, existing systems that had to keep working.",
              ],
            },
            {
              h: "The work",
              body: [
                "What you actually did, in the order it happened. Structure and content first, then design, then build. Name the hard calls and why they landed where they did.",
                "This is where a case becomes professional rather than boastful: the reader should understand how you think, not just what you shipped.",
              ],
            },
            {
              h: "The outcome",
              body: [
                "What happened after launch? Measure it where you can — load time, conversions, enquiries, hours saved internally. The figures at the top of the page should be backed up here.",
                "If the client said something good, let it stand in their own words.",
              ],
            },
          ],
        },
      },
    ],
    resultsLabel: "Results",
    visitLabel: "Visit the site",
    caseLabel: "Read the full case",
    backLabel: "All work",
    roleLabel: "Role",
    durationLabel: "Timeline",
    stackLabel: "Stack",
    nextLabel: "Next case",
  },

  about: {
    eyebrow: "About",
    title: "Small studio. Serious care for the details.",
    lead: `seria is a web studio based in ${site.city}, building websites and digital solutions for companies across Sweden. We are small on purpose. It means you talk to the person building, and nothing falls through the cracks.`,
    story: [
      "We started seria because too many companies pay too much for too little. Either they get a theme that looks like a thousand other sites, or an agency process where half the budget goes to meetings.",
      "We do the opposite: one call, one fixed price, then we build. Modern code, custom design and a site fast enough to notice.",
      "The name roughly means serious, and that is the bar. We take your business as seriously as you do.",
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
        body: "We use AI to move faster through research, code and drafts. The decisions about design, structure and tone are ours.",
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
        a: "A landing page lands at SEK 14,900 and a complete company site at SEK 29,900, excluding VAT. Larger projects are quoted. You get a fixed price after the first call. No hourly billing that runs away.",
      },
      {
        q: "How long does it take?",
        a: "A landing page takes about a week, a company site two to three weeks from the moment we have your content. What usually slows things down is text and images. Get them to us early and it goes fast.",
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
        a: "Yes, as a tool. AI helps us move faster through research, routine code and drafts. Design, structure and tone are decided by people. Otherwise your site would sound like everyone else's.",
      },
      {
        q: "Do we have to meet in person?",
        a: `No. We work with clients across Sweden and handle everything remotely. If you are near ${site.city}, we are happy to meet over a coffee.`,
      },
    ],
  },

  banner: {
    label: "Message from seria",
    title: "Hello.",
    body: "Glad you found your way here. If you are wondering what a site would cost for your business, one call is enough.",
  },

  ctaBand: {
    title: "Got a project coming up?",
    body: "Thirty minutes is enough to know whether we are a fit. You get a fixed price and a timeline, with no commitment.",
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
      successTitle: "Thanks, your message is on its way.",
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
    builtWith: "Built with Next.js",
  },

  notFound: {
    code: "404",
    title: "This page does not exist.",
    body: "The link may be old or misspelled. Try the home page instead.",
    cta: "Go to the home page",
  },
};

export default en;
