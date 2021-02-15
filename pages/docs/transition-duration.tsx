import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Code } from "../../components/docs/Code";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { TransitionDurationShowcase } from "../../components/docs/transition-duration/TransitionDurationShowcase";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

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
            Dashvar covers most of the common <code>transition-duration</code>{" "}
            configurations. We recommend using the{" "}
            <Link href="/docs/transition">
              <a>transition variables</a>
            </Link>{" "}
            and then applying the changes to the{" "}
            <code>transition-duration</code> as the following example
            illustrates:
          </p>

          <Code language="css">{`.selector {
  background: var(--gray-100);
  transition: var(--transition-all);
  transition-duration: var(--transition-duration-2);
}

.selector:hover {
  background: var(--yellow-200);
}`}</Code>
        </Section>
        <Section>
          <Heading2>Transition duration variables</Heading2>
          <TransitionDurationShowcase />
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
