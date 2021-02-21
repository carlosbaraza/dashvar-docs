import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";
import { TransitionShowcase } from "../../../components/docs/transition/TransitionShowcase";
import { CodeSandboxEmbed } from "../../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsTransitionPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Transition | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Transition</Heading1>
          <p>
            Dashvar covers most of the common <code>transition</code>{" "}
            configurations. Just use the transition variable for the kind of
            properties you want to transition. Then you can apply changes to
            those properties with other selectors or modifiers.
          </p>

          <Code language="css">{`.selector {
  background: var(--gray-100);
  transition: var(--transition-all);
}

.selector:hover {
  background: var(--yellow-200);
}`}</Code>
        </Section>
        <Section>
          <Heading2>Transition variables</Heading2>
          <TransitionShowcase />
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

export default DocsTransitionPage;
