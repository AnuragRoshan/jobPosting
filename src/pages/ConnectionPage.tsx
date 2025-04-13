"use client";
import type React from "react";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import styled from "styled-components";
import { profilesData } from "../data/mockData";
import {
  Search,
  Users,
  UserPlus,
  UserCheck,
  Filter,
  X,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
// import { motion } from "framer-motion";
// import { type UniverseType, theme } from "/@/theme";

// Styled components
const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[4]};
  /* padding-left: calc(260px + ${({ theme }) => theme.spacing[4]}); */
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.spacing[4]};
  }
`;

const ConnectionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0;
`;

const ConnectionStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  width: 60%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing[2]};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.divider}; */
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.div<TabProps>`
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.text.secondary};
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) =>
      props.active ? props.theme.colors.primary.main : "transparent"};
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

// Change the ConnectionGrid to a vertical list layout
const ConnectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  max-width: 720px;
  margin: 10px auto;
  padding: 0 ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

// Update the ConnectionCard to be horizontal instead of vertical
const ConnectionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  height: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[4]};
  }

  &:hover {
    box-shadow: 10px 10px 0px ${({ theme }) => theme.colors.secondary.main};
    transform: translateY(-5px);
  }
`;

// Update the ConnectionCardHeader for horizontal layout
const ConnectionCardHeader = styled.div`
  width: 120px;
  min-width: 120px;
  position: relative;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary.dark},
    ${({ theme }) => theme.colors.primary.main}
  );
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    min-width: 100px;
    padding: 10px;
    border-radius: 50%;
  }
`;

// Update the ConnectionAvatar for horizontal layout
const ConnectionAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background.paper};
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70px;
    height: 70px;
  }
`;

// Update the ConnectionCardBody for horizontal layout
const ConnectionCardBody = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
    padding: ${({ theme }) => theme.spacing[3]};
    flex-direction: column;
  }
`;

// Update the ConnectionActions for horizontal layout
const ConnectionActions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: auto;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

// Add a new component for mutual connections
const MutualConnections = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const MutualAvatars = styled.div`
  display: flex;
  align-items: center;
`;

const MutualAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.background.paper};
  margin-right: -8px;
`;

// Add a new component for connection status
const ConnectionStatus = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${(props) => {
    switch (props.status) {
      case "connected":
        return props.theme.colors.success.main;
      case "pending":
        return props.theme.colors.warning.main;
      default:
        return props.theme.colors.text.secondary;
    }
  }};
`;

// Types for the connections page
type ConnectionTab = "all" | "connected" | "pending" | "suggestions";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FilterTag = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.paper};
  }
`;

const ConnectionName = styled.h3`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const ConnectionTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing[1]} 0;
`;

const ConnectionCompany = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

const ConnectionButton = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  border: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    transform: translateY(-5px);
    transition: background-color 0.3s ease,
      transform 0.2s ${({ theme }) => theme.transitions.easing.easeInOut};
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:not(:hover) {
    transform: translateY(0);
    transition: background-color 0.3s ease,
      transform 0.3s ${({ theme }) => theme.transitions.easing.easeInOut};
  }
`;

const ConnectButton = styled(ConnectionButton)`
  background-color: ${({ theme }) => theme.colors.success.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.success.dark};
  }
`;

