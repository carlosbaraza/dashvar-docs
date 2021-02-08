import React, { FC, useEffect, useRef, useState } from "react";

type Props = { embedId: string; title: string; initialOpenedFile?: string };

const defaultProps = {
  initialOpenedFile: "index.html",
};

export const CodeSandboxEmbed: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [codeSandboxInited, setCodeSandboxInited] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && !codeSandboxInited) {
      el.innerHTML = `
        <iframe src="https://codesandbox.io/embed/${props.embedId}?fontsize=14&hidenavigation=1&theme=dark&module=${props.initialOpenedFile},"
        style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
        title="${props.title}"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        `;
      setCodeSandboxInited(true);
    }
  }, [ref]);

  return (
    <>
      <div className="CodeSandboxEmbed">
        <div ref={ref} />
      </div>

      <style jsx>{`
        .CodeSandboxEmbed {
        }
      `}</style>
    </>
  );
};

CodeSandboxEmbed.defaultProps = defaultProps;
