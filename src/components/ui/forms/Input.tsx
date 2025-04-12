import styled, { css, DefaultTheme } from "styled-components";
import { Sizes } from "../../../types/common";

interface InputProps {
  fullWidth?: boolean;
  error?: boolean;
  size?: Sizes;
  disabled?: boolean;
  className?: string;
}

const getInputSize = (size: Sizes, theme: DefaultTheme) => {
  switch (size) {
    case "small":
      return css`
        padding: ${theme.spacing[1]} ${theme.spacing[2]};
        font-size: ${theme.typography.caption.fontSize};
      `;
    case "large":
      return css`
        padding: ${theme.spacing[3]} ${theme.spacing[4]};
        font-size: ${theme.typography.subtitle1.fontSize};
      `;
    default:
      return css`
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
        font-size: ${theme.typography.body2.fontSize};
      `;
  }
};

export const Input = styled.input<InputProps>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.error.main : theme.colors.grey[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.common.white};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  outline: none;

  ${({ size, theme }) => getInputSize(size || "medium", theme)}

  &:focus {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.error.main : theme.colors.primary.main};
    box-shadow: 0 0 0 2px
      ${({ error, theme }) =>
        error
          ? theme.colors.error.light + "40"
          : theme.colors.primary.light + "40"};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    cursor: not-allowed;
    opacity: 0.7;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })`
  min-height: 100px;
  resize: vertical;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FormHelperText = styled.span<{ error?: boolean }>`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ error, theme }) =>
    error ? theme.colors.error.main : theme.colors.text.secondary};
`;
