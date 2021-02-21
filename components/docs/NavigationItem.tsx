import React, { FC, ReactNode } from "react";
import { DocsLink, DocUrl } from "./DocsLink";

type Props = {
  href: DocUrl;
  children: ReactNode;
  disabled?: boolean;
};

export const NavigationItem: FC<Props> = (props) => {
  return (
    <>
      {props.disabled ? (
        <div className="NavigationItem disabled">{props.children}</div>
      ) : (
        <DocsLink href={props.href}>
          <a className="NavigationItem">{props.children}</a>
        </DocsLink>
      )}

      <style jsx>{`
        .NavigationItem {
          color: var(--gray-500);
          padding: var(--size-02);
          margin-left: calc(-1 * var(--size-02));
        }

        .NavigationItem:hover {
          color: var(--black);
        }

        .NavigationItem.disabled {
          color: var(--gray-300);
        }
      `}</style>
    </>
  );
};
