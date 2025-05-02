import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to Movie Browser</h1>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}
