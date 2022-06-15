import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route
        path="/github"
        element={() => {
          var link = document.createElement("a");
          link.href = "https://github.com/jonatanluismoreno";
          document.body.appendChild(link);

          link.click();
          return null;
        }}
      />
      <Route
        path="/linkedin"
        element={
          <Navigate
            to="https://www.linkedin.com/in/jonatan-moreno-39651b215"
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
