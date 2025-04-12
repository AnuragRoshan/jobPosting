import styled from "styled-components";
import { Sizes } from "../../../types/common";

interface IconButtonProps {
  color?: "primary" | "secondary" | "tertiary" | "default";
  size?: Sizes;
  disabled?: boolean;
  className?: string;
}

const getIconButtonSize = (size: Sizes) => {
  switch (size) {
    case "small":
      return "32px";
    case "large":
      return "48px";
    default:
      return "40px";
  }
};

import { DefaultTheme } from "styled-components";

const getIconButtonColor = (color: string, theme: DefaultTheme) => {
  switch (color) {
    case "primary":
      return {
        bg: "transparent",
        hoverBg: theme.colors.primary.light + "20", // 20% opacity
        color: theme.colors.primary.main,
      };
    case "secondary":
      return {
        bg: "transparent",
        hoverBg: theme.colors.secondary.light + "20",
        color: theme.colors.secondary.main,
      };
    case "tertiary":
      return {
        bg: "transparent",
        hoverBg: theme.colors.tertiary.light + "20",
        color: theme.colors.tertiary.main,
      };
    default:
      return {
        bg: "transparent",
        hoverBg: theme.colors.grey[200],
        color: theme.colors.text.primary,
      };
  }
};

export const IconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => getIconButtonSize(size || "medium")};
  height: ${({ size }) => getIconButtonSize(size || "medium")};
  padding: 0;
  border-radius: 50%;
  background-color: ${({ color, theme }) =>
    getIconButtonColor(color || "default", theme).bg};
  color: ${({ color, theme }) =>
    getIconButtonColor(color || "default", theme).color};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover:not(:disabled) {
    background-color: ${({ color, theme }) =>
      getIconButtonColor(color || "default", theme).hoverBg};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
