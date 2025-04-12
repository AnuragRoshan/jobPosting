import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { jobsData } from "../data/mockData";
import { Card } from "../components/ui/cards/Card";
// import { HomeContainer } from "./HomePage";

export const JobsContainer = styled.div`
  padding: 64px; /* Navbar height */
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-left: 300px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const JobsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const JobsTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing[2]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const JobsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const JobCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const JobLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: ${({ theme }) => theme.spacing[4]};
    margin-bottom: 0;
  }
`;

const JobContent = styled.div`
  flex: 1;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const JobTitle = styled(Link)`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const JobCompany = styled.h3`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;

export const JobMetaItem = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
`;

const JobDate = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.disabled};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing[1]};
  }
`;

export const JobTypeTag = styled.span<{ jobType: string }>`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: ${({ jobType, theme }) => {
    switch (jobType) {
      case "Full-time":
        return theme.colors.success.light;
      case "Part-time":
        return theme.colors.info.light;
      case "Contract":
        return theme.colors.warning.light;
      case "Internship":
        return theme.colors.secondary.light;
      case "Remote":
        return theme.colors.primary.light;
      default:
        return theme.colors.grey[200];
    }
  }};
  color: ${({ jobType, theme }) => {
    switch (jobType) {
      case "Full-time":
        return theme.colors.success.dark;
      case "Part-time":
        return theme.colors.info.dark;
      case "Contract":
        return theme.colors.warning.dark;
      case "Internship":
        return theme.colors.secondary.dark;
      case "Remote":
        return theme.colors.primary.dark;
      default:
        return theme.colors.grey[800];
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: 500;
`;

const JobDescription = styled.p`
  margin: ${({ theme }) => theme.spacing[3]} 0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const JobFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const ApplicantCount = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ViewJobButton = styled(Link)`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: none;
  }
`;

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return `${diffDays} days ago`;
    }
  };

  return (
    <JobsContainer>
      <JobsHeader>
        <JobsTitle>Find Your Next Opportunity</JobsTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </JobsHeader>

      <JobsList>
        {filteredJobs.map((job) => (
          <JobCard key={job.id}>
            <JobLogo src={job.companyLogo} alt={job.company} />
            <JobContent>
              <JobHeader>
                <div>
                  <JobTitle to={`/jobs/${job.id}`}>{job.title}</JobTitle>
                  <JobCompany>{job.company}</JobCompany>
                </div>
                <JobDate>Posted {calculateDaysAgo(job.postedDate)}</JobDate>
              </JobHeader>

              <JobMeta>
                <JobMetaItem>{job.location}</JobMetaItem>
                <JobMetaItem>•</JobMetaItem>
                <JobMetaItem>{job.salary}</JobMetaItem>
                <JobMetaItem>•</JobMetaItem>
                <JobTypeTag jobType={job.type}>{job.type}</JobTypeTag>
              </JobMeta>

              <JobDescription>{job.description}</JobDescription>

              <JobFooter>
                <ApplicantCount>{job.applicants} applicants</ApplicantCount>
                <ViewJobButton to={`/jobs/${job.id}`}>View Job</ViewJobButton>
              </JobFooter>
            </JobContent>
          </JobCard>
        ))}

        {filteredJobs.length === 0 && (
          <Card style={{ padding: "20px", textAlign: "center" }}>
            <h3>No jobs found matching "{searchTerm}"</h3>
            <p>Try adjusting your search terms or clear the search field.</p>
          </Card>
        )}
      </JobsList>
    </JobsContainer>
  );
};

export default JobsPage;
