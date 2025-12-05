
import React from "react";
import { MapPin, BookOpen, Shield, Laptop, Cloud } from "lucide-react";

export default function Hero({ onExploreCarte }) {
  return React.createElement(
    "section",
    {
      className:
        "relative overflow-hidden bg-gradient-to-br from-[#2A6DF4]/5 via-white to-[#37C77F]/5 px-6 py-20",
    },
    React.createElement(
      "div",
      { className: "max-w-6xl mx-auto" },
      React.createElement(
        "div",
        { className: "grid md:grid-cols-2 gap-12 items-center" },
        [
          // Left content
          React.createElement(
            "div",
            { key: "left", className: "space-y-6" },
            [
              React.createElement(
                "div",
                {
                  key: "badge",
                  className:
                    "inline-block bg-[#2A6DF4]/10 text-[#2A6DF4] px-4 py-2 rounded-full text-sm",
                },
                "Nuit de l'Info 2025 🎯"
              ),
              React.createElement(
                "h1",
                { key: "title", className: "text-[#1F2937]" },
                [
                  "NIRD MAP",
                  React.createElement("br", { key: "br1" }),
                  React.createElement(
                    "span",
                    { key: "line2", className: "text-[#2A6DF4]" },
                    "La Carte du Village"
                  ),
                  React.createElement("br", { key: "br2" }),
                  React.createElement(
                    "span",
                    { key: "line3", className: "text-[#37C77F]" },
                    "Numérique Résistant"
                  ),
                ]
              ),
              React.createElement(
                "p",
                {
                  key: "subtitle",
                  className: "text-[#6B7280] text-lg max-w-lg",
                },
                "Comprendre, agir et renforcer l'autonomie numérique des écoles. Rejoignez la résistance contre la dépendance aux Big Tech."
              ),
              // Buttons
              React.createElement(
                "div",
                { key: "buttons", className: "flex flex-wrap gap-4" },
                [
                  React.createElement(
                    "button",
                    {
                      key: "btn-map",
                      onClick: onExploreCarte,
                      className:
                        "bg-[#2A6DF4] text-white px-8 py-4 rounded-full hover:bg-[#2A6DF4]/90 transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2",
                    },
                    [
                      React.createElement(MapPin, { key: "icon", size: 20 }),
                      "Explorer la Carte",
                    ]
                  ),
                  React.createElement(
                    "button",
                    {
                      key: "btn-nird",
                      className:
                        "bg-white text-[#2A6DF4] border-2 border-[#2A6DF4] px-8 py-4 rounded-full hover:bg-[#2A6DF4]/5 transition-all inline-flex items-center gap-2",
                    },
                    [
                      React.createElement(BookOpen, { key: "icon", size: 20 }),
                      "Découvrir la démarche NIRD",
                    ]
                  ),
                ]
              ),
              // Stats
              React.createElement(
                "div",
                { key: "stats", className: "flex flex-wrap gap-8 pt-8" },
                [
                  React.createElement(
                    "div",
                    { key: "stat1" },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "val",
                          className: "text-[#2A6DF4] text-3xl mb-1",
                        },
                        "250+"
                      ),
                      React.createElement(
                        "div",
                        { key: "lbl", className: "text-[#6B7280] text-sm" },
                        "Écoles participantes"
                      ),
                    ]
                  ),
                  React.createElement(
                    "div",
                    { key: "stat2" },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "val",
                          className: "text-[#37C77F] text-3xl mb-1",
                        },
                        "15k+"
                      ),
                      React.createElement(
                        "div",
                        { key: "lbl", className: "text-[#6B7280] text-sm" },
                        "Élèves protégés"
                      ),
                    ]
                  ),
                  React.createElement(
                    "div",
                    { key: "stat3" },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "val",
                          className: "text-[#F7C948] text-3xl mb-1",
                        },
                        "€2M"
                      ),
                      React.createElement(
                        "div",
                        { key: "lbl", className: "text-[#6B7280] text-sm" },
                        "Économisés"
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
          // Right illustration
          React.createElement(
            "div",
            { key: "right", className: "relative" },
            [
              React.createElement(
                "div",
                {
                  key: "card",
                  className: "relative bg-white rounded-3xl p-8 shadow-xl",
                },
                [
                  React.createElement(
                    "div",
                    {
                      key: "map",
                      className:
                        "aspect-square bg-gradient-to-br from-[#2A6DF4]/10 to-[#37C77F]/10 rounded-2xl p-8 relative overflow-hidden",
                    },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "grid",
                          className: "absolute inset-0 opacity-20",
                        },
                        React.createElement("div", {
                          className: "absolute inset-0",
                          style: {
                            backgroundImage:
                              "linear-gradient(#2A6DF4 1px, transparent 1px), linear-gradient(90deg, #2A6DF4 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                          },
                        })
                      ),
                      // Markers
                      React.createElement(
                        "div",
                        {
                          key: "m1",
                          className:
                            "absolute top-1/4 left-1/4 w-12 h-12 bg-[#37C77F] rounded-full flex items-center justify-center shadow-lg animate-pulse",
                        },
                        React.createElement(Shield, {
                          size: 24,
                          className: "text-white",
                        })
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "m2",
                          className:
                            "absolute top-1/2 right-1/4 w-12 h-12 bg-[#F7C948] rounded-full flex items-center justify-center shadow-lg animate-pulse",
                          style: { animationDelay: "0.3s" },
                        },
                        React.createElement(Shield, {
                          size: 24,
                          className: "text-white",
                        })
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "m3",
                          className:
                            "absolute bottom-1/4 left-1/2 w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg animate-pulse",
                          style: { animationDelay: "0.6s" },
                        },
                        React.createElement(Shield, {
                          size: 24,
                          className: "text-white",
                        })
                      ),
                      // Floating icons
                      React.createElement(
                        "div",
                        {
                          key: "fi1",
                          className:
                            "absolute top-8 right-8 bg-white rounded-2xl p-3 shadow-lg",
                        },
                        React.createElement(Laptop, {
                          size: 24,
                          className: "text-[#2A6DF4]",
                        })
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "fi2",
                          className:
                            "absolute bottom-8 left-8 bg-white rounded-2xl p-3 shadow-lg",
                        },
                        React.createElement(Cloud, {
                          size: 24,
                          className: "text-[#37C77F]",
                        })
                      ),
                      // Center badge
                      React.createElement(
                        "div",
                        {
                          key: "badge-center",
                          className:
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl",
                        },
                        React.createElement(
                          "div",
                          { className: "text-[#2A6DF4] text-center" },
                          [
                            React.createElement(
                              "div",
                              { key: "emj", className: "text-2xl" },
                              "🛡️"
                            ),
                            React.createElement(
                              "div",
                              { key: "txt", className: "text-xs mt-1" },
                              "NIRD"
                            ),
                          ]
                        )
                      ),
                    ]
                  ),
                  // Legend bottom
                  React.createElement(
                    "div",
                    {
                      key: "legend",
                      className: "mt-6 flex justify-around",
                    },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "l1",
                          className: "flex items-center gap-2",
                        },
                        [
                          React.createElement("div", {
                            key: "dot",
                            className: "w-3 h-3 bg-[#37C77F] rounded-full",
                          }),
                          React.createElement(
                            "span",
                            {
                              key: "lbl",
                              className: "text-xs text-[#6B7280]",
                            },
                            "Résistant"
                          ),
                        ]
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "l2",
                          className: "flex items-center gap-2",
                        },
                        [
                          React.createElement("div", {
                            key: "dot",
                            className: "w-3 h-3 bg-[#F7C948] rounded-full",
                          }),
                          React.createElement(
                            "span",
                            {
                              key: "lbl",
                              className: "text-xs text-[#6B7280]",
                            },
                            "En transition"
                          ),
                        ]
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "l3",
                          className: "flex items-center gap-2",
                        },
                        [
                          React.createElement("div", {
                            key: "dot",
                            className: "w-3 h-3 bg-[#EF4444] rounded-full",
                          }),
                          React.createElement(
                            "span",
                            {
                              key: "lbl",
                              className: "text-xs text-[#6B7280]",
                            },
                            "Dépendant"
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              // Floating stickers
              React.createElement(
                "div",
                {
                  key: "st1",
                  className:
                    "absolute -top-4 -right-4 bg-[#F7C948] text-white rounded-2xl px-4 py-2 text-sm shadow-lg",
                },
                "Open Source 🚀"
              ),
              React.createElement(
                "div",
                {
                  key: "st2",
                  className:
                    "absolute -bottom-4 -left-4 bg-[#37C77F] text-white rounded-2xl px-4 py-2 text-sm shadow-lg",
                },
                "Libre & Durable 🌱"
              ),
            ]
          ),
        ]
      )
    )
  );
}
