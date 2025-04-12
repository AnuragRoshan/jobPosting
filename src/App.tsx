// src/App.tsx
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
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
import { Navbar } from "./components/ui/navigation/Navbar";
import { Sidebar } from "./components/ui/navigation/Sidebar";

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
    <>
      {user && (
        <>
          <Navbar
            logo="ProfessionalNet"
            onMobileMenuClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
          </Navbar>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
          </Sidebar>
        </>
      )}
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
    </>
  );
};

export default App;
