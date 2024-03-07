interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}
interface chipType {
  title: string;
  subtext: string;
  icon: string;
}

const ProductsAppsLink: appsLinkType[] = [
  {
    href: "/smart-box",
    title: "Smart Box",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-mobile.svg",
  },
  {
    href: "/fleet-management-platform",
    title: "Fleet Management Platform",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-application.svg",
  },
];
const MarketsAppsLink: appsLinkType[] = [
  {
    href: "/smart-cities",
    title: "Smart Cities",
    subtext: "Discover more details here",
    avatar: "/images/icons8/smart-city.png",
  },
  {
    href: "/commercial-establishments",
    title: "Commercial Establishment",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-cart.svg",
  },
  {
    href: "/private-organizations",
    title: "Private Organization",
    subtext: "Discover more details here",
    avatar: "/images/icons8/private-organization.png",
  },
  {
    href: "/waste-collectors",
    title: "Waste Collectors",
    subtext: "Discover more details here",
    avatar: "/images/icons8/waste-collectors.png",
  },
];

const CompanyAppsLink: appsLinkType[] = [
  {
    href: "/about-company",
    title: "About Company",
    subtext: "Discover more details here",
    avatar: "/images/icons8/company.png",
  },
  {
    href: "/partnership-opportunities",
    title: "Partnership Opportunities",
    subtext: "Discover more details here",
    avatar: "/images/icons8/partnership.png",
  },
];
const ContactAppsLink: appsLinkType[] = [
  {
    href: "/contact-details",
    title: "Contact Details",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-chat.svg",
  },
  {
    href: "/quote-request",
    title: "Quote Request",
    subtext: "Discover more details here",
    avatar: "/images/icons8/quote.png",
  },
  {
    href: "/technical-assistance",
    title: "Technical Assistance",
    subtext: "Discover more details here",
    avatar: "/images/icons8/technical-assistance.png",
  },
];

const SmartBoxChipsData1: chipType[] = [
  {
    title: "Powered by solar energy",
    subtext:
      " Eco-friendly and sustainable, harnessing solar energy for efficient power generation.",
    icon: "heroicons:sun",
  },
  {
    title: "Wireless data transmission",
    subtext:
      "Wireless data transmission involves sending information over distances without physical connections or wires.",
    icon: "heroicons:chart-bar",
  },
  {
    title: "Safety sensorsSafety sensors",
    subtext:
      "Safety sensors are devices designed to detect hazards and prevent accidents in various environments.",
    icon: "heroicons:lock-closed",
  },
  {
    title: "GPS location tracking",
    subtext:
      "GPS location tracking enables real-time monitoring and positioning of objects or individuals globally.",
    icon: "heroicons:map",
  },
];
const SmartBoxChipsData2: chipType[] = [
  {
    title: "Graphic wraps",
    subtext:
      "Graphic wraps are customizable, visually striking vinyl coverings applied to vehicles or surfaces for advertising or aesthetic purposes.",
    icon: "heroicons:printer",
  },
  {
    title: "Advertisement signage",
    subtext:
      "Advertisement signage: visually impactful displays for promoting brands, products, or services.",
    icon: "heroicons:photo",
  },
  {
    title: "WI-FI router",
    subtext:
      "A Wi-Fi router is a device that provides wireless internet connectivity to various devices within a network.",
    icon: "heroicons:wifi",
  },
  {
    title: "mounting bracket",
    subtext:
      "A mounting bracket is a hardware device used to attach objects securely to a surface or structure.",
    icon: "heroicons:wrench-screwdriver",
  },
  {
    title: "Ashtray ",
    subtext:
      "An ashtray is a receptacle for ash and cigarette butts, typically used by smokers.",
    icon: "mdi:smoking",
  },
];

