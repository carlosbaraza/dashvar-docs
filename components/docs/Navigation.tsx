import React, { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { SectionTitle } from "./SectionTitle";

type Props = {};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <div className="Navigation">
        <div className="section">
          <SectionTitle>Getting Started</SectionTitle>
          <NavigationItem href="/docs">Getting Started</NavigationItem>
          <NavigationItem disabled href="/docs/base-styles">
            Base Styles (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/customizing">
            Customizing (WIP)
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Spacing</SectionTitle>
          <NavigationItem href="/docs/sizing-system">
            Sizing System
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Colours</SectionTitle>
          <NavigationItem disabled href="/docs/colour-palette">
            Colour Palette (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/background-gradients">
            Background Gradients (WIP)
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Block</SectionTitle>
          <NavigationItem href="/docs/box-shadow">Box Shadow</NavigationItem>
          <NavigationItem href="/docs/border-radius">
            Border Radius
          </NavigationItem>
          <NavigationItem disabled href="/docs/border-width">
            Border Width (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/outline">
            Outline (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/opacity">
            Opacity (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/z-index">
            Z-Index (WIP)
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Typography</SectionTitle>
          <NavigationItem disabled href="/docs/font-family">
            Font Family (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/font-size">
            Font Size (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/line-height">
            Line Height (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/font-weight">
            Font Weight (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/letter-spacing">
            Letter Spacing (WIP)
          </NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Transitions and Animations</SectionTitle>
          <NavigationItem disabled href="/docs/transitions">
            Transitions (WIP)
          </NavigationItem>
          <NavigationItem disabled href="/docs/animations">
            Animations (WIP)
          </NavigationItem>
        </div>
      </div>

      <style jsx>{`
        .Navigation {
          display: flex;
          flex-direction: column;
          padding: var(--size-07) 0;
        }

        .section {
          display: flex;
          flex-direction: column;
        }

        .Navigation > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};
