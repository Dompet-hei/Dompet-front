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

export const theme = {
  light: "#B8EBD0",
  dark: "#292F36",
  alert: "#FF6B6B",
  base: "#B0C7BD",
};

export const opacityTheme = {
  light: createApplyOpacityFunction(theme.light),
  dark: createApplyOpacityFunction(theme.dark),
  alert: createApplyOpacityFunction(theme.alert),
  base: createApplyOpacityFunction(theme.base),
};