const NoResults = styled.div`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Update the ConnectionPage component to use the new layout
// Replace the existing ConnectionPage component with this updated version
const ConnectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ConnectionTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [connections, setConnections] = useState(profilesData);

  // Get my profile (using id "1")
  const myProfile = profilesData.find((profile) => profile.id === "1");

  useEffect(() => {
    let filteredConnections = [...profilesData];

    // Filter by tab
    filteredConnections = filteredConnections.filter(
      (profile) => profile.id !== "1"
    );

    if (activeTab === "connected") {
      filteredConnections = filteredConnections.filter((profile) =>
        myProfile?.connections.includes(profile.id)
      );
    } else if (activeTab === "pending") {
      filteredConnections = filteredConnections.filter((profile) => {
        const isConnected = myProfile?.connections.includes(profile.id);
        return !isConnected && Math.random() > 0.7;
      });
    } else if (activeTab === "suggestions") {
      filteredConnections = filteredConnections.filter((profile) => {
        const isConnected = myProfile?.connections.includes(profile.id);
        const isPending = Math.random() > 0.7;
        return !isConnected && !isPending;
      });
    }

    // Apply search query
    if (searchQuery) {
      filteredConnections = filteredConnections.filter(
        (profile) =>
          profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply skill filters
    if (filters.length > 0) {
      filteredConnections = filteredConnections.filter((profile) =>
        filters.some((filter) => profile.skills.includes(filter))
      );
    }

    setConnections(filteredConnections);
  }, [activeTab, searchQuery, filters, myProfile]);

  // const handleAddFilter = (skill: string) => {
  //   if (!filters.includes(skill)) {
  //     setFilters([...filters, skill]);
  //   }
  // };

  const handleRemoveFilter = (skill: string) => {
    setFilters(filters.filter((f) => f !== skill));
  };

  // Get random mutual connections
  const getMutualConnections = (profileId: string) => {
    // Simulate mutual connections by taking random profiles
    const mutuals = profilesData
      .filter((p) => p.id !== profileId && p.id !== "1")
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 1);

    return mutuals;
  };

  // Get connection status
  const getConnectionStatus = (
    profileId: string
  ): "connected" | "pending" | "none" => {
    if (myProfile?.connections.includes(profileId)) {
      return "connected";
    }
    // Randomly assign pending status to some non-connections
    return Math.random() > 0.7 ? "pending" : "none";
  };

  return (
    <ConnectionsContainer>
      <ConnectionsHeader>
        <Title>My Connections</Title>
        <ConnectionStats>
          <StatItem>
            <Users size={20} />
            <span>{myProfile?.connections.length || 0} Connections</span>
          </StatItem>
          <StatItem>
            <UserPlus size={20} />
            <span>1 Pending</span>
          </StatItem>
        </ConnectionStats>
      </ConnectionsHeader>

      <SearchBar>
        <Search size={20} color={theme.colors.text.secondary} />
        <SearchInput
          type="text"
          placeholder="Search connections..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>

      <TabsContainer>
        <Tab active={activeTab === "all"} onClick={() => setActiveTab("all")}>
          All
        </Tab>
        <Tab
          active={activeTab === "connected"}
          onClick={() => setActiveTab("connected")}
        >
          Connected
        </Tab>
        <Tab
          active={activeTab === "pending"}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </Tab>
        <Tab
          active={activeTab === "suggestions"}
          onClick={() => setActiveTab("suggestions")}
        >
          Suggestions
        </Tab>
      </TabsContainer>

      {filters.length > 0 && (
        <FilterContainer>
          <FilterTag>
            <Filter size={14} />
            <span>Filters:</span>
          </FilterTag>
          {filters.map((filter) => (
            <FilterTag key={filter}>
              <span>{filter}</span>
              <X size={14} onClick={() => handleRemoveFilter(filter)} />
            </FilterTag>
          ))}
        </FilterContainer>
      )}

      {connections.length > 0 ? (
        <ConnectionGrid>
          {connections.map((profile) => {
            const isConnected =
              myProfile?.connections.includes(profile.id) || false;
            // const universe = getCompanyUniverse(profile.company);
            const connectionStatus = getConnectionStatus(profile.id);
            const mutualConnections = getMutualConnections(profile.id);

            return (
              <ConnectionCard key={profile.id}>
                <ConnectionCardHeader>
                  {/* <UniverseIndicator universe={universe} /> */}
                  <ConnectionAvatar src={profile.avatar} alt={profile.name} />
                </ConnectionCardHeader>
                <ConnectionCardBody>
                  <div
                    style={{
                      flex: 3,
                    }}
                  >
                    <ConnectionName>{profile.name}</ConnectionName>
                    <ConnectionTitle>{profile.title}</ConnectionTitle>
                    <ConnectionCompany>{profile.company}</ConnectionCompany>

                    <ConnectionStatus status={connectionStatus}>
                      {connectionStatus === "connected" && (
                        <>
                          <UserCheck size={14} />
                          <span>Connected</span>
                        </>
                      )}
                      {connectionStatus === "pending" && (
                        <>
                          <Clock size={14} />
                          <span>Pending</span>
                        </>
                      )}
                    </ConnectionStatus>

                    {mutualConnections.length > 0 && (
                      <MutualConnections>
                        <MutualAvatars>
                          {mutualConnections.map((mutual) => (
                            <MutualAvatar
                              key={mutual.id}
                              src={mutual.avatar}
                              alt={mutual.name}
                            />
                          ))}
                        </MutualAvatars>
                        <span>
                          {mutualConnections.length} mutual connection
                          {mutualConnections.length > 1 ? "s" : ""}
                        </span>
                      </MutualConnections>
                    )}
                  </div>
                  <ConnectionActions>
                    <ConnectionButton
                      onClick={() => navigate(`/profile/${profile.id}`)}
                    >
                      View Profile
                    </ConnectionButton>

                    {isConnected ? (
                      <ConnectionButton>
                        <MessageSquare size={16} />
                        Message
                      </ConnectionButton>
                    ) : (
                      <ConnectButton>
                        <UserPlus size={16} />
                        Connect
                      </ConnectButton>
                    )}
                  </ConnectionActions>
                  {/* <div style={{ display: "flex" }}>
                    {profile.skills.slice(0, 3).map((skill) => (
                      <FilterTag
                        key={skill}
                        style={{
                          margin: "0 4px 8px 0",
                          cursor: "pointer",
                          background: filters.includes(skill)
                            ? theme.colors.primary.dark
                            : "transparent",
                          color: filters.includes(skill)
                            ? theme.colors.primary.contrastText
                            : theme.colors.text.primary,
                        }}
                        onClick={() => handleAddFilter(skill)}
                      >
                        {skill}
                      </FilterTag>
                    ))}
                  </div> */}
                </ConnectionCardBody>
              </ConnectionCard>
            );
          })}
        </ConnectionGrid>
      ) : (
        <NoResults>No connections found. Try adjusting your filters.</NoResults>
      )}
    </ConnectionsContainer>
  );
};

export default ConnectionPage;
