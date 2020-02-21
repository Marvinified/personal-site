import Loadable from "react-loadable";
import { Loader } from "./../components";

// export const Portfolio = Loadable({
//     loader: () => import('./portfolio/Portfolio'),
//     loading : Loader ,
// })

export const HomePage = Loadable({
  loader: () => import("./home/HomePage"),
  loading: Loader
});

export const About = Loadable({
  loader: () => import("./about/About"),
  loading: Loader
});

export const Hire = Loadable({
  loader: () => import("./hire/Hire"),
  loading: Loader
});
