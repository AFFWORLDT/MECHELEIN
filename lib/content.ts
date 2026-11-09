// Words and pictures shared by the home page and the general pages.
// Services, sectors and guides each have their own file.
// Photographs are Unsplash stand-ins until MTS supplies its own site photographs.

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

export const city = {
  kicker: "Where we work",
  heading: "Based in Dubai",
  text: "Serving homes, offices and commercial properties in Dubai.",
  image: { src: "/assets/img/dubai.jpg", alt: "Downtown Dubai skyline with the Burj Khalifa" },
};

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

// General questions; each service and sector page adds its own.
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
