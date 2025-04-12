import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  company: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (
    email: string
    // password: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      // In a real app, you would make an API call here
      // For demo purposes, we're using mock data
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        title: "Software Engineer",
        company: "TechCorp Inc.",
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string
    // password: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      // In a real app, you would make an API call here
      // For demo purposes, we're using mock data
      const mockUser: User = {
        id: "1",
        name: name,
        email: email,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        title: "New User",
        company: "",
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError("Registration failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
