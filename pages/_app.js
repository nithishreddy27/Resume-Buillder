import "../styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loading from "../components/Loading";
import ResumeState from "../context/ResumeState";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // Listen for route changes to show/hide the loading component

  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading start");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("Loading end");
    setLoading(false);
  });
  // Router.events.on("routeChangeError", handleComplete);

  return (
    <>
      <ResumeState>
        {loading && <Loading />}
        <Component {...pageProps} />
      </ResumeState>
    </>
  );
}

export default MyApp;
