import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { profilesData, postsData } from "../data/mockData";
import {
  ActionCount,
  Avatar,
  Card,
  PostAction,
  PostActions,
  PostAuthorInfo,
  PostAuthorName,
  PostAuthorTitle,
  PostCard,
  PostContent,
  PostHeader,
  PostImage,
  PostImages,
  PostTime,
} from "./HomePage";
import {
  CircleFadingPlus,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const COnnectContainer = styled.div`
  display: flex;
  gap: calc(${({ theme }) => theme.spacing[2]} * 1.5);
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  box-shadow: 0 1px 3px #73ff7144;
  /* width: max-content; */
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-5px);
    transition: transform 0.5s ease;
  }
  &:not(:hover) {
    transform: translateY(0);
    transition: transform 0.2s ease;
  }
`;

const ProfileHeader = styled.div`
  position: relative;
  height: 200px;
  background-image: url("https://images.unsplash.com/photo-1742944085736-65d142cef76d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
`;

const ProfileContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProfileMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileInfo = styled(Card)`
  position: relative;
  margin-top: -100px;
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
`;

const ProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background.paper};
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  display: block;
`;

const ProfileName = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
`;

const ProfileTitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

const ProfileLocation = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

const ProfileSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const ProfileSectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[3]} 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.primary.light};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.divider}; */
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const SkillTag = styled.span`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.tertiary.light};

  box-shadow: 0 1px 3px #73ff7144;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.background.paper};
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.1);
  border: 0.2px solid ${({ theme }) => theme.colors.divider};
  padding: 0.5em;

  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ExperienceTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ExperienceCompany = styled.h4`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const ExperienceDate = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const profile = profilesData.find((p) => p.id === id);
  const profilePosts = postsData.filter(
    (post) => post.author === profile?.name
  );

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const formatExperienceDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileContent>
        <ProfileMain>
          <div>
            <ProfileInfo>
              {id !== "1" ? (
                <COnnectContainer>
                  <CircleFadingPlus />
                  <div>Connect</div>
                </COnnectContainer>
              ) : (
                <></>
              )}
              <ProfileAvatar src={profile.avatar} alt={profile.name} />
              <ProfileName>{profile.name}</ProfileName>
              <ProfileTitle>
                {profile.title} at {profile.company}
              </ProfileTitle>
              <ProfileLocation>{profile.location}</ProfileLocation>

              <ProfileSection>
                <ProfileSectionTitle>About</ProfileSectionTitle>
                <p>{profile.bio}</p>
              </ProfileSection>

              <ProfileSection>
                <ProfileSectionTitle>Skills</ProfileSectionTitle>
                <SkillsList>
                  {profile.skills.map((skill, index) => (
                    <SkillTag key={index}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </ProfileSection>
            </ProfileInfo>
          </div>

          <div>
            <Card style={{ padding: "20px", marginTop: "20px" }}>
              <ProfileSectionTitle>Experience</ProfileSectionTitle>
              {profile.experience.map((exp) => (
                <ExperienceItem key={exp.id}>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceCompany>{exp.company}</ExperienceCompany>
                  <ExperienceDate>
                    {formatExperienceDate(exp.startDate)} -{" "}
                    {exp.endDate
                      ? formatExperienceDate(exp.endDate)
                      : "Present"}
                  </ExperienceDate>
                  <p>{exp.description}</p>
                </ExperienceItem>
              ))}
            </Card>

            <Card style={{ padding: "20px", marginTop: "20px" }}>
              <ProfileSectionTitle>Education</ProfileSectionTitle>
              {profile.education.map((edu) => (
                <ExperienceItem key={edu.id}>
                  <ExperienceTitle>{edu.school}</ExperienceTitle>
                  <ExperienceCompany>
                    {edu.degree} in {edu.field}
                  </ExperienceCompany>
                  <ExperienceDate>
                    {formatExperienceDate(edu.startDate)} -{" "}
                    {edu.endDate
                      ? formatExperienceDate(edu.endDate)
                      : "Present"}
                  </ExperienceDate>
                  <p>{edu.description}</p>
                </ExperienceItem>
              ))}
            </Card>
            <Card style={{ padding: "20px", marginTop: "20px" }}>
              <ProfileSectionTitle>Posts</ProfileSectionTitle>
              {profilePosts.map((post) => (
                <PostCard key={post.id}>
                  <PostHeader>
                    <Avatar src={post.authorAvatar} alt={post.author} />
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
                    <PostAction active={post.liked}>
                      <ThumbsUp size={16} style={{ marginRight: 2 }} />
                      <ActionCount>{post.likes}</ActionCount>
                    </PostAction>
                    <PostAction>
                      <MessageCircle size={16} style={{ marginRight: 2 }} />
                      <ActionCount>{post.comments}</ActionCount>
                    </PostAction>
                    <PostAction>
                      <Share2 size={16} style={{ marginRight: 2 }} />
                      <ActionCount>{post.shares}</ActionCount>
                    </PostAction>
                  </PostActions>
                </PostCard>
              ))}
            </Card>
          </div>
        </ProfileMain>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfilePage;
