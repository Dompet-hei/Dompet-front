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

export const applyOpacity = (color, opacity) => {
  return `${color}${opacity.toString(16)}`;
};

const createApplyOpacityFunction = (color) => {
  return (o) => applyOpacity(color, o);
};
