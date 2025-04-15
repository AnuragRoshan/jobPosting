import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { jobsData } from "../data/mockData";
import { Card } from "../components/ui/cards/Card";

export const JobsContainer = styled.div`
  padding: 10px 64px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
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
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const JobsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
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

// New filter components
const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const FilterLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const FilterSelect = styled.select`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

// const FilterButton = styled.button`
//   padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
//   background-color: ${({ theme }) => theme.colors.background.paper};
//   color: ${({ theme }) => theme.colors.text.primary};
//   border: 1px solid ${({ theme }) => theme.colors.divider};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   font-size: ${({ theme }) => theme.typography.button.fontSize};
//   font-weight: ${({ theme }) => theme.typography.button.fontWeight};
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[1]};
//   transition: all 0.2s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.background.light};
//   }

//   &.active {
//     background-color: ${({ theme }) => theme.colors.primary.main};
//     color: ${({ theme }) => theme.colors.primary.contrastText};
//     border-color: ${({ theme }) => theme.colors.primary.main};
//   }
// `;

const ClearFiltersButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    salary: "",
    company: "",
  });
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  // Extract unique values for filter options
  const jobTypes = [...new Set(jobsData.map((job) => job.type))];
  const locations = [...new Set(jobsData.map((job) => job.location))];
  const companies = [...new Set(jobsData.map((job) => job.company))];

  // Salary ranges
  const salaryRanges = [
    { label: "Under $50,000", value: "0-50000" },
    { label: "$50,000 - $100,000", value: "50000-100000" },
    { label: "$100,000 - $150,000", value: "100000-150000" },
    { label: "Over $150,000", value: "150000-999999" },
  ];

  useEffect(() => {
    // Count active filters
    let count = 0;
    Object.values(filters).forEach((value) => {
      if (value) count++;
    });
    setActiveFiltersCount(count);
  }, [filters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      jobType: "",
      location: "",
      salary: "",
      company: "",
    });
  };

  const filteredJobs = jobsData.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Job type filter
    if (filters.jobType && job.type !== filters.jobType) {
      return false;
    }

    // Location filter
    if (filters.location && !job.location.includes(filters.location)) {
      return false;
    }

    // Company filter
    if (filters.company && job.company !== filters.company) {
      return false;
    }

    // Salary filter
    if (filters.salary) {
      const [min, max] = filters.salary.split("-").map(Number);
      const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ""));
      if (jobSalary < min || jobSalary > max) {
        return false;
      }
    }

    return true;
  });

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

  const navigate = useNavigate();

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

      <FiltersContainer>
        <FilterGroup>
          <FilterLabel>Job Type</FilterLabel>
          <FilterSelect
            value={filters.jobType}
            onChange={(e) => handleFilterChange("jobType", e.target.value)}
          >
            <option value="">All Types</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Location</FilterLabel>
          <FilterSelect
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Salary Range</FilterLabel>
          <FilterSelect
            value={filters.salary}
            onChange={(e) => handleFilterChange("salary", e.target.value)}
          >
            <option value="">All Salaries</option>
            {salaryRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Company</FilterLabel>
          <FilterSelect
            value={filters.company}
            onChange={(e) => handleFilterChange("company", e.target.value)}
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        {activeFiltersCount > 0 && (
          <ClearFiltersButton onClick={clearFilters}>
            Clear Filters ({activeFiltersCount})
          </ClearFiltersButton>
        )}
      </FiltersContainer>

      <JobsList>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id}>
              <JobLogo
                src={job.companyLogo}
                alt={job.company}
                onClick={() => {
                  if (job.id) {
                    navigate(
                      `/companies/${job.company
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    );
                  }
                }}
              />
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
          ))
        ) : (
          <Card style={{ padding: "20px", textAlign: "center" }}>
            <h3>No jobs found</h3>
            <p>Try adjusting your filters or search terms.</p>
          </Card>
        )}
      </JobsList>
    </JobsContainer>
  );
};

export default JobsPage;
