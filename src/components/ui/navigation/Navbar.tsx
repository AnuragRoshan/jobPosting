import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";

const NavbarRoot = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  background-color: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 64px;
  display: flex;
  align-items: center;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

// const NavLink = styled(Link)`
//   margin: 0 ${({ theme }) => theme.spacing[3]};
//   color: ${({ theme }) => theme.colors.text.primary};
//   font-weight: ${({ theme }) => theme.typography.subtitle2.fontWeight};
//   text-decoration: none;
//   transition: color ${({ theme }) => theme.transitions.duration.short}ms
//     ${({ theme }) => theme.transitions.easing.easeInOut};

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary.main};
//     text-decoration: none;
//   }

//   &.active {
//     color: ${({ theme }) => theme.colors.primary.main};
//   }
// `;

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

interface NavbarProps {
  logo: React.ReactNode | string;
  onMobileMenuClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  //   onMobileMenuClick,
  children,
  className,
}) => (
  <NavbarRoot className={className}>
    <NavbarContainer>
      <Logo to="/">{logo}</Logo>
      <NavLinks>{children}</NavLinks>
      <NavActions>{/* Mobile menu button will go here */}</NavActions>
    </NavbarContainer>
  </NavbarRoot>
);
