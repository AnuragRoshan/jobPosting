"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/cards/Card";

const PageContainer = styled.div`
  padding: 10px 64px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #3f3f46;
  overflow-x: auto;
  scrollbar-width: none;
`;

const Tab = styled.div<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  background: none;
  border: none;
  /* border-bottom: 2px solid
    ${({ active, theme }) =>
    active ? theme.colors.primary.main : "transparent"}; */
  color: ${({ active, theme }) =>
    active ? theme.colors.primary.main : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ active, theme }) =>
    active ? 600 : theme.typography.body1.fontWeight};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const NotificationCard = styled(Card)<{ unread: boolean }>`
  padding: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ unread, theme }) =>
    unread ? `${theme.colors.primary.main}05` : theme.colors.background.paper};
  border: 3px solid
    ${({ unread, theme }) => (unread ? theme.colors.secondary.main : "inherit")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.light};
  }
`;

const NotificationAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const NotificationTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const NotificationTime = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const NotificationActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const NotificationButton = styled.div`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.contrastText};
    text-decoration: none;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const ActionButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  border: none;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    /* text-decoration: underline; */
  }
`;

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: "application",
    title: "Application Update",
    content:
      "Your application for Senior React Developer at TechCorp Inc has been reviewed.",
    time: "10 minutes ago",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    unread: true,
    actionUrl: "/jobs/job1",
    actionText: "View Application",
  },
  {
    id: 2,
    type: "connection",
    title: "New Connection",
    content: "Jane Smith accepted your connection request.",
    time: "2 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    unread: true,
    actionUrl: "/profile/2",
    actionText: "View Profile",
  },
  {
    id: 3,
    type: "job",
    title: "New Job Match",
    content:
      "We found a new job that matches your profile: UX/UI Designer at DesignLab.",
    time: "Yesterday",
    avatar:
      "https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg",
    unread: false,
    actionUrl: "/jobs/job3",
    actionText: "View Job",
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    content:
      "You have a new message from David Wilson regarding your application.",
    time: "2 days ago",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    unread: false,
    actionUrl: "/messages/5",
    actionText: "Read Message",
  },
  {
    id: 5,
    type: "job",
    title: "Job Application Deadline",
    content:
      "The application deadline for Product Manager at InnovateSoft is tomorrow.",
    time: "3 days ago",
    avatar:
      "https://img.freepik.com/premium-vector/eh-calligraphic-signature-vector-logo-design-with-circle-gold-color-leaf-flower_1119385-142.jpg",
    unread: false,
    actionUrl: "/jobs/job2",
    actionText: "Apply Now",
  },
];

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((notification) => notification.type === activeTab);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, unread: false }))
    );
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          Notifications {unreadCount > 0 && `(${unreadCount})`}
        </PageTitle>
        {unreadCount > 0 && (
          <ActionButton onClick={markAllAsRead}>Mark all as read</ActionButton>
        )}
      </PageHeader>

      <TabsContainer>
        <Tab active={activeTab === "all"} onClick={() => setActiveTab("all")}>
          All
        </Tab>
        <Tab
          active={activeTab === "application"}
          onClick={() => setActiveTab("application")}
        >
          Applications
        </Tab>
        <Tab active={activeTab === "job"} onClick={() => setActiveTab("job")}>
          Jobs
        </Tab>
        <Tab
          active={activeTab === "connection"}
          onClick={() => setActiveTab("connection")}
        >
          Connections
        </Tab>
        <Tab
          active={activeTab === "message"}
          onClick={() => setActiveTab("message")}
        >
          Messages
        </Tab>
      </TabsContainer>

      <NotificationsList>
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              unread={notification.unread}
            >
              <NotificationAvatar src={notification.avatar} alt="" />
              <NotificationContent>
                <NotificationHeader>
                  <NotificationTitle>{notification.title}</NotificationTitle>
                  <NotificationTime>{notification.time}</NotificationTime>
                </NotificationHeader>
                <NotificationText>{notification.content}</NotificationText>
                <NotificationActions>
                  <NotificationButton as={Link} to={notification.actionUrl}>
                    {notification.actionText}
                  </NotificationButton>
                  {notification.unread && (
                    <ActionButton onClick={() => markAsRead(notification.id)}>
                      Mark as read
                    </ActionButton>
                  )}
                </NotificationActions>
              </NotificationContent>
            </NotificationCard>
          ))
        ) : (
          <EmptyState>
            <h3>No notifications</h3>
            <p>You don't have any notifications in this category.</p>
          </EmptyState>
        )}
      </NotificationsList>
    </PageContainer>
  );
};

export default NotificationsPage;
