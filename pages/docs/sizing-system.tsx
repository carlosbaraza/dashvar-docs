import Head from "next/head";
import React from "react";
import { Heading1 } from "../../components/docs/Heading1";
import { Heading2 } from "../../components/docs/Heading2";
import { Layout } from "../../components/docs/Layout";
import { Section } from "../../components/docs/Section";
import { SizingSystem } from "../../components/docs/sizing/SizingSystem";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <div>
        <Head>
          <title>Sizing System | Dashvar Docs</title>
        </Head>
        <Layout>
          <Section>
            <Heading1>Sizing and Scaling System</Heading1>
            <SizingSystem />
          </Section>
          <Section>
            <Heading2>Why do I need a Sizing System?</Heading2>
            <p>
              A sizing system is a great tool to have when building user
              interfaces because it limits the possibilities when choosing the
              size for a padding, a width, a margin, etc. It will help you avoid
              playing the pixel game. Every size in the scale is clearly
              differentiated from its closer sizes, and that makes it extremely
              easy to select the right size.
            </p>
            <p>
              If you stick to the scaling system, all your UIs will have a good
              vertical and horizontal spacing rhythm. Every small detail makes a
              huge difference in the good and feel of an interface.
            </p>
          </Section>
        </Layout>
      </div>
    </>
  );
};

export default Index;
