import styled from "styled-components";

const SidebarRoot = styled.aside<{ open: boolean }>`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 260px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background.paper} 0%
  );
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform ${({ theme }) => theme.transitions.duration.complex}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  transform: translateX(${({ open }) => (open ? "0" : "-100%")});
  z-index: ${({ theme }) => theme.zIndex.drawer};
  /* overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.divider}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: translateX(0);
  }

  /* Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey[700]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.grey[500]};
  }
`;

const SidebarContent = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[6]};
  min-height: 100%;
`;

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  children,
  className,
}) => (
  <SidebarRoot open={open} className={className}>
    <SidebarContent>{children}</SidebarContent>
  </SidebarRoot>
);
