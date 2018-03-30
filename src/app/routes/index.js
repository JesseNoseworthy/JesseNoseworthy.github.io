import About from "components/About";
import Portfolio from "components/Portfolio";
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
];

export default ROUTES;