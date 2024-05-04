import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import React, { lazy, Suspense } from "react";
import "./style.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Pizza from "./components/Pizza";
// import Grocery from "./components/Grocery";

 const Grocery = lazy(()=>import("./components/Grocery"));

 const About = lazy(()=>import("./components/About"))

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
        element: <Suspense fallback={<h1>Loading......</h1>}>
        <About/>
        </Suspense>,
        // errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading......</h1>}>
          <Grocery/>
          </Suspense>,
      },
      {
        path: "/resturant/:ResId",
        element: <RestaurantMenu />,
      },
      {
        path:'/pizza',
        element:<Pizza/>
      }
     
    ],
  },

  // {
  //     path: '*',  // Wildcard route for handling unknown paths
  //     element: <Error />,
  // },
]);

export default AppLayout;
