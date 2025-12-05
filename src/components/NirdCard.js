
import React from "react";

export default function NirdCard({ icon: Icon, title, description, color }) {
  return React.createElement(
    "div",
    {
      className:
        "bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1",
    },
    [
      React.createElement(
        "div",
        {
          key: "iconWrapper",
          className:
            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
          style: { backgroundColor: `${color}20` },
        },
        React.createElement(Icon, { size: 32, style: { color: color } })
      ),
      React.createElement(
        "h3",
        { key: "title", className: "text-[#1F2937] mb-3" },
        title
      ),
      React.createElement(
        "p",
        { key: "desc", className: "text-[#6B7280]" },
        description
      ),
    ]
  );
}
