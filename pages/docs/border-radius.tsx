import Head from "next/head";
import React from "react";
import { BorderRadiusShowcase } from "../../components/docs/border-radius/BorderRadiusShowcase";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsBorderRadiusPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Border Radius | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Border Radius</Heading1>
          <p>
            Dashvar provides a few utility variables for all of your{" "}
            <code>border-radius</code> needs.
          </p>
          <BorderRadiusShowcase />
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
            initialOpenedFile="component.html"
          />
        </Section>
      </Layout>
    </>
  );
};

export default DocsBorderRadiusPage;
