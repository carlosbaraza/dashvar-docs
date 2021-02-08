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
        </div>

        <div className="section">
          <SectionTitle>General</SectionTitle>
          <NavigationItem href="/docs/sizing-system">
            Sizing System
          </NavigationItem>
          <NavigationItem href="/docs/box-shadow">Box Shadow</NavigationItem>
          <NavigationItem href="/docs/border-radius">
            Border Radius
          </NavigationItem>
          <NavigationItem href="/docs/z-index">z-index (WIP)</NavigationItem>
        </div>

        <div className="section">
          <SectionTitle>Typography</SectionTitle>
          <NavigationItem href="/docs/font-weight">
            Font Weight (WIP)
          </NavigationItem>
        </div>
      </div>

      <style jsx>{`
        .Navigation {
          display: flex;
          flex-direction: column;
          padding: var(--size-07) 0;
          height: 200vh;
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
