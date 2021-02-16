import React, { FC } from "react";
import { YoutubeEmbed } from "../YoutubeEmbed";

type Props = {};

export const TutorialSection: FC<Props> = (props) => {
  const width =
    typeof window !== "undefined"
      ? window.innerWidth < 1400
        ? window.innerWidth
        : 1400
      : 800;
  const youtubeHeight = width / 1.77;

  return (
    <>
      <section className="TutorialSection">
        <h2>Getting Started Tutorial</h2>
        <YoutubeEmbed id="w3NCZtUl8lU" height={youtubeHeight} />
      </section>

      <style jsx>{`
        .TutorialSection {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        h2 {
          font-size: var(--font-size-8);
          line-height: var(--line-height-8);
          font-weight: var(--font-weight-bold);
        }

        .TutorialSection > :global(* + *) {
          margin-top: var(--size-07);
        }

        ul {
          column-count: 1;
          column-gap: var(--size-06);
        }

        @media (min-width: 768px) {
          ul {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          ul {
            column-count: 3;
          }
        }

        li {
          break-inside: avoid;
          margin-bottom: var(--size-06);
          padding: var(--size-06);
          background: var(--yellow-200);
          color: var(--yellow-900);
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
          border-radius: var(--border-radius-5);
        }
      `}</style>
    </>
  );
};
