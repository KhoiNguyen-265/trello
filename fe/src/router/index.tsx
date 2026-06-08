import MainLayout from "@/layouts/MainLayout";
import Boards from "@/pages/Boards";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Boards />,
      },
    ],
  },
]);

export default router;
