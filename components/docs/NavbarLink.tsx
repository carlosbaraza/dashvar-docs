import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  children: string;
  as?: string;
};

export const NavbarLink: FC<Props> = (props) => {
  return (
    <>
      <Link href={props.href} as={props.as}>
        <a className="NavbarLink">{props.children}</a>
      </Link>

      <style jsx>{`
        .NavbarLink {
          font-size: var(--font-size-2);
          line-height: var(--line-height-2);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-500);
        }

        .NavbarLink:hover {
          color: var(--gray-900);
        }
      `}</style>
    </>
  );
};
