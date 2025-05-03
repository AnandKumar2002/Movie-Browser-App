import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Card,
  Title,
  Input,
  Button,
  FooterText,
  LinkText,
} from "../components/styleComponents/StyledAuthUI";
import { StyledContainer } from "./welcome/Welcome.styles";

export default function Login() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const { email, password } = form;
    const success = login(email, password);
    if (success) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <StyledContainer>
      <Card>
        <Title>Login</Title>

        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <Button onClick={handleLogin}>Login</Button>

        <FooterText>
          Don't have an account?{" "}
          <LinkText onClick={() => navigate("/register")}>Register here</LinkText>
        </FooterText>
      </Card>
    </StyledContainer>
  );
}
