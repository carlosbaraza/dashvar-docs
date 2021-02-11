import React, { FC, useEffect, useRef } from "react";

type Props = {
  language: "html" | "bash" | "css" | "json" | "typescript";
  children: string;
  noTopBorderRadius?: boolean;
};

export const Code: FC<Props> = (props) => {
  const codeEl = useRef<any>(null);

  useEffect(() => {
    if (codeEl.current) {
      (window as any)?.hljs?.highlightBlock(codeEl.current);
    }
  }, [codeEl.current]);

  return (
    <>
      <pre>
        <code ref={codeEl} className={props.language}>
          {props.children}
        </code>
      </pre>

      <style jsx>{`
        code {
          display: block;
          font-family: var(--font-family-mono);
          font-size: var(--font-size-1);
          line-height: 1.5;
          background: var(--gray-800);
          border-radius: ${props.noTopBorderRadius
            ? `0 0 var(--border-radius-3) var(--border-radius-3) !important`
            : "var(--border-radius-3)"};
          color: var(--white);
          padding: var(--size-05);
        }
      `}</style>
    </>
  );
};
