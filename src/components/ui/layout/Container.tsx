import styled from "styled-components";

interface ContainerProps {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
  className?: string;
}

const getMaxWidth = (maxWidth: string) => {
  switch (maxWidth) {
    case "xs":
      return "600px";
    case "sm":
      return "960px";
    case "md":
      return "1280px";
    case "lg":
      return "1440px";
    case "xl":
      return "1920px";
    case "full":
      return "100%";
    default:
      return "1280px";
  }
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ maxWidth }) =>
    maxWidth ? getMaxWidth(maxWidth) : getMaxWidth("md")};
  padding-left: ${({ padding, theme }) =>
    padding !== false ? theme.spacing[4] : 0};
  padding-right: ${({ padding, theme }) =>
    padding !== false ? theme.spacing[4] : 0};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ padding, theme }) =>
      padding !== false ? theme.spacing[6] : 0};
    padding-right: ${({ padding, theme }) =>
      padding !== false ? theme.spacing[6] : 0};
  }
`;
