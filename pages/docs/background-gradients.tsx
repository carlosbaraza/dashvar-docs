import Head from "next/head";
import React from "react";
import { BackgroundGradient } from "../../components/docs/background-gradient/BackgroundGradient";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsBackgroundGradientsPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Background Gradients | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Background Gradients</Heading1>
          <p>
            Multiple colour variables could be combined into a gradient using
            the native <code>linear-gradient</code> function of CSS. You can
            read more about <code>linear-gradient</code> at{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()">
              the MDN documentation page
            </a>
            .
          </p>
          <BackgroundGradient
            color1="var(--yellow-400)"
            color2="var(--yellow-600)"
          />
        </Section>
        <Section>
          <Heading2>Interactive Example</Heading2>
          <p>
            Feel free to play with this interactive example to get comfortable
            with the tool.
          </p>
          <CodeSandboxEmbed
            title="dashvar-border-radius-1"
            embedId="dashvar-border-radius-1-nx8lr"
            initialOpenedFile="styles.css,index.html"
          />
        </Section>
      </Layout>
    </>
  );
};

export default DocsBackgroundGradientsPage;
