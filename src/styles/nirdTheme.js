// src/styles/nirdTheme.js

export const nirdTheme = {
  pageBg: "bg-slate-950",
  pageText: "text-white",
  border: "border-slate-800",
  glass:
    "bg-slate-950/70 backdrop-blur-md border border-slate-800 shadow-2xl shadow-purple-500/10",
  card:
    "rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-800/70",
  cardHover: "hover:border-purple-500/40 transition-all",
  subtleText: "text-slate-400",
  softText: "text-slate-300",

  brandGradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  ctaGradient:
    "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",

  radialBgStyle: {
    background:
      "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
  },

  pill: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30",
  pillDot: "w-2 h-2 rounded-full bg-purple-400 animate-pulse",
  pillText: "text-sm text-purple-300 font-semibold",

  status: {
    resistant: { dot: "bg-emerald-400", text: "text-emerald-300", border: "border-emerald-500/30" },
    transition: { dot: "bg-yellow-400", text: "text-yellow-300", border: "border-yellow-500/30" },
    dependent: { dot: "bg-rose-400", text: "text-rose-300", border: "border-rose-500/30" },
    neutral: { dot: "bg-slate-400", text: "text-slate-300", border: "border-slate-500/30" },
  },

  pillar: {
    blue: {
      bg: "bg-blue-900/20",
      border: "border-blue-500/30",
      hoverBg: "hover:bg-blue-900/30",
      hoverBorder: "hover:border-blue-500/50",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      textColor: "text-blue-300",
    },
    purple: {
      bg: "bg-purple-900/20",
      border: "border-purple-500/30",
      hoverBg: "hover:bg-purple-900/30",
      hoverBorder: "hover:border-purple-500/50",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      textColor: "text-purple-300",
    },
    yellow: {
      bg: "bg-yellow-900/20",
      border: "border-yellow-500/30",
      hoverBg: "hover:bg-yellow-900/30",
      hoverBorder: "hover:border-yellow-500/50",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      textColor: "text-yellow-300",
    },
  },
};
