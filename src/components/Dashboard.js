import React, { useMemo, useState } from "react";
import { Gamepad2 } from "lucide-react";

import MapView from "./MapView";
import SchoolModal from "./SchoolModal";
import SolutionsPanel from "./SolutionsPanel";
import Leaderboard from "./Leaderboard";

export default function Dashboard({ onNavigateToLanding }) {
  const [currentView, setCurrentView] = useState("carte");
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  // ✅ écoles en state (update score)
  const [schoolsState, setSchoolsState] = useState([
    {
      id: 1,
      name: "La Forge libre",
      score: 0,
      status: "resistant",
      badges: ["libre", "responsable"],
      x: 40.58,
      y: 42.38,
      decisions: [
        {
          date: "2025-10-15",
          action: "Migration de la suite bureautique vers LibreOffice",
          impact: "+15 points NIRD",
        },
      ],
      problems: [
        "Quelques postes encore sous Windows 8.",
        "Formation Linux à renforcer pour les nouveaux enseignants.",
      ],
    },
    {
      id: 2,
      name: "La Maison Durable",
      score: 0,
      status: "transition",
      badges: ["Matériel réemployé/réparation/Green IT"],
      x: 47.15,
      y: 52.99,
      decisions: [{ date: "2025-09-10", action: "Déploiement pilote de Nextcloud", impact: "+12 points NIRD" }],
      problems: ["Dépendance forte à Google Classroom.", "Inquiétudes sur la portabilité des données."],
    },
    {
      id: 3,
      name: "Le Donjon de la Souveraineté",
      score: 0,
      status: "dependent",
      tags: ["Protection des données/RGPD"],
      x: 60.68,
      y: 57.76,
      badges: [],
      decisions: [{ date: "2025-10-02", action: "Sensibilisation à la protection des données", impact: "+5 points NIRD" }],
      problems: ["Parc informatique obsolète sous Windows 7.", "Usage massif de services gratuits non RGPD."],
    },
    {
      id: 4,
      name: "L'Atelier Collaboratif",
      score: 0,
      status: "transition",
      x: 55.01,
      y: 67.92,
      badges: ["responsable"],
      decisions: [{ date: "2025-10-02", action: "Renforcement de la collaboration libre", impact: "+8 points NIRD" }],
      problems: ["Suite bureautique encore propriétaire sur certains postes."],
    },
    {
      id: 5,
      name: "L'Ecole Résistante",
      score: 0,
      status: "transition",
      x: 45.81,
      y: 70.67,
      badges: ["libre"],
      decisions: [{ action: "pédagogie numérique responsable", date: "2025-10-02", impact: "+10 points NIRD" }],
      problems: ["Inventaire matériel incomplet.", "Besoin d’un guide ENT alternatif."],
    },
    {
      id: 6,
      name: "Le Conseil des Druides Numériques",
      score: 0,
      status: "dependent",
      x: 66.16,
      y: 84.96,
      badges: ["Collaboration"],
      decisions: [{ action: "Communauté/contribution/forums", date: "2025-10-02", impact: "+7 points NIRD" }],
      problems: ["Données encore dans un cloud extra-UE.", "Postes hétérogènes et anciens."],
    },
  ]);

  // ✅ école sélectionnée
  const selectedSchool = useMemo(() => {
    if (!selectedSchoolId) return null;
    return schoolsState.find((s) => s.id === selectedSchoolId) || null;
  }, [selectedSchoolId, schoolsState]);

  // ✅ callback appelé par le QCM pour modifier le score
  const handleQcmResult = (schoolId, delta, meta) => {
    setSchoolsState((prev) =>
      prev.map((s) => {
        if (s.id !== schoolId) return s;

        const nextScore = Math.max(0, Math.min(100, (s.score ?? 0) + delta));

        const newDecision = meta?.decision
          ? [
              ...(s.decisions || []),
              {
                date: new Date().toISOString().slice(0, 10),
                action: meta.decision,
                impact: `${delta >= 0 ? "+" : ""}${delta} points NIRD`,
              },
            ]
          : s.decisions || [];

        const nextStatus = nextScore >= 75 ? "resistant" : nextScore >= 50 ? "transition" : "dependent";

        return { ...s, score: nextScore, status: nextStatus, decisions: newDecision };
      })
    );
  };

  // ✅ IMPORTANT: mainContent inchangé (carte intacte)
  const mainContent =
    currentView === "carte"
      ? React.createElement(MapView, {
          schools: schoolsState,
          onSelectSchool: (school) => setSelectedSchoolId(school.id),
        })
      : currentView === "solutions"
      ? React.createElement(SolutionsPanel, null)
      : React.createElement(Leaderboard, {
          schools: schoolsState,
          onSelectSchool: (school) => setSelectedSchoolId(school.id),
          compact: false,
        });

  return (
    // ✅ wrapper global: même fond / ambiance que Landing
    <div className="min-h-screen bg-slate-950 overflow-x-hidden flex flex-col">
      {/* ✅ Header (copié du Landing, + bouton retour optionnel) */}
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

            {/* optionnel, si tu veux un retour landing */}
            <button
              type="button"
              onClick={onNavigateToLanding}
              className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/30 text-slate-200 hover:bg-slate-900/60 transition"
            >
              Retour
            </button>
          </div>
        </nav>
      </header>

      {/* ✅ Contenu dashboard (ton code d'origine, carte inchangée) */}
      <div className="flex-1 flex h-screen bg-[#F5F7FA] overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">{/* header interne (vide chez toi) */}</div>

            {/* ✅ mapwrapper INTACT */}
            <div className="flex-1 rounded-3xl overflow-hidden shadow-lg">{mainContent}</div>
          </div>
        </div>

        {selectedSchool && (
          <SchoolModal
            school={selectedSchool}
            onClose={() => setSelectedSchoolId(null)}
            onQcmResult={(delta, meta) => handleQcmResult(selectedSchool.id, delta, meta)}
          />
        )}
      </div>

      {/* ✅ Footer (copié du Landing) */}
      <footer className="relative border-t border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400 text-sm">© 2025 PixelCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
