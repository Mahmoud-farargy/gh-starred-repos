import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Routes } from "./router";
import { Header, Footer } from "./components";
import { useLocation } from "react-router";
import { LoadingScreen } from "./components";

const App: React.FC = () => {
  const location = useLocation<object>();
  const [ isLoadingDocument, setLoadingDocument ] = useState<boolean>(true);
  if (process.env.NODE_ENV === "development") {
    typeof window !== "undefined" && (window.React = React);
  }
  const onLoadingDocFinish = useCallback(() => {
    setLoadingDocument(false);
  },[]);
  useEffect(() => {
    
    window.addEventListener("load", onLoadingDocFinish);
    return () => {
      window.removeEventListener("load", onLoadingDocFinish);
    }
  }, [onLoadingDocFinish]);

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
      {/* Loading screens and modals */}
      {isLoadingDocument && <LoadingScreen />}
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
