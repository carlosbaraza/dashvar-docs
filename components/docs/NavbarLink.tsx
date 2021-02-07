import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  children: string;
};

export const NavbarLink: FC<Props> = (props) => {
  return (
    <>
      <Link href={props.href}>
        <a className="NavbarLink">{props.children}</a>
      </Link>

      <style jsx>{`
        .NavbarLink {
          color: var(--gray-500);
        }

        .NavbarLink:hover {
          color: var(--gray-900);
        }
      `}</style>
    </>
  );
};
