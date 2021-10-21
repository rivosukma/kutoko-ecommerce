import { css } from "@emotion/react";

export const MAX_WIDTH = 768;

// ======== DISPLAY RELATED CSS UTILS ========
export const uBlock = css`
  display: block;
`;

export const uNone = css`
  display: none;
`;

export const uGrid = css`
  display: grid;
`;

export const uInlineFlex = css`
  display: inline-flex;
`;

export const uInline = css`
  display: inline;
`;

export const uInlineBlock = css`
  display: inline-block;
`;

export const uOverflowHidden = css`
  overflow: hidden;
`;

export const uOverflowAuto = css`
  overflow: auto;
`;

export const uOverflowXAuto = css`
  overflow-x: auto;
`;

export const uOverflowXScroll = css`
  overflow-x: scroll;
`;

export const uOverflowXVisible = css`
  overflow-x: visible;
`;

export const uOverflowYAuto = css`
  overflow-y: auto;
`;

export const uOverflowVisible = css`
  overflow: visible;
`;

export const NoScroll = css`
  overflow-y: hidden;
`;

export const uWidthHeight = (w, h, force = false) => css`
  width: ${Number(w) ? `${w}px` : w};
  height: ${Number(h) ? `${h}px` : h};
  ${force ? `min-width: ${w};` : ""}
  ${force ? `max-width: ${w};` : ""}
  ${force ? `min-height: ${h};` : ""}
  ${force ? `max-height: ${h};` : ""}
`;

export const uHeight = (val) => css`
  height: ${val}px;
  min-height: ${val}px;
`;

export const uHeight100 = css`
  height: 100%;
`;

export const uWidth100 = css`
  width: 100%;
`;

export const uCursorPointer = css`
  cursor: pointer;
`;

export const uCursorDefault = css`
  cursor: default;
`;

// ======== FLEXBOX RELATED CSS UTILS ========
export const uFlex = css`
  display: flex;
`;

export const uFlexCol = css`
  flex-direction: column;
`;

export const uFlexWrap = css`
  flex-wrap: wrap;
`;

export const uFlexNoWrap = css`
  flex-wrap: nowrap;
`;

export const uItemsStart = css`
  align-items: flex-start;
`;

export const uItemsEnd = css`
  align-items: flex-end;
`;

export const uItemsCenter = css`
  align-items: center;
`;

export const uJustifyStart = css`
  justify-content: flex-start;
`;

export const uJustifyEnd = css`
  justify-content: flex-end;
`;

export const uJustifyCenter = css`
  justify-content: center;
`;

export const uJustifyBetween = css`
  justify-content: space-between;
`;

export const uJustifyAround = css`
  justify-content: space-around;
`;

export const uSelfStart = css`
  align-self: start;
`;

export const uSelfEnd = css`
  align-self: end;
`;

export const uSelfCenter = css`
  align-self: center;
`;

export const uSelfStretch = css`
  align-self: stretch;
`;

export const uFlex1 = css`
  flex: 1;
`;

export const uFlex50 = css`
  flex: 50%;
`;

export const uFlexBasis100 = css`
  flex-basis: 100%;
`;

// ======== POSITION RELATED CSS UTILS ========
export const uRelative = css`
  position: relative;
`;

export const uAbsolute = css`
  position: absolute;
`;

export const uFixed = css`
  position: fixed;
`;

export const uSticky = css`
  position: sticky;
`;

export const uTop0 = css`
  top: 0;
`;

export const uRight0 = css`
  right: 0;
`;

export const uBottom0 = css`
  bottom: 0;
`;

export const uLeft0 = css`
  left: 0;
`;

export const uPadding16 = css`
  padding: 16px;
`;

export const uPadding = (...val) => css`
  padding: ${val.map((x) => ` ${x}px`).join("")};
`;

export const uMargin = (...val) => css`
  margin: ${val.map((x) => (Number(x) ? ` ${x}px` : ` ${x}`)).join("")};
`;

export const uMarginTop = (val) => css`
  margin-top: ${Number(val) ? ` ${val}px` : ` ${val}`};
`;

export const uImgRotate = (val) => css`
  transform: rotate(${val}deg);
  transition: transform 0.2s ease-out;
`;

export const zIndex = (val) => css`
  z-index: ${val};
`;

