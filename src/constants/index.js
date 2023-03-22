import {
  eventplanner,
  sociallite,
  survivesandstorm,
  suncheck,
  crafters,
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
      "SunCheck is a health dashboard app that lets users update and track their Vitamin-D consumption.",
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
  {
    name: "Survive Sandstorm",
    description:
      "Reaction game. Mouse and laptop -or- desktop required. Sound recommended. Click to play in browser.",
    tags: [
      {
        name: "vanilla js",
        color: "text-primary",
      },
      {
        name: "html",
        color: "text-primary",
      },
      {
        name: "css",
        color: "text-primary",
      },
    ],
    image: survivesandstorm,
    source_code_link: "https://pathull.github.io/Survive-Sandstorm/",
  },
];

export { projects };