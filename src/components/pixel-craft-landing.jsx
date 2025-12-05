import React, { useState, useEffect } from "react";
import { Gamepad2, ArrowRight, Shield, Recycle, Zap, Target } from "lucide-react";
import PageFooter from "./PageFooter";
export default function NirdLanding({ onNavigateToDashboard }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars = [
    { icon: Shield, label: "Inclusif", color: "blue" },
    { icon: Recycle, label: "Responsable", color: "purple" },
    { icon: Zap, label: "Durable", color: "yellow" },
  ];

  const colorMap = {
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
  };

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 1; }
        }

        .float { animation: floatAnimation 4s ease-in-out infinite; }
        .pulse-ring { animation: pulseRing 3s ease-in-out infinite; }
        * { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 bg-gradient-radial"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">
                  PixelCraft <span className="text-purple-400">NIRD</span>
                </h1>
                <p className="text-xs text-slate-400">Nuit de l'Info 2025</p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300 font-semibold">
                  Village Numérique Résistant
                </span>
              </div>

              <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="text-blue-400">N</span>umérique
                  <br />
                  <span className="text-purple-400">I</span>nclusif
                  <br />
                  <span className="text-pink-400">R</span>esponsable
                  <br />
                  <span className="text-yellow-400">D</span>urable
                </h2>

                <p className="text-xl text-slate-300 leading-relaxed font-medium mb-4">
                  Plongez dans l'univers du{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    NIDE
                  </span>
                </p>

                <p className="text-base text-slate-400 leading-relaxed">
                  Rejoignez le village résistant. Face aux Big Tech, l'École devient un espace
                  d'innovation autonome et créatif. Réduisez vos dépendances numériques et adoptez
                  des solutions libres, responsables et durables.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {pillars.map((pillar, index) => {
                  const colors = colorMap[pillar.color];
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-xl ${colors.bg} border ${colors.border} ${colors.hoverBg} ${colors.hoverBorder} p-4 text-center transition-all cursor-pointer group`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg ${colors.iconBg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                      </div>
                      <p className={`text-sm ${colors.textColor} font-semibold`}>{pillar.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* ✅ BOUTON: navigation vers Dashboard */}
              <button
                type="button"
                onClick={onNavigateToDashboard}
                className="group mt-6 px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all hover:scale-105 flex items-center gap-2 shadow-xl shadow-purple-500/30"
              >
                Démarrer l'aventure
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Butterfly Visualization */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pulse-ring" />

                {/* Main Container */}
                <div className="relative w-full h-full rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900/80 via-purple-950/80 to-blue-950/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-purple-500/20">
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Butterfly SVG */}
                  <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 200 200">
                    {/* Wings */}
                    <path
                      d="M 60,100 Q 30,80 25,60 Q 23,40 35,30 Q 45,22 55,25 Q 65,28 70,40 Q 75,55 70,70 Q 65,85 60,100 Z"
                      fill="#3b82f6"
                      opacity="0.8"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      filter="drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
                    />
                    <circle cx="45" cy="50" r="4" fill="#93c5fd" opacity="0.6" />

                    <path
                      d="M 140,100 Q 170,80 175,60 Q 177,40 165,30 Q 155,22 145,25 Q 135,28 130,40 Q 125,55 130,70 Q 135,85 140,100 Z"
                      fill="#8b5cf6"
                      opacity="0.8"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      filter="drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
                    />
                    <circle cx="155" cy="50" r="4" fill="#c4b5fd" opacity="0.6" />

                    <path
                      d="M 60,100 Q 40,120 35,145 Q 33,165 45,175 Q 55,183 65,180 Q 75,177 80,165 Q 85,150 80,135 Q 75,115 60,100 Z"
                      fill="#ec4899"
                      opacity="0.8"
                      stroke="#f472b6"
                      strokeWidth="2"
                      filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))"
                    />
                    <circle cx="50" cy="145" r="4" fill="#f9a8d4" opacity="0.6" />

                    <path
                      d="M 140,100 Q 160,120 165,145 Q 167,165 155,175 Q 145,183 135,180 Q 125,177 120,165 Q 115,150 120,135 Q 125,115 140,100 Z"
                      fill="#eab308"
                      opacity="0.8"
                      stroke="#facc15"
                      strokeWidth="2"
                      filter="drop-shadow(0 0 10px rgba(234, 179, 8, 0.5))"
                    />
                    <circle cx="150" cy="145" r="4" fill="#fde047" opacity="0.6" />

                    {/* Body */}
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="12"
                      ry="40"
                      fill="#a78bfa"
                      stroke="#c4b5fd"
                      strokeWidth="2"
                      opacity="0.9"
                    />
                    <circle cx="100" cy="80" r="5" fill="#8b5cf6" opacity="0.8" />
                    <circle cx="100" cy="100" r="5" fill="#a78bfa" opacity="0.8" />
                    <circle cx="100" cy="120" r="5" fill="#c4b5fd" opacity="0.8" />

                    {/* Antennae */}
                    <line
                      x1="100"
                      y1="60"
                      x2="90"
                      y2="40"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="100"
                      y1="60"
                      x2="110"
                      y2="40"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="90"
                      cy="40"
                      r="4"
                      fill="#c4b5fd"
                      filter="drop-shadow(0 0 5px rgba(167, 139, 250, 0.8))"
                    />
                    <circle
                      cx="110"
                      cy="40"
                      r="4"
                      fill="#c4b5fd"
                      filter="drop-shadow(0 0 5px rgba(167, 139, 250, 0.8))"
                    />
                  </svg>

                  {/* Floating Particles */}
                  {[...Array(15)].map((_, i) => {
                    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#eab308"];
                    return (
                      <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          width: `${4 + Math.random() * 6}px`,
                          height: `${4 + Math.random() * 6}px`,
                          backgroundColor: colors[i % 4],
                          opacity: 0.3 + Math.random() * 0.3,
                          boxShadow: `0 0 10px ${colors[i % 4]}`,
                          animation: `floatAnimation ${3 + Math.random() * 4}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Corner Decorations */}
                {[
                  {
                    color: "from-blue-500 to-blue-600",
                    shadow: "shadow-blue-500/50",
                    delay: 0,
                    position: "-top-4 -left-4",
                  },
                  {
                    color: "from-purple-500 to-purple-600",
                    shadow: "shadow-purple-500/50",
                    delay: 1,
                    position: "-top-4 -right-4",
                  },
                  {
                    color: "from-pink-500 to-pink-600",
                    shadow: "shadow-pink-500/50",
                    delay: 2,
                    position: "-bottom-4 -left-4",
                  },
                  {
                    color: "from-yellow-500 to-yellow-600",
                    shadow: "shadow-yellow-500/50",
                    delay: 3,
                    position: "-bottom-4 -right-4",
                  },
                ].map((deco, i) => (
                  <div
                    key={i}
                    className={`absolute ${deco.position} w-10 h-10 rounded-xl bg-gradient-to-br ${deco.color} shadow-lg ${deco.shadow} float`}
                    style={{ animationDelay: `${deco.delay}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Levers Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Comment un établissement peut-il devenir un{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                levier d'autonomie numérique
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6">
              Concrètement, comment un établissement peut-il devenir un village numérique résistant ?
              Voici quelques leviers proposés par la démarche NIRD.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Obsolescence Windows */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-green-500/30 p-6 hover:border-green-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400">Fin de support Windows</h3>
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/20">
                <p className="text-green-300 font-semibold text-sm mb-2">✓ Solution NIRD</p>
                <p className="text-slate-400 text-sm">
                  Migrer vers GNU/Linux adapté + reconditionner si possible = sobriété + autonomie +
                  coûts réduits
                </p>
              </div>
            </div>

            {/* Dépendance Google */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-blue-500/30 p-6 hover:border-blue-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">Dépendance Google</h3>
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/20">
                <p className="text-blue-300 font-semibold text-sm mb-2">✓ Solution NIRD</p>
                <p className="text-slate-400 text-sm">
                  Cloud maîtrisé (Nextcloud) + suite bureautique libre = récupération des données +
                  réduction de la dépendance
                </p>
              </div>
            </div>

            {/* Licences coûteuses */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-purple-500/30 p-6 hover:border-purple-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">Licences coûteuses</h3>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
                <p className="text-purple-300 font-semibold text-sm mb-2">✓ Solution NIRD</p>
                <p className="text-slate-400 text-sm">
                  LibreOffice + mini-formation = formats ouverts + outils libres + durabilité et
                  économies
                </p>
              </div>
            </div>

            {/* Données & RGPD */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-pink-500/30 p-6 hover:border-pink-500/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-pink-400">Données & RGPD</h3>
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/20">
                <p className="text-pink-300 font-semibold text-sm mb-2">✓ Solution NIRD</p>
                <p className="text-slate-400 text-sm">
                  Vérifier conformité + minimiser les données + solution libre maîtrisée = vraie
                  résistance
                </p>
              </div>
            </div>

            {/* Sauvegardes */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-yellow-500/30 p-6 hover:border-yellow-500/50 transition-all group md:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Sauvegardes & continuité</h3>
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-yellow-500/20">
                <p className="text-yellow-300 font-semibold text-sm mb-2">✓ Solution NIRD</p>
                <p className="text-slate-400 text-sm">
                  Stratégie 3-2-1 + tests réguliers = résilience par des sauvegardes structurées et
                  testées
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 bg-slate-950/80 backdrop-blur-md">
                <PageFooter/>
      </footer>
    </div>
  );
}
