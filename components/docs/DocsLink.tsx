import Link from "next/link";
import { ReactNode } from "react";
import { useProjectId } from "../../lib/hooks/useProjectId";

export type DocUrl =
  | "/docs"
  | "/docs/background-gradients"
  | "/docs/base-styles"
  | "/docs/border-radius"
  | "/docs/border-width"
  | "/docs/box-shadow"
  | "/docs/card-component-example"
  | "/docs/colour-palette"
  | "/docs/font-family"
  | "/docs/font-size"
  | "/docs/font-weight"
  | "/docs/letter-spacing"
  | "/docs/line-height"
  | "/docs/media-body-classes"
  | "/docs/opacity"
  | "/docs/outline-offset"
  | "/docs/outline"
  | "/docs/sizing-system"
  | "/docs/transition-delay"
  | "/docs/transition-duration"
  | "/docs/transition-timing-function"
  | "/docs/transition"
  | "/docs/vs-code-extension"
  | "/docs/z-index";

type Props = {
  href: DocUrl;
  children: ReactNode;
};

export const DocsLink = (props: Props) => {
  const projectId = useProjectId();

  return (
    <Link href={`/[projectId]${props.href}`} as={`/${projectId}${props.href}`}>
      {props.children}
    </Link>
  );
};
