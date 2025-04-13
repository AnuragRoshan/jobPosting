import React from "react";
import styled from "styled-components";
import { postsData, profilesData } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 32px;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

export const MainContent = styled.main`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-block: 32px;
  /* border-inline: 1px solid ${({ theme }) => theme.colors.divider}; */
  justify-content: center;
  align-items: center;
`;

export const SideContent = styled.aside`
  flex: 2;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
export const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  /* box-shadow: ${({ theme }) => theme.shadows.sm}; */
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;
`;

export const PostCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  width: 50vw;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

export const PostAuthorInfo = styled.div`
  flex: 1;
`;

export const PostAuthorName = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PostAuthorTitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostTime = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const PostContent = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: pre-wrap;
`;

export const PostImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const PostActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const PostAction = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary.main : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color
    ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    transform: scale(1.2);
    transition: transform 200ms
      ${({ theme }) => theme.transitions.easing.easeInOut};
    transform: scale(1.2) rotate(-5deg);
  }
`;

export const ActionCount = styled.span`
  margin-left: ${({ theme }) => theme.spacing[1]};
`;

export const CreatePostCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CreatePostInput = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-left: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;

  &:hover {
  }
`;

const SideCardTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[3]} 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ConnectionCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color
    ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
  }
`;

const ConnectionInfo = styled.div`
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

const ConnectionName = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ConnectionTitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const currentProfile = profilesData.find(
    (profile) => profile.id === user?.id
  );
  const connections = currentProfile
    ? profilesData.filter((profile) =>
        currentProfile.connections.includes(profile.id)
      )
    : [];

  return (
    <HomeContainer>
      <MainContent>
        <CreatePostCard>
          <Avatar src={user?.avatar} alt={user?.name} />
          <CreatePostInput>
            <input
              type="text"
              placeholder="What's on your mind?"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "inherit",
                color: "inherit",
              }}
            />
          </CreatePostInput>
        </CreatePostCard>

        {postsData.map((post) => (
          <PostCard key={post.id}>
            <PostHeader>
              <Avatar
                src={post.authorAvatar}
                alt={post.author}
                onClick={() => {
                  window.location.href = `/profile/${post.authorId}`;
                }}
              />
              <PostAuthorInfo>
                <PostAuthorName>{post.author}</PostAuthorName>
                <PostAuthorTitle>{post.authorTitle}</PostAuthorTitle>
              </PostAuthorInfo>
              <PostTime>{formatDate(post.createdAt)}</PostTime>
            </PostHeader>

            <PostContent>{post.content}</PostContent>

            {post.images.length > 0 && (
              <PostImages>
                {post.images.map((image, index) => (
                  <PostImage key={index} src={image} alt="Post image" />
                ))}
              </PostImages>
            )}

            <PostActions>
              <div style={{ display: "flex" }}>
                <PostAction active={post.liked}>
                  <ThumbsUp size={16} style={{ marginRight: 2 }} />
                  <ActionCount>{post.likes}</ActionCount>
                </PostAction>
                <PostAction>
                  <MessageCircle size={16} style={{ marginRight: 2 }} />
                  <ActionCount>{post.comments}</ActionCount>
                </PostAction>
              </div>
              <div>
                <PostAction>
                  <Share2 size={16} style={{ marginRight: 2 }} />
                  <ActionCount>{post.shares}</ActionCount>
                </PostAction>
              </div>
            </PostActions>
          </PostCard>
        ))}
      </MainContent>

      <SideContent>
        <Card>
          <div
            style={{
              padding: "15px",
            }}
          >
            <SideCardTitle>People You May Know</SideCardTitle>
            <ConnectionContainer>
              {connections.slice(0, 4).map((connection) => (
                <ConnectionCard key={connection.id}>
                  <Avatar
                    src={connection.avatar}
                    alt={connection.name}
                    style={{ width: "32px", height: "32px" }}
                  />
                  <ConnectionInfo>
                    <ConnectionName>{connection.name}</ConnectionName>
                    <ConnectionTitle>{connection.title}</ConnectionTitle>
                  </ConnectionInfo>
                </ConnectionCard>
              ))}
              {connections.length > 4 && (
                <div
                  style={{
                    marginTop: "10px",
                    background: "none",
                    border: "none",
                    color: "#9d00ff",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  onClick={() => {
                    const container = document.getElementById("connections");
                    if (container) {
                      container.style.maxHeight =
                        container.style.maxHeight === "none" ? "200px" : "none";
                    }
                  }}
                >
                  Show{" "}
                  {document.getElementById("connections")?.style.maxHeight ===
                  "none"
                    ? "Less"
                    : "More"}
                </div>
              )}
            </ConnectionContainer>
          </div>
        </Card>
      </SideContent>
    </HomeContainer>
  );
};

export default HomePage;
