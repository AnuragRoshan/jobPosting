"use client";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { profilesData } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import {
  Send,
  Smile,
  Paperclip,
  ImageIcon,
  Mic,
  MoreVertical,
  Search,
  ArrowLeft,
} from "lucide-react";
import { UniverseType } from "../styles/theme";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled components
const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  /* height: calc(100vh - 64px);
  padding-top: 64px; */
  background-color: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
`;

const ChatSidebar = styled.div`
  width: 320px;
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.paper};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ChatSidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatSidebarTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const SearchContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};

  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-right: ${({ theme }) => theme.spacing[2]};
  }

  input {
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text.primary};
    width: 100%;
    font-size: ${({ theme }) => theme.typography.body2.fontSize};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[2]};
`;

interface ChatItemProps {
  active?: boolean;
  universe?: UniverseType;
}

const ChatItem = styled.div<ChatItemProps>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.3s ease forwards;
  position: relative;

  ${({ active, theme, universe }) => {
    if (active) {
      if (universe === "cybertech") {
        return css`
          background-color: ${theme.colors.universes.cybertech.dark};
          border-left: 3px solid ${theme.colors.universes.cybertech.primary};
          box-shadow: 0 0 10px ${theme.colors.universes.cybertech.glow};
        `;
      } else if (universe === "fantasy") {
        return css`
          background-color: ${theme.colors.universes.fantasy.dark};
          border-left: 3px solid ${theme.colors.universes.fantasy.primary};
          box-shadow: 0 0 10px ${theme.colors.universes.fantasy.magic}80;
        `;
      } else if (universe === "cosmic") {
        return css`
          background-color: ${theme.colors.universes.cosmic.dark};
          border-left: 3px solid ${theme.colors.universes.cosmic.primary};
          box-shadow: 0 0 10px ${theme.colors.universes.cosmic.primary}80;
        `;
      } else if (universe === "steampunk") {
        return css`
          background-color: ${theme.colors.universes.steampunk.dark};
          border-left: 3px solid ${theme.colors.universes.steampunk.brass};
          box-shadow: 0 0 10px ${theme.colors.universes.steampunk.brass}50;
        `;
      } else {
        return css`
          background-color: ${theme.colors.primary.main}15;
          border-left: 3px solid ${theme.colors.primary.main};
        `;
      }
    } else {
      return css`
        &:hover {
          background-color: ${theme.colors.background.light};
        }
      `;
    }
  }}
`;

const ChatAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing[3]};
  object-fit: cover;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatName = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatLastMessage = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

const ChatTime = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const ChatBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
`;

const ChatMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.default};
  position: relative;
`;

const ChatHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

const BackButton = styled.div`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ChatHeaderInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ChatHeaderName = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ChatHeaderStatus = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success.main};
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

const ChatHeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

interface MessageProps {
  sent?: boolean;
  universe?: UniverseType;
}

const MessageContainer = styled.div<MessageProps>`
  display: flex;
  flex-direction: ${({ sent }) => (sent ? "row-reverse" : "row")};
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  max-width: 80%;
  align-self: ${({ sent }) => (sent ? "flex-end" : "flex-start")};
  animation: ${({ sent }) => (sent ? slideIn : fadeIn)} 0.3s ease forwards;
`;

const MessageAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const MessageBubble = styled.div<MessageProps>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border-radius: ${({ theme, sent }) =>
    sent
      ? `${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 ${theme.borderRadius.lg}`
      : `${theme.borderRadius.lg} ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0`};
  max-width: 100%;

  ${({ sent, theme, universe }) => {
    if (sent) {
      if (universe === "cybertech") {
        return css`
          background-color: ${theme.colors.universes.cybertech.primary}90;
          color: ${theme.colors.universes.cybertech.text};
          box-shadow: 0 0 10px ${theme.colors.universes.cybertech.glow}50;
        `;
      } else if (universe === "fantasy") {
        return css`
          background-color: ${theme.colors.universes.fantasy.primary}90;
          color: ${theme.colors.universes.fantasy.text};
          box-shadow: 0 0 10px ${theme.colors.universes.fantasy.magic}50;
        `;
      } else if (universe === "cosmic") {
        return css`
          background-color: ${theme.colors.universes.cosmic.primary}90;
          color: ${theme.colors.universes.cosmic.text};
          box-shadow: 0 0 10px ${theme.colors.universes.cosmic.primary}50;
        `;
      } else if (universe === "steampunk") {
        return css`
          background-color: ${theme.colors.universes.steampunk.brass}90;
          color: ${theme.colors.universes.steampunk.text};
          box-shadow: 0 0 10px ${theme.colors.universes.steampunk.brass}30;
        `;
      } else {
        return css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.primary.contrastText};
        `;
      }
    } else {
      return css`
        background-color: ${theme.colors.background.paper};
        color: ${theme.colors.text.primary};
      `;
    }
  }}
`;

const MessageText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: 1.5;
  word-break: break-word;
`;

