import Head from "next/head";
import React from "react";
import { BoxShadowShowcase } from "../../components/docs/box-shadow/BoxShadowShowcase";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { CodeSandboxEmbed } from "../../components/landing/CodeSandboxEmbed";

type Props = {};

export const DocsBoxShadowPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Box Shadow | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Box Shadow</Heading1>
          <p>
            Dashvar provides a few utility variables for all of your{" "}
            <code>box-shadow</code> needs.
          </p>
          <BoxShadowShowcase />
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
            initialOpenedFile="component.html"
          />
        </Section>
      </Layout>
    </>
  );
};

export default DocsBoxShadowPage;
