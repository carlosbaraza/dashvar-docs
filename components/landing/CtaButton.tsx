import Link from "next/link";
import React, { FC, ReactNode } from "react";

type Props = {
  href: string;
  as?: string;
  children: ReactNode;
  type?: "secondary" | "default";
};

export const CtaButton: FC<Props> = (props) => {
  return (
    <>
      <Link href={props.href} as={props.as}>
        <a className="CtaButton">{props.children}</a>
      </Link>

      <style jsx>{`
        .CtaButton {
          display: flex;
          align-items: center;
          background: ${props.type === "secondary"
            ? "var(--amber-300)"
            : "var(--gray-200)"};
          padding: var(--size-06) var(--size-07);
          border-radius: var(--border-radius-5);
          font-weight: var(--font-weight-bold);
          box-shadow: var(--box-shadow-4);
          font-size: var(--font-size-5);
          line-height: var(--line-height-5);
        }

        .CtaButton > :global(* + *) {
          margin-left: 0.5em;
        }

        .CtaButton:hover {
          background: ${props.type === "secondary"
            ? "var(--amber-400)"
            : "var(--gray-300)"};
        }
      `}</style>
    </>
  );
};
