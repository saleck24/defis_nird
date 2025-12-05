
import React from "react";
import { Trophy } from "lucide-react";

export default function Leaderboard({ schools, onSelectSchool, compact = false }) {
  const sortedSchools = [...schools].sort((a, b) => b.score - a.score);

  const getStatusColor = (status) => {
    switch (status) {
      case "resistant":
        return "#37C77F";
      case "transition":
        return "#F7C948";
      case "dependent":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getMedalEmoji = (rank) => {
    switch (rank) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "#" + (rank + 1);
    }
  };

  return React.createElement(
    "div",
    { className: compact ? "space-y-2" : "space-y-3" },
    [
      ...sortedSchools.map((school, index) => {
        const medal = getMedalEmoji(index);
        const top3 = index < 3;
        return React.createElement(
          "div",
          {
            key: school.id,
            onClick: () => onSelectSchool(school),
            className:
              "bg-white rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all border-2 " +
              (top3 ? "border-[#F7C948]/30" : "border-[#E5E7EB]"),
          },
          [
            React.createElement(
              "div",
              { key: "row", className: "flex items-center gap-4" },
              [
                // Rank
                React.createElement(
                  "div",
                  {
                    key: "rank",
                    className:
                      (compact ? "w-8 h-8 text-sm" : "w-12 h-12") +
                      " flex items-center justify-center rounded-xl " +
                      (top3
                        ? "bg-gradient-to-br from-[#F7C948] to-[#F7C948]/70 text-white"
                        : "bg-[#F5F7FA] text-[#6B7280]"),
                  },
                  typeof medal === "string" && medal.startsWith("#")
                    ? React.createElement("span", null, medal)
                    : React.createElement("span", { className: "text-xl" }, medal)
                ),

                // School Info
                React.createElement(
                  "div",
                  { key: "info", className: "flex-1 min-w-0" },
                  [
                    React.createElement(
                      "h4",
                      {
                        key: "name",
                        className:
                          "text-[#1F2937] truncate " +
                          (compact ? "text-sm" : ""),
                      },
                      school.name
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "meta",
                        className: "flex items-center gap-2 mt-1",
                      },
                      [
                        React.createElement("div", {
                          key: "status-dot",
                          className: "w-2 h-2 rounded-full",
                          style: {
                            backgroundColor: getStatusColor(school.status),
                          },
                        }),
                        React.createElement(
                          "span",
                          {
                            key: "badges",
                            className: "text-xs text-[#6B7280]",
                          },
                          school.badges.length +
                            " badge" +
                            (school.badges.length > 1 ? "s" : "")
                        ),
                      ]
                    ),
                  ]
                ),

                // Score
                React.createElement(
                  "div",
                  { key: "score", className: "text-right" },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "points",
                        className:
                          "text-[#2A6DF4] " +
                          (compact ? "text-lg" : "text-2xl"),
                      },
                      school.score
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "points-label",
                        className: "text-xs text-[#6B7280]",
                      },
                      "points"
                    ),
                  ]
                ),
              ]
            ),

            // Progress bar
            !compact &&
              React.createElement(
                "div",
                {
                  key: "progress",
                  className: "mt-3 relative h-2 bg-[#F5F7FA] rounded-full overflow-hidden",
                },
                React.createElement("div", {
                  className:
                    "absolute inset-y-0 left-0 bg-gradient-to-r from-[#2A6DF4] to-[#37C77F] rounded-full transition-all",
                  style: { width: `${school.score}%` },
                })
              ),
          ]
        );
      }),
      !compact &&
        React.createElement(
          "div",
          {
            key: "cta",
            className:
              "bg-gradient-to-r from-[#2A6DF4]/10 to-[#37C77F]/10 rounded-2xl p-6 text-center",
          },
          [
            React.createElement(Trophy, {
              key: "icon",
              size: 32,
              className: "text-[#F7C948] mx-auto mb-3",
            }),
            React.createElement(
              "h4",
              { key: "title", className: "text-[#1F2937] mb-2" },
              "Rejoignez le classement !"
            ),
            React.createElement(
              "p",
              { key: "text", className: "text-sm text-[#6B7280]" },
              "Chaque décision pour le libre améliore votre score et inspire d'autres établissements."
            ),
          ]
        ),
    ]
  );
}
