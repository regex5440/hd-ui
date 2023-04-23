export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number},${number})`;
export type HEX = `#${string}`;
export type COLOR_NAME = string;

export type CSSColor = RGB | RGBA | HEX | COLOR_NAME;
