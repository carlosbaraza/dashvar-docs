import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";

type Props = {};

const DocsIndex = (props: Props) => {
  return (
    <>
      <Head>
        <title>Getting Started | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Getting Started</Heading1>
          <p>
            <strong>Dashvar</strong> is a collection of CSS Variables that will
            help you setting up a design system. There is a multitude of reasons
            why having a design system is beneficial to your development.
          </p>
          <p>
            Just a few <strong>carefully selected CSS Variables</strong> could
            make a huge impact in your development experience.
          </p>
          <p>
            The easiest way to get started is by adding the tiny {"(<1.5KB)"}{" "}
            CSS file to the <code>{"<head>"}</code> element of your HTML. We
            recommend using <a href="https://www.jsdelivr.com/">jsDelivr</a> as
            a CDN to make it faster. Just add the following <code>link</code> to
            your <code>head</code>:
          </p>
          <Code language="html">
            {`<!-- Optional base styles (Reset + Remove common styles to start from scratch) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/base.css"
/>

<!-- Add Dashvar CSS Variables -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/dashvar.css"
/>

<!-- Optional tiny helpers (<1KB). Body media classes. -->
<script src="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/dashvar-helpers.js"></script>`}
          </Code>
        </Section>
        <Section>
          <Heading2>NPM</Heading2>
          <p>
            You can also install the NPM Package and import the CSS file from
            the <code>dist</code> folder.
          </p>
          <Code language="bash">{`npm i dashvar

# or with yarn
yarn add dashvar`}</Code>
          <p>
            After this, you will need to import the CSS in your build. There are
            many ways in which you could do this, and it highly depends on your
            build setup. If you are using Webpack or a similar bundler, it is
            likely the following import statements would work for you:
          </p>
          <Code language="typescript">
            {`import "dashvar/dist/base.css"; // Optional
import "dashvar/dist/dashvar.css";
import "dashvar/dist/dashvar-helpers"; // Optional for media queries`}
          </Code>
        </Section>
      </Layout>
    </>
  );
};

export default DocsIndex;