// ======== BORDER RELATED CSS UTILS ========
export const uCircle = css`
  border-radius: 50%;
`;

// ======== TEXT RELATED CSS UTILS ========
export const uFont = (fontSize, lineHeight) => css`
  font-size: ${parseInt(fontSize, 10) / 14}rem;
  line-height: ${parseInt(lineHeight, 10) / 14 ||
  (parseInt(fontSize, 10) * 1.5) / 14}rem;
`;

export const uLighter = css`
  font-weight: 300;
`;

export const uNormal = css`
  font-weight: 400;
`;

export const uThicker = css`
  font-weight: 500;
`;

export const uSemiBold = css`
  font-weight: 600;
`;

export const uBold = css`
  font-weight: 700;
`;

export const uBolder = css`
  font-weight: 800;
`;

export const uBoldest = css`
  font-weight: 900;
`;

export const uEllipsis = css`
  text-overflow: ellipsis;
`;

export const uLineNormal = css`
  line-height: normal;
`;

export const uLineHeight = (val) => css`
  line-height: ${val};
`;

export const uColor = (val) => css`
  color: ${val};
`;

export const uTextCenter = css`
  text-align: center;
`;

export const uTextLeft = css`
  text-align: left;
`;

export const uTextRight = css`
  text-align: right;
`;

export const uVerticalMiddle = css`
  vertical-align: middle;
`;

export const uLineThrough = css`
  text-decoration: line-through;
`;

export const uBorder = (width, color) => css`
  border: ${width}px solid ${color};
`;

export const uBorderTop = (width, color) => css`
  border-top: ${width}px solid ${color};
`;

export const uBorderBottom = (width, color) => css`
  border-bottom: ${width}px solid ${color};
`;

export const uBorderRadius = (radius) => css`
  border-radius: ${Number(radius) ? `${radius}px` : radius};
`;

export const uBorderNone = css`
  border: none;
`;

export const uBackgroundColor = (color) => css`
  background-color: ${color};
`;

export const uSelectNone = css`
  user-select: none;
`;

export const uNowrap = css`
  white-space: nowrap;
`;

export const uCapitalize = css`
  text-transform: capitalize;
`;

export const uUppercase = css`
  text-transform: uppercase;
`;

// ======== MISC CSS UTILS ========
export const uHide = css`
  display: none;
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
`;

export const uSFPro = css`
  font-family: "SFProText", -apple-system, sans-serif;
`;

export const uSFPro300 = css`
  ${uSFPro};
  ${uLighter};
`;

export const uSFPro400 = css`
  ${uSFPro};
  ${uNormal};
`;

export const uSFPro500 = css`
  ${uSFPro};
  font-weight: 500;
`;

export const uSFPro600 = css`
  ${uSFPro};
  ${uSemiBold};
`;

export const uSFPro700 = css`
  ${uSFPro};
  ${uBold};
`;

export const uSFPro800 = css`
  ${uSFPro};
  ${uBolder};
`;

export const uSFPro900 = css`
  ${uSFPro};
  ${uBoldest};
`;

export const uZIndex = (v) => css`
  z-index: ${v};
`;

export const uLineClampHeight = (lineCount) => css`
  ${uOverflowHidden};
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
`;

export const uTextEllipsis = css`
  ${uEllipsis};
  ${uOverflowHidden};
`;

export const noTextBlock = css`
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const uImageContain = css`
  object-fit: contain;
`;

export const uImageCover = css`
  object-fit: cover;
`;

export const uDefaultTransition = css`
  transition: all 0.5s ease-out;
`;

export const uColorTransition = css`
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
`;

export const MaxPageWidth= css`
  min-width: 1089px;
  width: 100%;
  max-width: 1280px;
`

export const uPageWidth = css`
  max-width: 934px;
  width: 100%;
  margin: 0 auto;
`

export const uDefaultShadow = css`
  box-shadow: 0 2px 8px rgba(116, 116, 116, 0.35);
`

export const uHoverShadow = css`
  box-shadow: 0 2px 8px rgba(116, 116, 116, 0.75);
`

export const uWording = (fontSize, fontWeight, color) => css`
  ${noTextBlock}
  ${fontWeight}
  ${uColor(color)}
  ${uFont(fontSize)}
`