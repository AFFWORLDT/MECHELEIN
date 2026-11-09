// The six services, each with its own page at /services/[slug].
// Kept general on purpose: no prices, response times or equipment claims MTS hasn't confirmed.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string; // card text
  seoTitle: string;
  seoDescription: string;
  image: string;
  alt: string;
  position?: string;
  size?: "big" | "wide";
  lede: string;
  intro: string[];
  includes: { title: string; text: string }[];
  whenToCall: string[];
  faqs: Faq[];
  related: string[];
  guides: string[];
};

export const services: Service[] = [
  {
    slug: "air-conditioning",
    name: "Air conditioning and HVAC",
    short: "Installation, servicing and repair of air conditioning and ventilation systems.",
    seoTitle: "AC installation, servicing and repair in Dubai",
    seoDescription:
      "Air conditioning and HVAC installation, servicing and repairs for villas, apartments, offices and industrial sites in Dubai. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/hvac.jpg",
    alt: "Rooftop HVAC units in a row",
    size: "big",
    lede: "Installation, servicing and repairs to keep homes, offices and sites cool through Dubai's long summer.",
    intro: [
      "In Dubai, air conditioning runs for most of the year, so small problems turn into breakdowns quickly. Dust, humidity and long running hours all wear a system down.",
      "We install new units, service existing systems and find and fix faults, for single apartments up to commercial and industrial buildings.",
    ],
    includes: [
      { title: "Installation", text: "New AC and ventilation units sized and fitted for the space." },
      { title: "Servicing", text: "Cleaning, filter changes and checks to keep systems running efficiently." },
      { title: "Repairs", text: "Finding the cause of a fault and fixing it." },
      { title: "Ventilation", text: "Extract fans and fresh air for kitchens, bathrooms and work areas." },
      { title: "Replacements and upgrades", text: "Replacing old or inefficient units." },
      { title: "Inspections", text: "A check of the whole system before summer or a move-in." },
    ],
    whenToCall: [
      "The AC is running but the room isn't cooling",
      "Water is dripping from an indoor unit",
      "The unit is louder than usual or smells musty",
      "Electricity bills have gone up without a clear reason",
      "It hasn't been serviced in the last six months",
    ],
    faqs: [
      {
        q: "How often should an AC be serviced in Dubai?",
        a: "Because of dust and long running hours, most systems benefit from a service at least twice a year, ideally once before summer. Filters may need cleaning more often during the hottest months.",
      },
      {
        q: "Why is my AC leaking water?",
        a: "The most common causes are a blocked drain line, a dirty filter or a frozen coil. Switch the unit off and request a visit so the cause can be found before water damages ceilings or walls.",
      },
      {
        q: "Do you work on commercial and industrial systems?",
        a: "Yes. We work on residential, commercial and industrial properties. Tell us about the system when you request a visit.",
      },
    ],
    related: ["building-maintenance", "electrical", "mep-installation"],
    guides: ["how-often-service-ac-dubai", "signs-ac-needs-repair", "prepare-home-for-summer-dubai"],
  },
  {
    slug: "electrical",
    name: "Electrical works",
    short: "Electrical installation, maintenance and repairs.",
    seoTitle: "Electrical installation and repairs in Dubai",
    seoDescription:
      "Electrical installation, maintenance, fault finding and repairs for homes, offices and industrial sites in Dubai. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/electrical.jpg",
    alt: "An electrician testing a distribution board",
    lede: "Safe, tidy electrical work, from a single fault to a full installation.",
    intro: [
      "Electrical problems are a safety issue as much as an inconvenience. Tripping breakers, flickering lights and warm sockets are signs that something needs checking.",
      "Our team installs, maintains and repairs electrical systems in homes, offices and industrial sites across Dubai.",
    ],
    includes: [
      { title: "Fault finding", text: "Tracing trips, power loss and intermittent faults to the cause." },
      { title: "Distribution boards", text: "Checks, repairs and upgrades to boards and breakers." },
      { title: "Wiring", text: "New circuits, rewiring and extensions." },
      { title: "Lighting", text: "Indoor and outdoor lighting, fitted and repaired." },
      { title: "Sockets and switches", text: "New points, replacements and moves." },
      { title: "Inspections", text: "A safety check of the installation, with a clear list of what needs attention." },
    ],
    whenToCall: [
      "A breaker keeps tripping",
      "Lights flicker or dim",
      "A socket or switch feels warm or shows scorch marks",
      "You can smell burning near a socket or the board",
      "You are adding equipment or renovating",
    ],
    faqs: [
      {
        q: "Why does my breaker keep tripping?",
        a: "Usually because a circuit is overloaded, an appliance has a fault, or there is a wiring problem. Unplug things on that circuit and reset it; if it trips again, have it checked.",
      },
      {
        q: "Is a warm socket dangerous?",
        a: "It can be. Stop using it and switch off that circuit if you can, then have it inspected. Warmth often means a loose connection or an overloaded point.",
      },
      {
        q: "Can you add new sockets or lighting during a renovation?",
        a: "Yes. We can add circuits, sockets and lighting as part of a renovation or fit-out.",
      },
    ],
    related: ["air-conditioning", "mep-installation", "building-maintenance"],
    guides: ["electrical-safety-at-home", "why-breaker-keeps-tripping", "moving-into-new-home-checklist"],
  },
  {
    slug: "plumbing",
    name: "Plumbing and drainage",
    short: "Plumbing installation, maintenance and repairs.",
    seoTitle: "Plumbing and drainage services in Dubai",
    seoDescription:
      "Plumbing installation, leak repairs, drainage and water heater work for homes and businesses in Dubai. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/plumbing.jpg",
    alt: "A plumber fitting pipework under a basin",
    lede: "Leaks, blockages and new installations, handled before they damage your property.",
    intro: [
      "A small leak can damage ceilings, walls and the apartment below before anyone notices it. Low pressure, slow drains and running toilets also waste water every day.",
      "We install, maintain and repair plumbing and drainage in villas, apartments, offices and industrial sites.",
    ],
    includes: [
      { title: "Leak repairs", text: "Finding and fixing leaks in pipes, fittings and fixtures." },
      { title: "Drainage", text: "Clearing blocked and slow drains." },
      { title: "Water heaters", text: "Installing, repairing and replacing water heaters." },
      { title: "Fixtures", text: "Taps, toilets, showers and basins, fitted and repaired." },
      { title: "Pipework", text: "New and replacement pipework for renovations." },
      { title: "Pumps", text: "Checks and repairs to water pumps." },
    ],
    whenToCall: [
      "There are damp patches or stains on a ceiling or wall",
      "Water pressure has dropped",
      "A drain is slow or smells",
      "The water heater isn't heating",
      "A toilet keeps running",
    ],
    faqs: [
      {
        q: "What should I do first if I find a leak?",
        a: "Turn off the water supply to that fixture or the main valve, switch off electrics near the water if it is safe to do so, and request a visit.",
      },
      {
        q: "Why is my water pressure low?",
        a: "Low pressure can come from a partly closed valve, a blocked aerator, a leak, or a pump problem. If it affects the whole property, have it checked.",
      },
      {
        q: "Can you replace a water heater?",
        a: "Yes. We install, repair and replace water heaters in homes and commercial properties.",
      },
    ],
    related: ["building-maintenance", "interior-fit-out", "mep-installation"],
    guides: ["common-plumbing-problems-apartments", "water-leak-what-to-do", "moving-into-new-home-checklist"],
  },
  {
    slug: "mep-installation",
    name: "MEP installation",
    short: "Mechanical, electrical and plumbing works for new and existing buildings.",
    seoTitle: "MEP installation works in Dubai",
    seoDescription:
      "Mechanical, electrical and plumbing (MEP) installation for new and existing buildings in Dubai, coordinated by one team. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/mep-ceiling.jpg",
    alt: "A technician on a lift fixing services to a ceiling",
    position: "50% 35%",
    size: "wide",
    lede: "Mechanical, electrical and plumbing works coordinated by one team, so the trades fit together.",
    intro: [
      "MEP stands for mechanical, electrical and plumbing: the systems that make a building usable. When different contractors handle each one separately, clashes and delays are common.",
      "We carry out MEP works for new buildings, extensions and refurbishments, with one team responsible for how the systems fit together.",
    ],
    includes: [
      { title: "Mechanical", text: "Air conditioning, ventilation and related services." },
      { title: "Electrical", text: "Power, lighting and distribution." },
      { title: "Plumbing", text: "Water supply, drainage and fixtures." },
      { title: "Coordination", text: "Planning the trades together to avoid clashes on site." },
      { title: "Testing", text: "Checking each system works before handover." },
      { title: "Handover", text: "Walking you through the finished installation." },
    ],
    whenToCall: [
      "You are building, extending or refurbishing",
      "You are converting a space to a new use",
      "Existing systems need replacing together",
      "You want one contractor responsible for all three trades",
    ],
    faqs: [
      {
        q: "What does MEP mean?",
        a: "MEP stands for mechanical, electrical and plumbing. It covers the systems that heat, cool, power and supply water to a building.",
      },
      {
        q: "Why use one contractor for MEP?",
        a: "The systems share ceiling and wall space and depend on each other. One team planning them together reduces clashes, rework and delays.",
      },
      {
        q: "Do you work on existing buildings as well as new ones?",
        a: "Yes. We work on new and existing buildings, including refurbishments and change-of-use projects.",
      },
    ],
    related: ["interior-fit-out", "air-conditioning", "electrical"],
    guides: ["what-is-mep", "planning-office-fit-out", "preventive-vs-reactive-maintenance"],
  },
  {
    slug: "interior-fit-out",
    name: "Interior fit-out",
    short: "Interior works for homes and commercial spaces.",
    seoTitle: "Interior fit-out works in Dubai",
    seoDescription:
      "Interior fit-out works for homes, offices and commercial spaces in Dubai, coordinated with the building's technical systems. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/fitout.jpg",
    alt: "A worker on a ladder fitting a ceiling",
    lede: "Interior works for homes and commercial spaces, planned around the building's systems.",
    intro: [
      "A fit-out turns an empty or tired space into one that works. It usually touches ceilings, walls, floors and the technical systems behind them.",
      "We carry out interior works for homes, offices and commercial spaces, and coordinate them with the air conditioning, electrical and plumbing work they depend on.",
    ],
    includes: [
      { title: "Ceilings", text: "New and replacement ceilings." },
      { title: "Partitions", text: "Walls and partitions to divide or open up a space." },
      { title: "Flooring", text: "Floor finishes for homes and commercial spaces." },
      { title: "Painting and finishes", text: "Interior painting and decorative finishes." },
      { title: "Services coordination", text: "AC, electrical and plumbing planned with the interior works." },
      { title: "Handover", text: "A walkthrough of the finished space." },
    ],
    whenToCall: [
      "You are moving into a new office or shop",
      "You are renovating a villa or apartment",
      "A space needs reconfiguring for a new use",
      "You want interiors and technical works handled together",
    ],
    faqs: [
      {
        q: "Do I need approval before a fit-out in Dubai?",
        a: "Most buildings need approval from the landlord or building management before works start, and some works need authority approvals. Check your building's requirements before you begin.",
      },
      {
        q: "Can you handle the AC and electrical work as part of a fit-out?",
        a: "Yes. We coordinate air conditioning, electrical and plumbing works with the interior works.",
      },
      {
        q: "Do you do residential fit-outs?",
        a: "Yes. We work on homes as well as offices and commercial spaces.",
      },
    ],
    related: ["mep-installation", "electrical", "plumbing"],
    guides: ["planning-office-fit-out", "what-is-mep", "moving-into-new-home-checklist"],
  },
  {
    slug: "building-maintenance",
    name: "Building maintenance",
    short: "Servicing and repairs to keep your building systems running.",
    seoTitle: "Building maintenance services in Dubai",
    seoDescription:
      "Building maintenance for air conditioning, electrical and plumbing systems in Dubai homes, offices and industrial sites. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/ac-units.jpg",
    alt: "Air conditioning condensers on an outside wall",
    size: "wide",
    lede: "Regular servicing and repairs, so problems are caught before they become breakdowns.",
    intro: [
      "Dubai's heat, dust and humidity are hard on building systems. Regular maintenance catches wear early, keeps running costs down and avoids emergency call-outs.",
      "We maintain air conditioning, electrical and plumbing systems in homes, offices and industrial sites.",
    ],
    includes: [
      { title: "AC servicing", text: "Cleaning and checks on air conditioning units." },
      { title: "Electrical checks", text: "Inspection of boards, wiring and fittings." },
      { title: "Plumbing checks", text: "Checks on pipework, fixtures and water heaters." },
      { title: "Repairs", text: "Fixing faults found during visits." },
      { title: "Planned visits", text: "Maintenance scheduled around your building." },
      { title: "Clear reporting", text: "A summary of what was checked and what needs attention." },
    ],
    whenToCall: [
      "You manage a building or several units",
      "Breakdowns keep happening at the worst times",
      "You want a regular check before summer",
      "You are a landlord preparing for new tenants",
    ],
    faqs: [
      {
        q: "What is the difference between preventive and reactive maintenance?",
        a: "Preventive maintenance checks and services systems on a schedule. Reactive maintenance fixes things after they fail. Preventive work usually costs less over time and avoids disruption.",
      },
      {
        q: "Do you maintain commercial buildings?",
        a: "Yes. We maintain residential, commercial and industrial properties.",
      },
      {
        q: "How do I arrange regular maintenance?",
        a: "Request a site visit. We will look at your property and agree what needs checking and how often.",
      },
    ],
    related: ["air-conditioning", "electrical", "plumbing"],
    guides: ["preventive-vs-reactive-maintenance", "prepare-home-for-summer-dubai", "how-often-service-ac-dubai"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
