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

export default function Register() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    const { email, password } = form;

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    const success = register(email, password);

    if (success) {
      alert("User registered successfully!");
      navigate("/login");
    } else {
      alert("User already exists!");
    }
  };

  return (
    <StyledContainer>
      <Card>
        <Title>Register</Title>

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

        <Button onClick={handleRegister}>Register</Button>

        <FooterText>
          Already have an account?{" "}
          <LinkText onClick={() => navigate("/login")}>Login here</LinkText>
        </FooterText>
      </Card>
    </StyledContainer>
  );
}
