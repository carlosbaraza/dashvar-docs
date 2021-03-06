import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { DocsLink } from "../../../components/docs/DocsLink";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";
import { TransitionTimingFunctionShowcase } from "../../../components/docs/transition-timing-function/TransitionTimingFunctionShowcase";
import { CodeSandboxEmbed } from "../../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsTransitionDurationPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Transition Duration | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Transition Duration</Heading1>
          <p>
            Dashvar covers most of the common{" "}
            <code>transition-timing-function</code> configurations. We recommend
            using the{" "}
            <DocsLink href="/docs/transition">
              <a>transition variables</a>
            </DocsLink>{" "}
            and then applying the changes to the{" "}
            <code>transition-timing-function</code> as the following example
            illustrates:
          </p>

          <Code language="css">{`.selector {
  background: var(--gray-100);
  transition: var(--transition-all);
  transition-timing-function: var(--transition-timing-function-ease-out);
}

.selector:hover {
  background: var(--yellow-200);
}`}</Code>
        </Section>
        <Section>
          <Heading2>Transition timing function variables</Heading2>
          <TransitionTimingFunctionShowcase />
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

export default DocsTransitionDurationPage;
