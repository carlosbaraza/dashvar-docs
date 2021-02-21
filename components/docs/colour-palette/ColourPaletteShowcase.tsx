import { colors as blueColorsDefault } from "dashvar/lib/variables/colors/blue";
import { colors as grayColorsDefault } from "dashvar/lib/variables/colors/gray";
import { colors as greenColorsDefault } from "dashvar/lib/variables/colors/green";
import { colors as indigoColorsDefault } from "dashvar/lib/variables/colors/indigo";
import { colors as pinkColorsDefault } from "dashvar/lib/variables/colors/pink";
import { colors as purpleColorsDefault } from "dashvar/lib/variables/colors/purple";
import { colors as redColorsDefault } from "dashvar/lib/variables/colors/red";
import { colors as yellowColorsDefault } from "dashvar/lib/variables/colors/yellow";
import React, { FC } from "react";
import { useCategoryVariables } from "../../../lib/hooks/useCategoryVariables";
import { ColourPalette } from "./ColourPalette";

type Props = {};

export const ColourPaletteShowcase: FC<Props> = (props) => {
  const variables = useCategoryVariables("color");

  const grayColors = variables.length
    ? variables.filter((v) => v.key.includes("--gray"))
    : grayColorsDefault;
  const redColors = variables.length
    ? variables.filter((v) => v.key.includes("--red"))
    : redColorsDefault;
  const yellowColors = variables.length
    ? variables.filter((v) => v.key.includes("--yellow"))
    : yellowColorsDefault;
  const greenColors = variables.length
    ? variables.filter((v) => v.key.includes("--green"))
    : greenColorsDefault;
  const blueColors = variables.length
    ? variables.filter((v) => v.key.includes("--blue"))
    : blueColorsDefault;
  const indigoColors = variables.length
    ? variables.filter((v) => v.key.includes("--indigo"))
    : indigoColorsDefault;
  const purpleColors = variables.length
    ? variables.filter((v) => v.key.includes("--purple"))
    : purpleColorsDefault;
  const pinkColors = variables.length
    ? variables.filter((v) => v.key.includes("--pink"))
    : pinkColorsDefault;

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
