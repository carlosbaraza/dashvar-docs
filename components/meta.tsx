import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* HighlightJS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/vs2015.min.css"
      />
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/highlight.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/languages/bash.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/languages/css.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/languages/json.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/languages/typescript.min.js"></script>
    </Head>
  );
};

export default Meta;
