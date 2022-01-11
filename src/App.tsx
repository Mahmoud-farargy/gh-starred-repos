import React, { Fragment, useEffect } from "react";
import { Routes } from "./router";
import { Header, Footer } from "./components";
import { useLocation } from "react-router";

const App: React.FC = () => {
  const location = useLocation();
  if (process.env.NODE_ENV === "development") {
    typeof window !== "undefined" && (window.React = React);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, [location]);
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Screen(s) */}
      <main id="app">
        <Routes />
      </main>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default App;
