import React, { FC } from "react";
import { useColorVariables } from "../../../lib/hooks/useColorVariables";
import { ColourPalette } from "./ColourPalette";

type Props = {};

export const ColourPaletteShowcase: FC<Props> = (props) => {
  const grayColors = useColorVariables("gray");
  const redColors = useColorVariables("red");
  const yellowColors = useColorVariables("yellow");
  const greenColors = useColorVariables("green");
  const blueColors = useColorVariables("blue");
  const indigoColors = useColorVariables("indigo");
  const purpleColors = useColorVariables("purple");
  const pinkColors = useColorVariables("pink");

  return (
    <>
      <div className="ColourPaletteShowcase">
        <ColourPalette variables={grayColors} name="Gray" />
        <ColourPalette variables={redColors} name="Red" />
        <ColourPalette variables={yellowColors} name="Yellow" />
        <ColourPalette variables={greenColors} name="Green" />
        <ColourPalette variables={blueColors} name="Blue" />
        <ColourPalette variables={indigoColors} name="Indigo" />
        <ColourPalette variables={purpleColors} name="Purple" />
        <ColourPalette variables={pinkColors} name="Pink" />
      </div>

      <style jsx>{`
        .ColourPaletteShowcase {
          display: flex;
          flex-direction: column;
        }

        .ColourPaletteShowcase > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};
