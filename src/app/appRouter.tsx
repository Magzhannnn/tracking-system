import MainPage from "@/pages/mainPage/ui/MainPage";
import { Projects } from "@/pages/projects";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/works" />,
  },
  {
    path: "/works",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/filters",
    element: <div className="">Fitlers page</div>,
  },
  {
    path: "/teams",
    element: <div className="">Teams page</div>,
  },
  {
    path: "/apps",
    element: <div className="">Apps page</div>,
  },
]);
