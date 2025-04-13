import styled from "styled-components";
import { profilesData } from "../../../data/mockData";

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

const ProfileAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background.paper};
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  display: block;
`;

const profile = profilesData.find((p) => p.id === "1");
export const Sidebar: React.FC<SidebarProps> = ({
  open,
  children,
  className,
}) => (
  <SidebarRoot open={open} className={className}>
    <SidebarContent>
      {children}{" "}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          padding: "0 16px",
        }}
      >
        <ProfileAvatar src={profile?.avatar} alt={profile?.name} />
      </div>
    </SidebarContent>
  </SidebarRoot>
);
