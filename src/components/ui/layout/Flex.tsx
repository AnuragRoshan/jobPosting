import styled from "styled-components";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexAlign = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type FlexGap = number;

interface FlexProps {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: FlexGap;
  className?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap, theme }) => (gap ? theme.spacing[gap] : 0)};
`;
