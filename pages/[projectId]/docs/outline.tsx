import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { OutlineShowcase } from "../../../components/docs/outline/OutlineShowcase";
import { Section } from "../../../components/docs/Section";
import { CodeSandboxEmbed } from "../../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsOutlinePage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Outline | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Outline</Heading1>
          <p>
            Dashvar provides some utility variables for <code>outline</code>. We
            recommend using them in combination with <code>outline-offset</code>{" "}
            as follows:
          </p>
          <Code language="css">{`.selector:focus {
  outline-offset: var(--outline-offset-1);
  outline: var(--outline-black);
}`}</Code>
          <OutlineShowcase />
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

export default DocsOutlinePage;
