import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { CodePenEmbed } from "../../components/landing/CodePenEmbed";

type Props = {};

const DocsBaseStyles = (props: Props) => {
  return (
    <>
      <Head>
        <title>Base Styles | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>The browser default styles problem</Heading1>
          <p>
            <strong>Dashvar</strong> core offering is a collection of CSS
            variables. However, as UI designers, we have experienced many other
            problems while developing for the web. One of the biggest problems
            of the web is inconsistency between browsers.
          </p>
          <p>
            Introducing CSS resets. CSS resets are usually small CSS files that
            make the base styles for every browser consistent. For example, this
            is how a button looks by default in your browser.
          </p>
          <img
            src="/assets/images/default-button-comparison.png"
            alt="Default button styles browser comparison"
            width="563"
            height="148"
          />
          <CodePenEmbed penId="VwmPXRW" />
        </Section>
        <Section>
          <Heading2>Dashvar Base Styles</Heading2>
          <p>
            The base styles are a small CSS file inspired by{" "}
            <a href="https://tailwindcss.com/">Tailwind CSS</a> and{" "}
            <a href="https://github.com/sindresorhus/modern-normalize">
              modern-normalize
            </a>
            . You can find{" "}
            <a href="https://github.com/dashvars/dashvar/blob/master/src/base/base.css">
              the entire source file here
            </a>
            .
          </p>
          <p>
            Dashvar not only will make the browser styles consistent, but it
            will take it a step further (and opinionated) and remove the styles
            from most common elements. This approach is inspired and shared by{" "}
            <a href="https://tailwindcss.com/">Tailwind CSS</a>.
          </p>
          <p>
            The fundamental reason why we remove most of the styles is to make
            it easier for you to start designing, without having to think about
            what the default styles are for each element type.
          </p>

          <CodePenEmbed penId="zYoNjwN" />
          <p>Other common elements would look as follows:</p>
          <CodePenEmbed penId="gOLgzxZ" height={500} />
        </Section>
        <Section>
          <Heading2>How to use Base Styles</Heading2>
          <p>
            We recommend you follow the recommended instructions in the{" "}
            <Link href="/docs/getting-started">
              <a>Getting Started</a>
            </Link>{" "}
            page.
          </p>
        </Section>
      </Layout>
    </>
  );
};

export default DocsBaseStyles;