const MessageTime = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[1]};
  display: block;
`;

const ChatInputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
`;

const ChatInputActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing[1]};
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      background-color: ${({ theme }) => theme.colors.background.paper};
    }
  }
`;

const ChatInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const SendButton = styled.div<{ universe?: UniverseType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ theme, universe }) => {
    if (universe === "cybertech") {
      return css`
        background-color: ${theme.colors.universes.cybertech.primary};
        color: ${theme.colors.universes.cybertech.background};
        box-shadow: 0 0 10px ${theme.colors.universes.cybertech.glow};

        &:hover {
          background-color: ${theme.colors.universes.cybertech.secondary};
          box-shadow: 0 0 15px ${theme.colors.universes.cybertech.glow};
        }
      `;
    } else if (universe === "fantasy") {
      return css`
        background-color: ${theme.colors.universes.fantasy.primary};
        color: ${theme.colors.universes.fantasy.background};
        box-shadow: 0 0 10px ${theme.colors.universes.fantasy.magic}50;

        &:hover {
          background-color: ${theme.colors.universes.fantasy.secondary};
          box-shadow: 0 0 15px ${theme.colors.universes.fantasy.magic}70;
        }
      `;
    } else if (universe === "cosmic") {
      return css`
        background-color: ${theme.colors.universes.cosmic.primary};
        color: ${theme.colors.universes.cosmic.background};
        box-shadow: 0 0 10px ${theme.colors.universes.cosmic.primary}50;

        &:hover {
          background-color: ${theme.colors.universes.cosmic.secondary};
          box-shadow: 0 0 15px ${theme.colors.universes.cosmic.primary}70;
        }
      `;
    } else if (universe === "steampunk") {
      return css`
        background-color: ${theme.colors.universes.steampunk.brass};
        color: ${theme.colors.universes.steampunk.background};
        box-shadow: 0 0 10px ${theme.colors.universes.steampunk.brass}30;

        &:hover {
          background-color: ${theme.colors.universes.steampunk.copper};
          box-shadow: 0 0 15px ${theme.colors.universes.steampunk.brass}50;
        }
      `;
    } else {
      return css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.primary.contrastText};

        &:hover {
          background-color: ${theme.colors.primary.dark};
        }
      `;
    }
  }}
`;

const EmptyChatState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const EmptyChatIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const EmptyChatTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const EmptyChatText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 400px;
`;

// Mock data for chats
interface ChatMessage {
  id: string;
  text: string;
  sent: boolean;
  timestamp: string;
  avatar?: string;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: ChatMessage[];
  universe?: UniverseType;
}

// Helper function to get random universe
const getRandomUniverse = (): UniverseType => {
  const universes: UniverseType[] = [
    "cybertech",
    "fantasy",
    "corporate",
    "cosmic",
    "steampunk",
  ];
  return universes[Math.floor(Math.random() * universes.length)];
};

