import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import Home from "./assets/Page/home";
import CreateCategory from "./assets/Components/CreateCategory";
import CategoryList from "./assets/Components/CategoryList";
import UpdateCategory from "./assets/Components/UpdateCategory";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      children: [
        { path: "/createcategory", Component: CreateCategory },
        { path: "/categorylist", Component: CategoryList },
        { path: "/updatecategory/:id", Component: UpdateCategory },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
