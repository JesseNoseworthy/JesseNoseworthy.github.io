import About from "components/About";
import Portfolio from "components/Portfolio";
import Life from "components/Life";
import data from "./data";

const ROUTES = [
  {
    id: "about",
    path: "/about",
    label: "Who Am I?",
    main: About,
    data: data.about
  },
  {
    id: "portfolio",
    path: "/portfolio",
    label: "What I've built",
    main: Portfolio,
    data: data.portfolio
  },
  {
    id: "life",
    path: "/life",
    label: "My Life",
    main: Life,
    data: data.life
  },
];

export default ROUTES;