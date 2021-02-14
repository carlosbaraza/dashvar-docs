import React, { FC, useEffect, useRef, useState } from "react";

type Props = { id: string };

const defaultProps = {};

export const YoutubeEmbed: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inited, setInited] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && !inited) {
      el.innerHTML = `
      <iframe height="500" style="width: 100%;" src="https://www.youtube.com/embed/${props.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      setInited(true);
    }
  }, [ref]);

  return (
    <>
      <div className="YoutubeEmbed">
        <div ref={ref} />
      </div>

      <style jsx>{`
        .YoutubeEmbed {
        }
      `}</style>
    </>
  );
};

YoutubeEmbed.defaultProps = defaultProps;
