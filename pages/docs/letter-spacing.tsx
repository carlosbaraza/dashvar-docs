import Head from "next/head";
import React from "react";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { LetterSpacingShowcase } from "../../components/docs/letter-spacing/LetterSpacingShowcase";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsBoxShadowPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Letter Spacing | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Letter Spacing</Heading1>
          <p>
            Dashvar provides a few utility variables for all of your{" "}
            <code>letter-spacing</code> needs.
          </p>
          <LetterSpacingShowcase />
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

export default DocsBoxShadowPage;
