import React from "react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export default function MapView({ schools, onSelectSchool }) {
  // 🎨 Palette landing (logo/landing)
  const COLORS = {
    blue: "#3B82F6",
    purple: "#8B5CF6",
    pink: "#EC4899",
    yellow: "#8B5CF6",
    textStrong: "#0F172A", // slate-900
    textMuted: "#475569",  // slate-600
    textSoft: "#64748B",   // slate-500
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "resistant":
        return COLORS.purple;
      case "transition":
        return COLORS.yellow;
      case "dependent":
        return COLORS.pink;
      default:
        return COLORS.textSoft;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "resistant":
        return "Résistant";
      case "transition":
        return "En transition";
      case "dependent":
        return "Dépendant";
      default:
        return "";
    }
  };

  const getMarkerSrc = (school, index) => {
    if (school && typeof school.marker === "string" && school.marker.trim()) {
      return school.marker.startsWith("/") ? school.marker : `/${school.marker}`;
    }
    if (school && typeof school.id === "number") {
      return `/school${school.id}.png`;
    }
    return index % 2 === 0 ? "/school1.png" : "/school2.png";
  };

  const getPositionStyle = (school, index) => {
    const hasXY =
      school &&
      typeof school.x === "number" &&
      typeof school.y === "number" &&
      isFinite(school.x) &&
      isFinite(school.y);

    if (hasXY) {
      return { left: `${school.x}%`, top: `${school.y}%` };
    }

    return {
      top: `${20 + ((index * 15) % 60)}%`,
      left: `${15 + ((index * 20) % 70)}%`,
    };
  };

  return React.createElement(
    "div",
    { className: "h-full relative overflow-hidden rounded-3xl bg-black/5" },
    [
      // ✅ Background map (inchangé)
      React.createElement("img", {
        key: "bg",
        src: "/map.png",
        alt: "Carte NIRD",
        className:
          "absolute inset-0 w-full h-full object-contain select-none pointer-events-none",
        draggable: false,
      }),

      // Markers layer
      React.createElement(
        "div",
        { key: "schools", className: "relative h-full w-full" },
        (schools || []).map((school, index) => {
          const position = getPositionStyle(school, index);
          const markerSrc = getMarkerSrc(school, index);

          return React.createElement(
            "div",
            {
              key: school && school.id != null ? school.id : index,
              className:
                "absolute -translate-x-1/2 -translate-y-full cursor-pointer group",
              style: position,
              onClick: () => {
                if (onSelectSchool) onSelectSchool(school);
              },
              role: "button",
              tabIndex: 0,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (onSelectSchool) onSelectSchool(school);
                }
              },
            },
            [
              // Halo (couleurs status landing)
              React.createElement("div", {
                key: "halo",
                className:
                  "absolute -inset-2 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none",
                style: { backgroundColor: getStatusColor(school.status) },
              }),

              // Marker + score (background inchangé)
              React.createElement(
                "div",
                {
                  key: "markerWrap",
                  className: "relative group-hover:scale-110 transition-transform",
                },
                [
                  React.createElement("img", {
                    key: "markerImg",
                    src: markerSrc,
                    alt: `school-${school && school.id != null ? school.id : index}`,
                    className: "w-14 h-14 drop-shadow-lg select-none",
                    draggable: false,
                    onError: (e) => {
                      e.currentTarget.src = "/school1.png";
                    },
                  }),

                  React.createElement(
                    "div",
                    {
                      key: "score",
                      className:
                        "absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-xs",
                      style: { color: COLORS.textStrong }, // ✅ texte adapté landing
                    },
                    school && school.score != null ? school.score : "-"
                  ),
                ]
              ),

              // Tooltip (background inchangé, textes adaptés landing)
              React.createElement(
                "div",
                {
                  key: "tooltip",
                  className:
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10",
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "bg-white rounded-xl shadow-xl p-4 min-w-[220px] border border-[#E5E7EB]",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "name",
                        className: "text-sm mb-1 font-medium",
                        style: { color: COLORS.textStrong }, // ✅
                      },
                      school && school.name ? school.name : "Établissement"
                    ),
                    React.createElement(
                      "div",
                      { key: "meta", className: "flex items-center gap-2" },
                      [
                        React.createElement("div", {
                          key: "dot",
                          className: "w-2 h-2 rounded-full",
                          style: { backgroundColor: getStatusColor(school.status) },
                        }),
                        React.createElement(
                          "span",
                          {
                            key: "label",
                            className: "text-xs",
                            style: { color: COLORS.textMuted }, // ✅
                          },
                          getStatusLabel(school.status)
                        ),
                      ]
                    ),

                    // ✅ "Score NIRD" en couleurs landing (violet)
                    React.createElement(
                      "div",
                      {
                        key: "scoreline",
                        className: "text-xs mt-2 font-semibold",
                        style: { color: COLORS.purple },
                      },
                      `Score NIRD: ${school && school.score != null ? school.score : "-"} / 100`
                    ),
                  ]
                )
              ),
            ]
          );
        })
      ),
    ]
  );
}
