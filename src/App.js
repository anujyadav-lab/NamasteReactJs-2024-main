import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import React from "react";
import "./style.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
path:'/',
element:<Body/>
      }
      ,
      {
        path: "/about",
        element: <About />,
        // errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error />,
      },
      {
        path: "/resturant/:ResId",
        element: <RestaurantMenu />,
      },
    ],
  },

  // {
  //     path: '*',  // Wildcard route for handling unknown paths
  //     element: <Error />,
  // },
]);

export default AppLayout;
