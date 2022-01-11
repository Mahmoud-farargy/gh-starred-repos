import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { retry } from "../utilities";

const Home = lazy(() => retry(() => import("../router/views/Home/Home")));

export const Routes: React.FC = () => {
  return (
    // HOME ROUTE
    <Route path="/" component={Home} />
  );
};
