import styled from "styled-components";

interface CardProps {
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  bgColor?: string;
  bordered?: boolean;
  className?: string;
}

export const Card = styled.div<CardProps>`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ elevation, theme }) =>
    elevation ? theme.shadows[elevation] : theme.shadows.md};
  border: 1px solid white;
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    box-shadow: 10px 10px 0px ${({ theme }) => theme.colors.primary.main};
    transform: translateY(-5px);
    transition: box-shadow 500ms
        ${({ theme }) => theme.transitions.easing.easeInOut},
      transform 500ms ${({ theme }) => theme.transitions.easing.easeInOut};

    background-color: ${({ bgColor, theme }) =>
      bgColor || theme.colors.background.paper};
  }

  &:not(:hover) {
    /* box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.primary.dark}; */
    transform: translateY(0);
    transition: box-shadow 200ms
        ${({ theme }) => theme.transitions.easing.easeInOut},
      transform 400ms ${({ theme }) => theme.transitions.easing.easeInOut};
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
