const lightTheme = true;

export const applyOpacity = (color, opacity) => {
  opacity *= 255;
  opacity = Math.floor(opacity);
  opacity = (+opacity).toString(16);
  if (opacity.length == 1) {
    opacity = "0" + opacity;
  } else if (opacity.length == 0) {
    opacity = "00";
  }
  return `${color}${opacity}`;
};

const createApplyOpacityFunction = (color) => {
  return (o) => applyOpacity(color, o);
};

// #3B60E4

const THEME = {
  light: "#DCD6F7",
  dark: "#292F36",
  alert: "#FF6B6B",
  base: "#59B1C5",
};

export const theme = lightTheme
  ? {
      light: THEME.light,
      dark: THEME.dark,
      alert: THEME.alert,
      base: THEME.base,
    }
  : {
      light: THEME.dark,
      dark: THEME.light,
      alert: "#963F3F",
      base: "#363D3A",
    };

export const opacityTheme = {
  light: createApplyOpacityFunction(theme.light),
  dark: createApplyOpacityFunction(theme.dark),
  alert: createApplyOpacityFunction(theme.alert),
  base: createApplyOpacityFunction(theme.base),
};
