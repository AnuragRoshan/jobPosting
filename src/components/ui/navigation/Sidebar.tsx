import styled from "styled-components";

const SidebarRoot = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 64px; /* Height of Navbar */
  left: 0;
  height: calc(100vh - 64px);
  width: 260px;
  background-color: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.transitions.duration.complex}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  transform: translateX(${({ open }) => (open ? "0" : "-100%")});
  z-index: ${({ theme }) => theme.zIndex.drawer};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: translateX(0);
  }
`;

const SidebarContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  //   onClose,
  children,
  className,
}) => (
  <SidebarRoot open={open} className={className}>
    <SidebarContent
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      {children}
    </SidebarContent>
  </SidebarRoot>
);
