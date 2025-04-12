import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Button,
  ErrorMessage,
  FormGroup,
  FormTitle,
  Input,
  Label,
  LoginContainer,
  LoginForm,
  Logo,
  SignUpLink,
  SignUpText,
} from "./LoginPage";

// Reuse styles from LoginPage
const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setFormError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    try {
      await register(name, email, password);
      navigate("/");
    } catch (err) {
      // Error is handled by the context
      console.error(err);
    }
  };

  return (
    <LoginContainer>
      <Logo>ProfessionalNet</Logo>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>Create Account</FormTitle>

        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </FormGroup>

        {(formError || error) && (
          <ErrorMessage>{formError || error}</ErrorMessage>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        <SignUpText>
          Already have an account? <SignUpLink to="/login">Sign in</SignUpLink>
        </SignUpText>
      </LoginForm>
    </LoginContainer>
  );
};

export default RegisterPage;
