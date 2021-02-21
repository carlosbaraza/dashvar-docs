import { Variable } from "dashvar/lib/types";
import { colors as blueColorsDefault } from "dashvar/lib/variables/colors/blue";
import { colors as grayColorsDefault } from "dashvar/lib/variables/colors/gray";
import { colors as greenColorsDefault } from "dashvar/lib/variables/colors/green";
import { colors as indigoColorsDefault } from "dashvar/lib/variables/colors/indigo";
import { colors as pinkColorsDefault } from "dashvar/lib/variables/colors/pink";
import { colors as purpleColorsDefault } from "dashvar/lib/variables/colors/purple";
import { colors as redColorsDefault } from "dashvar/lib/variables/colors/red";
import { colors as yellowColorsDefault } from "dashvar/lib/variables/colors/yellow";
import { useCategoryVariables } from "./useCategoryVariables";

const defaultVariables = {
  gray: grayColorsDefault,
  red: redColorsDefault,
  yellow: yellowColorsDefault,
  green: greenColorsDefault,
  blue: blueColorsDefault,
  indigo: indigoColorsDefault,
  purple: purpleColorsDefault,
  pink: pinkColorsDefault,
};

type Color =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const useColorVariables = (color: Color) => {
  const colorVariables = useCategoryVariables("color");

  if (!colorVariables.length) return defaultVariables[color];

  let variables: Variable[] = [];

  variables = colorVariables.filter((v) => v.key.includes(color));

  variables = variables.sort((a, b) => {
    const an = parseInt(a.key.match(/\d+$/)?.[0] || "");
    const bn = parseInt(b.key.match(/\d+$/)?.[0] || "");

    if (an < bn) return -1;
    else if (an > bn) return 1;
    else return 0;
  });

  if (color === "gray") {
    variables = [
      ...colorVariables.filter((v) => v.key.includes("--white")),
      ...variables,
      ...colorVariables.filter((v) => v.key.includes("--black")),
    ];
  }

  return variables;
};
