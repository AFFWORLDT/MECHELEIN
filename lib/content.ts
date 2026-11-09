// All of the site's words and pictures in one place.
// Photographs are Unsplash stand-ins until MTS supplies its own site photographs.

// No backend yet: the request form opens the visitor's email app addressed here.
// CLIENT TO CONFIRM: replace with MTS's real inbox.
export const FORM_TO = "info@mechelein.example";

export const site = {
  name: "Mechelein Technical Services",
  title: "Mechelein Technical Services | Technical services company in Dubai",
  description:
    "Mechelein Technical Services is a technical services company in Dubai for air conditioning, electrical, plumbing, MEP, interior fit-out and maintenance works.",
  location: "Dubai, United Arab Emirates",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#request", label: "Contact" },
];

export const mainAction = { href: "#request", label: "Request a site visit" };

export const hero = {
  kicker: "Technical services in Dubai",
  headline: "Keeping Dubai's buildings",
  headlineAccent: "running",
  lede: "One team for installation, servicing and repairs in villas, apartments, offices and industrial sites.",
  image: {
    src: "/assets/img/hero.jpg",
    alt: "A technician in a hard hat walking between air conditioning units on a rooftop",
  },
};

export const tickerRows = [
  ["Air conditioning", "Electrical works", "Plumbing and drainage", "MEP installation", "Interior fit-out", "Maintenance"],
  ["Installation", "Servicing", "Repairs", "Upgrades", "Residential", "Commercial", "Industrial"],
];

export const services: {
  title: string;
  text: string;
  image: string;
  alt: string;
  size?: "big" | "wide";
  position?: string;
}[] = [
  { title: "Air conditioning and HVAC", text: "Installation, servicing and repair of air conditioning and ventilation systems.", image: "/assets/img/hvac.jpg", alt: "Rooftop HVAC units in a row", size: "big" },
  { title: "Electrical works", text: "Electrical installation, maintenance and repairs.", image: "/assets/img/electrical.jpg", alt: "An electrician testing a distribution board" },
  { title: "Plumbing and drainage", text: "Plumbing installation, maintenance and repairs.", image: "/assets/img/plumbing.jpg", alt: "A plumber fitting pipework under a basin" },
  { title: "MEP installation", text: "Mechanical, electrical and plumbing works for new and existing buildings.", image: "/assets/img/mep-ceiling.jpg", alt: "A technician on a lift fixing services to a ceiling", size: "wide", position: "50% 35%" },
  { title: "Interior fit-out", text: "Interior works for homes and commercial spaces.", image: "/assets/img/fitout.jpg", alt: "A worker on a ladder fitting a ceiling" },
  { title: "Building maintenance", text: "Servicing and repairs to keep your building systems running.", image: "/assets/img/ac-units.jpg", alt: "Air conditioning condensers on an outside wall", size: "wide" },
];

export const city = {
  kicker: "Where we work",
  heading: "Based in Dubai",
  text: "Serving homes, offices and commercial properties in Dubai.",
  image: { src: "/assets/img/dubai.jpg", alt: "Downtown Dubai skyline with the Burj Khalifa" },
};

export const sectors = [
  { title: "Residential", text: "Villas and apartments.", image: "/assets/img/facilities.jpg", alt: "A technician fixing a bathroom water heater" },
  { title: "Commercial", text: "Offices, shops and other commercial spaces.", image: "/assets/img/engineers.jpg", alt: "Two engineers in hard hats reading drawings by a window", position: "30% 50%" },
  { title: "Industrial", text: "Warehouses and industrial facilities.", image: "/assets/img/pipework.jpg", alt: "Pipework and valves in a plant room" },
];

export const steps = [
  { title: "Inspect", text: "We look at the job and agree what needs to be done.", image: "/assets/img/technician.jpg", alt: "A technician in a hard hat checking an installation" },
  { title: "Carry out the work", text: "Our team carries out the agreed work.", image: "/assets/img/mep-ceiling.jpg", alt: "A technician working on ceiling services from a lift", position: "40% 30%" },
  { title: "Check and hand over", text: "We check everything works before handing it back to you.", image: "/assets/img/panel.jpg", alt: "An open electrical control panel with breakers and wiring" },
];

export const about = {
  heading: "One team for your building's systems",
  text: "Mechelein Technical Services is a technical services company in Dubai. We handle the whole life of a building's systems, so you have one company to call for every trade.",
  image: { src: "/assets/img/team.jpg", alt: "Two technicians working on ductwork and air conditioning units on a rooftop", position: "62% 50%" },
  points: [
    { title: "Installation", text: "New systems for new and existing buildings." },
    { title: "Servicing", text: "Routine checks to keep systems working well." },
    { title: "Repairs", text: "Finding and fixing faults." },
    { title: "Upgrades", text: "Replacing and improving older systems." },
  ],
};

export const faq = [
  { q: "Where are you based?", a: "We are based in Dubai, UAE. Tell us where your property is when you get in touch." },
  { q: "What kind of work do you do?", a: "Air conditioning, electrical, plumbing, MEP and interior fit-out works, including installation, servicing and repairs." },
  { q: "What types of property do you work on?", a: "Residential, commercial and industrial properties." },
  { q: "How do I get a quote?", a: "Send a request with a few details about the job and your property, and we will get back to you to discuss it." },
];

export const requestSteps = [
  { title: "Send your request", text: "A few details about the job and the property." },
  { title: "We get in touch", text: "To talk through what you need." },
  { title: "We arrange a visit", text: "At a time that suits you." },
];

export const formServices = [
  "Air conditioning and HVAC",
  "Electrical works",
  "Plumbing and drainage",
  "MEP installation",
  "Interior fit-out",
  "Maintenance",
  "Something else",
];

export const footerColumns = [
  {
    heading: "Services",
    links: [
      { href: "#services", label: "Air conditioning" },
      { href: "#services", label: "Electrical works" },
      { href: "#services", label: "Plumbing" },
      { href: "#services", label: "MEP and fit-out" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "#sectors", label: "Sectors" },
      { href: "#process", label: "How we work" },
      { href: "#about", label: "About us" },
      { href: "#faq", label: "Questions" },
    ],
  },
];
