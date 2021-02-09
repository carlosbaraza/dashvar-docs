import "dashvar/dist/base.css";
import "dashvar/dist/dashvar-helpers";
import "dashvar/dist/dashvar.css";
import { AppProps } from "next/app";
import React from "react";
import Meta from "../components/meta";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
