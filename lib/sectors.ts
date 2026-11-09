import type { Faq } from "./services";

// The three property types, each with its own page at /sectors/[slug].

export type Sector = {
  slug: string;
  name: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  alt: string;
  position?: string;
  lede: string;
  intro: string[];
  properties: string[];
  needs: { title: string; text: string }[];
  services: string[];
  faqs: Faq[];
};

export const sectors: Sector[] = [
  {
    slug: "residential",
    name: "Residential",
    short: "Villas and apartments.",
    seoTitle: "Residential technical services in Dubai: villas and apartments",
    seoDescription:
      "AC, electrical, plumbing, fit-out and maintenance for villas and apartments in Dubai, for owners, tenants and landlords. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/facilities.jpg",
    alt: "A technician fixing a bathroom water heater",
    lede: "Technical services for villas and apartments, for owners, tenants and landlords.",
    intro: [
      "At home, a broken AC or a leak can't wait. We help homeowners, tenants and landlords keep villas and apartments comfortable and safe.",
      "From a single repair to a full renovation, one team handles the air conditioning, electrical, plumbing and interior work.",
    ],
    properties: ["Villas", "Townhouses", "Apartments", "Residential buildings"],
    needs: [
      { title: "Repairs", text: "AC faults, leaks and electrical problems, found and fixed." },
      { title: "Servicing", text: "Regular AC servicing and checks before summer." },
      { title: "Renovations", text: "Kitchens, bathrooms and interiors, with the services behind them." },
      { title: "Move-in and move-out", text: "Checks and repairs between tenancies." },
    ],
    services: ["air-conditioning", "plumbing", "electrical", "interior-fit-out", "building-maintenance"],
    faqs: [
      {
        q: "Do you work for tenants as well as owners?",
        a: "Yes. We work for owners, tenants and landlords. For some repairs in a rented home, check with your landlord who arranges and pays for the work.",
      },
      {
        q: "Can you check a property before I move in?",
        a: "Yes. We can check the AC, electrical and plumbing before you move in so problems are found early.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    short: "Offices, shops and other commercial spaces.",
    seoTitle: "Commercial technical services in Dubai: offices and shops",
    seoDescription:
      "AC, electrical, plumbing, MEP, fit-out and maintenance for offices, shops and commercial spaces in Dubai. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/engineers.jpg",
    alt: "Two engineers in hard hats reading drawings by a window",
    position: "30% 50%",
    lede: "Technical services for offices, shops and commercial spaces that need to stay open.",
    intro: [
      "In a business, downtime costs money. A failed AC in an office or a leak in a shop affects staff and customers straight away.",
      "We install, maintain and repair the systems in commercial spaces, and handle fit-outs and MEP works for new and changing spaces.",
    ],
    properties: ["Offices", "Shops", "Showrooms", "Commercial buildings"],
    needs: [
      { title: "Fit-outs", text: "Interiors and services for new or reconfigured spaces." },
      { title: "MEP works", text: "Mechanical, electrical and plumbing for commercial buildings." },
      { title: "Maintenance", text: "Planned servicing to avoid breakdowns." },
      { title: "Repairs", text: "Faults found and fixed with minimal disruption." },
    ],
    services: ["interior-fit-out", "mep-installation", "air-conditioning", "electrical", "building-maintenance"],
    faqs: [
      {
        q: "Can work be planned around business hours?",
        a: "Tell us your opening hours when you request a visit and we will discuss how to plan the work around them.",
      },
      {
        q: "Do you handle office fit-outs?",
        a: "Yes. We carry out interior fit-outs for offices and commercial spaces, together with the MEP works they need.",
      },
    ],
  },
  {
    slug: "industrial",
    name: "Industrial",
    short: "Warehouses and industrial facilities.",
    seoTitle: "Industrial technical services in Dubai: warehouses and facilities",
    seoDescription:
      "Mechanical, electrical, plumbing and maintenance works for warehouses and industrial facilities in Dubai. Request a site visit from Mechelein Technical Services.",
    image: "/assets/img/pipework.jpg",
    alt: "Pipework and valves in a plant room",
    lede: "Technical services for warehouses and industrial facilities.",
    intro: [
      "Industrial sites depend on reliable power, cooling and water. When these fail, work stops.",
      "We install, maintain and repair mechanical, electrical and plumbing systems in warehouses and industrial facilities.",
    ],
    properties: ["Warehouses", "Industrial units", "Workshops", "Plant rooms"],
    needs: [
      { title: "Electrical", text: "Power and lighting for large spaces." },
      { title: "Cooling and ventilation", text: "Air conditioning and air movement for work areas." },
      { title: "Plumbing", text: "Water supply, drainage and pumps." },
      { title: "Maintenance", text: "Regular checks to keep systems running." },
    ],
    services: ["electrical", "air-conditioning", "mep-installation", "plumbing", "building-maintenance"],
    faqs: [
      {
        q: "Do you work on industrial sites?",
        a: "Yes. We work on warehouses and industrial facilities as well as residential and commercial properties.",
      },
      {
        q: "Can you maintain systems on a regular schedule?",
        a: "Yes. Request a site visit and we will agree what needs checking and how often.",
      },
    ],
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
