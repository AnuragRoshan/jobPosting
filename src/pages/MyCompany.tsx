"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { companiesData, jobsData } from "../data/mockData";
import { Card } from "../components/ui/cards/Card";
import {
  BarChart,
  LineChart,
  PieChart,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Building2,
  Briefcase,
  Users,
  BarChart3,
  Edit,
  Eye,
  Trash2,
  Plus,
  Award,
  Heart,
  Globe,
  MapPin,
  Calendar,
  UserPlus,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  Filter,
  Mail,
  Phone,
  Download,
} from "lucide-react";

const PageContainer = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 16px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main}, transparent)`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const PageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main})`};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const PageTitleContent = styled.div``;

const PageTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PageSubtitle = styled.p`
  margin: ${({ theme }) => `${theme.spacing[1]} 0 0`};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

const Tab = styled.div<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  background: none;
  border: none;
  border-bottom: 3px solid
    ${({ active, theme }) =>
      active ? theme.colors.secondary.main : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.secondary.main : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ active }) => (active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  white-space: nowrap;

  &:hover {
    color: ${({ theme, active }) =>
      active ? theme.colors.secondary.main : theme.colors.primary.main};
    /* border-bottom-color: ${({ theme, active }) =>
      active ? theme.colors.secondary.main : theme.colors.primary.light}; */
  }
`;

const TabBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.secondary.contrastText};
  font-size: 12px;
  font-weight: 600;
`;

const Button = styled.div<{
  variant?: "primary" | "secondary" | "outline" | "danger";
}>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  background-color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.colors.secondary.main
      : variant === "outline"
      ? "transparent"
      : variant === "danger"
      ? theme.colors.error.main
      : theme.colors.primary.main};
  color: ${({ theme, variant }) =>
    variant === "outline"
      ? theme.colors.primary.main
      : variant === "secondary"
      ? theme.colors.secondary.contrastText
      : theme.colors.primary.contrastText};
  border: ${({ theme, variant }) =>
    variant === "outline" ? `1px solid ${theme.colors.primary.main}` : "none"};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  box-shadow: ${({ theme, variant }) =>
    variant === "outline" ? "none" : theme.shadows.sm};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "secondary"
        ? theme.colors.secondary.dark
        : variant === "outline"
        ? theme.colors.background.light
        : variant === "danger"
        ? theme.colors.error.dark
        : theme.colors.primary.dark};
    transform: translateY(-1px);
    box-shadow: ${({ theme, variant }) =>
      variant === "outline" ? "none" : theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme, variant }) =>
      variant === "outline" ? "none" : theme.shadows.sm};
  }
`;

const CompanyProfileCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CompanyLogoWrapper = styled.div`
  position: relative;
`;

const CompanyLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CompanyMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const CompanyMetaItem = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const CompanyWebsite = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const SectionDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.divider};
  margin: ${({ theme }) => `${theme.spacing[6]} 0`};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 1px;
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main})`};
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
`;

const ValuesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const ValueTag = styled.div`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background-color: ${({ theme }) => `${theme.colors.secondary.main}15`};
  color: ${({ theme }) => theme.colors.secondary.main};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.light};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
    background-color: ${({ theme }) => `${theme.colors.primary.main}10`};
  }
`;

const BenefitIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => `${theme.colors.secondary.main}15`};
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const TeamSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TeamMemberAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const TeamMemberName = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TeamMemberRole = styled.p`
  margin: ${({ theme }) => `${theme.spacing[1]} 0 0`};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const JobsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const JobsFilters = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const FilterSelect = styled.select`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const JobsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const JobCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: ${({ theme }) => theme.colors.background.paper};
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary.main};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h4`
  margin: 0 0 ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const JobMetaItem = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const JobStatus = styled.div<{ status: "active" | "draft" | "closed" }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: 500;
  background-color: ${({ theme, status }) =>
    status === "active"
      ? `${theme.colors.success.main}15`
      : status === "draft"
      ? `${theme.colors.warning.main}15`
      : `${theme.colors.error.main}15`};
  color: ${({ theme, status }) =>
    status === "active"
      ? theme.colors.success.main
      : status === "draft"
      ? theme.colors.warning.main
      : theme.colors.error.main};
`;

const JobActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const ActionButton = styled.div<{
  variant?: "primary" | "secondary" | "danger";
}>`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background-color: transparent;
  color: ${({ theme, variant }) =>
    variant === "danger"
      ? theme.colors.error.main
      : variant === "secondary"
      ? theme.colors.secondary.main
      : theme.colors.primary.main};
  border: 1px solid
    ${({ theme, variant }) =>
      variant === "danger"
        ? theme.colors.error.main
        : variant === "secondary"
        ? theme.colors.secondary.main
        : theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "danger"
        ? theme.colors.error.main
        : variant === "secondary"
        ? theme.colors.secondary.main
        : theme.colors.primary.main};
    color: ${({ theme, variant }) =>
      variant === "danger"
        ? "white"
        : variant === "secondary"
        ? theme.colors.secondary.contrastText
        : theme.colors.primary.contrastText};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const EmptyStateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]};
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.colors.secondary.main}15`};
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const EmptyStateTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const EmptyStateDescription = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

// Analytics components
const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const AnalyticsCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: ${({ theme }) => theme.colors.background.paper};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const AnalyticsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const AnalyticsCardTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const AnalyticsCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => `${theme.colors.secondary.main}15`};
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const AnalyticsValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const AnalyticsChange = styled.div<{ positive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme, positive }) =>
    positive ? theme.colors.success.main : theme.colors.error.main};
`;

const AnalyticsChartContainer = styled.div`
  height: 400px;
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

// Applicants components
const ApplicantsFilters = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const ApplicantsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ApplicantCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: ${({ theme }) => theme.colors.background.paper};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const ApplicantHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ApplicantInfo = styled.div`
  flex: 1;
`;

const ApplicantAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const ApplicantName = styled.h4`
  margin: 0 0 ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ApplicantMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ApplicantMetaItem = styled.span`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const ApplicantStatus = styled.div<{
  status: "new" | "reviewed" | "interviewed" | "offered" | "rejected";
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: 500;
  background-color: ${({ theme, status }) =>
    status === "new"
      ? `${theme.colors.info.main}15`
      : status === "reviewed"
      ? `${theme.colors.secondary.main}15`
      : status === "interviewed"
      ? `${theme.colors.primary.main}15`
      : status === "offered"
      ? `${theme.colors.success.main}15`
      : `${theme.colors.error.main}15`};
  color: ${({ theme, status }) =>
    status === "new"
      ? theme.colors.info.main
      : status === "reviewed"
      ? theme.colors.secondary.main
      : status === "interviewed"
      ? theme.colors.primary.main
      : status === "offered"
      ? theme.colors.success.main
      : theme.colors.error.main};
`;

const ApplicantActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
  justify-content: flex-end;
`;

const ApplicantJobInfo = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const ApplicantJobTitle = styled.div`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Mock data for analytics
const viewsData = [
  { name: "Jan", views: 400 },
  { name: "Feb", views: 300 },
  { name: "Mar", views: 500 },
  { name: "Apr", views: 780 },
  { name: "May", views: 890 },
  { name: "Jun", views: 1290 },
  { name: "Jul", views: 1490 },
];

const applicationsData = [
  { name: "Jan", applications: 20 },
  { name: "Feb", applications: 18 },
  { name: "Mar", applications: 25 },
  { name: "Apr", applications: 32 },
  { name: "May", applications: 45 },
  { name: "Jun", applications: 50 },
  { name: "Jul", applications: 65 },
];

const jobTypeData = [
  { name: "Full-time", value: 65 },
  { name: "Part-time", value: 15 },
  { name: "Contract", value: 10 },
  { name: "Remote", value: 10 },
];

const COLORS = ["#6d28d9", "#f59e0b", "#10b981", "#3b82f6"];

// Mock applicants data
const applicantsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    appliedFor: "Senior React Developer",
    appliedDate: "2025-04-05",
    status: "new" as const,
    resumeUrl: "#",
    coverLetterUrl: "#",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    email: "michael.chen@example.com",
    phone: "(555) 987-6543",
    appliedFor: "Frontend Developer",
    appliedDate: "2025-04-03",
    status: "reviewed" as const,
    resumeUrl: "#",
    coverLetterUrl: "#",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    email: "emily.rodriguez@example.com",
    phone: "(555) 456-7890",
    appliedFor: "Senior React Developer",
    appliedDate: "2025-04-01",
    status: "interviewed" as const,
    resumeUrl: "#",
    coverLetterUrl: "#",
  },
];

const MyCompanyPage: React.FC = () => {
  // For demo purposes, we'll use TechCorp as the user's company
  const myCompany = companiesData.find((company) => company.id === "techcorp");
  const companyJobs = jobsData.filter((job) => job.company === "TechCorp Inc");

  const [activeTab, setActiveTab] = useState("profile");
  const [jobStatusFilter, setJobStatusFilter] = useState("all");
  const [applicantStatusFilter, setApplicantStatusFilter] = useState("all");

  // Filter jobs based on status
  const filteredJobs = companyJobs
    .map((job, index) => {
      // Assign a status for demo purposes
      const statuses = ["active", "draft", "closed"] as const;
      const status = statuses[index % statuses.length];
      return { ...job, status };
    })
    .filter((job) => {
      if (jobStatusFilter === "all") return true;
      return job.status === jobStatusFilter;
    });

  // Filter applicants based on status
  const filteredApplicants = applicantsData.filter((applicant) => {
    if (applicantStatusFilter === "all") return true;
    return applicant.status === applicantStatusFilter;
  });

  if (!myCompany) {
    return (
      <PageContainer>
        <EmptyState>
          <EmptyStateIcon>
            <Building2 size={40} />
          </EmptyStateIcon>
          <EmptyStateTitle>
            You don't have a company profile yet
          </EmptyStateTitle>
          <EmptyStateDescription>
            Create a company profile to post jobs, build your brand, and attract
            top talent to your organization.
          </EmptyStateDescription>
          <Button>
            <Plus size={18} />
            Create Company Profile
          </Button>
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageTitleWrapper>
          <PageIcon>
            <Building2 size={24} />
          </PageIcon>
          <PageTitleContent>
            <PageTitle>My Company</PageTitle>
            <PageSubtitle>
              Manage your company profile, job listings, and applicants
            </PageSubtitle>
          </PageTitleContent>
        </PageTitleWrapper>
        <Button>
          <Edit size={18} />
          Edit Company Profile
        </Button>
      </PageHeader>

      <TabsContainer>
        <Tab
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          <Building2 size={18} />
          Company Profile
        </Tab>
        <Tab active={activeTab === "jobs"} onClick={() => setActiveTab("jobs")}>
          <Briefcase size={18} />
          Job Listings
          <TabBadge>{companyJobs.length}</TabBadge>
        </Tab>
        <Tab
          active={activeTab === "applicants"}
          onClick={() => setActiveTab("applicants")}
        >
          <Users size={18} />
          Applicants
          <TabBadge>{applicantsData.length}</TabBadge>
        </Tab>
        <Tab
          active={activeTab === "analytics"}
          onClick={() => setActiveTab("analytics")}
        >
          <BarChart3 size={18} />
          Analytics
        </Tab>
      </TabsContainer>

      {activeTab === "profile" && (
        <CompanyProfileCard>
          <CompanyHeader>
            <CompanyLogoWrapper>
              <CompanyLogo src={myCompany.logo} alt={myCompany.name} />
              {/* <EditLogoButton>
                <Edit size={16} />
              </EditLogoButton> */}
            </CompanyLogoWrapper>
            <CompanyInfo>
              <CompanyName>{myCompany.name}</CompanyName>
              <CompanyMeta>
                <CompanyMetaItem>
                  <Briefcase size={16} />
                  {myCompany.industry}
                </CompanyMetaItem>
                <CompanyMetaItem>
                  <MapPin size={16} />
                  {myCompany.location}
                </CompanyMetaItem>
                <CompanyMetaItem>
                  <Users size={16} />
                  {myCompany.size}
                </CompanyMetaItem>
                <CompanyMetaItem>
                  <Calendar size={16} />
                  Founded in {myCompany.founded}
                </CompanyMetaItem>
              </CompanyMeta>
              <CompanyWebsite
                href={myCompany.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={16} />
                {myCompany.website}
              </CompanyWebsite>
            </CompanyInfo>
          </CompanyHeader>

          <SectionTitle>
            <Building2 size={18} />
            About
          </SectionTitle>
          <Description>{myCompany.description}</Description>

          <SectionDivider />

          <SectionTitle>
            <Heart size={18} />
            Company Culture
          </SectionTitle>
          <Description>{myCompany.culture}</Description>

          <SectionDivider />

          <SectionTitle>
            <Award size={18} />
            Values
          </SectionTitle>
          <ValuesList>
            {myCompany.values.map((value, index) => (
              <ValueTag key={index}>
                <CheckCircle2 size={14} />
                {value}
              </ValueTag>
            ))}
          </ValuesList>

          <SectionDivider />

          <SectionTitle>
            <Heart size={18} />
            Benefits
          </SectionTitle>
          <BenefitsList>
            {myCompany.benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>
                  <CheckCircle2 size={16} />
                </BenefitIcon>
                {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>

          <SectionDivider />

          <SectionTitle>
            <Users size={18} />
            Team
          </SectionTitle>
          <TeamSection>
            <TeamGrid>
              {myCompany.team.map((member, index) => (
                <TeamMember key={index}>
                  <TeamMemberAvatar src={member.avatar} alt={member.name} />
                  <TeamMemberName>{member.name}</TeamMemberName>
                  <TeamMemberRole>{member.role}</TeamMemberRole>
                </TeamMember>
              ))}
              <TeamMember>
                <TeamMemberAvatar
                  src="/placeholder.svg?height=80&width=80"
                  alt="Add team member"
                  style={{
                    opacity: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f4f4f5",
                  }}
                />
                <TeamMemberName style={{ color: "#6b7280" }}>
                  Add Team Member
                </TeamMemberName>
                <TeamMemberRole>
                  <Button
                    variant="secondary"
                    style={{ padding: "4px 8px", fontSize: "12px" }}
                  >
                    <UserPlus size={14} />
                    Add
                  </Button>
                </TeamMemberRole>
              </TeamMember>
            </TeamGrid>
          </TeamSection>
        </CompanyProfileCard>
      )}

      {activeTab === "jobs" && (
        <>
          <JobsHeader>
            <div>
              <SectionTitle style={{ margin: 0 }}>
                <Briefcase size={18} />
                Active Job Listings
              </SectionTitle>
              <PageSubtitle>
                Manage your job postings and track applications
              </PageSubtitle>
            </div>
            <Button variant="secondary">
              <Plus size={18} />
              Post New Job
            </Button>
          </JobsHeader>

          <JobsFilters>
            <FilterSelect
              value={jobStatusFilter}
              onChange={(e) => setJobStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
            </FilterSelect>
            <Button variant="outline" style={{ padding: "8px 12px" }}>
              <Filter size={16} />
              More Filters
            </Button>
          </JobsFilters>

          <JobsList>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id}>
                  <JobInfo>
                    <JobTitle>{job.title}</JobTitle>
                    <JobMeta>
                      <JobMetaItem>
                        <MapPin size={14} />
                        {job.location}
                      </JobMetaItem>
                      <JobMetaItem>
                        <Briefcase size={14} />
                        {job.type}
                      </JobMetaItem>
                      <JobMetaItem>
                        <Calendar size={14} />
                        Posted on{" "}
                        {new Date(job.postedDate).toLocaleDateString()}
                      </JobMetaItem>
                    </JobMeta>
                    <JobStatus
                      status={job.status as "active" | "draft" | "closed"}
                    >
                      {job.status === "active" ? (
                        <>
                          <CheckCircle2 size={14} /> Active
                        </>
                      ) : job.status === "draft" ? (
                        <>
                          <Clock size={14} /> Draft
                        </>
                      ) : (
                        <>
                          <XCircle size={14} /> Closed
                        </>
                      )}
                    </JobStatus>
                    <JobMetaItem style={{ marginTop: "8px" }}>
                      <Users size={14} />
                      {job.applicants} applicants
                    </JobMetaItem>
                  </JobInfo>
                  <JobActions>
                    <ActionButton>
                      <Edit size={16} />
                      Edit
                    </ActionButton>
                    <ActionButton variant="secondary">
                      <Eye size={16} />
                      View
                    </ActionButton>
                    <ActionButton variant="danger">
                      <Trash2 size={16} />
                      Delete
                    </ActionButton>
                  </JobActions>
                </JobCard>
              ))
            ) : (
              <EmptyState>
                <EmptyStateIcon>
                  <Briefcase size={40} />
                </EmptyStateIcon>
                <EmptyStateTitle>No active job listings</EmptyStateTitle>
                <EmptyStateDescription>
                  Post your first job to start receiving applications from
                  qualified candidates.
                </EmptyStateDescription>
                <Button variant="secondary">
                  <Plus size={18} />
                  Post a Job
                </Button>
              </EmptyState>
            )}
          </JobsList>
        </>
      )}

      {activeTab === "applicants" && (
        <>
          <JobsHeader>
            <div>
              <SectionTitle style={{ margin: 0 }}>
                <Users size={18} />
                Applicant Management
              </SectionTitle>
              <PageSubtitle>
                Review and manage applications for your job listings
              </PageSubtitle>
            </div>
          </JobsHeader>

          <ApplicantsFilters>
            <FilterSelect
              value={applicantStatusFilter}
              onChange={(e) => setApplicantStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
              <option value="interviewed">Interviewed</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
            </FilterSelect>
            <FilterSelect>
              <option value="all">All Positions</option>
              <option value="senior-react">Senior React Developer</option>
              <option value="frontend">Frontend Developer</option>
            </FilterSelect>
            <Button variant="outline" style={{ padding: "8px 12px" }}>
              <Filter size={16} />
              More Filters
            </Button>
          </ApplicantsFilters>

          <ApplicantsList>
            {filteredApplicants.length > 0 ? (
              filteredApplicants.map((applicant) => (
                <ApplicantCard key={applicant.id}>
                  <ApplicantHeader>
                    <ApplicantAvatar
                      src={applicant.avatar}
                      alt={applicant.name}
                    />
                    <ApplicantInfo>
                      <ApplicantName>{applicant.name}</ApplicantName>
                      <ApplicantMeta>
                        <ApplicantMetaItem>
                          <Mail size={14} />
                          {applicant.email}
                        </ApplicantMetaItem>
                        <ApplicantMetaItem>
                          <Phone size={14} />
                          {applicant.phone}
                        </ApplicantMetaItem>
                        <ApplicantMetaItem>
                          <Calendar size={14} />
                          Applied on{" "}
                          {new Date(applicant.appliedDate).toLocaleDateString()}
                        </ApplicantMetaItem>
                      </ApplicantMeta>
                      <ApplicantStatus status={applicant.status}>
                        {applicant.status === "new" ? (
                          <>
                            <Clock size={14} /> New
                          </>
                        ) : applicant.status === "reviewed" ? (
                          <>
                            <CheckCircle2 size={14} /> Reviewed
                          </>
                        ) : applicant.status === "interviewed" ? (
                          <>
                            <Users size={14} /> Interviewed
                          </>
                        ) : (
                          <>
                            <XCircle size={14} /> Rejected
                          </>
                        )}
                      </ApplicantStatus>
                    </ApplicantInfo>
                  </ApplicantHeader>

                  <ApplicantJobInfo>
                    <ApplicantJobTitle>
                      <Briefcase
                        size={14}
                        style={{ marginRight: "4px", verticalAlign: "middle" }}
                      />
                      Applied for: {applicant.appliedFor}
                    </ApplicantJobTitle>
                  </ApplicantJobInfo>

                  <ApplicantActions>
                    <ActionButton>
                      <Eye size={16} />
                      View Resume
                    </ActionButton>
                    <ActionButton variant="secondary">
                      <Mail size={16} />
                      Contact
                    </ActionButton>
                    <ActionButton>
                      <CheckCircle2 size={16} />
                      Update Status
                    </ActionButton>
                  </ApplicantActions>
                </ApplicantCard>
              ))
            ) : (
              <EmptyState>
                <EmptyStateIcon>
                  <Users size={40} />
                </EmptyStateIcon>
                <EmptyStateTitle>No applicants found</EmptyStateTitle>
                <EmptyStateDescription>
                  There are no applicants matching your current filters. Try
                  changing your filters or check back later.
                </EmptyStateDescription>
              </EmptyState>
            )}
          </ApplicantsList>
        </>
      )}

      {activeTab === "analytics" && (
        <>
          <JobsHeader>
            <div>
              <SectionTitle style={{ margin: 0 }}>
                <BarChart3 size={18} />
                Company Analytics
              </SectionTitle>
              <PageSubtitle>
                Track performance metrics for your company profile and job
                listings
              </PageSubtitle>
            </div>
            <Button variant="outline">
              <Download size={18} />
              Export Report
            </Button>
          </JobsHeader>

          <AnalyticsGrid>
            <AnalyticsCard>
              <AnalyticsCardHeader>
                <AnalyticsCardTitle>Profile Views</AnalyticsCardTitle>
                <AnalyticsCardIcon>
                  <Eye size={20} />
                </AnalyticsCardIcon>
              </AnalyticsCardHeader>
              <AnalyticsValue>1,490</AnalyticsValue>
              <AnalyticsChange positive>
                <TrendingUp size={14} />
                +15.3% from last month
              </AnalyticsChange>
            </AnalyticsCard>

            <AnalyticsCard>
              <AnalyticsCardHeader>
                <AnalyticsCardTitle>Job Applications</AnalyticsCardTitle>
                <AnalyticsCardIcon>
                  <Users size={20} />
                </AnalyticsCardIcon>
              </AnalyticsCardHeader>
              <AnalyticsValue>65</AnalyticsValue>
              <AnalyticsChange positive>
                <TrendingUp size={14} />
                +30% from last month
              </AnalyticsChange>
            </AnalyticsCard>

            <AnalyticsCard>
              <AnalyticsCardHeader>
                <AnalyticsCardTitle>Active Jobs</AnalyticsCardTitle>
                <AnalyticsCardIcon>
                  <Briefcase size={20} />
                </AnalyticsCardIcon>
              </AnalyticsCardHeader>
              <AnalyticsValue>{companyJobs.length}</AnalyticsValue>
              <AnalyticsChange positive>
                <TrendingUp size={14} />
                +2 from last month
              </AnalyticsChange>
            </AnalyticsCard>
          </AnalyticsGrid>

          <AnalyticsCard>
            <AnalyticsCardHeader>
              <AnalyticsCardTitle>Profile Views Over Time</AnalyticsCardTitle>
            </AnalyticsCardHeader>
            <AnalyticsChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={viewsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#f59e0b"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </AnalyticsChartContainer>
          </AnalyticsCard>

          <AnalyticsCard style={{ marginTop: "24px" }}>
            <AnalyticsCardHeader>
              <AnalyticsCardTitle>Applications Over Time</AnalyticsCardTitle>
            </AnalyticsCardHeader>
            <AnalyticsChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={applicationsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="applications" fill="#6d28d9" />
                </BarChart>
              </ResponsiveContainer>
            </AnalyticsChartContainer>
          </AnalyticsCard>

          <AnalyticsCard style={{ marginTop: "24px" }}>
            <AnalyticsCardHeader>
              <AnalyticsCardTitle>Job Types Distribution</AnalyticsCardTitle>
            </AnalyticsCardHeader>
            <AnalyticsChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={jobTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {jobTypeData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </AnalyticsChartContainer>
          </AnalyticsCard>
        </>
      )}
    </PageContainer>
  );
};

export default MyCompanyPage;
