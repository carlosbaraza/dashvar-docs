import "dashvar/dist/base.css";
import "dashvar/dist/dashvar-helpers";
import "dashvar/dist/dashvar.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Meta from "../components/meta";
import { pageview } from "../lib/gtag";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
