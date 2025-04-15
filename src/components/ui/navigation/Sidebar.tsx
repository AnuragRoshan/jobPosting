"use client";

import * as React from "react";
import styled, { keyframes } from "styled-components";
import { profilesData } from "../../../data/mockData";
import { Briefcase, MapPin, ChevronUp } from "lucide-react";

// Find the profile with ID "1"
const profile = profilesData.find((p) => p.id === "1");

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

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
  border-right: 1px solid ${({ theme }) => theme.colors.divider};

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

const ProfileContainer = styled.div<{ expanded: boolean }>`
  width: 100%;
  margin-top: auto;
  position: relative;
  border-radius: ${({ expanded }) => (expanded ? "0 0px 12px 12px" : "12px")};
  background-color: ${({ expanded, theme }) =>
    expanded ? theme.colors.background.light : "transparent"};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.light};
  }
`;

const ProfileCardWrapper = styled.div<{ expanded: boolean }>`
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
  margin-bottom: ${({ expanded, theme }) =>
    expanded ? theme.spacing[4] : "0"};
`;

const ProfileCardHeader = styled.div`
  position: relative;
  cursor: pointer;
`;

const ProfileCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    /* background-color: #f0f0f0; */
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform 200ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    transform: scale(1.05);
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff; /* Hardcoded primary color */
  color: #ffffff; /* Hardcoded contrast text color */
  font-weight: 500; /* Hardcoded font weight */
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success.main};
  border: 2px solid ${({ theme }) => theme.colors.background.paper};
`;

const ProfileInfo = styled.div`
  flex: 1;
  overflow: hidden;
`;

const ProfileName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChevronIcon = styled(ChevronUp)<{ expanded: boolean }>`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 200ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
  transform: ${({ expanded }) => (expanded ? "rotate(0)" : "rotate(180deg)")};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProfileDetailsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: 12px 12px 0 0px; /* Hardcoded border radius */
  padding: 16px; /* Hardcoded padding */
  display: flex;
  flex-direction: column;
  gap: 16px; /* Hardcoded gap */
  animation: ${fadeIn} 200ms ease-in-out forwards; /* Hardcoded animation easing */
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const ProfileDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ProfileDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const DetailIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 14px;
    height: 14px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillBadge = styled.span`
  font-size: 12px; /* Hardcoded font size */
  background-color: rgba(255, 255, 255, 0.8); /* Hardcoded background color */
  color: #000000; /* Hardcoded text color */
  border: 1px solid #e0e0e0; /* Hardcoded border color */
  border-radius: 4px; /* Hardcoded border radius */
  padding: 2px 8px; /* Hardcoded padding */
`;

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  children,
  className,
}) => {
  return (
    <SidebarRoot open={open} className={className}>
      <SidebarContent>
        {children}
        <ProfileAvatar profile={profile} />
      </SidebarContent>
    </SidebarRoot>
  );
};

interface ProfileAvatarProps {
  profile: (typeof profilesData)[0] | undefined;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ profile }) => {
  const [expanded, setExpanded] = React.useState(false);

  if (!profile) return null;

  return (
    <ProfileContainer expanded={expanded}>
      {expanded && (
        <ProfileDetailsCard>
          <ProfileDetailsSection>
            <ProfileDetailItem>
              <DetailIcon>
                <Briefcase />
              </DetailIcon>
              <span>{profile.company}</span>
            </ProfileDetailItem>

            <ProfileDetailItem>
              <DetailIcon>
                <MapPin />
              </DetailIcon>
              <span>{profile.location}</span>
            </ProfileDetailItem>
          </ProfileDetailsSection>

          <SkillsContainer>
            {profile.skills.slice(0, 3).map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
            {profile.skills.length > 3 && (
              <SkillBadge>+{profile.skills.length - 3}</SkillBadge>
            )}
          </SkillsContainer>
        </ProfileDetailsCard>
      )}

      <ProfileCardWrapper expanded={expanded}>
        <ProfileCardHeader onClick={() => setExpanded(!expanded)}>
          <ProfileCardContent>
            <AvatarWrapper>
              <Avatar>
                {profile.avatar ? (
                  <AvatarImage
                    src={profile.avatar || "/placeholder.svg"}
                    alt={profile.name}
                  />
                ) : (
                  <AvatarFallback>
                    {profile.name.substring(0, 2)}
                  </AvatarFallback>
                )}
              </Avatar>
              <StatusIndicator />
            </AvatarWrapper>

            <ProfileInfo>
              <ProfileName>{profile.name}</ProfileName>
              <ProfileTitle>{profile.title}</ProfileTitle>
            </ProfileInfo>

            <ChevronIcon expanded={expanded} />
          </ProfileCardContent>
        </ProfileCardHeader>
      </ProfileCardWrapper>
    </ProfileContainer>
  );
};
