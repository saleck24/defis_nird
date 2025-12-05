
import React from "react";
import { AlertCircle } from "lucide-react";

export default function ProblemCard({ title, description, impact }) {
  return React.createElement(
    "div",
    {
      className:
        "bg-[#FEF2F2] border-2 border-[#EF4444]/20 rounded-2xl p-6 hover:border-[#EF4444]/40 transition-colors",
    },
    [
      React.createElement(
        "div",
        { key: "header", className: "flex items-start gap-3 mb-4" },
        [
          React.createElement(
            "div",
            { key: "iconwrapper", className: "bg-[#EF4444]/10 rounded-xl p-2" },
            React.createElement(AlertCircle, {
              size: 24,
              className: "text-[#EF4444]",
            })
          ),
          React.createElement(
            "div",
            { key: "titleWrapper", className: "flex-1" },
            React.createElement(
              "h3",
              { className: "text-[#1F2937] mb-2" },
              title
            )
          ),
        ]
      ),
      React.createElement(
        "p",
        { key: "desc", className: "text-[#6B7280] text-sm mb-3" },
        description
      ),
      React.createElement(
        "div",
        {
          key: "impact",
          className:
            "inline-block bg-[#EF4444]/10 text-[#EF4444] px-3 py-1 rounded-full text-xs",
        },
        impact
      ),
    ]
  );
}
