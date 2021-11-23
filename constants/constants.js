import palettes from './palettes.json'

export const BASE = {
  light: 'white',
  dark: palettes.neutral['900'].value,
};

export const SHADES = {
  neutral: {
    light: palettes.neutral['200'].value,
    default: palettes.neutral['500'].value,
    dark: palettes.neutral['800'].value,
  },
  red: {
    light: palettes.red['200'].value,
    default: palettes.red['500'].value,
    dark: palettes.red['800'].value,
  },
  yellow: {
    light: palettes.yellow['200'].value,
    default: palettes.yellow['500'].value,
    dark: palettes.yellow['800'].value,
  },
  green: {
    light: palettes.green['200'].value,
    default: palettes.green['500'].value,
    dark: palettes.green['800'].value,
  },
  cyan: {
    light: palettes.cyan['200'].value,
    default: palettes.cyan['500'].value,
    dark: palettes.cyan['800'].value,
  },
  blue: {
    light: palettes.blue['200'].value,
    default: palettes.blue['500'].value,
    dark: palettes.blue['800'].value,
  },
  magenta: {
    light: palettes.magenta['200'].value,
    default: palettes.magenta['500'].value,
    dark: palettes.magenta['800'].value,
  },
};

export const RATIO = {
  A: 3,
  AA: 4.5,
  AAA: 7,
};
