import Head from "next/head";
import React from "react";
import { Code } from "../../components/docs/Code";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { LineHeightShowcase } from "../../components/docs/line-height/LineHeightShowcase";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsLineHeightPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Line Height | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Line Height</Heading1>
          <p>
            Dashvar provides a few utility variables for most common{" "}
            <code>line-height</code>s. We recommend pairing a{" "}
            <code>line-height</code> with the same variable name of{" "}
            <code>font-size</code> like follows:
          </p>

          <Code language="css">
            {`.selector {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
}`}
          </Code>
          <LineHeightShowcase />
        </Section>
        <Section>
          <Heading2>Interactive Example</Heading2>
          <p>
            Feel free to play with this interactive example to get comfortable
            with the tool.
          </p>
          <CodeSandboxEmbed
            title="dashvar-box-shadow-1"
            embedId="dashvar-box-shadow-1-p72rm"
            initialOpenedFile="styles.css,index.html"
          />
        </Section>
      </Layout>
    </>
  );
};

export default DocsLineHeightPage;
