
import React from "react";
import { Map, TrendingUp, AlertCircle, Lightbulb, Settings, Home, Award } from "lucide-react";

export default function Sidebar({
  currentView,
  onViewChange,
  onNavigateToLanding,
  onShowLeaderboard,
}) {
  const menuItems = [
    { id: "carte", icon: Map, label: "Carte", color: "#2A6DF4" },
    { id: "scores", icon: TrendingUp, label: "Scores NIRD", color: "#37C77F" },
    { id: "problemes", icon: AlertCircle, label: "Problèmes", color: "#EF4444" },
    { id: "solutions", icon: Lightbulb, label: "Solutions Libres", color: "#F7C948" },
  ];

  return React.createElement(
    "div",
    { className: "w-64 bg-white border-r border-[#E5E7EB] flex flex-col" },
    [
      // Logo
      React.createElement(
        "div",
        { key: "logo", className: "p-6 border-b border-[#E5E7EB]" },
        React.createElement(
          "button",
          {
            onClick: onNavigateToLanding,
            className:
              "flex items-center gap-3 hover:opacity-80 transition-opacity",
          },
          [
            React.createElement(
              "div",
              {
                key: "logoicon",
                className:
                  "w-10 h-10 bg-gradient-to-br from-[#2A6DF4] to-[#37C77F] rounded-xl flex items-center justify-center",
              },
              React.createElement(
                "span",
                { className: "text-white text-lg" },
                "🛡️"
              )
            ),
            React.createElement(
              "div",
              { key: "logotext" },
              [
                React.createElement(
                  "div",
                  { key: "title", className: "text-[#1F2937]" },
                  "NIRD MAP"
                ),
                React.createElement(
                  "div",
                  { key: "subtitle", className: "text-xs text-[#6B7280]" },
                  "Dashboard"
                ),
              ]
            ),
          ]
        )
      ),

      // Menu
      React.createElement(
        "nav",
        { key: "nav", className: "flex-1 p-4" },
        [
          React.createElement(
            "ul",
            { key: "menu", className: "space-y-2" },
            menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return React.createElement(
                "li",
                { key: item.id },
                React.createElement(
                  "button",
                  {
                    onClick: () => onViewChange(item.id),
                    className:
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all " +
                      (isActive
                        ? "bg-gradient-to-r from-[#2A6DF4]/10 to-[#37C77F]/10 text-[#2A6DF4]"
                        : "text-[#6B7280] hover:bg-[#F5F7FA]"),
                  },
                  [
                    React.createElement(Icon, {
                      key: "icon",
                      size: 20,
                      style: isActive ? { color: item.color } : undefined,
                    }),
                    React.createElement("span", { key: "label" }, item.label),
                  ]
                )
              );
            })
          ),

          // Quick actions
          React.createElement(
            "div",
            {
              key: "quick-actions",
              className: "mt-8 pt-8 border-t border-[#E5E7EB]",
            },
            [
              React.createElement(
                "div",
                {
                  key: "qa-title",
                  className: "text-xs text-[#6B7280] mb-3 px-4",
                },
                "Actions rapides"
              ),
              React.createElement(
                "button",
                {
                  key: "qa-leaderboard",
                  onClick: onShowLeaderboard,
                  className:
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#6B7280] hover:bg-[#F5F7FA] transition-all",
                },
                [
                  React.createElement(Award, { key: "icon", size: 20 }),
                  React.createElement("span", { key: "label" }, "Classement"),
                ]
              ),
              React.createElement(
                "button",
                {
                  key: "qa-home",
                  onClick: onNavigateToLanding,
                  className:
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#6B7280] hover:bg-[#F5F7FA] transition-all",
                },
                [
                  React.createElement(Home, { key: "icon", size: 20 }),
                  React.createElement("span", { key: "label" }, "Accueil"),
                ]
              ),
            ]
          ),
        ]
      ),

      // Settings
      React.createElement(
        "div",
        { key: "settings", className: "p-4 border-t border-[#E5E7EB]" },
        React.createElement(
          "button",
          {
            className:
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#6B7280] hover:bg-[#F5F7FA] transition-all",
          },
          [
            React.createElement(Settings, { key: "icon", size: 20 }),
            React.createElement("span", { key: "label" }, "Paramètres"),
          ]
        )
      ),
    ]
  );
}
