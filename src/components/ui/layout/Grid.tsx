import styled from "styled-components";

interface GridProps {
  columns?: number | string;
  rows?: number | string;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  className?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns || "1fr"};
  grid-template-rows: ${({ rows }) =>
    typeof rows === "number" ? `repeat(${rows}, 1fr)` : rows || "auto"};
  gap: ${({ gap, theme }) =>
    gap !== undefined ? theme.spacing[gap] : undefined};
  column-gap: ${({ columnGap, theme }) =>
    columnGap !== undefined ? theme.spacing[columnGap] : undefined};
  row-gap: ${({ rowGap, theme }) =>
    rowGap !== undefined ? theme.spacing[rowGap] : undefined};
`;
