import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>{/*chilren goes into outlet route*/}
      <Footer/>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/Contact",
      element: <ContactUs />,
    },
    {
      path:"/restaurant/:resId",
      element: <RestaurantMenu/>,
    }
  
  ],
},
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
