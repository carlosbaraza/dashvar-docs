import Head from "next/head";
import React from "react";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";
import { CodeSandboxEmbed } from "../../../components/landing/CodeSandboxEmbed";
import { YoutubeEmbed } from "../../../components/YoutubeEmbed";

type Props = {};

const DocsIndex = (props: Props) => {
  return (
    <>
      <Head>
        <title>Card Component Example | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Card Component Example</Heading1>
          <p>
            To illustrate the library usage, you can watch the following
            tutorial. It showcases how to create a simple card component in few
            minutes.
          </p>
          <YoutubeEmbed id="w3NCZtUl8lU" />
          <p>Interactive code example used in the video.</p>

          <CodeSandboxEmbed
            embedId="dashvar-example2-gbzj1"
            title="dashvar-example2"
          />
          <p></p>
        </Section>
        <Section>
          <Heading2>Complete Card Example</Heading2>
          <p>
            If you want a more complete card component example, you can have a
            look to the following example. Note that the example is not making
            use of the helper media classes applied to the body.
          </p>
          <CodeSandboxEmbed
            embedId="dashvar-example1-3wee3"
            title="dashvar-example1"
          />
        </Section>
      </Layout>
    </>
  );
};

export default DocsIndex;