const ChatPage: React.FC = () => {
  const { user } = useAuth();
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<Chat[]>([]);

  // Generate mock chats based on connections
  useEffect(() => {
    if (user) {
      const currentProfile = profilesData.find(
        (profile) => profile.id === user.id
      );

      if (currentProfile && currentProfile.connections) {
        const mockChats: Chat[] = currentProfile.connections
          .map((connectionId) => {
            const connection = profilesData.find(
              (profile) => profile.id === connectionId
            );
            if (!connection) return null;

            const universe = getRandomUniverse();

            return {
              id: connectionId,
              name: connection.name,
              avatar: connection.avatar,
              lastMessage: `Hey, I saw your profile and I'm interested in connecting about opportunities at ${connection.company}.`,
              timestamp: new Date(
                Date.now() - Math.random() * 86400000 * 7
              ).toISOString(),
              unread: Math.floor(Math.random() * 3),
              universe,
              messages: [
                {
                  id: "1",
                  text: `Hi there! I'm ${connection.name} from ${connection.company}.`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3600000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
                {
                  id: "2",
                  text: `I saw your profile and I'm impressed with your experience in ${currentProfile.skills[0]}.`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3500000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
                {
                  id: "3",
                  text: `Thanks for reaching out! I'd love to hear more about what you're working on.`,
                  sent: true,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3400000
                  ).toISOString(),
                },
                {
                  id: "4",
                  text: `We're currently looking for someone with your skills for a new project.`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3300000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
                {
                  id: "5",
                  text: `That sounds interesting! I'd be happy to discuss further.`,
                  sent: true,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3200000
                  ).toISOString(),
                },
                {
                  id: "6",
                  text: `Great! Are you available for a call sometime this week?`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3100000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
                {
                  id: "7",
                  text: `Yes, I'm free on Thursday afternoon. Would that work for you?`,
                  sent: true,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 3000000
                  ).toISOString(),
                },
                {
                  id: "8",
                  text: `Thursday works perfectly. I'll send you a calendar invite.`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 3 - 2900000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
                {
                  id: "9",
                  text: `Hey, I saw your profile and I'm interested in connecting about opportunities at ${connection.company}.`,
                  sent: false,
                  timestamp: new Date(
                    Date.now() - 86400000 * 1 - 3600000
                  ).toISOString(),
                  avatar: connection.avatar,
                },
              ],
            };
          })
          .filter(Boolean) as Chat[];

        setChats(
          mockChats.sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
        );
      }
    }
  }, [user]);

  // Scroll to bottom of messages when active chat changes or new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat]);

  const handleSendMessage = () => {
    if (!message.trim() || !activeChat) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sent: true,
      timestamp: new Date().toISOString(),
    };

    const updatedChat = {
      ...activeChat,
      lastMessage: message,
      timestamp: new Date().toISOString(),
      unread: 0,
      messages: [...activeChat.messages, newMessage],
    };

    setChats((prevChats) =>
      prevChats.map((chat) => (chat.id === activeChat.id ? updatedChat : chat))
    );

    setActiveChat(updatedChat);
    setMessage("");

    // Simulate reply after delay
    setTimeout(() => {
      const replyMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message! I'll get back to you soon.`,
        sent: false,
        timestamp: new Date().toISOString(),
        avatar: activeChat.avatar,
      };

      const updatedChatWithReply = {
        ...updatedChat,
        lastMessage: replyMessage.text,
        timestamp: replyMessage.timestamp,
        messages: [...updatedChat.messages, replyMessage],
      };

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === activeChat.id ? updatedChatWithReply : chat
        )
      );

      setActiveChat(updatedChatWithReply);
    }, 2000);
  };

  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatChatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" });
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  return (
    <ChatContainer>
      <ChatSidebar>
        <ChatSidebarHeader>
          <ChatSidebarTitle>Messages</ChatSidebarTitle>
          <MoreVertical size={20} />
        </ChatSidebarHeader>

        <SearchContainer>
          <SearchInput>
            <Search size={18} />
            <input type="text" placeholder="Search messages" />
          </SearchInput>
        </SearchContainer>

        <ChatList>
          {chats.map((chat, index) => (
            <ChatItem
              key={chat.id}
              active={activeChat?.id === chat.id}
              universe={chat.universe}
              onClick={() => setActiveChat(chat)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ChatAvatar src={chat.avatar} alt={chat.name} />
              <ChatInfo>
                <ChatName>{chat.name}</ChatName>
                <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
              </ChatInfo>
              <ChatMeta>
                <ChatTime>{formatChatTime(chat.timestamp)}</ChatTime>
                {chat.unread > 0 && <ChatBadge>{chat.unread}</ChatBadge>}
              </ChatMeta>
            </ChatItem>
          ))}
        </ChatList>
      </ChatSidebar>

      <ChatMain>
        {activeChat ? (
          <>
            <ChatHeader>
              <BackButton onClick={() => setActiveChat(null)}>
                <ArrowLeft size={20} />
              </BackButton>
              <ChatHeaderInfo>
                <ChatAvatar
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <ChatHeaderName>{activeChat.name}</ChatHeaderName>
                </div>
                <ChatHeaderStatus />
              </ChatHeaderInfo>
              <ChatHeaderActions>
                <Search size={20} />

                <MoreVertical size={20} />
              </ChatHeaderActions>
            </ChatHeader>

            <ChatMessages>
              {activeChat.messages.map((message) => (
                <MessageContainer
                  key={message.id}
                  sent={message.sent}
                  universe={activeChat.universe}
                >
                  {!message.sent && (
                    <MessageAvatar src={message.avatar} alt="Avatar" />
                  )}
                  <MessageBubble
                    sent={message.sent}
                    universe={activeChat.universe}
                  >
                    <MessageText>{message.text}</MessageText>
                    <MessageTime>
                      {formatMessageTime(message.timestamp)}
                    </MessageTime>
                  </MessageBubble>
                </MessageContainer>
              ))}
              <div ref={messagesEndRef} />
            </ChatMessages>

            <ChatInputContainer>
              <ChatInputWrapper>
                <ChatInputActions>
                  <Smile size={20} />

                  <Paperclip size={20} />

                  <ImageIcon size={20} />

                  <Mic size={20} />
                </ChatInputActions>
                <ChatInput
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <SendButton
                  onClick={handleSendMessage}
                  universe={activeChat.universe}
                >
                  <Send size={18} />
                </SendButton>
              </ChatInputWrapper>
            </ChatInputContainer>
          </>
        ) : (
          <EmptyChatState>
            <EmptyChatIcon>
              <Send size={40} />
            </EmptyChatIcon>
            <EmptyChatTitle>Your Messages</EmptyChatTitle>
            <EmptyChatText>
              Connect with professionals across the multiverse. Select a chat to
              start messaging.
            </EmptyChatText>
          </EmptyChatState>
        )}
      </ChatMain>
    </ChatContainer>
  );
};

export default ChatPage;
