import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid
    ${({ checked, theme }) =>
      checked ? theme.colors.primary.main : theme.colors.grey[400]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary.main : theme.colors.common.white};
  transition: all ${({ theme }) => theme.transitions.duration.shortest}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    border-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary.dark : theme.colors.grey[600]};
  }

  &:after {
    content: "";
    display: ${({ checked }) => (checked ? "block" : "none")};
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CheckboxLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox = ({
  checked,
  onChange,
  label,
  disabled,
  className,
}: CheckboxProps) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} disabled={disabled} />
    <StyledCheckbox checked={checked} disabled={disabled} />
    {label && <CheckboxLabel>{label}</CheckboxLabel>}
  </CheckboxContainer>
);
