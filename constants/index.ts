import { dalle, spotipod, bytesizedboba } from "@/public/mockups";

export const NavLinks = [
  { href: "/about", key: "About", text: "About" },
  { href: "/projects", key: "Projects", text: "Projects" },
  { href: "/resume.pdf", key: "Resume", text: "Resume" },
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots",
];

export type Project = {
  id: string;
  title: string;
  src: ImageData;
  alt: string;
  description: string;
  link: string;
};

export const projects = [
  {
    id: "project-1",
    title: "SpotiPod",
    src: spotipod,
    alt: "SpotiPod",
    description:
      "SpotiPod is a web extension that recommends available podcasts based on the user's geolocation and provides features to explore and manage podcasts. It utilizes the Spotify API to fetch podcast data, user subscriptions, and PostgreSQL to store podcast data manually.",
    tech: "JavaScript, HTML, CSS, Node.js, Express.js, PostgreSQL",
    link: "https://github.com/c4thie/opera-extension",
  },
  // {
  //   id: "project-2",
  //   title: "DALL-E 2.0",
  //   src: dalle,
  //   alt: "dall-e 2.0",
  //   description:
  //     "Built with OpenAI's API, DALL-E 2.0 is an AI system that can generate visual images from natural language prompts with community image sharing options.",
  //   tech: "React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Cloudinary, OpenAI",
  //   link: "https://dallebyc.d2239t59xgkt7i.amplifyapp.com/",
  // },
  {
    id: "project-2",
    title: "Byte Sized Boba",
    src: bytesizedboba,
    alt: "website design",
    description:
      "Byte Sized Boba is a web application that allows users to discover new bubble tea and beverage combinations. Featuring a simple and cozy boba themed interface, users can share their preferences and moods through a quiz. Byte Sized Boba’s algorithm traverses through our beverage database and presents users with a drink suggestion. Users can then find bubble tea stores near them using our built-in interactive map.",
    tech: "React.js, Framer Motion, HTML, CSS, Node.js, Express.js, PostgreSQL, Google Maps API, Photoshop, Figma",
    link: "https://bytesized-beta.vercel.app/",
  },
  // {
  //   id: "project-3",
  //   title: "Web Console Redesign",
  //   src: dalle,
  //   alt: "website design",
  //   description:
  //     "ReliablyME is a trailblazing venture driven by a profound vision to transform trust-building and recognition using radical accountability. The venture has set out on a mission to empower individuals to be recognized for their social commitments. The company focused on enhancing the visual user interface of the Admin Console. Despite the challenges that came with decrecated source code, we wanted to take the risk and implement new features to facilitate admin management",
  //   tech: "React.js, Node.js, Redux.js, Adobe XD, Figma",
  //   link: "",
  // },
];

export const Tech = [
  {
    name: "JavaScript/Typescript",
    level: 90,
  },
  {
    name: "C/C++",
    level: 80,
  },
  {
    name: "Python",
    level: 85,
  },
  {
    name: "HTML/CSS",
    level: 95,
  },
  {
    name: "R",
    level: 65,
  },
];
