// src/App.tsx
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Import pages (to be created)
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePgae";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Sidebar } from "./components/ui/navigation/Sidebar";
// import CompanyProfilePage from "./pages/CompanyPorfilePage";
import CompanyDetailsPage from "./pages/CompanyPorfilePage";

// Styled NavLink for Sidebar

// const NavLinkContainer = styled(NavLink)`
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.text.primary};

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary.main};
//     text-decoration: none;
//   }
//   &.active {
//     color: ${({ theme }) => theme.colors.primary.main};
//     text-decoration: none;
//   }
// `;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing[2]};
  display: block;
  font-size: large;
  font-weight: 600;
  width: 100%;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: transparent;
  border: 1px solid white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
    transform: translateY(5px);
    text-decoration: none;
    box-shadow: 0 5px 0 rgb(187, 0, 255);
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    color: #fff;
    transform: translateY(0);
    box-shadow: none;
    box-shadow: 0 5px 0 rgb(187, 0, 255);
    border: 1px solid transparent;
  }
`;

// Protected route wrapper component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router>
        <AuthProvider>
          <AppContent
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

interface AppContentProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContent: React.FC<AppContentProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      <div>
        {user && (
          <>
            {/* <Navbar
            logo="ProfessionalNet"
            onMobileMenuClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <NavLinkContainer to="/">Home</NavLinkContainer>
            <NavLinkContainer to="/jobs">Jobs</NavLinkContainer>
            <NavLinkContainer to={`/profile/${user.id}`}>
              Profile
            </NavLinkContainer>
          </Navbar> */}
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/jobs">Jobs</StyledNavLink>
              <StyledNavLink to={`/profile/${user.id}`}>Profile</StyledNavLink>
              <StyledNavLink to={`/khkh`}>Connections</StyledNavLink>
              {/* <NavLink to=  "/company">Company Profile</NavLink> */}
            </Sidebar>
          </>
        )}
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/companies/:companyId"
            element={<CompanyDetailsPage />}
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <JobsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <ProtectedRoute>
                <JobDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
