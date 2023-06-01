import {
  eventplanner,
  sociallite,
  suncheck,
  crafters,
  candidpic
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "gift",
    title: "Gift for You",
  },
];

const projects = [
  {
    name: "Candid AI",
    description:
      "Fact checker app using OpenAI's powerful chatgpt-turbo-3.5 model and prompt engineering. AI answers with True or False or I Don't Know. 60+ Github clones in 1 Day.",
    tags: [
      {
        name: "nextjs",
        color: "text-primary",
      },
      {
        name: "ai",
        color: "text-primary",
      },
      {
        name: "prompt engineering",
        color: "text-primary",
      },
    ],
    image: candidpic,
    source_code_link: "https://github.com/pathull/thesis-project-eventPlanner",
  },
  {
    name: "Event Planner",
    description:
      "Event Planner App is an app for planning events. It allows users to create events, invite other users, and manage event resources with just a few clicks.",
    tags: [
      {
        name: "react",
        color: "text-primary",
      },
      {
        name: "postgres",
        color: "text-primary",
      },
      {
        name: "sockets",
        color: "text-primary",
      },
    ],
    image: eventplanner,
    source_code_link: "https://github.com/pathull/thesis-project-eventPlanner",
  },
  {
    name: "Social-lite",
    description:
      "Social-lite is a social media app that focuses on the core features to be used amongst friends, family, and colleagues without a cluttered UI/UX. ",
    tags: [
      {
        name: "react",
        color: "text-primary",
      },
      {
        name: "materialui",
        color: "text-primary",
      },
      {
        name: "redux toolkit",
        color: "text-primary",
      },
    ],
    image: sociallite,
    source_code_link: "https://github.com/pathull/social-lite",
  },
  {
    name: "Crafters",
    description:
      "Crafters is a social media marketplace app where people can share their arts and crafts to discuss, buy, and sell. Re-wrote this app to Typescript and added testing",
    tags: [
      {
        name: "react",
        color: "text-primary",
      },
      {
        name: "typescript",
        color: "text-primary",
      },
      {
        name: "jest",
        color: "text-primary",
      },
    ],
    image: crafters,
    source_code_link: "https://github.com/pathull/crafters-app",
  },
  {
    name: "SunCheck",
    description:
      "SunCheck is a health dashboard app that lets users update and track their Vitamin-D consumption. Users can download a PDF report.",
    tags: [
      {
        name: "react",
        color: "text-primary",
      },
      {
        name: "restapi",
        color: "text-primary",
      },
      {
        name: "mongodb",
        color: "text-primary",
      },
    ],
    image: suncheck,
    source_code_link: "https://github.com/pathull/SunCheck",
  },
];

export { projects };