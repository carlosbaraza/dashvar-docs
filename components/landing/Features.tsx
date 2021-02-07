import React, { FC, useEffect, useRef, useState } from "react";

type Props = {};

export const Features: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [codeSandboxInited, setCodeSandboxInited] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && !codeSandboxInited) {
      el.innerHTML = `
        <iframe src="https://codesandbox.io/embed/dashvar-example1-3wee3?fontsize=14&hidenavigation=1&theme=dark"
        style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
        title="dashvar-example1"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        `;
      setCodeSandboxInited(true);
    }
  }, [ref]);
  return (
    <>
      <div className="Features">
        <h2>Features</h2>

        <div ref={ref}></div>
      </div>

      <style jsx>{`
        .Features {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
