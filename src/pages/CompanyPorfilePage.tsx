"use client";

import type React from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { companiesData } from "../data/mockData";
import { Typography } from "../components/ui/typography/Typography";
import styled, { keyframes } from "styled-components";
import {
  MapPin,
  Globe,
  Calendar,
  Users,
  Award,
  Briefcase,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components
const PageContainer = styled.div`
  padding: 64px 32px 32px 300px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyLogo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transition: box-shadow 0.3s ease;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CompanyName = styled(Typography)`
  margin-bottom: 0.5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.secondary.main}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: 0.25rem;

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    width: 16px;
    height: 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-2px);
    }
  }
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transition: box-shadow 0.3s ease;
  }
`;

const SectionTitle = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const DescriptionText = styled(Typography)`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.4rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.contrastText};
    transition: all 0.2s ease;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary.main};
`;

const MemberName = styled(Typography)`
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const MemberRole = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

const MemberBio = styled(Typography)`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
`;

const MemberLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    text-decoration: underline;
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ImageCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  height: 200px;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ProductCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.light};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideInRight} 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ProductImage = styled.div`
  height: 160px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 1.25rem;
`;

const ProductName = styled(Typography)`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled(Typography)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProductLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const AwardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const AwardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  opacity: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.background.gradient};
    transition: background 0.3s ease;
  }
`;

const AwardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  animation: ${pulse} 2s infinite ease-in-out;
  flex-shrink: 0;
`;

const AwardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AwardTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AwardMeta = styled(Typography)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: calc(0.1s * var(--index, 0));
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.background.gradient};
  }
`;

const ValueTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const OpenPositionsTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  animation: ${pulse} 2s infinite ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
    cursor: pointer;
  }
`;

const WebsiteLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 500;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  const company = companiesData.find((c) => c.id === companyId);
  //   const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!company) {
    return (
      <PageContainer>
        <NotFoundContainer>
          <Typography variant="h2">Company Not Found</Typography>
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            We couldn't find the company you're looking for. Please check the
            URL and try again.
          </Typography>
        </NotFoundContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderSection>
        <CompanyLogo>
          <img src={company.logo || "/placeholder.svg"} alt={company.name} />
        </CompanyLogo>
        <CompanyInfo>
          <CompanyName variant="h1">{company.name}</CompanyName>

          <InfoRow>
            <MapPin /> {company.location}
          </InfoRow>

          <InfoRow>
            <Calendar /> Founded in {company.founded}
          </InfoRow>

          <InfoRow>
            <Briefcase /> {company.industry}
          </InfoRow>

          <InfoRow>
            <Users /> {company.size}
          </InfoRow>

          <SocialLinks>
            {company.socialMedia.linkedin && (
              <a
                href={company.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            )}
            {company.socialMedia.twitter && (
              <a
                href={company.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
            )}
            {company.socialMedia.facebook && (
              <a
                href={company.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
            )}
            {company.socialMedia.instagram && (
              <a
                href={company.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
            )}
          </SocialLinks>

          {company.openPositions > 0 && (
            <OpenPositionsTag>
              {company.openPositions} Open Positions <ChevronRight size={16} />
            </OpenPositionsTag>
          )}
        </CompanyInfo>
      </HeaderSection>

      <Section>
        <SectionTitle variant="h2">
          <Globe /> About {company.name}
        </SectionTitle>
        <DescriptionText variant="body1">{company.description}</DescriptionText>

        <TagsContainer>
          <Tag>Industry: {company.industry}</Tag>
          <Tag>Size: {company.size}</Tag>
          {company.revenue && <Tag>Revenue: {company.revenue}</Tag>}
        </TagsContainer>

        <WebsiteLink
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} /> Visit Website <ExternalLink size={14} />
        </WebsiteLink>
      </Section>

      {company.culture && (
        <Section>
          <SectionTitle variant="h2">
            <Users /> Company Culture
          </SectionTitle>
          <DescriptionText variant="body1">{company.culture}</DescriptionText>

          {company.values && company.values.length > 0 && (
            <>
              <Typography
                variant="h3"
                style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
              >
                Our Values
              </Typography>

              <ValuesContainer>
                {company.values.map((value, index) => (
                  <ValueItem
                    key={index}
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <ValueTitle variant="subtitle1">{value}</ValueTitle>
                  </ValueItem>
                ))}
              </ValuesContainer>
            </>
          )}
        </Section>
      )}

      {company.team && company.team.length > 0 && (
        <Section>
          <SectionTitle variant="h2">
            <Users /> Meet Our Team
          </SectionTitle>

          <TeamGrid>
            {company.team.map((member, index) => (
              <TeamMember
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                <Avatar src={member.avatar} alt={member.name} />
                <MemberName variant="subtitle1">{member.name}</MemberName>
                <MemberRole variant="body2">{member.role}</MemberRole>
                {member.bio && (
                  <MemberBio variant="body2">{member.bio}</MemberBio>
                )}
                {member.linkedin && (
                  <MemberLink
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={14} /> LinkedIn Profile
                  </MemberLink>
                )}
              </TeamMember>
            ))}
          </TeamGrid>
        </Section>
      )}

      {company.products && company.products.length > 0 && (
        <Section>
          <SectionTitle variant="h2">
            <Briefcase /> Products & Services
          </SectionTitle>

          <ProductsGrid>
            {company.products.map((product, index) => (
              <ProductCard
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                {product.image && (
                  <ProductImage>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                    />
                  </ProductImage>
                )}
                <ProductContent>
                  <ProductName variant="h4">{product.name}</ProductName>
                  <ProductDescription variant="body2">
                    {product.description}
                  </ProductDescription>
                  {product.link && (
                    <ProductLink
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more <ChevronRight size={14} />
                    </ProductLink>
                  )}
                </ProductContent>
              </ProductCard>
            ))}
          </ProductsGrid>
        </Section>
      )}

      {company.awards && company.awards.length > 0 && (
        <Section>
          <SectionTitle variant="h2">
            <Award /> Awards & Recognition
          </SectionTitle>

          <AwardsContainer>
            {company.awards.map((award, index) => (
              <AwardItem
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                <AwardIcon>
                  <Award size={24} />
                </AwardIcon>
                <AwardContent>
                  <AwardTitle variant="subtitle1">{award.title}</AwardTitle>
                  <AwardMeta variant="body2">
                    {award.year} • {award.issuer}
                  </AwardMeta>
                </AwardContent>
              </AwardItem>
            ))}
          </AwardsContainer>
        </Section>
      )}

      {company.officeImages && company.officeImages.length > 0 && (
        <Section>
          <SectionTitle variant="h2">
            <MapPin /> Our Offices
          </SectionTitle>

          <ImagesGrid>
            {company.officeImages.map((image, index) => (
              <ImageCard
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${company.name} office ${index + 1}`}
                />
              </ImageCard>
            ))}
          </ImagesGrid>
        </Section>
      )}

      {company.benefits && company.benefits.length > 0 && (
        <Section>
          <SectionTitle variant="h2">
            <Award /> Benefits & Perks
          </SectionTitle>

          <TagsContainer>
            {company.benefits.map((benefit, index) => (
              <Tag key={index}>{benefit}</Tag>
            ))}
          </TagsContainer>
        </Section>
      )}
    </PageContainer>
  );
};

export default CompanyDetailsPage;
