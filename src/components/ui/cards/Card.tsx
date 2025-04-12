import styled from "styled-components";

interface CardProps {
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  bgColor?: string;
  bordered?: boolean;
  className?: string;
}

export const Card = styled.div<CardProps>`
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ elevation, theme }) =>
    elevation ? theme.shadows[elevation] : theme.shadows.md};
  border: ${({ bordered, theme }) =>
    bordered ? `1px solid ${theme.colors.divider}` : "none"};
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    box-shadow: ${({ elevation, theme }) =>
      elevation === "none"
        ? theme.shadows.none
        : elevation === "xs"
        ? theme.shadows.sm
        : elevation === "sm"
        ? theme.shadows.md
        : elevation === "md"
        ? theme.shadows.lg
        : theme.shadows.xl};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing[5]}`};
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const CardMedia = styled.div<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "200px"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};

  & > * {
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;
