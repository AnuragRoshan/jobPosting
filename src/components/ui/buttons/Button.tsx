import styled, { css } from "styled-components";
import { ButtonVariants, Sizes } from "../../../types/common";

interface ButtonProps {
  variant?: ButtonVariants;
  size?: Sizes;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const getButtonSize = (size: Sizes, theme: DefaultTheme) => {
  switch (size) {
    case "small":
      return css`
        padding: ${theme.spacing[1]} ${theme.spacing[2]};
        font-size: ${theme.typography.caption.fontSize};
      `;
    case "large":
      return css`
        padding: ${theme.spacing[3]} ${theme.spacing[6]};
        font-size: ${theme.typography.subtitle1.fontSize};
      `;
    default:
      return css`
        padding: ${theme.spacing[2]} ${theme.spacing[4]};
        font-size: ${theme.typography.button.fontSize};
      `;
  }
};

import { DefaultTheme } from "styled-components"; // Ensure this import exists

const getButtonVariant = (variant: ButtonVariants, theme: DefaultTheme) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.primary.contrastText};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary.dark};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary.dark};
        }
      `;

    case "secondary":
      return css`
        background-color: ${theme.colors.secondary.main};
        color: ${theme.colors.secondary.contrastText};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary.dark};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.secondary.dark};
        }
      `;

    case "tertiary":
      return css`
        background-color: ${theme.colors.tertiary.main};
        color: ${theme.colors.tertiary.contrastText};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.tertiary.dark};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.tertiary.dark};
        }
      `;

    case "outlined":
      return css`
        background-color: transparent;
        color: ${theme.colors.primary.main};
        border: 1px solid ${theme.colors.primary.main};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.grey[50]};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.grey[100]};
        }
      `;

    case "text":
      return css`
        background-color: transparent;
        color: ${theme.colors.primary.main};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.grey[50]};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.grey[100]};
        }
      `;

    default:
      return css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.primary.contrastText};
        border: none;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary.dark};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary.dark};
        }
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: all ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size, theme }) => getButtonSize(size || "medium", theme)}
  ${({ variant, theme }) => getButtonVariant(variant || "primary", theme)}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  & > *:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;
