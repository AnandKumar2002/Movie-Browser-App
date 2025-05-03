import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Favorites from "./pages/favorites/Favorites";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Welcome />}
        />
        {/* Redirect logged-in users away from login and register pages */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
        />

        {/* Protected routes wrapped with Layout component */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/movie/:id"
          element={
            isAuthenticated ? (
              <Layout>
                <MovieDetails />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/favorites"
          element={
            isAuthenticated ? (
              <Layout>
                <Favorites />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
