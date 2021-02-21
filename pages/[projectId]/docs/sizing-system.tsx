import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";
import { SizingSystem } from "../../../components/docs/sizing/SizingSystem";

type Props = {};

const DocsSizingSystem = (props: Props) => {
  return (
    <>
      <div>
        <Head>
          <title>Sizing System | Dashvar Docs</title>
        </Head>
        <Layout>
          <Section>
            <Heading2>Why do I need a Sizing System?</Heading2>
            <p>
              A <strong>sizing system</strong> is a great tool to have when
              building user interfaces because it{" "}
              <strong>limits the choices</strong> for a padding, a width, a
              margin, etc. It will help you avoid playing the pixel game. Every
              size in the scale is clearly differentiated from its closer sizes,
              and that makes it extremely easy to select the right size.
            </p>
            <p>
              If you stick to the scaling system, all your UIs will have a{" "}
              <strong>good vertical and horizontal spacing rhythm</strong>.
              Every small detail makes a huge difference in the look and feel of
              your interface.
            </p>
          </Section>
          <Section>
            <Heading1>Sizing and Scaling System</Heading1>
            <SizingSystem />
          </Section>
          <Section>
            <Heading1>Customizing</Heading1>
            <p>
              Dashvar's sizing and spacing system should have enough choices for
              most interfaces. However, you can always extend it with your own
              sizes.
            </p>
            <p>
              You can add new sizes adding more variables to the{" "}
              <code>:root</code> pseudo-class:
            </p>
            <Code language="css">{`:root {
  --size-xs: 5px; 
  --size-s: 10px; 
  --size-m: 20px; 
  --size-l: 40px; 
  --size-xl: 80px; 
}`}</Code>
          </Section>
        </Layout>
      </div>
    </>
  );
};

export default DocsSizingSystem;
