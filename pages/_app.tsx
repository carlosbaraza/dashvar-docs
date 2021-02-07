import { AppProps } from "next/app";
import "dashvar/dist/base.css";
import "dashvar/dist/dashvar.css";
import "../styles/index.css";
import React from "react";
import Meta from "../components/meta";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
