import Head from "next/head";
import React from "react";
import { Code } from "../../../components/docs/Code";
import { Heading1 } from "../../../components/docs/Heading1";
import { Heading2 } from "../../../components/docs/Heading2";
import { Layout } from "../../../components/docs/Layout";
import { Section } from "../../../components/docs/Section";
import { CodeSandboxEmbed } from "../../../components/landing/CodeSandboxEmbed";

type Props = {};

const DocsIndex = (props: Props) => {
  return (
    <>
      <Head>
        <title>Media Body Classes | Dashvar Docs</title>
      </Head>
      <Layout>
        <Section>
          <Heading1>Media Body Classes</Heading1>
          <p>
            To make it easy to style responsiveness your interface, we provide a
            tiny helper script that would detect different predefined screen
            widths and apply a class to the <code>body</code> element.
          </p>

          <p>The logic for the media classes is as follows:</p>
          <Code language="typescript">{`if (screenWidth > 480) bodyClasses.push("xs");
if (screenWidth > 640) bodyClasses.push("sm");
if (screenWidth > 768) bodyClasses.push("md");
if (screenWidth > 1024) bodyClasses.push("lg");
if (screenWidth > 1280) bodyClasses.push("xl");
if (screenWidth > 1536) bodyClasses.push("2xl");`}</Code>
          <p>
            <a href="https://github.com/dashvars/dashvar/blob/master/src/helpers/dashvar-helpers.js">
              See full source code, available on the official GitHub repository
            </a>
            .
          </p>
          <p>
            For example:
            <ul>
              <li>
                If the screen was 400px wide, the body element would have no
                classes
              </li>
              <li>
                If the screen was 800px wide, the body would have three extra
                classes: <code>xs</code>, <code>sm</code> and <code>md</code>
              </li>
              <li>
                If the screen was 2000px wide, the body would have six extra
                classes: <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
                <code>lg</code>, <code>xl</code> and <code>2xl</code>
              </li>
            </ul>
          </p>
          <p>The way we envisioned using these helper classes is:</p>
          <Code language="css">{`.selector {
  display: flex;
  flex-direction: column;
}

.md .selector {
  flex-direction: row;
}`}</Code>
          <p>
            Note that these classes would only work if the browser has
            JavaScript enabled, as they are added using{" "}
            <a href="https://github.com/dashvars/dashvar/blob/master/src/helpers/dashvar-helpers.js">
              a small helper script (source code)
            </a>
            .
          </p>
        </Section>
        <Section>
          <Heading2>Interactive example</Heading2>
          <p>
            The following example should illustrate the usage of the body
            classes:
          </p>
          <CodeSandboxEmbed
            embedId="dashvar-example1-media-dp6w4"
            title="dashvar-example1-media"
          />
        </Section>
        <Section>
          <Heading2>Why not use @media queries?</Heading2>
          <p>
            Unfortunately, CSS Variables can not be used to define{" "}
            <code>@media</code>
            queries. We believe that remembering the same media query
            breakpoints is difficult, and often leads to inconsistent break
            points across the page.
          </p>
          <p>
            This solution is not ideal, and we would like to make use of actual{" "}
            <code>@media</code> queries. If you use SASS, PostCSS or a CSS-in-JS
            solution, feel free to define the break points in the way you
            prefer. The key point is to hard-code and name the breakpoints, and
            always use the same across the entire site.
          </p>
        </Section>
      </Layout>
    </>
  );
};

export default DocsIndex;
