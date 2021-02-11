import Head from "next/head";
import React from "react";
import { BorderWidthShowcase } from "../../components/docs/border-width/BorderWidthShowcase";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsBorderWidthPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Border Width | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Border Width</Heading1>
          <p>
            Dashvar provides a few utility variables for all of your{" "}
            <code>border-width</code> needs.
          </p>
          <BorderWidthShowcase />
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

export default DocsBorderWidthPage;
