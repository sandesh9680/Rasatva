import React from "react";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Landing_Main from "../components/Landing_Main/Landing_Main";
import LandingSectionOne from "../components/Landing_Section_One/LandingSectionOne";
import LandingSectionTwo from "../components/Landing_Section_Two/LandingSectionTwo";
import FullLayout from "../layouts/FullLayout";
import Points from "../views/ui/Points";
import AccountDetails from "../views/ui/AccountDetails";
import MembershipStatus from "../views/ui/MembershipStatus";
import MyOrders from "../views/ui/MyOrders";
import Reviews from "../views/ui/Reviews";
import Testimonials from "../views/ui/Testimonials";
import Wishlist from "../views/ui/Wishlist";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";





function RouteComponent() {
  let routes = useRoutes([


    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to="/account-details" /> },
        // { path: "/mstarter", exact: true, element: <Starter /> },
        // { path: "/index", element: <Landing_Main /> },
        { path: "/points", exact: true, element: <Points /> },
        { path: "/account-details", exact: true, element: <AccountDetails /> },
        { path: "/membership", exact: true, element: <MembershipStatus /> },
        { path: "/my-order", exact: true, element: <MyOrders /> },
        { path: "/review", exact: true, element: <Reviews /> },
        { path: "/testimonial", exact: true, element: <Testimonials /> },
        { path: "/wishlist", exact: true, element: <Wishlist /> },
        // { path: "/m/psychology", exact: true, element: <Psychology /> },
      ],
    },





    { path: "/index", element: <Landing_Main /> },
    { path: "/", element: <Landing_Main /> },
    { path: "/landing-one", element: <LandingSectionOne /> },
    { path: "/landing-two", element: <LandingSectionTwo /> }, 
  ]);
  return routes;
}


const AppWrapper = () => {
  return (
    <Router>
      <RouteComponent />
    </Router>
  );
};

export default AppWrapper;





