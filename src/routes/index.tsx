import { useRoutes } from "react-router-dom";
import Bio from "../views/Bio.tsx";
import Resume from "../views/Resume.tsx";
import Projects from "../views/Projects.tsx";
import NotFound from "../views/NotFound.tsx";

const routesList = [
  {
    path: "/bio",
    element: <Bio />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/",
    element: <Bio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const AppRoutes = () => {
  const route = useRoutes([...routesList]);
  return <>{route}</>;
};

export default AppRoutes;
