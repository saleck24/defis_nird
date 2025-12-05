import React, { useState } from "react";
import NirdLanding from "./components/pixel-craft-landing";
import Dashboard from "./components/Dashboard";
import './styles/globals.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return React.createElement(
    "div",
    { className: "min-h-screen bg-[#F5F7FA]" },
    currentPage === "landing"
      ? React.createElement(NirdLanding, {
          onNavigateToDashboard: () => setCurrentPage("dashboard"),
        })
      : React.createElement(Dashboard, {
          onNavigateToLanding: () => setCurrentPage("landing"),
        })
  );
}
