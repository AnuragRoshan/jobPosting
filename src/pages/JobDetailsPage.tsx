import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { jobsData, profilesData } from "../data/mockData";
import { JobLogo, JobMeta, JobMetaItem, JobTypeTag } from "./JobsPage";
// import { Button } from "./LoginPage";
import { Card } from "./HomePage";

const JobDetailContainer = styled.div`
  padding: 64px; /* Navbar height */
  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
  /* width: 100vw; */

  padding-left: 300px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ApplyButtonContainer = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing[2]};
  display: flex;
  font-size: large;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
    transform: translateY(3px);
    text-decoration: none;
    box-shadow: 0 5px 0 rgb(187, 0, 255);
    cursor: pointer;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  &:hover {
    text-decoration: underline;
  }
`;

const JobDetailCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const JobDetailHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const JobDetailTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const JobDetailCompany = styled.h2`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const JobSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const JobSectionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const JobRequirementsList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;

const JobRequirementItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// const ApplyButton = styled.button`
//   width: 100%;
//   padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
//   background-color: ${({ theme }) => theme.colors.primary.main};
//   color: #fff;
//   border: none;
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   font-size: ${({ theme }) => theme.typography.button.fontSize};
//   font-weight: ${({ theme }) => theme.typography.button.fontWeight};
//   text-transform: uppercase;
//   cursor: pointer;
//   margin-top: ${({ theme }) => theme.spacing[4]};

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary.dark};
//   }
// `;

const JobPostedByCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const RecruiterInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const RecruiterAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

const RecruiterName = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RecruiterTitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const JobDetailsMeta = styled.div`
  margin: ${({ theme }) => theme.spacing[3]} 0;
`;

const JobDetailsMetaItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[2]} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`;

const MetaLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const MetaValue = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
`;

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.id === id);
  const postedBy = job ? profilesData.find((p) => p.id === job.postedBy) : null;

  if (!job || !postedBy) {
    return <div>Job not found</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <JobDetailContainer>
      <div>
        <BackButton onClick={() => navigate(-1)}>← Back to Jobs</BackButton>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <div style={{ flex: "1" }}>
          <JobDetailCard>
            <JobDetailHeader>
              <JobLogo
                src={job.companyLogo}
                alt={job.company}
                style={{ marginRight: "20px" }}
              />
              <div>
                <JobDetailTitle>{job.title}</JobDetailTitle>
                <JobDetailCompany>{job.company}</JobDetailCompany>
                <JobMeta style={{ marginTop: "8px" }}>
                  <JobMetaItem>{job.location}</JobMetaItem>
                  <JobMetaItem>•</JobMetaItem>
                  <JobMetaItem>{job.salary}</JobMetaItem>
                  <JobMetaItem>•</JobMetaItem>
                  <JobTypeTag jobType={job.type}>{job.type}</JobTypeTag>
                </JobMeta>
              </div>
            </JobDetailHeader>

            <JobSection>
              <JobSectionTitle>Description</JobSectionTitle>
              <p>{job.description}</p>
            </JobSection>

            <JobSection>
              <JobSectionTitle>Requirements</JobSectionTitle>
              <JobRequirementsList>
                {job.requirements.map((req, index) => (
                  <JobRequirementItem key={index}>{req}</JobRequirementItem>
                ))}
              </JobRequirementsList>
            </JobSection>

            <ApplyButtonContainer
              style={{
                marginTop: "30px",
              }}
            >
              Apply Now
            </ApplyButtonContainer>
          </JobDetailCard>
        </div>

        <div style={{ flex: "1" }}>
          <JobPostedByCard>
            <JobSectionTitle>Posted by</JobSectionTitle>
            <RecruiterInfo>
              <RecruiterAvatar src={postedBy.avatar} alt={postedBy.name} />
              <div>
                <RecruiterName>{postedBy.name}</RecruiterName>
                <RecruiterTitle>{postedBy.title}</RecruiterTitle>
              </div>
            </RecruiterInfo>
            <Link
              to={`/profile/${postedBy.id}`}
              style={{ textDecoration: "none" }}
            >
              <ApplyButtonContainer
                style={{
                  width: "100%",
                }}
              >
                View Profile
              </ApplyButtonContainer>
            </Link>
          </JobPostedByCard>

          <JobPostedByCard style={{ marginTop: "0px" }}>
            <JobSectionTitle>Job Details</JobSectionTitle>
            <JobDetailsMeta>
              <JobDetailsMetaItem>
                <MetaLabel>Posted On</MetaLabel>
                <MetaValue>{formatDate(job.postedDate)}</MetaValue>
              </JobDetailsMetaItem>
              <JobDetailsMetaItem>
                <MetaLabel>Job Type</MetaLabel>
                <MetaValue>{job.type}</MetaValue>
              </JobDetailsMetaItem>
              <JobDetailsMetaItem>
                <MetaLabel>Salary</MetaLabel>
                <MetaValue>{job.salary}</MetaValue>
              </JobDetailsMetaItem>
              <JobDetailsMetaItem>
                <MetaLabel>Location</MetaLabel>
                <MetaValue>{job.location}</MetaValue>
              </JobDetailsMetaItem>
              <JobDetailsMetaItem>
                <MetaLabel>Applicants</MetaLabel>
                <MetaValue>{job.applicants}</MetaValue>
              </JobDetailsMetaItem>
            </JobDetailsMeta>
            <ApplyButtonContainer>Apply Now</ApplyButtonContainer>
          </JobPostedByCard>
        </div>
      </div>
    </JobDetailContainer>
  );
};

export default JobDetailsPage;
