import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";

type Props = {};

const DocsIndex = (props: Props) => {
  return (
    <>
      <Head>
        <title>VS Code Extension | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>VS Code Extension</Heading1>
          <p>
            We believe that good development experience is key to the success of
            the industry as a whole. Therefore we are committed to supporting
            developers by providing good tools to get the job done better.
          </p>
          <p>
            If you use Visual Studio Code, we have created an extension that
            includes snippets for each of the CSS variables in the library.
          </p>
          <p>
            To install the extension,{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=carlosbaraza.dashvar-snippets">
              click on the "Install" button of the VS Code Marketplace site
            </a>
            .
          </p>
        </Section>
        <Section>
          <Heading2>Example</Heading2>
          <p>
            You can find an example for the Visual Studio Code extension usage
            in the{" "}
            <Link href="/docs/card-component-example">
              <a>Card Component Example</a>
            </Link>
            . The video showcases how to leverage the power of Visual Studio
            Code snippets to aid during the development using Dashvar CSS
            library.
          </p>
        </Section>
      </Layout>
    </>
  );
};

export default DocsIndex;
