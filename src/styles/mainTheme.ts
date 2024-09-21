export type ColorsType =
  | "primary"
  | "secondary"
  | "thirdary"
  | "fourthary"
  | "blue-main"
  | "blue-light"
  | "green-main"
  | "green-dark"
  | "yellow-main"
  | "yellow-dark"
  | "white-bold"
  | "white-light"
  | "grey-hide"
  | "purple"
  | "sky"
  | "brown"
  | "blue"
  | "lemon-bold"
  | "lemon-light"
  | "green-bold"
  | "green-light"
  | "black"
  | "white"
  | "grey-900"
  | "grey-800"
  | "grey-700"
  | "grey-600"
  | "grey-500"
  | "grey-400"
  | "grey-300"
  | "grey-200"
  | "grey-100"
  | "red-bold"
  | "red-light"

export type VariantsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "title-r"
  | "title-m"
  | "title-b"
  | "subtitle-r"
  | "subtitle-m"
  | "subtitle-b"
  | "body-b"
  | "body-m"
  | "body-r"
  | "caption-b"
  | "caption-m"
  | "caption-r"

export type SpaceType =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64

const variants = {
  h1: {
    size: "64px",
    weight: 400,
  },
  h2: {
    size: "48px",
    weight: 400,
  },
  h3: {
    size: "40px",
    weight: 400,
  },
  h4: {
    size: "32px",
    weight: 400,
  },
  "title-r": {
    size: "24px",
    weight: 400,
  },
  "title-m": {
    size: "24px",
    weight: 500,
  },
  "title-b": {
    size: "24px",
    weight: 700,
  },
  "subtitle-r": {
    size: "20px",
    weight: 400,
  },
  "subtitle-m": {
    size: "20px",
    weight: 500,
  },
  "subtitle-b": {
    size: "20px",
    weight: 700,
  },
  "body-b": {
    size: "16px",
    weight: 700,
  },
  "body-m": {
    size: "16px",
    weight: 500,
  },
  "body-r": {
    size: "16px",
    weight: 400,
  },
  "caption-b": {
    size: "12px",
    weight: 700,
  },
  "caption-m": {
    size: "12px",
    weight: 500,
  },
  "caption-r": {
    size: "12px",
    weight: 400,
  },
}

const space = {
  0: "0px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px",
  40: "40px",
  44: "44px",
  48: "48px",
  52: "52px",
  56: "56px",
  60: "60px",
  64: "64px",
}

const colors = {
  primary: "#252525", // 배경
  secondary: "#1A1A1A", // 진한배경
  thirdary: "#2F2F2F", // 섹션 테두리
  fourthary: "#2A2A2A",
  "blue-main": "#4477D0",
  "blue-light": "#71A8F9",
  "green-main": "#90C591",
  "green-dark": "#4E664F",
  "yellow-main": "#D7BE8F",
  "yellow-dark": "#6E634D",
  //text editor colors
  "white-bold": "#ECECEC", // 텝바 화이트
  "white-light": "#CBCBCB", // 일반 화이트
  "grey-hide": "#808080", // 숨김처리 회색
  purple: "#B384BB",
  sky: "#A8D0F0",
  brown: "#BE8F78",
  blue: "#6F9AD2",
  "lemon-bold": "#EFD133",
  "lemon-light": "#DBDBAB",
  "green-bold": "#80C7B0",
  "green-light": "#BBCDA8",
  black: "#000000",
  white: "#FFFFFF",
  "grey-900": "#111111",
  "grey-800": "#333333",
  "grey-700": "#555555",
  "grey-600": "#777777",
  "grey-500": "#999999",
  "grey-400": "#BBBBBB",
  "grey-300": "#DDDDDD",
  "grey-200": "#EEEEEE",
  "grey-100": "#F5F5F5",
  "red-bold": "#E57373",
  "red-light": "#FFCDD2",
}

const mainTheme = {
  variants,
  space,
  colors,
}

export default mainTheme
