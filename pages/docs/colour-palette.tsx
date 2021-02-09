import Head from "next/head";
import React from "react";
import { ColourPaletteShowcase } from "../../components/docs/colour-palette/ColourPaletteShowcase";
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
        <title>Colour Palette | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Colour Palette</Heading1>
          <p>
            Dashvar provides CSS Variables for different carefully chosen
            colours to be distinct from each other and flexible to support
            different use cases.
          </p>
          <ColourPaletteShowcase />
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
