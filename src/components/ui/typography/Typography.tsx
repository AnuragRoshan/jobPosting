import styled from "styled-components";
import { Theme, TextStyle } from "../../../styles/theme";

interface TypographyProps {
  variant?: keyof Omit<Theme["typography"], "fontFamily">;
  color?: string;
  align?: "left" | "center" | "right";
  gutterBottom?: boolean;
  noWrap?: boolean;
  className?: string;
}

export const Typography = styled.span<TypographyProps>`
  margin: 0;
  ${({ variant, theme }) =>
    variant &&
    `
    font-size: ${(theme.typography[variant] as TextStyle).fontSize};
    font-weight: ${(theme.typography[variant] as TextStyle).fontWeight};
    line-height: ${(theme.typography[variant] as TextStyle).lineHeight};
    ${
      variant === "button" &&
      (theme.typography[variant] as TextStyle).textTransform
        ? `text-transform: ${
            (theme.typography[variant] as TextStyle).textTransform
          }`
        : ""
    }
  `}
  color: ${({ color, theme }) => color || theme.colors.text.primary};
  text-align: ${({ align }) => align || "left"};
  margin-bottom: ${({ gutterBottom, theme }) =>
    gutterBottom ? theme.spacing[4] : 0};
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "normal")};
  overflow: ${({ noWrap }) => (noWrap ? "hidden" : "visible")};
  text-overflow: ${({ noWrap }) => (noWrap ? "ellipsis" : "clip")};
`;

export const Heading1 = styled(Typography).attrs({ as: "h1", variant: "h1" })``;
export const Heading2 = styled(Typography).attrs({ as: "h2", variant: "h2" })``;
export const Heading3 = styled(Typography).attrs({ as: "h3", variant: "h3" })``;
export const Heading4 = styled(Typography).attrs({ as: "h4", variant: "h4" })``;
export const Heading5 = styled(Typography).attrs({ as: "h5", variant: "h5" })``;
export const Heading6 = styled(Typography).attrs({ as: "h6", variant: "h6" })``;
export const Body1 = styled(Typography).attrs({ as: "p", variant: "body1" })``;
export const Body2 = styled(Typography).attrs({ as: "p", variant: "body2" })``;
export const Subtitle1 = styled(Typography).attrs({
  as: "span",
  variant: "subtitle1",
})``;
export const Subtitle2 = styled(Typography).attrs({
  as: "span",
  variant: "subtitle2",
})``;
export const Caption = styled(Typography).attrs({
  as: "span",
  variant: "caption",
})``;
