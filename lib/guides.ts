// Practical guides at /guides/[slug]: general advice for Dubai property owners,
// written to answer common searches. They describe good practice, not claims about MTS.

export type GuideBlock = { heading?: string; paragraphs?: string[]; list?: string[] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  service: string; // related service slug
  image: string;
  alt: string;
  position?: string;
  published: string; // ISO date
  readMinutes: number;
  intro: string;
  blocks: GuideBlock[];
};

const PUBLISHED = "2026-11-09";

export const guides: Guide[] = [
  {
    slug: "how-often-service-ac-dubai",
    title: "How often should you service your AC in Dubai?",
    description:
      "Why Dubai's heat and dust mean air conditioning needs more frequent servicing, how often to do it, and what a proper service should include.",
    service: "air-conditioning",
    image: "/assets/img/hvac.jpg",
    alt: "Rooftop air conditioning units",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "In many countries an air conditioner runs for a few months a year. In Dubai it can run almost all year, often around the clock in summer. That changes how often it needs attention.",
    blocks: [
      {
        heading: "Why Dubai is hard on AC systems",
        paragraphs: [
          "Long running hours wear parts faster. Fine dust and sand clog filters and coils, which makes the system work harder for the same cooling. Humidity adds to the load on drain lines, where blockages lead to leaks.",
        ],
      },
      {
        heading: "A sensible schedule",
        list: [
          "A full service at least twice a year, with one before the summer peak",
          "Filters checked and cleaned more often in the hottest months, as they clog quickly",
          "An extra check if the system has been off for a long time, for example after travel",
        ],
      },
      {
        heading: "What a service should cover",
        list: [
          "Cleaning or replacing filters",
          "Cleaning the indoor coil and the drain tray and line",
          "Checking the outdoor unit and clearing debris around it",
          "Checking electrical connections and that the unit cools as it should",
        ],
      },
      {
        heading: "Signs it can't wait",
        paragraphs: [
          "If rooms aren't cooling, water is dripping from an indoor unit, or the system is noisier or smells musty, book a check rather than waiting for the next scheduled service.",
        ],
      },
    ],
  },
  {
    slug: "signs-ac-needs-repair",
    title: "7 signs your AC needs attention",
    description: "Warning signs that an air conditioning system needs a check before it breaks down in the middle of summer.",
    service: "air-conditioning",
    image: "/assets/img/ac-units.jpg",
    alt: "Air conditioning condensers on a wall",
    published: PUBLISHED,
    readMinutes: 3,
    intro:
      "Most AC breakdowns give warning first. Spotting the signs early usually means a smaller repair and avoids a hot few days waiting for a fix.",
    blocks: [
      {
        heading: "The warning signs",
        list: [
          "Rooms take longer to cool, or never reach the set temperature",
          "Water drips from the indoor unit or stains appear on the ceiling below it",
          "New noises: rattling, buzzing, grinding or loud clicking",
          "A musty or burning smell when the unit runs",
          "Ice on the pipes or coil",
          "The unit switches on and off more often than usual",
          "Electricity bills rise without any change in how you use it",
        ],
      },
      {
        heading: "What you can check yourself",
        paragraphs: [
          "Make sure the thermostat is set correctly and the filter isn't clogged. Check the outdoor unit isn't blocked by boxes, plants or debris. If the problem continues, switch the unit off and arrange a visit.",
        ],
      },
      {
        heading: "When to switch it off",
        paragraphs: [
          "Turn the unit off if you smell burning, see water near electrical parts, or hear grinding. Running it in that state can turn a repair into a replacement.",
        ],
      },
    ],
  },
  {
    slug: "prepare-home-for-summer-dubai",
    title: "Getting your home ready for a Dubai summer",
    description: "A simple checklist to prepare your villa or apartment's air conditioning, electrics and plumbing before the hottest months.",
    service: "building-maintenance",
    image: "/assets/img/hero.jpg",
    alt: "A technician walking between rooftop AC units",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "Summer is when systems are under the most strain and when repair demand is highest. A little preparation in spring makes a breakdown far less likely.",
    blocks: [
      {
        heading: "Air conditioning",
        list: [
          "Book a full AC service before temperatures peak",
          "Clean filters and keep doing so through the summer",
          "Clear the space around outdoor units so they can breathe",
          "Check drain lines are clear to avoid leaks",
        ],
      },
      {
        heading: "Electrical",
        list: [
          "Look for breakers that trip when the AC starts",
          "Check sockets used by high-power appliances for warmth or discolouration",
          "Avoid running several heavy appliances from one extension lead",
        ],
      },
      {
        heading: "Plumbing",
        list: [
          "Check under sinks and around water heaters for drips",
          "Watch for damp patches on ceilings under bathrooms",
          "If you travel, consider turning off the water supply while you are away",
        ],
      },
      {
        heading: "Going away for the summer?",
        paragraphs: [
          "Leaving a home closed in Dubai's heat can cause damp, smells and problems that only show when you return. Ask someone to check the property, or arrange an inspection before you come back.",
        ],
      },
    ],
  },
  {
    slug: "electrical-safety-at-home",
    title: "Electrical safety at home: what to check",
    description: "Simple electrical safety checks for villas and apartments, and the warning signs that mean you should call a professional.",
    service: "electrical",
    image: "/assets/img/panel.jpg",
    alt: "An open electrical panel with breakers",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "Electrical faults are one of the main causes of home fires. Most warning signs are easy to spot if you know what to look for.",
    blocks: [
      {
        heading: "Warning signs",
        list: [
          "Sockets or switches that feel warm or show scorch marks",
          "Flickering or dimming lights",
          "A burning smell with no obvious source",
          "Breakers that trip repeatedly",
          "Buzzing from sockets, switches or the distribution board",
        ],
      },
      {
        heading: "Everyday habits",
        list: [
          "Don't overload sockets or chain extension leads together",
          "Use appliances with damaged cables or plugs only after they are repaired",
          "Keep water away from sockets and appliances",
          "Know where your distribution board is and how to switch off the power",
        ],
      },
      {
        heading: "When to get an inspection",
        paragraphs: [
          "Have the installation checked when you move into a new home, before a renovation, when adding high-power equipment, or if you notice any of the warning signs above. Electrical repairs should always be done by a qualified professional.",
        ],
      },
    ],
  },
  {
    slug: "why-breaker-keeps-tripping",
    title: "Why does my breaker keep tripping?",
    description: "The common reasons a circuit breaker keeps tripping, what you can safely check, and when to call an electrician.",
    service: "electrical",
    image: "/assets/img/electrical.jpg",
    alt: "An electrician testing a distribution board",
    published: PUBLISHED,
    readMinutes: 3,
    intro:
      "A breaker trips to protect the circuit. It is a safety device doing its job, so a breaker that keeps tripping is telling you something needs attention.",
    blocks: [
      {
        heading: "The usual causes",
        list: [
          "Overload: too many appliances drawing power on one circuit",
          "A faulty appliance, often one with a heating element or motor",
          "A short circuit in wiring, a socket or a fitting",
          "An earth fault, often linked to moisture",
        ],
      },
      {
        heading: "What you can safely try",
        paragraphs: [
          "Switch off and unplug everything on the affected circuit, then reset the breaker. Plug appliances back in one at a time. If it trips when one appliance goes in, that appliance is the likely cause.",
        ],
      },
      {
        heading: "When to stop and call someone",
        paragraphs: [
          "If the breaker trips immediately with nothing connected, trips again and again, or you notice burning smells or warm sockets, stop resetting it and have the circuit inspected. Repeatedly resetting a breaker on a faulty circuit is not safe.",
        ],
      },
    ],
  },
  {
    slug: "common-plumbing-problems-apartments",
    title: "Common plumbing problems in Dubai apartments",
    description: "The plumbing issues apartment owners and tenants see most often in Dubai, what causes them and how to deal with them.",
    service: "plumbing",
    image: "/assets/img/plumbing.jpg",
    alt: "A plumber fitting pipework under a basin",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "In an apartment, a plumbing problem rarely stays in one place. A slow leak can reach the unit below before you notice it in your own.",
    blocks: [
      {
        heading: "Problems to watch for",
        list: [
          "Slow or blocked drains in kitchens and bathrooms",
          "Leaks under sinks, around toilets and at water heaters",
          "Low water pressure",
          "Running toilets that waste water",
          "Smells from drains",
          "Water heaters that don't heat or take too long",
        ],
      },
      {
        heading: "Preventing them",
        list: [
          "Keep grease and food out of kitchen drains",
          "Use drain covers in showers to catch hair",
          "Check under sinks and around the water heater now and then",
          "Fix drips early rather than waiting",
        ],
      },
      {
        heading: "Who pays in a rented apartment?",
        paragraphs: [
          "Responsibility for repairs depends on your tenancy contract and the building. Check with your landlord or building management before arranging work in a rented home.",
        ],
      },
    ],
  },
  {
    slug: "water-leak-what-to-do",
    title: "Found a water leak? What to do first",
    description: "The first steps to take when you find a water leak at home or at work, to limit damage before the repair.",
    service: "plumbing",
    image: "/assets/img/facilities.jpg",
    alt: "A technician working on a bathroom water heater",
    published: PUBLISHED,
    readMinutes: 3,
    intro: "Acting quickly in the first few minutes of a leak can save ceilings, floors and furniture.",
    blocks: [
      {
        heading: "Step by step",
        list: [
          "Turn off the water: use the valve on the fixture if there is one, or the main valve",
          "If water is near sockets, appliances or light fittings, switch off the power to that area if it is safe to reach the board",
          "Move furniture and valuables out of the way",
          "Soak up standing water and catch drips",
          "Take photos for your landlord, building management or insurer",
          "Arrange a repair",
        ],
      },
      {
        heading: "Hidden leaks",
        paragraphs: [
          "Not every leak is obvious. Damp patches, bubbling paint, a musty smell or a water bill that rises without explanation can all point to a hidden leak. In an apartment, tell building management if you think water may be reaching the unit below.",
        ],
      },
    ],
  },
  {
    slug: "what-is-mep",
    title: "What is MEP? A plain guide for building owners",
    description: "MEP explained in plain language: what mechanical, electrical and plumbing works include, and why coordinating them matters.",
    service: "mep-installation",
    image: "/assets/img/mep-ceiling.jpg",
    alt: "A technician fixing services to a ceiling",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "You will see \"MEP\" in almost every building and fit-out project in Dubai. It stands for mechanical, electrical and plumbing: the systems that make a building comfortable, powered and usable.",
    blocks: [
      {
        heading: "Mechanical",
        paragraphs: ["Air conditioning, ventilation and the equipment that moves air through a building."],
      },
      {
        heading: "Electrical",
        paragraphs: ["Power distribution, lighting, sockets and the boards that protect each circuit."],
      },
      {
        heading: "Plumbing",
        paragraphs: ["Water supply, drainage, fixtures and water heating."],
      },
      {
        heading: "Why coordination matters",
        paragraphs: [
          "These systems share the same ceilings, risers and walls, and depend on each other: AC units need power and drainage, for example. When each trade works in isolation, clashes and rework are common. Planning them together avoids most of that.",
        ],
      },
      {
        heading: "When you need MEP works",
        list: [
          "New buildings and extensions",
          "Refurbishments and fit-outs",
          "Changing how a space is used",
          "Replacing ageing systems",
        ],
      },
    ],
  },
  {
    slug: "planning-office-fit-out",
    title: "Planning an office fit-out: a step-by-step guide",
    description: "How to plan an office fit-out in Dubai, from brief and approvals to technical works and handover.",
    service: "interior-fit-out",
    image: "/assets/img/engineers.jpg",
    alt: "Two engineers reviewing drawings",
    published: PUBLISHED,
    readMinutes: 5,
    intro:
      "A good fit-out starts well before anyone picks up a tool. Most delays come from decisions made late or approvals not planned for.",
    blocks: [
      {
        heading: "1. Write a clear brief",
        paragraphs: [
          "How many people will use the space, what rooms you need, and how you want it to feel. Include must-haves and nice-to-haves, and a budget range.",
        ],
      },
      {
        heading: "2. Check the building's requirements",
        paragraphs: [
          "Most buildings have fit-out rules and need approval from the landlord or building management before work starts. Some works also need authority approvals. Find out early, as these affect your timeline.",
        ],
      },
      {
        heading: "3. Plan the technical works",
        paragraphs: [
          "New layouts usually mean changes to air conditioning, lighting, power and sometimes plumbing. Planning these with the interior design avoids clashes and late changes.",
        ],
      },
      {
        heading: "4. Agree scope and programme",
        paragraphs: ["Get a clear written scope and timeline before work starts, so everyone knows what is included."],
      },
      {
        heading: "5. Handover",
        paragraphs: [
          "Before you move in, walk through the space, check that every system works, and make sure you know who to call if something needs attention.",
        ],
      },
    ],
  },
  {
    slug: "preventive-vs-reactive-maintenance",
    title: "Preventive vs reactive maintenance: which costs less?",
    description: "The difference between preventive and reactive maintenance for buildings in Dubai, and why a planned approach usually saves money.",
    service: "building-maintenance",
    image: "/assets/img/team.jpg",
    alt: "Two technicians working on rooftop ductwork",
    position: "62% 50%",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "There are two ways to look after a building: fix things when they break, or check them regularly so they break less. Most owners do a mix of both.",
    blocks: [
      {
        heading: "Reactive maintenance",
        paragraphs: [
          "Repairs happen after something fails. There is no planned cost, but breakdowns come at bad times, often during peak summer demand, and small problems have time to cause bigger damage.",
        ],
      },
      {
        heading: "Preventive maintenance",
        paragraphs: [
          "Systems are checked and serviced on a schedule. Wear is caught early, equipment tends to last longer and run more efficiently, and repairs can be planned.",
        ],
      },
      {
        heading: "Why it matters more in Dubai",
        paragraphs: [
          "Heat, dust and long AC running hours speed up wear. A system that is never serviced is far more likely to fail when it is needed most.",
        ],
      },
      {
        heading: "A balanced approach",
        list: [
          "Service AC systems regularly, especially before summer",
          "Check electrical and plumbing systems periodically",
          "Fix small issues found during checks before they grow",
          "Keep a record of what was done and when",
        ],
      },
    ],
  },
  {
    slug: "moving-into-new-home-checklist",
    title: "Moving into a new home in Dubai: a technical checklist",
    description: "What to check in a new villa or apartment before or just after moving in: air conditioning, electrics, plumbing and more.",
    service: "building-maintenance",
    image: "/assets/img/technician.jpg",
    alt: "A technician checking an installation",
    published: PUBLISHED,
    readMinutes: 4,
    intro:
      "The first days in a new home are the best time to find problems, before your furniture is in the way and before they become your responsibility to explain.",
    blocks: [
      {
        heading: "Air conditioning",
        list: [
          "Run every unit and check each room cools properly",
          "Look for drips, stains or musty smells",
          "Ask when the system was last serviced",
        ],
      },
      {
        heading: "Electrical",
        list: [
          "Test lights and sockets in every room",
          "Find the distribution board and check breakers are labelled",
          "Look for warm, loose or damaged sockets and switches",
        ],
      },
      {
        heading: "Plumbing",
        list: [
          "Run every tap and shower and check pressure and hot water",
          "Look under sinks and around the water heater for leaks",
          "Flush toilets and check they stop running",
          "Check drains empty quickly",
        ],
      },
      {
        heading: "Record what you find",
        paragraphs: [
          "Take photos of anything that isn't working and share them with your landlord or developer straight away, so repairs are agreed before you settle in.",
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