const FleetManagementPlatformChipsData1: chipType[] = [
  {
    title: "Intégration de matériel et d’actifs",
    subtext:
      "Processus de combinaison de ressources matérielles et d'actifs pour optimiser les opérations et la gestion.",
    icon: "heroicons:cog-6-tooth",
  },
  {
    title: "Optimisation automatisée des itinéraires",
    subtext:
      "Amélioration automatique des trajets pour une efficacité accrue et une réduction des temps de parcours.",
    icon: "heroicons:map",
  },
  {
    title: "Fonctions de gestion de flotte avancées",
    subtext:
      "Surveillance en temps réel, optimisation des itinéraires, maintenance prédictive, analyse des performances.",
    icon: "heroicons:truck",
  },
  {
    title: "Rapports de consultation et d’analyse",
    subtext:
      "Documents résumant les résultats d'études et les recommandations issues de consultations et analyses professionnelles.",
    icon: "heroicons:arrow-trending-up",
  },
];
const FleetManagementPlatformChipsData2: chipType[] = [
  {
    title: "Graphic wraps",
    subtext:
      "Graphic wraps are customizable, visually striking vinyl coverings applied to vehicles or surfaces for advertising or aesthetic purposes.",
    icon: "heroicons:printer",
  },
  {
    title: "Advertisement signage",
    subtext:
      "Advertisement signage: visually impactful displays for promoting brands, products, or services.",
    icon: "heroicons:photo",
  },
  {
    title: "WI-FI router",
    subtext:
      "A Wi-Fi router is a device that provides wireless internet connectivity to various devices within a network.",
    icon: "heroicons:wifi",
  },
  {
    title: "mounting bracket",
    subtext:
      "A mounting bracket is a hardware device used to attach objects securely to a surface or structure.",
    icon: "heroicons:wrench-screwdriver",
  },
  {
    title: "Ashtray ",
    subtext:
      "An ashtray is a receptacle for ash and cigarette butts, typically used by smokers.",
    icon: "mdi:smoking",
  },
];
const SmartCitiesChipData: chipType[] = [
  {
    title: "Less manpower",
    subtext:
      "Save on labor costs by streamlining and optimizing waste management operations. Less frequent collections and less inefficient collections (visiting empty bins).",
    icon: "mdi:human",
  },
  {
    title: "Increased transparency",
    subtext:
      "Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is.",
    icon: "heroicons:circle-stack",
  },
  {
    title: "Increased transparency",
    subtext:
      "Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is.",
    icon: "mdi:highway",
  },
  {
    title: "Do more with less",
    subtext:
      "Cities can reduce waste collection costs by up to 50% with our smart IoT-based hardware and software solution.",
    icon: "heroicons:banknotes",
  },
];
const SmartCitiesCards = [
  {
    title: "Streets",
    avatar: "/images/pages/smart-cities/cards/streets.png",
  },
  {
    title: "Stations",
    avatar: "/images/pages/smart-cities/cards/stations.png",
  },
  {
    title: "Parcs",
    avatar: "/images/pages/smart-cities/cards/parc.png",
  },
  {
    title: "Beaches",
    avatar: "/images/pages/smart-cities/cards/beach.png",
  },
];
const CommercialEstablishmentsChipData: chipType[] = [
  {
    title: "Less labor",
    subtext:
      "Reduce labor costs by collecting waste only when bins and receptacles are actually full.",
    icon: "mdi:human",
  },
  {
    title: "Cleaner streets",
    subtext:
      "In facilities open to the public, waste collection activities can be disruptive and unsightly. Our solutions help reduce these collections or eliminate collections during peak hours altogether.",
    icon: "heroicons:clock",
  },
  {
    title: "Pay less",
    subtext:
      "Customers who use third-party services to collect their waste pay per collection, regardless of the amount of waste. Our solutions eliminate unnecessary collections.",
    icon: "heroicons:banknotes",
  },
];
const CommercialEstablishmentsCards = [
  {
    title: "Mall",
    avatar: "/images/pages/commercial-establishments/cards/commercial.png",
  },
  {
    title: "Airport",
    avatar: "/images/pages/commercial-establishments/cards/aeroports.png",
  },
  {
    title: "Congress Palace",
    avatar: "/images/pages/commercial-establishments/cards/congress.png",
  },
  {
    title: "Office complex",
    avatar: " /images/pages/commercial-establishments/cards/bureaux.png",
  },
];
const PrivateOrganizationsCards = [
  {
    title: "Universities",
    avatar: "/images/pages/private-organizations/cards/university.png",
  },
  {
    title: "Theme parks",
    avatar: "/images/pages/private-organizations/cards/theme-parc.png",
  },
  {
    title: "Hospitals",
    avatar: "/images/pages/private-organizations/cards/hospital.png",
  },
  {
    title: "Zoos",
    avatar: " /images/pages/private-organizations/cards/zoo.png",
  },
];

const WasteCollectorsChipData: chipType[] = [
  {
    title: "Asset management",
    subtext:
      "Keep track of where your bins are using GPS location, what their status is, detect fires or physical damage, and more.",
    icon: "heroicons:trash",
  },
  {
    title: "Fleet management",
    subtext:
      "Monitor and analyze everything from location and collection performance to fuel consumption and braking patterns. Reduce the maintenance and operating costs of your fleet.",
    icon: "heroicons:truck",
  },
  {
    title: "Increased transparency",
    subtext:
      "Ensure your collection routes are optimized and planned for the most profitable operations.",
    icon: "heroicons:arrow-trending-up",
  },
  {
    title: "Reduce labor costs",
    subtext:
      "By increasing the capacity of standard bins and reducing the number of collections required, you save on the basic labor costs that take up a large part of operating budgets.",
    icon: "mdi:human",
  },
];
const ContactDetailsChipData: chipType[] = [
  {
    title: "Address",
    subtext:
      "Z4, Saint Gobain, Jbel Jloud",
    icon: "heroicons:map-pin",
  },
  {
    title: "Phone",
    subtext:"+216 56 332 666",
    icon: "heroicons:phone",
  },
  {
    title: "Email",
    subtext:
      "direction@xgenbox.com",
    icon: "heroicons:envelope",
  },

];
const QuoteRequestChipsData: chipType[] = [
  {
    title: "Graphic wraps",
    subtext:
      "Graphic wraps are customizable, visually striking vinyl coverings applied to vehicles or surfaces for advertising or aesthetic purposes.",
    icon: "heroicons:printer",
  },
  {
    title: "Advertisement signage",
    subtext:
      "Advertisement signage: visually impactful displays for promoting brands, products, or services.",
    icon: "heroicons:photo",
  },
  {
    title: "WI-FI router",
    subtext:
      "A Wi-Fi router is a device that provides wireless internet connectivity to various devices within a network.",
    icon: "heroicons:wifi",
  },
  {
    title: "mounting bracket",
    subtext:
      "A mounting bracket is a hardware device used to attach objects securely to a surface or structure.",
    icon: "heroicons:wrench-screwdriver",
  },
  {
    title: "Ashtray ",
    subtext:
      "An ashtray is a receptacle for ash and cigarette butts, typically used by smokers.",
    icon: "mdi:smoking",
  },
];

export {
  ProductsAppsLink,
  MarketsAppsLink,
  CompanyAppsLink,
  ContactAppsLink,
  SmartBoxChipsData1,
  SmartBoxChipsData2,
  FleetManagementPlatformChipsData1,
  FleetManagementPlatformChipsData2,
  SmartCitiesChipData,
  SmartCitiesCards,
  CommercialEstablishmentsChipData,
  CommercialEstablishmentsCards,
  PrivateOrganizationsCards,
  WasteCollectorsChipData,
  ContactDetailsChipData,
  QuoteRequestChipsData
};
