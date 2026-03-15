export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const localeNames: Record<Locale, string> = { en: "EN", ar: "عربي" };
export const rtlLocales: Locale[] = ["ar"];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.quote": "Get a Quote",

    // Mega menu
    "mega.exhibition": "Exhibition Design",
    "mega.exhibition.desc": "Custom stands from 25 to 1000+ sqm",
    "mega.project": "Project Management",
    "mega.project.desc": "End-to-end logistics and delivery",
    "mega.concept": "Conceptual Event Design",
    "mega.concept.desc": "Immersive brand environments",
    "mega.media": "Content & Media",
    "mega.media.desc": "Video, graphics, interactive tech",

    // Hero
    "hero.badge": "UAE-Based, Globally Deployed",
    "hero.title": "We Build Experiences That",
    "hero.title.accent": "Command Attention",
    "hero.sub": "Exhibition stands, event production, and immersive brand environments from <strong>25 sqm to 1000+ sqm</strong>. Trusted by Microsoft, Vanderlande, and brands across 10 countries.",
    "hero.cta.start": "Start Your Project",
    "hero.cta.work": "View Our Work",
    "hero.stat.projects": "Projects Delivered",
    "hero.stat.countries": "Countries",
    "hero.stat.sqm": "sqm Largest Build",
    "hero.stat.ontime": "On-Time Delivery",

    // Hero stats (homepage inline)
    "hero.stat.projects.short": "Projects",
    "hero.stat.countries.short": "Countries",
    "hero.stat.ontime.short": "On-Time",

    // Trust
    "trust.label": "Trusted by industry leaders",

    // Marquee items (homepage scrolling text)
    "marquee.exhibition": "Exhibition Design",
    "marquee.event": "Event Production",
    "marquee.brand": "Brand Experiences",
    "marquee.doubledecker": "Double Deckers",
    "marquee.immersive": "Immersive Spaces",
    "marquee.global": "Global Delivery",

    // Services section (homepage)
    "services.label": "What We Do",
    "services.title": "Full-Spectrum Exhibition",
    "services.title.accent": "& Event Solutions",
    "services.desc": "From the first sketch to the final walkthrough, we handle every detail so you can focus on what matters: your audience.",
    "services.learn": "Learn more",

    // Homepage services section (different heading from services page)
    "home.services.title": "End-to-End Exhibition",
    "home.services.title.accent": "Solutions",

    // Service cards (homepage)
    "svc.exhibition.title": "Exhibition Design & Build",
    "svc.exhibition.desc": "Custom-built stands from concept to completion. We handle everything — design, engineering, fabrication, and on-site installation — so you can focus on your brand.",
    "svc.pm.title": "Project Management",
    "svc.pm.desc": "Dedicated project managers coordinate every moving piece across countries, vendors, and timelines. No surprises, no delays — just seamless execution.",
    "svc.event.title": "Conceptual Event Design",
    "svc.event.desc": "Immersive spatial concepts that tell your brand story. From mood boards to 3D renders, we translate your vision into environments that captivate.",
    "svc.media.title": "Content & Media Production",
    "svc.media.desc": "Professional photography, videography, and post-production for your exhibition presence — from booth shoots to full event coverage and social media content.",

    // Services page
    "servicespage.label": "Our Capabilities",
    "servicespage.title": "End-to-End Exhibition",
    "servicespage.title.accent": "& Event Services",
    "servicespage.desc": "We design, engineer, build, and manage exhibition stands and events across the Middle East and beyond. One team. One point of accountability. Zero excuses.",
    "servicespage.hero.desc": "From first sketch to final breakdown, we handle every detail so you can focus on what matters — your brand, your audience, your goals.",
    "servicespage.quote": "Get a Quote",

    // Services page — Exhibition Design & Build bullets
    "servicespage.exhibition.label": "Exhibition Design",
    "servicespage.exhibition.title": "Exhibition Design & Build",
    "servicespage.exhibition.b1": "Custom exhibition stands from 25 sqm to 1000+ sqm, designed for impact and flow",
    "servicespage.exhibition.b2": "Integrated LED walls, lightboxes, and dynamic AV installations",
    "servicespage.exhibition.b3": "Modular & reusable booth systems for multi-show ROI",
    "servicespage.exhibition.b4": "Full 3D visualization and walkthrough renders before build",
    "servicespage.exhibition.b5": "Material sourcing and sustainable build options",
    "servicespage.exhibition.b6": "On-site installation, supervision, and post-show dismantling",

    // Services page — Project Management bullets
    "servicespage.pm.label": "Project Management",
    "servicespage.pm.title": "Project Management",
    "servicespage.pm.b1": "Dedicated project manager from brief to breakdown",
    "servicespage.pm.b2": "Venue liaison, permitting, and regulatory compliance",
    "servicespage.pm.b3": "Logistics coordination including freight, customs, and storage",
    "servicespage.pm.b4": "Timeline and milestone tracking with weekly reporting",
    "servicespage.pm.b5": "Vendor management and on-site contractor supervision",
    "servicespage.pm.b6": "Budget control with transparent cost breakdowns at every stage",

    // Services page — Conceptual Event Design bullets
    "servicespage.event.label": "Conceptual Event Design",
    "servicespage.event.title": "Conceptual Event Design",
    "servicespage.event.b1": "Immersive brand experiences and themed environments",
    "servicespage.event.b2": "Launch events, gala dinners, and corporate activations",
    "servicespage.event.b3": "Spatial design, guest flow mapping, and capacity planning",
    "servicespage.event.b4": "Interactive installations, AR/VR integrations, and live demos",
    "servicespage.event.b5": "Stage design, lighting plots, and scenic fabrication",
    "servicespage.event.b6": "Full creative direction from concept through execution",

    // Services page — Content & Media bullets
    "servicespage.media.label": "Content & Media",
    "servicespage.media.title": "Content & Media Production",
    "servicespage.media.b1": "Video production for booth loops, teasers, and social content",
    "servicespage.media.b2": "LED content creation optimized for large-format displays",
    "servicespage.media.b3": "Motion graphics, 3D product animations, and infographics",
    "servicespage.media.b4": "Event photography and same-day social media assets",
    "servicespage.media.b5": "Branded collateral design: brochures, banners, and giveaways",
    "servicespage.media.b6": "Post-event highlight reels and case study documentation",

    // Services page CTA
    "servicespage.cta.title": "Let's Talk About Your Next Project",
    "servicespage.cta.desc": "Whether it's a 20 sqm stand or a 500 sqm build, we bring the same obsessive attention to detail.",
    "servicespage.cta.btn": "Start a Conversation",

    // Cinematic dividers (homepage)
    "cine.microsoft": "700 sqm. Double Decker. Microsoft at LEAP.",
    "cine.microsoft.sub": "Our largest build to date — a partner-centric stand in Riyadh.",
    "cine.microsoft.sub.full": "Our largest build to date — a fully immersive, two-storey brand experience designed to command the show floor.",
    "cine.impact": "Every Square Meter Engineered for Impact.",
    "cine.nespresso.title": "Not Just Stands.",
    "cine.nespresso.title.accent": "Unforgettable Moments.",
    "cine.nespresso.desc": "From intimate product launches to 1000+ sqm builds — we create brand experiences that people talk about long after the event.",

    // Featured projects section (homepage)
    "home.featured.label": "Selected Work",
    "home.featured.title": "Featured",
    "home.featured.title.accent": "Projects",

    // Process section (homepage)
    "process.label": "How We Work",
    "process.title": "From Brief to",
    "process.title.accent": "Show Floor",
    "process.step1.title": "Brief",
    "process.step1.desc": "We listen, ask the right questions, and define exactly what success looks like for your brand.",
    "process.step2.title": "Design",
    "process.step2.desc": "3D concepts, material specs, and technical drawings — iterated until you're thrilled.",
    "process.step3.title": "Build",
    "process.step3.desc": "Precision fabrication in our local workshop, with quality checks at every stage.",
    "process.step4.title": "Deliver",
    "process.step4.desc": "On-site installation, show support, and dismantle — we're there until the last bolt is packed.",

    // Testimonials section (homepage)
    "testimonials.label": "Client Feedback",
    "testimonials.title": "What Our Clients",
    "testimonials.title.accent": "Say",
    "testimonials.1.quote": "The Butter Duck doesn't just build stands — they build experiences. Our LEAP stand was the most talked-about presence at the entire show.",
    "testimonials.1.role": "Regional Events Director",
    "testimonials.1.company": "Microsoft Middle East",
    "testimonials.2.quote": "The level of precision in the final build was remarkable — every detail matched the 3D renders. On time, on budget, zero surprises.",
    "testimonials.2.role": "Head of Global Exhibitions",
    "testimonials.2.company": "Vanderlande Industries",
    "testimonials.3.quote": "We've worked with exhibition companies across the region — nobody comes close to the build quality and design thinking these guys bring.",
    "testimonials.3.role": "Marketing Manager",
    "testimonials.3.company": "Spark Logistics",

    // About snapshot section (homepage)
    "home.about.p1": "The Butter Duck is a UAE-based exhibition and event production company with global reach. We design and build custom stands for the world's biggest trade shows — from concept sketches to on-site installation, across ten countries and counting.",
    "home.about.p2": "Our team of architects, engineers, and project managers obsesses over every detail so your brand gets the spotlight it deserves. No templates, no shortcuts — just unforgettable experiences delivered on time, every time.",
    "home.about.btn": "About Our Exhibition Company",
    "home.about.badge": "Since 2019",

    // Homepage CTA
    "home.cta.title": "Ready to Build Something Remarkable?",
    "home.cta.desc": "Let's turn your next exhibition into an unforgettable brand experience.",

    // Portfolio
    "portfolio.label": "Selected Work",
    "portfolio.title": "Projects That Speak",
    "portfolio.title.accent": "for Themselves",
    "portfolio.desc": "From a 1000+ sqm build to a refined 25 sqm compact stand — every project gets our full commitment.",
    "portfolio.viewall": "View All Projects",

    // Portfolio page
    "portfoliopage.label": "Our Work",
    "portfoliopage.desc": "From 25 sqm compact stands to 1000+ sqm builds — every project is engineered to make your brand unmissable.",
    "portfoliopage.spec.footprint": "Footprint",
    "portfoliopage.spec.location": "Location",
    "portfoliopage.cta.title": "Let's Build Your Next Stand",
    "portfoliopage.cta.desc": "Got an exhibition coming up? Tell us the event, the space, and the vision — we'll handle the rest.",
    "portfoliopage.cta.btn": "Start a Conversation",

    // Stats
    "stats.projects": "Projects Delivered",
    "stats.countries": "Countries Operated In",
    "stats.industries": "Industries Served",
    "stats.ontime": "On-Time Delivery Rate",


    // About
    "about.label": "Who We Are",
    "about.title": "Built Different.",
    "about.title.accent": "Built to Deliver.",
    "about.p1": "We are a UAE-based exhibition and event company that operates like a special operations unit: small, focused, lethal on deadlines. Every project gets senior-level attention from concept through final installation.",
    "about.p2": "Our team combines architectural design, structural engineering, and creative production under one roof — eliminating the handoff gaps that plague traditional agencies.",
    "about.learn": "Learn More",
    "about.talk": "Talk to Us",

    // About page
    "aboutpage.label": "Who We Are",
    "aboutpage.title": "Built Different.",
    "aboutpage.title.accent": "Built to Deliver.",
    "aboutpage.desc": "A UAE-based exhibition and event company that operates like a special operations unit: small, focused, and relentless on deadlines.",
    "aboutpage.hero.label": "About Us",
    "aboutpage.hero.desc": "We're a UAE-based exhibition design and event production studio obsessed with quality, deadlines, and making brands impossible to ignore on the show floor.",

    // About page — story section
    "aboutpage.story.label": "Our Story",
    "aboutpage.story.title": "From Concept to",
    "aboutpage.story.title.accent": "Global Execution",
    "aboutpage.story.title.alt": "From Renders to Reality,",
    "aboutpage.story.title.accent.alt": "Without Compromise",
    "aboutpage.story.p1": "The Butter Duck was founded on a simple frustration: too many exhibition companies over-promise on the render and under-deliver on the floor. We decided to build a studio where the final product matches — or exceeds — the 3D visual. Every time.",
    "aboutpage.story.p2": "Today, we operate from the UAE and deploy globally. Our team combines architectural design, structural engineering, AV expertise, and project management into a single integrated pipeline. No middlemen. No surprises.",
    "aboutpage.story.badge": "UAE HQ",

    // About page — values section
    "aboutpage.values.label": "Our Values",
    "aboutpage.values.title": "What Drives",
    "aboutpage.values.title.accent": "Every Decision",
    "aboutpage.values.title.alt": "What We",
    "aboutpage.values.title.accent.alt": "Stand For",
    "aboutpage.values.v1.title": "Deadlines Are Sacred",
    "aboutpage.values.v1.desc": "We don't do \"almost on time.\" Every project ships on schedule, no excuses.",
    "aboutpage.values.v2.title": "Senior Eyes Only",
    "aboutpage.values.v2.desc": "No hand-offs to juniors. Your project is managed by the people who were involved from A to Z.",
    "aboutpage.values.v3.title": "Transparent Pricing",
    "aboutpage.values.v3.desc": "Line-item quotes. No hidden fees. You know exactly where every dirham goes.",
    "aboutpage.values.v4.title": "Design with Purpose",
    "aboutpage.values.v4.desc": "Every element earns its place. We design for engagement, not decoration.",
    "aboutpage.values.v5.title": "Build Quality",
    "aboutpage.values.v5.desc": "Premium materials, precision engineering, and finishes that hold up under show floor pressure.",
    "aboutpage.values.v6.title": "Global Reach Local Knowledge",
    "aboutpage.values.v6.desc": "UAE HQ, deployed across 10 countries. We know the venues, the vendors, and the rules.",

    // About page — capabilities
    "aboutpage.cap.label": "Capabilities",
    "aboutpage.cap.title": "What We Bring",
    "aboutpage.cap.title.accent": "to the Table",
    "aboutpage.cap.title.alt": "Everything",
    "aboutpage.cap.title.accent.alt": "In-House",
    "aboutpage.cap.3d": "3D Design",
    "aboutpage.cap.structural": "Structural Engineering",
    "aboutpage.cap.fabrication": "Fabrication Management",
    "aboutpage.cap.av": "AV Integration",
    "aboutpage.cap.logistics": "Logistics & Freight",
    "aboutpage.cap.installation": "On-Site Installation",
    "aboutpage.cap.graphic": "Graphic Production",
    "aboutpage.cap.content": "Content Production",
    "aboutpage.cap.branding": "Branding",
    "aboutpage.cap.finance": "Financial Evaluation",
    "aboutpage.cap.comms": "Communication",

    // About page — timeline
    "aboutpage.track.label": "Track Record",
    "aboutpage.track.title": "Milestones",
    "aboutpage.track.title.accent": "That Matter",
    "aboutpage.track.label.alt": "Our Journey",
    "aboutpage.track.title.alt": "Key",
    "aboutpage.track.title.accent.alt": "Milestones",
    "aboutpage.tl.2019.title": "Company Founded",
    "aboutpage.tl.2019.desc": "Started in the UAE with a clear vision: exhibition builds that actually deliver on the render.",
    "aboutpage.tl.2020.title": "First Major Build",
    "aboutpage.tl.2020.desc": "Completed our first large-scale exhibition stand despite global lockdown challenges.",
    "aboutpage.tl.2021.title": "International Expansion",
    "aboutpage.tl.2021.desc": "Expanded operations beyond the UAE into Saudi Arabia, Europe, and Southeast Asia.",
    "aboutpage.tl.2022.title": "Microsoft Partnership",
    "aboutpage.tl.2022.desc": "Selected as exhibition partner for Microsoft's regional event activations.",
    "aboutpage.tl.2024.title": "80+ Projects Milestone",
    "aboutpage.tl.2024.desc": "Crossed 80 completed projects with a 100% on-time delivery record.",
    "aboutpage.tl.2025.title": "10 Countries Reached",
    "aboutpage.tl.2025.desc": "Expanded into marketing strategy and branding with the creation of Butter Studio. Now operating across 10 countries.",

    // About page CTA
    "aboutpage.cta": "Ready to Work With Us?",
    "aboutpage.cta.desc": "Tell us about your next exhibition or event — we'll show you what's possible.",
    "aboutpage.cta.btn": "Get in Touch",

    // CTA
    "cta.title": "Ready to Build Something",
    "cta.title.accent": "Remarkable?",
    "cta.desc": "Tell us about your next exhibition or event. We respond within 24 hours.",
    "cta.start": "Start Your Project",
    "cta.see": "See Our Work",

    // Contact page hero
    "contact.label": "Start a Project",
    "contact.hero.label": "Get in Touch",
    "contact.title": "Let's Build Something",
    "contact.title.accent": "Exceptional",
    "contact.desc": "Fill out our project brief form below and we will respond with a detailed proposal within 24 hours. Every inquiry gets senior-level attention.",
    "contact.hero.desc": "Whether you need a full exhibition build or just want to explore ideas, we're here to help. Fill out the RFP form or reach out directly.",

    // Contact — direct contact section
    "contact.direct": "Direct Contact",
    "contact.direct.desc": "Prefer a quick conversation? Reach out directly via phone, email, or WhatsApp. Our team is available Sunday through Thursday, 9:00 AM to 6:00 PM GST.",
    "contact.direct.title": "Reach Us",
    "contact.direct.title.accent": "Directly",
    "contact.office": "Office",
    "contact.office.address": "Marina Plaza, 29th Floor\nDubai Marina, Dubai, UAE",
    "contact.phone": "Phone & WhatsApp",
    "contact.phone.label": "Phone / WhatsApp",
    "contact.email": "Email",
    "contact.social": "Social",

    // Contact form — step titles
    "contact.step1.title": "What do you need?",
    "contact.step1.desc": "Select the primary service you are looking for.",
    "contact.step2.title": "Project Details",
    "contact.step2.desc": "Tell us about your exhibition or event.",
    "contact.step3.title": "Your Information",
    "contact.step3.desc": "How can we reach you?",
    "contact.step3.heading": "Your Details",
    "contact.step4.title": "Anything Else?",
    "contact.step4.desc": "Share any additional details or requirements.",

    // Contact form — step indicator
    "contact.stepof": "Step {step} of 4",

    // Contact form — service options
    "contact.svc.exhibition": "Exhibition Design & Build",
    "contact.svc.pm": "Project Management",
    "contact.svc.event": "Conceptual Event Design",
    "contact.svc.media": "Content & Media Production",

    // Contact form — field labels
    "contact.field.eventName": "Event / Exhibition Name *",
    "contact.field.eventName.placeholder": "e.g. GITEX Global 2026",
    "contact.field.eventDates": "Event Dates",
    "contact.field.eventDates.placeholder": "e.g. 14–18 Oct 2026",
    "contact.field.eventLocation": "Location / Venue",
    "contact.field.eventLocation.placeholder": "e.g. DWTC, Dubai",
    "contact.field.boothSize": "Booth Size",
    "contact.field.boothSize.placeholder": "Select size...",
    "contact.field.budget": "Budget Range",
    "contact.field.budget.placeholder": "Select range...",
    "contact.field.name": "Full Name *",
    "contact.field.name.placeholder": "John Smith",
    "contact.field.company": "Company *",
    "contact.field.company.placeholder": "Acme Corp",
    "contact.field.email": "Email *",
    "contact.field.email.placeholder": "john@acme.com",
    "contact.field.phone": "Phone",
    "contact.field.phone.placeholder": "+971 50 000 0000",
    "contact.field.country": "Country",
    "contact.field.country.placeholder": "UAE",
    "contact.field.notes": "Additional Notes",
    "contact.field.notes.placeholder": "Tell us about your vision, special requirements, or anything we should know...",

    // Contact form — booth sizes
    "contact.size.under20": "Under 20 sqm",
    "contact.size.20_50": "20 – 50 sqm",
    "contact.size.50_100": "50 – 100 sqm",
    "contact.size.100_200": "100 – 200 sqm",
    "contact.size.200_500": "200 – 500 sqm",
    "contact.size.500plus": "500+ sqm",
    "contact.size.notsure": "Not sure yet",

    // Contact form — budgets
    "contact.budget.under50": "Under AED 50,000",
    "contact.budget.50_150": "AED 50,000 – 150,000",
    "contact.budget.150_400": "AED 150,000 – 400,000",
    "contact.budget.400_1m": "AED 400,000 – 1,000,000",
    "contact.budget.1mplus": "AED 1,000,000+",
    "contact.budget.discuss": "Let's discuss",

    // Contact form — validation
    "contact.error.service": "Please select a service",
    "contact.error.eventName": "Event name is required",
    "contact.error.name": "Your name is required",
    "contact.error.email": "Email is required",
    "contact.error.emailInvalid": "Please enter a valid email",
    "contact.error.company": "Company name is required",
    "contact.error.consent": "Please agree to proceed",

    // Contact form — buttons
    "contact.submit": "Submit Project Brief",
    "contact.submit.btn": "Submit Request",
    "contact.submit.sending": "Sending...",
    "contact.next": "Next Step",
    "contact.next.btn": "Continue",
    "contact.back": "Back",
    "contact.consent": "I agree that The Butter Duck may store and process my data to respond to this inquiry.",
    "contact.consent.form": "I agree that The Butter Duck may contact me regarding this enquiry. My data will not be shared with third parties.",

    // Contact form — success
    "contact.success.title": "Project Brief Received",
    "contact.success.heading": "Request Received!",
    "contact.success.ref": "Your reference number:",
    "contact.success.reftext": "Your reference code is",
    "contact.success.followup": "We'll be in touch within 24 hours.",
    "contact.success.home": "Back to Home",

    // Contact form — error alert
    "contact.error.alert": "Something went wrong. Please try again or email us directly at hello@thebutterduck.com",

    // Contact page CTA
    "contact.cta.title": "Prefer a Quick Chat?",
    "contact.cta.desc": "Drop us a WhatsApp message and we'll get back to you within the hour.",
    "contact.cta.btn": "WhatsApp Us",

    // Footer
    "footer.brand": "Turning vision into experience, every event, every time. UAE-based exhibition design and event production for global brands.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.aboutus": "About Us",
    "footer.contact": "Contact",
    "footer.getintouch": "Get in Touch",

    // Breadcrumbs
    "bc.home": "Home",
    "bc.about": "About",
    "bc.services": "Services",
    "bc.portfolio": "Portfolio",
    "bc.contact": "Contact",

    // Case study / project detail
    "case.overview": "Overview",
    "case.overview.title": "The Project",
    "case.specs.title": "Project",
    "case.specs.title.accent": "Specs",
    "case.specs.client": "Client",
    "case.specs.event": "Event",
    "case.specs.location": "Location",
    "case.specs.size": "Size",
    "case.specs.type": "Type",
    "case.challenge": "The Challenge",
    "case.challenge.title": "What We Were Up Against",
    "case.solution": "Our Solution",
    "case.solution.title": "How We Made It Happen",
    "case.features": "Key Features",
    "case.features.title": "Engineering",
    "case.features.title.accent": "Highlights",
    "case.results": "Results",
    "case.results.title": "The",
    "case.results.title.accent": "Outcome",
    "case.cta": "Ready to Build Something Like This?",
    "case.cta.desc": "Tell us about your next exhibition and we'll show you what's possible.",
    "case.next": "Next Project",
    "case.prev": "Previous Project",
    "case.allprojects": "All Projects",

    // Mobile CTA bar
    "mobile.quote": "Get a Quote",
    "mobile.whatsapp": "WhatsApp",

    // 404 page
    "notfound.title": "404",
    "notfound.desc": "This page doesn't exist. Maybe it was dismantled after the show.",
    "notfound.home": "Back to Home",
    "notfound.work": "View Our Work",
  },

  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "المشاريع",
    "nav.about": "من نحن",
    "nav.quote": "طلب عرض سعر",

    // Mega menu
    "mega.exhibition": "تصميم المعارض",
    "mega.exhibition.desc": "أجنحة مخصصة من 25 إلى 1000+ م²",
    "mega.project": "إدارة المشاريع",
    "mega.project.desc": "خدمات لوجستية شاملة",
    "mega.concept": "تصميم الفعاليات",
    "mega.concept.desc": "بيئات العلامة التجارية الغامرة",
    "mega.media": "المحتوى والإعلام",
    "mega.media.desc": "فيديو، رسومات، تقنيات تفاعلية",

    // Hero
    "hero.badge": "مقرنا الإمارات، عملنا عالمي",
    "hero.title": "نبني تجارب",
    "hero.title.accent": "تجذب كل الأنظار",
    "hero.sub": "أجنحة معارض وإنتاج فعاليات وبيئات غامرة للعلامات التجارية من <strong>25 م² إلى 1000+ م²</strong>. موثوقون من مايكروسوفت وفاندرلاند وعلامات تجارية في 10 دول.",
    "hero.cta.start": "ابدأ مشروعك",
    "hero.cta.work": "عرض أعمالنا",
    "hero.stat.projects": "مشروع منجز",
    "hero.stat.countries": "دول",
    "hero.stat.sqm": "م² أكبر مشروع",
    "hero.stat.ontime": "تسليم في الموعد",

    // Hero stats (homepage inline)
    "hero.stat.projects.short": "مشاريع",
    "hero.stat.countries.short": "دول",
    "hero.stat.ontime.short": "التزام بالموعد",

    // Trust
    "trust.label": "موثوقون من رواد الصناعة",

    // Marquee items
    "marquee.exhibition": "تصميم المعارض",
    "marquee.event": "إنتاج الفعاليات",
    "marquee.brand": "تجارب العلامات التجارية",
    "marquee.doubledecker": "أجنحة مزدوجة الطوابق",
    "marquee.immersive": "مساحات تفاعلية",
    "marquee.global": "تسليم عالمي",

    // Services section (homepage)
    "services.label": "ما نقدمه",
    "services.title": "حلول شاملة للمعارض",
    "services.title.accent": "والفعاليات",
    "services.desc": "من أول رسم إلى الجولة النهائية، نتولى كل التفاصيل لتركز أنت على ما يهم: جمهورك.",
    "services.learn": "اعرف المزيد",

    // Homepage services section
    "home.services.title": "حلول معارض شاملة",
    "home.services.title.accent": "من البداية للنهاية",

    // Service cards (homepage)
    "svc.exhibition.title": "تصميم وبناء المعارض",
    "svc.exhibition.desc": "أجنحة مصممة خصيصاً من الفكرة حتى الإنجاز. نتولى كل شيء — التصميم والهندسة والتصنيع والتركيب — لتركز أنت على علامتك التجارية.",
    "svc.pm.title": "إدارة المشاريع",
    "svc.pm.desc": "مديرو مشاريع متخصصون ينسقون كل التفاصيل عبر الدول والموردين والجداول الزمنية. بلا مفاجآت، بلا تأخير — تنفيذ سلس فقط.",
    "svc.event.title": "التصميم المفاهيمي للفعاليات",
    "svc.event.desc": "مفاهيم مكانية غامرة تروي قصة علامتك التجارية. من لوحات المزاج إلى العروض ثلاثية الأبعاد، نترجم رؤيتك إلى بيئات آسرة.",
    "svc.media.title": "إنتاج المحتوى والإعلام",
    "svc.media.desc": "تصوير فوتوغرافي وفيديو احترافي وما بعد الإنتاج لحضورك في المعارض — من تصوير الجناح إلى التغطية الكاملة ومحتوى التواصل الاجتماعي.",

    // Services page
    "servicespage.label": "قدراتنا",
    "servicespage.title": "خدمات معارض وفعاليات",
    "servicespage.title.accent": "شاملة",
    "servicespage.desc": "نصمم ونهندس ونبني وندير أجنحة المعارض والفعاليات في الشرق الأوسط وخارجه. فريق واحد. مسؤولية واحدة.",
    "servicespage.hero.desc": "من أول رسم إلى آخر يوم تفكيك، نتولى كل التفاصيل لتركز أنت على ما يهم — علامتك التجارية، جمهورك، أهدافك.",
    "servicespage.quote": "طلب عرض سعر",

    // Services page — Exhibition Design & Build bullets
    "servicespage.exhibition.label": "تصميم المعارض",
    "servicespage.exhibition.title": "تصميم وبناء المعارض",
    "servicespage.exhibition.b1": "أجنحة معارض مخصصة من 25 م² إلى 1000+ م²، مصممة للتأثير والانسيابية",
    "servicespage.exhibition.b2": "شاشات LED مدمجة وصناديق ضوئية وتجهيزات سمعية بصرية ديناميكية",
    "servicespage.exhibition.b3": "أنظمة أجنحة معيارية قابلة لإعادة الاستخدام لتحقيق عائد متعدد المعارض",
    "servicespage.exhibition.b4": "عروض ثلاثية الأبعاد كاملة وجولات افتراضية قبل البناء",
    "servicespage.exhibition.b5": "توريد المواد وخيارات البناء المستدام",
    "servicespage.exhibition.b6": "تركيب في الموقع وإشراف وتفكيك بعد المعرض",

    // Services page — Project Management bullets
    "servicespage.pm.label": "إدارة المشاريع",
    "servicespage.pm.title": "إدارة المشاريع",
    "servicespage.pm.b1": "مدير مشروع مخصص من الملخص حتى التفكيك",
    "servicespage.pm.b2": "التنسيق مع المعرض والتصاريح والامتثال التنظيمي",
    "servicespage.pm.b3": "تنسيق اللوجستيات بما في ذلك الشحن والجمارك والتخزين",
    "servicespage.pm.b4": "متابعة الجدول الزمني والمراحل مع تقارير أسبوعية",
    "servicespage.pm.b5": "إدارة الموردين والإشراف على المقاولين في الموقع",
    "servicespage.pm.b6": "ضبط الميزانية مع تفصيل شفاف للتكاليف في كل مرحلة",

    // Services page — Conceptual Event Design bullets
    "servicespage.event.label": "التصميم المفاهيمي للفعاليات",
    "servicespage.event.title": "التصميم المفاهيمي للفعاليات",
    "servicespage.event.b1": "تجارب علامات تجارية غامرة وبيئات ذات طابع مميز",
    "servicespage.event.b2": "حفلات إطلاق وعشاء رسمي وتفعيلات مؤسسية",
    "servicespage.event.b3": "تصميم مكاني وتخطيط حركة الضيوف والطاقة الاستيعابية",
    "servicespage.event.b4": "تجهيزات تفاعلية ودمج الواقع المعزز والافتراضي والعروض الحية",
    "servicespage.event.b5": "تصميم المسرح ومخططات الإضاءة والتصنيع المسرحي",
    "servicespage.event.b6": "إدارة إبداعية كاملة من الفكرة حتى التنفيذ",

    // Services page — Content & Media bullets
    "servicespage.media.label": "المحتوى والإعلام",
    "servicespage.media.title": "إنتاج المحتوى والإعلام",
    "servicespage.media.b1": "إنتاج فيديو لعروض الأجنحة والتشويقات ومحتوى التواصل الاجتماعي",
    "servicespage.media.b2": "إنشاء محتوى LED محسّن لشاشات العرض الكبيرة",
    "servicespage.media.b3": "رسوم متحركة وتصميمات ثلاثية الأبعاد للمنتجات وإنفوجرافيك",
    "servicespage.media.b4": "تصوير فعاليات ومحتوى تواصل اجتماعي في نفس اليوم",
    "servicespage.media.b5": "تصميم مواد مطبوعة: كتيبات ولافتات وهدايا ترويجية",
    "servicespage.media.b6": "أفلام وثائقية للفعاليات ودراسات حالة بعد المعرض",

    // Services page CTA
    "servicespage.cta.title": "لنتحدث عن مشروعك القادم",
    "servicespage.cta.desc": "سواء كان جناحاً من 20 م² أو مشروعاً من 500 م²، نحرص على نفس الاهتمام بأدق التفاصيل.",
    "servicespage.cta.btn": "ابدأ المحادثة",

    // Cinematic dividers (homepage)
    "cine.microsoft": "700 م². طابقين. مايكروسوفت في LEAP.",
    "cine.microsoft.sub": "أكبر مشروع لنا حتى الآن — جناح شراكات في الرياض.",
    "cine.microsoft.sub.full": "أكبر مشروع لنا حتى الآن — تجربة علامة تجارية غامرة من طابقين مصممة للسيطرة على أرض المعرض.",
    "cine.impact": "كل متر مربع مُهندَس للتأثير.",
    "cine.nespresso.title": "ليست مجرد أجنحة.",
    "cine.nespresso.title.accent": "لحظات لا تُنسى.",
    "cine.nespresso.desc": "من حفلات الإطلاق الحميمة إلى مشاريع 1000+ م² — نصنع تجارب يتحدث عنها الناس طويلاً بعد انتهاء الفعالية.",

    // Featured projects section (homepage)
    "home.featured.label": "أعمال مختارة",
    "home.featured.title": "مشاريع",
    "home.featured.title.accent": "مميزة",

    // Process section (homepage)
    "process.label": "كيف نعمل",
    "process.title": "من الملخص إلى",
    "process.title.accent": "أرض المعرض",
    "process.step1.title": "الملخص",
    "process.step1.desc": "نستمع ونطرح الأسئلة الصحيحة ونحدد بدقة كيف يبدو النجاح لعلامتك التجارية.",
    "process.step2.title": "التصميم",
    "process.step2.desc": "مفاهيم ثلاثية الأبعاد ومواصفات المواد والرسومات الفنية — نكررها حتى تكون مبهراً.",
    "process.step3.title": "البناء",
    "process.step3.desc": "تصنيع دقيق في ورشتنا المحلية مع فحوصات جودة في كل مرحلة.",
    "process.step4.title": "التسليم",
    "process.step4.desc": "تركيب في الموقع ودعم أثناء المعرض وتفكيك — نبقى حتى تُحزم آخر قطعة.",

    // Testimonials section (homepage)
    "testimonials.label": "آراء العملاء",
    "testimonials.title": "ماذا يقول",
    "testimonials.title.accent": "عملاؤنا",
    "testimonials.1.quote": "ذا بتر دك لا تبني أجنحة فحسب — بل تبني تجارب. جناحنا في LEAP كان الأكثر حديثاً في المعرض بأكمله.",
    "testimonials.1.role": "مدير الفعاليات الإقليمي",
    "testimonials.1.company": "مايكروسوفت الشرق الأوسط",
    "testimonials.2.quote": "مستوى الدقة في البناء النهائي كان مذهلاً — كل تفصيل طابق العروض ثلاثية الأبعاد. في الموعد، ضمن الميزانية، بلا مفاجآت.",
    "testimonials.2.role": "رئيس المعارض العالمية",
    "testimonials.2.company": "فاندرلاند للصناعات",
    "testimonials.3.quote": "تعاملنا مع شركات معارض عديدة في المنطقة — لا أحد يقترب من جودة البناء والتفكير التصميمي الذي يقدمه هذا الفريق.",
    "testimonials.3.role": "مدير التسويق",
    "testimonials.3.company": "سبارك لوجستكس",

    // About snapshot section (homepage)
    "home.about.p1": "ذا بتر دك شركة إنتاج معارض وفعاليات مقرها الإمارات بانتشار عالمي. نصمم ونبني أجنحة مخصصة لأكبر المعارض التجارية في العالم — من الرسومات الأولية إلى التركيب في الموقع، عبر عشر دول وأكثر.",
    "home.about.p2": "فريقنا من المعماريين والمهندسين ومديري المشاريع يهتم بكل تفصيل ليحصل جناحك على الأضواء التي يستحقها. بلا قوالب جاهزة، بلا اختصارات — فقط تجارب لا تُنسى تُسلّم في الموعد، كل مرة.",
    "home.about.btn": "عن شركتنا للمعارض",
    "home.about.badge": "منذ 2019",

    // Homepage CTA
    "home.cta.title": "مستعد لبناء شيء استثنائي؟",
    "home.cta.desc": "لنحوّل معرضك القادم إلى تجربة علامة تجارية لا تُنسى.",

    // Portfolio
    "portfolio.label": "أعمال مختارة",
    "portfolio.title": "مشاريع تتحدث",
    "portfolio.title.accent": "عن نفسها",
    "portfolio.desc": "من جناح 700 م² مزدوج لمايكروسوفت إلى جناح مدمج 25 م² — كل مشروع يحظى بالتزامنا الكامل.",
    "portfolio.viewall": "عرض جميع المشاريع",

    // Portfolio page
    "portfoliopage.label": "أعمالنا",
    "portfoliopage.desc": "من أجنحة مدمجة 25 م² إلى مشاريع 1000+ م² — كل مشروع مُهندَس ليجعل علامتك التجارية لا تُفوّت.",
    "portfoliopage.spec.footprint": "المساحة",
    "portfoliopage.spec.location": "الموقع",
    "portfoliopage.cta.title": "لنبنِ جناحك القادم",
    "portfoliopage.cta.desc": "هل لديك معرض قادم؟ أخبرنا بالفعالية والمساحة والرؤية — ونحن نتولى الباقي.",
    "portfoliopage.cta.btn": "ابدأ المحادثة",

    // Stats
    "stats.projects": "مشروع منجز",
    "stats.countries": "دول عملنا فيها",
    "stats.industries": "صناعة مخدومة",
    "stats.ontime": "معدل التسليم في الموعد",


    // About
    "about.label": "من نحن",
    "about.title": "مختلفون في البناء.",
    "about.title.accent": "ملتزمون بالتسليم.",
    "about.p1": "شركة معارض وفعاليات مقرها الإمارات تعمل كوحدة عمليات خاصة: صغيرة ومركزة وحازمة في المواعيد.",
    "about.p2": "يجمع فريقنا بين التصميم المعماري والهندسة الإنشائية والإنتاج الإبداعي تحت سقف واحد.",
    "about.learn": "اعرف المزيد",
    "about.talk": "تواصل معنا",

    // About page
    "aboutpage.label": "من نحن",
    "aboutpage.title": "مختلفون في البناء.",
    "aboutpage.title.accent": "ملتزمون بالتسليم.",
    "aboutpage.desc": "شركة معارض وفعاليات مقرها الإمارات تعمل كوحدة عمليات خاصة: صغيرة ومركزة ولا تتهاون في المواعيد.",
    "aboutpage.hero.label": "من نحن",
    "aboutpage.hero.desc": "استوديو تصميم معارض وإنتاج فعاليات مقره الإمارات، مهووس بالجودة والمواعيد وجعل العلامات التجارية مستحيلة التجاهل في أرض المعرض.",

    // About page — story section
    "aboutpage.story.label": "قصتنا",
    "aboutpage.story.title": "من الفكرة إلى",
    "aboutpage.story.title.accent": "التنفيذ العالمي",
    "aboutpage.story.title.alt": "من العرض الرقمي إلى الواقع،",
    "aboutpage.story.title.accent.alt": "بلا تنازلات",
    "aboutpage.story.p1": "تأسست ذا بتر دك من إحباط بسيط: كثير من شركات المعارض تعد الكثير في العرض الرقمي وتقدم القليل على أرض الواقع. قررنا بناء استوديو يطابق فيه المنتج النهائي — أو يتجاوز — العرض ثلاثي الأبعاد. في كل مرة.",
    "aboutpage.story.p2": "اليوم، ننطلق من الإمارات وننفذ عالمياً. يجمع فريقنا بين التصميم المعماري والهندسة الإنشائية وخبرة التقنيات السمعية البصرية وإدارة المشاريع في خط إنتاج متكامل. بلا وسطاء. بلا مفاجآت.",
    "aboutpage.story.badge": "مقر الإمارات",

    // About page — values section
    "aboutpage.values.label": "قيمنا",
    "aboutpage.values.title": "ما يحرك",
    "aboutpage.values.title.accent": "كل قرار",
    "aboutpage.values.title.alt": "ما ندافع",
    "aboutpage.values.title.accent.alt": "عنه",
    "aboutpage.values.v1.title": "المواعيد مقدسة",
    "aboutpage.values.v1.desc": "لا نعرف \"تقريباً في الموعد\". كل مشروع يُسلّم في الموعد المحدد، بلا أعذار.",
    "aboutpage.values.v2.title": "إشراف كبار فقط",
    "aboutpage.values.v2.desc": "لا نحيل المشاريع لمبتدئين. مشروعك يديره من كانوا مشاركين من الألف إلى الياء.",
    "aboutpage.values.v3.title": "تسعير شفاف",
    "aboutpage.values.v3.desc": "عروض أسعار مفصّلة بنداً بنداً. بلا رسوم خفية. تعرف بالضبط أين يذهب كل درهم.",
    "aboutpage.values.v4.title": "تصميم هادف",
    "aboutpage.values.v4.desc": "كل عنصر يستحق مكانه. نصمم للتفاعل وليس للزينة.",
    "aboutpage.values.v5.title": "جودة البناء",
    "aboutpage.values.v5.desc": "مواد فاخرة وهندسة دقيقة وتشطيبات تصمد تحت ضغط أرض المعرض.",
    "aboutpage.values.v6.title": "انتشار عالمي ومعرفة محلية",
    "aboutpage.values.v6.desc": "مقرنا الإمارات، ننتشر في 10 دول. نعرف الأماكن والموردين والقواعد.",

    // About page — capabilities
    "aboutpage.cap.label": "القدرات",
    "aboutpage.cap.title": "ما نقدمه",
    "aboutpage.cap.title.accent": "على الطاولة",
    "aboutpage.cap.title.alt": "كل شيء",
    "aboutpage.cap.title.accent.alt": "داخلياً",
    "aboutpage.cap.3d": "التصميم ثلاثي الأبعاد",
    "aboutpage.cap.structural": "الهندسة الإنشائية",
    "aboutpage.cap.fabrication": "إدارة التصنيع",
    "aboutpage.cap.av": "تكامل السمعيات والبصريات",
    "aboutpage.cap.logistics": "اللوجستيات والشحن",
    "aboutpage.cap.installation": "التركيب في الموقع",
    "aboutpage.cap.graphic": "الإنتاج الطباعي",
    "aboutpage.cap.content": "إنتاج المحتوى",
    "aboutpage.cap.branding": "بناء العلامة التجارية",
    "aboutpage.cap.finance": "التقييم المالي",
    "aboutpage.cap.comms": "التواصل",

    // About page — timeline
    "aboutpage.track.label": "سجل الإنجازات",
    "aboutpage.track.title": "محطات",
    "aboutpage.track.title.accent": "مهمة",
    "aboutpage.track.label.alt": "مسيرتنا",
    "aboutpage.track.title.alt": "محطات",
    "aboutpage.track.title.accent.alt": "رئيسية",
    "aboutpage.tl.2019.title": "تأسيس الشركة",
    "aboutpage.tl.2019.desc": "انطلقنا من الإمارات برؤية واضحة: أجنحة معارض تطابق العرض الرقمي فعلاً.",
    "aboutpage.tl.2020.title": "أول مشروع كبير",
    "aboutpage.tl.2020.desc": "أنجزنا أول جناح معرض واسع النطاق رغم تحديات الإغلاق العالمي.",
    "aboutpage.tl.2021.title": "التوسع الدولي",
    "aboutpage.tl.2021.desc": "وسّعنا عملياتنا خارج الإمارات إلى السعودية وأوروبا وجنوب شرق آسيا.",
    "aboutpage.tl.2022.title": "شراكة مايكروسوفت",
    "aboutpage.tl.2022.desc": "تم اختيارنا كشريك معارض لتفعيلات مايكروسوفت الإقليمية.",
    "aboutpage.tl.2024.title": "إنجاز 80+ مشروع",
    "aboutpage.tl.2024.desc": "تجاوزنا 80 مشروعاً مكتملاً بسجل تسليم 100% في الموعد.",
    "aboutpage.tl.2025.title": "الوصول إلى 10 دول",
    "aboutpage.tl.2025.desc": "توسعنا في استراتيجية التسويق وبناء العلامات التجارية مع إنشاء بتر ستوديو. الآن نعمل في 10 دول.",

    // About page CTA
    "aboutpage.cta": "مستعد للعمل معنا؟",
    "aboutpage.cta.desc": "أخبرنا عن معرضك أو فعاليتك القادمة — سنريك ما هو ممكن.",
    "aboutpage.cta.btn": "تواصل معنا",

    // CTA
    "cta.title": "مستعد لبناء شيء",
    "cta.title.accent": "استثنائي؟",
    "cta.desc": "أخبرنا عن معرضك أو فعاليتك القادمة. نرد خلال 24 ساعة.",
    "cta.start": "ابدأ مشروعك",
    "cta.see": "شاهد أعمالنا",

    // Contact page hero
    "contact.label": "ابدأ مشروعاً",
    "contact.hero.label": "تواصل معنا",
    "contact.title": "لنبنِ شيئاً",
    "contact.title.accent": "استثنائياً",
    "contact.desc": "املأ نموذج ملخص المشروع أدناه وسنرد بعرض مفصل خلال 24 ساعة.",
    "contact.hero.desc": "سواء كنت بحاجة لبناء جناح معرض كامل أو تريد استكشاف الأفكار فقط، نحن هنا للمساعدة. املأ نموذج الطلب أو تواصل معنا مباشرة.",

    // Contact — direct contact section
    "contact.direct": "اتصال مباشر",
    "contact.direct.desc": "تفضل محادثة سريعة؟ تواصل مباشرة عبر الهاتف أو البريد أو واتساب. فريقنا متاح من الأحد إلى الخميس.",
    "contact.direct.title": "تواصل معنا",
    "contact.direct.title.accent": "مباشرة",
    "contact.office": "المكتب",
    "contact.office.address": "مارينا بلازا، الطابق 29\nدبي مارينا، دبي، الإمارات",
    "contact.phone": "الهاتف وواتساب",
    "contact.phone.label": "الهاتف / واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.social": "التواصل الاجتماعي",

    // Contact form — step titles
    "contact.step1.title": "ما الذي تحتاجه؟",
    "contact.step1.desc": "اختر الخدمة الأساسية التي تبحث عنها.",
    "contact.step2.title": "تفاصيل المشروع",
    "contact.step2.desc": "أخبرنا عن معرضك أو فعاليتك.",
    "contact.step3.title": "معلوماتك",
    "contact.step3.desc": "كيف يمكننا الوصول إليك؟",
    "contact.step3.heading": "بياناتك",
    "contact.step4.title": "أي شيء آخر؟",
    "contact.step4.desc": "شارك أي تفاصيل أو متطلبات إضافية.",

    // Contact form — step indicator
    "contact.stepof": "الخطوة {step} من 4",

    // Contact form — service options
    "contact.svc.exhibition": "تصميم وبناء المعارض",
    "contact.svc.pm": "إدارة المشاريع",
    "contact.svc.event": "التصميم المفاهيمي للفعاليات",
    "contact.svc.media": "إنتاج المحتوى والإعلام",

    // Contact form — field labels
    "contact.field.eventName": "اسم المعرض / الفعالية *",
    "contact.field.eventName.placeholder": "مثال: جيتكس جلوبال 2026",
    "contact.field.eventDates": "تواريخ الفعالية",
    "contact.field.eventDates.placeholder": "مثال: 14–18 أكتوبر 2026",
    "contact.field.eventLocation": "الموقع / المكان",
    "contact.field.eventLocation.placeholder": "مثال: مركز دبي التجاري العالمي",
    "contact.field.boothSize": "مساحة الجناح",
    "contact.field.boothSize.placeholder": "اختر المساحة...",
    "contact.field.budget": "نطاق الميزانية",
    "contact.field.budget.placeholder": "اختر النطاق...",
    "contact.field.name": "الاسم الكامل *",
    "contact.field.name.placeholder": "الاسم الكامل",
    "contact.field.company": "الشركة *",
    "contact.field.company.placeholder": "اسم الشركة",
    "contact.field.email": "البريد الإلكتروني *",
    "contact.field.email.placeholder": "name@company.com",
    "contact.field.phone": "الهاتف",
    "contact.field.phone.placeholder": "+971 50 000 0000",
    "contact.field.country": "الدولة",
    "contact.field.country.placeholder": "الإمارات",
    "contact.field.notes": "ملاحظات إضافية",
    "contact.field.notes.placeholder": "أخبرنا عن رؤيتك أو متطلباتك الخاصة أو أي شيء يجب أن نعرفه...",

    // Contact form — booth sizes
    "contact.size.under20": "أقل من 20 م²",
    "contact.size.20_50": "20 – 50 م²",
    "contact.size.50_100": "50 – 100 م²",
    "contact.size.100_200": "100 – 200 م²",
    "contact.size.200_500": "200 – 500 م²",
    "contact.size.500plus": "500+ م²",
    "contact.size.notsure": "غير محدد بعد",

    // Contact form — budgets
    "contact.budget.under50": "أقل من 50,000 درهم",
    "contact.budget.50_150": "50,000 – 150,000 درهم",
    "contact.budget.150_400": "150,000 – 400,000 درهم",
    "contact.budget.400_1m": "400,000 – 1,000,000 درهم",
    "contact.budget.1mplus": "1,000,000+ درهم",
    "contact.budget.discuss": "نتناقش لاحقاً",

    // Contact form — validation
    "contact.error.service": "يرجى اختيار خدمة",
    "contact.error.eventName": "اسم الفعالية مطلوب",
    "contact.error.name": "الاسم مطلوب",
    "contact.error.email": "البريد الإلكتروني مطلوب",
    "contact.error.emailInvalid": "يرجى إدخال بريد إلكتروني صحيح",
    "contact.error.company": "اسم الشركة مطلوب",
    "contact.error.consent": "يرجى الموافقة للمتابعة",

    // Contact form — buttons
    "contact.submit": "إرسال ملخص المشروع",
    "contact.submit.btn": "إرسال الطلب",
    "contact.submit.sending": "جاري الإرسال...",
    "contact.next": "الخطوة التالية",
    "contact.next.btn": "متابعة",
    "contact.back": "رجوع",
    "contact.consent": "أوافق على أن The Butter Duck قد تخزن وتعالج بياناتي للرد على هذا الاستفسار.",
    "contact.consent.form": "أوافق على أن The Butter Duck قد تتواصل معي بخصوص هذا الاستفسار. لن تُشارك بياناتي مع أطراف ثالثة.",

    // Contact form — success
    "contact.success.title": "تم استلام ملخص المشروع",
    "contact.success.heading": "تم استلام الطلب!",
    "contact.success.ref": "رقم المرجع:",
    "contact.success.reftext": "رقمك المرجعي هو",
    "contact.success.followup": "سنتواصل معك خلال 24 ساعة.",
    "contact.success.home": "العودة للرئيسية",

    // Contact form — error alert
    "contact.error.alert": "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على hello@thebutterduck.com",

    // Contact page CTA
    "contact.cta.title": "تفضل محادثة سريعة؟",
    "contact.cta.desc": "أرسل لنا رسالة واتساب وسنرد عليك خلال ساعة.",
    "contact.cta.btn": "واتساب",

    // Footer
    "footer.brand": "نحوّل الرؤية إلى تجربة، في كل فعالية، في كل مرة. تصميم معارض وإنتاج فعاليات من الإمارات للعلامات التجارية العالمية.",
    "footer.services": "الخدمات",
    "footer.company": "الشركة",
    "footer.aboutus": "من نحن",
    "footer.contact": "اتصل بنا",
    "footer.getintouch": "تواصل معنا",

    // Breadcrumbs
    "bc.home": "الرئيسية",
    "bc.about": "من نحن",
    "bc.services": "الخدمات",
    "bc.portfolio": "المشاريع",
    "bc.contact": "اتصل بنا",

    // Case study / project detail
    "case.overview": "نظرة عامة",
    "case.overview.title": "المشروع",
    "case.specs.title": "مواصفات",
    "case.specs.title.accent": "المشروع",
    "case.specs.client": "العميل",
    "case.specs.event": "الفعالية",
    "case.specs.location": "الموقع",
    "case.specs.size": "المساحة",
    "case.specs.type": "النوع",
    "case.challenge": "التحدي",
    "case.challenge.title": "ما واجهناه",
    "case.solution": "حلنا",
    "case.solution.title": "كيف حققنا ذلك",
    "case.features": "الميزات الرئيسية",
    "case.features.title": "أبرز",
    "case.features.title.accent": "النقاط الهندسية",
    "case.results": "النتائج",
    "case.results.title": "المخرجات",
    "case.results.title.accent": "النهائية",
    "case.cta": "مستعد لبناء شيء مثل هذا؟",
    "case.cta.desc": "أخبرنا عن معرضك القادم وسنريك ما هو ممكن.",
    "case.next": "المشروع التالي",
    "case.prev": "المشروع السابق",
    "case.allprojects": "جميع المشاريع",

    // Mobile CTA bar
    "mobile.quote": "طلب عرض سعر",
    "mobile.whatsapp": "واتساب",

    // 404 page
    "notfound.title": "404",
    "notfound.desc": "هذه الصفحة غير موجودة. ربما تم تفكيكها بعد المعرض.",
    "notfound.home": "العودة للرئيسية",
    "notfound.work": "عرض أعمالنا",
  },
} as const;

export type Translations = Record<TranslationKey, string>;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getTranslations(locale: Locale): Translations {
  return (translations[locale] ?? translations.en) as Translations;
}
