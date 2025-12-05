
import React from "react";
import { AlertCircle, Laptop, Cloud, FileText, CheckCircle } from "lucide-react";

export default function SolutionsPanel() {
  const problem = {
    title: "Obsolescence Windows détectée",
    description:
      "120 postes sous Windows 7 ne sont plus supportés et exposent l'établissement à des risques de sécurité.",
    severity: "high",
  };

  const solutions = [
    {
      name: "Linux Ubuntu",
      category: "Système d'exploitation",
      description: "Distribution stable et conviviale, parfaite pour l'éducation",
      difficulty: "Facile",
      impact: "+25 points NIRD",
      icon: Laptop,
      color: "#2A6DF4",
    },
    {
      name: "Debian Edu",
      category: "Système d'exploitation",
      description: "Distribution spécialement conçue pour les établissements scolaires",
      difficulty: "Moyen",
      impact: "+30 points NIRD",
      icon: Laptop,
      color: "#37C77F",
    },
    {
      name: "Primtux",
      category: "Système d'exploitation",
      description: "Distribution légère pour redonner vie aux anciens ordinateurs",
      difficulty: "Facile",
      impact: "+28 points NIRD",
      icon: Laptop,
      color: "#F7C948",
    },
  ];

  const otherSolutions = [
    {
      name: "LibreOffice",
      category: "Suite bureautique",
      icon: FileText,
      impact: "+15 points",
      color: "#37C77F",
    },
    {
      name: "Nextcloud",
      category: "Cloud & collaboration",
      icon: Cloud,
      impact: "+20 points",
      color: "#2A6DF4",
    },
  ];

  return React.createElement(
    "div",
    { className: "h-full overflow-auto" },
    React.createElement(
      "div",
      { className: "p-6 space-y-6" },
      [
        // Problem Card
        React.createElement(
          "div",
          {
            key: "problem",
            className:
              "bg-gradient-to-br from-[#EF4444]/10 to-[#EF4444]/5 border-2 border-[#EF4444]/20 rounded-2xl p-6",
          },
          [
            React.createElement(
              "div",
              {
                key: "p-header",
                className: "flex items-start gap-3 mb-4",
              },
              [
                React.createElement(
                  "div",
                  {
                    key: "p-iconwrap",
                    className: "bg-[#EF4444] rounded-xl p-2",
                  },
                  React.createElement(AlertCircle, {
                    size: 24,
                    className: "text-white",
                  })
                ),
                React.createElement(
                  "div",
                  { key: "p-text", className: "flex-1" },
                  [
                    React.createElement(
                      "h3",
                      {
                        key: "p-title",
                        className: "text-[#1F2937] mb-2",
                      },
                      problem.title
                    ),
                    React.createElement(
                      "p",
                      {
                        key: "p-desc",
                        className: "text-[#6B7280] text-sm",
                      },
                      problem.description
                    ),
                  ]
                ),
              ]
            ),
            React.createElement(
              "div",
              {
                key: "p-chip",
                className:
                  "inline-block bg-[#EF4444] text-white px-3 py-1 rounded-full text-xs",
              },
              "Priorité élevée"
            ),
          ]
        ),

        // Solutions
        React.createElement(
          "div",
          { key: "solutions-block" },
          [
            React.createElement(
              "h3",
              { key: "s-title", className: "text-[#1F2937] mb-4" },
              "Solutions Libres Recommandées"
            ),
            React.createElement(
              "div",
              { key: "s-list", className: "space-y-3" },
              solutions.map((solution, index) => {
                const Icon = solution.icon;
                return React.createElement(
                  "div",
                  {
                    key: "solution-" + index,
                    className:
                      "bg-white border-2 border-[#E5E7EB] rounded-2xl p-4 hover:border-[#2A6DF4] transition-all cursor-pointer group",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "top-" + index,
                        className: "flex items-start gap-3 mb-3",
                      },
                      [
                        React.createElement(
                          "div",
                          {
                            key: "iconwrap-" + index,
                            className: "rounded-xl p-2",
                            style: {
                              backgroundColor: `${solution.color}20`,
                            },
                          },
                          React.createElement(Icon, {
                            size: 20,
                            style: { color: solution.color },
                          })
                        ),
                        React.createElement(
                          "div",
                          {
                            key: "s-text-" + index,
                            className: "flex-1",
                          },
                          [
                            React.createElement(
                              "div",
                              {
                                key: "s-head-" + index,
                                className:
                                  "flex items-start justify-between mb-1",
                              },
                              [
                                React.createElement(
                                  "h4",
                                  {
                                    key: "s-name-" + index,
                                    className: "text-[#1F2937]",
                                  },
                                  solution.name
                                ),
                                React.createElement(
                                  "span",
                                  {
                                    key: "s-impact-" + index,
                                    className: "text-xs text-[#37C77F]",
                                  },
                                  solution.impact
                                ),
                              ]
                            ),
                            React.createElement(
                              "p",
                              {
                                key: "s-cat-" + index,
                                className: "text-xs text-[#6B7280] mb-2",
                              },
                              solution.category
                            ),
                            React.createElement(
                              "p",
                              {
                                key: "s-desc-" + index,
                                className: "text-sm text-[#6B7280]",
                              },
                              solution.description
                            ),
                          ]
                        ),
                      ]
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "s-footer-" + index,
                        className:
                          "flex items-center justify-between",
                      },
                      [
                        React.createElement(
                          "span",
                          {
                            key: "s-diff-" + index,
                            className: "text-xs text-[#6B7280]",
                          },
                          "Difficulté: " + solution.difficulty
                        ),
                        React.createElement(
                          "button",
                          {
                            key: "s-btn-" + index,
                            className:
                              "bg-[#2A6DF4] text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                          },
                          "Adopter"
                        ),
                      ]
                    ),
                  ]
                );
              })
            ),
          ]
        ),

        // Other solutions
        React.createElement(
          "div",
          { key: "others-block" },
          [
            React.createElement(
              "h4",
              {
                key: "o-title",
                className: "text-[#1F2937] mb-3 text-sm",
              },
              "Autres solutions populaires"
            ),
            React.createElement(
              "div",
              { key: "o-list", className: "space-y-2" },
              otherSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return React.createElement(
                  "div",
                  {
                    key: "other-" + index,
                    className:
                      "bg-white border border-[#E5E7EB] rounded-xl p-3 hover:border-[#2A6DF4] transition-colors cursor-pointer flex items-center gap-3",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "o-iconwrap-" + index,
                        className: "rounded-lg p-2",
                        style: {
                          backgroundColor: `${solution.color}20`,
                        },
                      },
                      React.createElement(Icon, {
                        size: 16,
                        style: { color: solution.color },
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "o-text-" + index,
                        className: "flex-1",
                      },
                      [
                        React.createElement(
                          "div",
                          {
                            key: "o-name-" + index,
                            className: "text-sm text-[#1F2937]",
                          },
                          solution.name
                        ),
                        React.createElement(
                          "div",
                          {
                            key: "o-cat-" + index,
                            className: "text-xs text-[#6B7280]",
                          },
                          solution.category
                        ),
                      ]
                    ),
                    React.createElement(
                      "span",
                      {
                        key: "o-impact-" + index,
                        className: "text-xs text-[#37C77F]",
                      },
                      solution.impact
                    ),
                  ]
                );
              })
            ),
          ]
        ),

        // Resources
        React.createElement(
          "div",
          {
            key: "resources",
            className:
              "bg-gradient-to-br from-[#2A6DF4]/5 to-[#37C77F]/5 rounded-2xl p-6",
          },
          [
            React.createElement(
              "h4",
              {
                key: "r-title",
                className: "text-[#1F2937] mb-3",
              },
              "📚 Ressources utiles"
            ),
            React.createElement(
              "ul",
              { key: "r-list", className: "space-y-2 text-sm" },
              [
                React.createElement(
                  "li",
                  {
                    key: "r1",
                    className: "flex items-start gap-2",
                  },
                  [
                    React.createElement(CheckCircle, {
                      key: "r1-icon",
                      size: 16,
                      className: "text-[#37C77F] mt-0.5 flex-shrink-0",
                    }),
                    React.createElement(
                      "span",
                      {
                        key: "r1-text",
                        className: "text-[#6B7280]",
                      },
                      "Guide de migration Windows → Linux"
                    ),
                  ]
                ),
                React.createElement(
                  "li",
                  {
                    key: "r2",
                    className: "flex items-start gap-2",
                  },
                  [
                    React.createElement(CheckCircle, {
                      key: "r2-icon",
                      size: 16,
                      className: "text-[#37C77F] mt-0.5 flex-shrink-0",
                    }),
                    React.createElement(
                      "span",
                      {
                        key: "r2-text",
                        className: "text-[#6B7280]",
                      },
                      "Formation des enseignants (CHATONS)"
                    ),
                  ]
                ),
                React.createElement(
                  "li",
                  {
                    key: "r3",
                    className: "flex items-start gap-2",
                  },
                  [
                    React.createElement(CheckCircle, {
                      key: "r3-icon",
                      size: 16,
                      className: "text-[#37C77F] mt-0.5 flex-shrink-0",
                    }),
                    React.createElement(
                      "span",
                      {
                        key: "r3-text",
                        className: "text-[#6B7280]",
                      },
                      "Support communautaire actif"
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]
    )
  );
}
