import React, { FC, useEffect, useRef, useState } from "react";

type Props = { penId: string; height?: number };

const defaultProps = {
  height: 265,
};

export const CodePenEmbed: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [codeSandboxInited, setCodeSandboxInited] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && !codeSandboxInited) {
      el.innerHTML = `
      <iframe height="${props.height}" style="width: 100%;" scrolling="no" title="Just a button" src="https://codepen.io/carlosbaraza/embed/${props.penId}?height=${props.height}&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href='https://codepen.io/carlosbaraza/pen/${props.penId}'>Just a button</a> by Carlos
      (<a href='https://codepen.io/carlosbaraza'>@carlosbaraza</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
        `;
      setCodeSandboxInited(true);
    }
  }, [ref]);

  return (
    <>
      <div className="CodePenEmbed">
        <div ref={ref} />
      </div>

      <style jsx>{`
        .CodePenEmbed {
        }
      `}</style>
    </>
  );
};

CodePenEmbed.defaultProps = defaultProps;
