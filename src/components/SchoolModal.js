import React, { useEffect, useMemo, useState } from "react";
import { X, TrendingUp, Calendar, CheckCircle } from "lucide-react";

export default function SchoolModal({ school, onClose, onQcmResult }) {
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

  const evolutionData = [
    { month: "Jan", score: 45 },
    { month: "Fév", score: 48 },
    { month: "Mar", score: 52 },
    { month: "Avr", score: 58 },
    { month: "Mai", score: 65 },
    { month: "Jun", score: school?.score ?? 0 },
  ];

  const qcmBank = [
    {
      match: ["windows 10", "fin de support", "obsolescence windows", "windows 7", "windows 8"],
      title: "Obsolescence Windows (fin de support)",
      question:
        "Windows arrive en fin de support sur une salle info. Quelle action est la plus alignée NIRD ?",
      options: [
        { id: "A", text: "Acheter immédiatement des PC neufs haut de gamme" },
        { id: "B", text: "Migrer vers GNU/Linux adapté + reconditionner si possible" },
        { id: "C", text: "Payer un support privé Windows pour 3 ans" },
        { id: "D", text: "Désactiver internet pour éviter les risques" },
      ],
      correctId: "B",
      feedback: "Linux + reconditionnement = sobriété (durée de vie) + autonomie + coûts réduits.",
    },
    {
      match: ["google", "workspace", "drive", "docs", "gmail", "classroom"],
      title: "Dépendance Google (outils pédagogiques)",
      question: "L’école dépend de Google Drive/Docs. Quelle migration NIRD est la plus pertinente ?",
      options: [
        { id: "A", text: "Continuer car c’est pratique / gratuit" },
        { id: "B", text: "Mettre un cloud maîtrisé (ex: Nextcloud) + suite bureautique libre" },
        { id: "C", text: "Remplacer par Microsoft 365" },
        { id: "D", text: "Tout passer sur clés USB" },
      ],
      correctId: "B",
      feedback: "On récupère la maîtrise des données et on réduit la dépendance aux Big Tech.",
    },
    {
      match: ["licence", "licences", "coûteuse", "cout", "payant", "abonnement", "propriétaire", "proprietaire"],
      title: "Licences coûteuses",
      question:
        "Les licences logicielles explosent le budget. Quelle décision correspond le mieux à la démarche NIRD ?",
      options: [
        { id: "A", text: "Négocier juste un rabais éditeur" },
        { id: "B", text: "Basculer vers LibreOffice + mini-formation" },
        { id: "C", text: "Utiliser des versions piratées" },
        { id: "D", text: "Arrêter de produire des documents" },
      ],
      correctId: "B",
      feedback: "Formats ouverts + outils libres + accompagnement = durabilité et économies.",
    },
    {
      match: ["rgpd", "données", "donnees", "élèves", "eleves", "vie privée", "confidentialité", "cloud extra-ue", "extra-ue"],
      title: "Données & RGPD",
      question: "Une appli demande des données élèves. Quel réflexe NIRD adopter ?",
      options: [
        { id: "A", text: "Accepter tant que ça marche" },
        { id: "B", text: "Vérifier conformité, minimiser les données, privilégier solution libre maîtrisée" },
        { id: "C", text: "Inventer des données au hasard" },
        { id: "D", text: "Publier la liste des élèves pour simplifier" },
      ],
      correctId: "B",
      feedback: "Gouvernance des données + minimisation + solutions maîtrisées = vraie résistance.",
    },
    {
      match: ["sauvegarde", "backup", "perte", "disque", "panne"],
      title: "Sauvegardes & continuité",
      question: "Les documents ne sont pas sauvegardés. Quelle action NIRD est prioritaire ?",
      options: [
        { id: "A", text: "Croiser les doigts" },
        { id: "B", text: "Mettre une stratégie 3-2-1 + tests réguliers" },
        { id: "C", text: "Envoyer tout par email" },
        { id: "D", text: "Compresser les fichiers" },
      ],
      correctId: "B",
      feedback: "La résilience passe par des sauvegardes structurées et testées.",
    },
  ];

  const pickQcmForProblem = (problemText) => {
    const t = (problemText || "").toLowerCase();
    for (const q of qcmBank) if (q.match.some((m) => t.includes(m))) return q;

    return {
      match: [],
      title: "Choix NIRD (générique)",
      question: "Quel choix est le plus aligné avec la démarche NIRD (libre, sobre, autonome, durable) ?",
      options: [
        { id: "A", text: "Choisir l’outil le plus populaire même s’il enferme l’école" },
        { id: "B", text: "Privilégier une solution libre + données maîtrisées + accompagnement" },
        { id: "C", text: "Ne rien changer pour éviter la transition" },
        { id: "D", text: "Remplacer une Big Tech par une autre" },
      ],
      correctId: "B",
      feedback: "NIRD = autonomie + sobriété + formats ouverts + accompagnement progressif.",
    };
  };

  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [qcmAnswerByProblem, setQcmAnswerByProblem] = useState({});
  const [remainingProblems, setRemainingProblems] = useState([]);

  // ✅ Overlay félicitations (fermable)
  const [showCongrats, setShowCongrats] = useState(false);

  // Init / reset
  useEffect(() => {
    setSelectedProblemIndex(0);
    setQcmAnswerByProblem({});
    setRemainingProblems(school?.problems ? [...school.problems] : []);
    setShowCongrats(false);
  }, [school?.id]);

  // Déclenchement auto quand score atteint 100
  useEffect(() => {
    if ((school?.score ?? 0) >= 100) setShowCongrats(true);
  }, [school?.score]);

  useEffect(() => {
    const len = remainingProblems.length;
    if (len === 0) return;
    if (selectedProblemIndex > len - 1) setSelectedProblemIndex(len - 1);
  }, [remainingProblems.length, selectedProblemIndex]);

  const currentProblem =
    remainingProblems.length > 0
      ? remainingProblems[Math.min(selectedProblemIndex, remainingProblems.length - 1)]
      : null;

  const currentQcm = useMemo(() => pickQcmForProblem(currentProblem), [currentProblem]);

  const computeDelta = (chosenId) => (chosenId === currentQcm.correctId ? 50 : -50);

  const submitQcmAnswer = (problemIndex, chosenId) => {
    if (!currentProblem) return;

    const isCorrect = chosenId === currentQcm.correctId;

    setQcmAnswerByProblem((prev) => ({
      ...prev,
      [problemIndex]: { chosenId, isCorrect },
    }));

    const delta = computeDelta(chosenId);

    const meta = {
      decision: isCorrect
        ? `Résolution NIRD : ${currentQcm.title}`
        : `Réponse non optimale (QCM) : ${currentQcm.title}`,
      problem: currentProblem,
      chosenId,
      correctId: currentQcm.correctId,
    };

    if (typeof onQcmResult === "function") onQcmResult(delta, meta);

    // ✅ Faire disparaitre la question après réponse
    setRemainingProblems((prev) => {
      const next = prev.filter((_, i) => i !== problemIndex);

      setSelectedProblemIndex((curr) => {
        if (next.length === 0) return 0;
        if (problemIndex >= next.length) return next.length - 1;
        return curr;
      });

      return next;
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* ✅ Animation CSS (inline) */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(18px) scale(.9); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120px) scale(1.1); opacity: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .flower {
          position: absolute;
          bottom: -10px;
          font-size: 28px;
          animation: floatUp 1.9s ease-in forwards;
          filter: drop-shadow(0 8px 10px rgba(0,0,0,.12));
          user-select:none;
          pointer-events:none;
          will-change: transform, opacity;
        }
        .congratsCard {
          animation: popIn .22s ease-out both;
        }
      `}</style>

      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Overlay Félicitations */}
        {showCongrats && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/40 rounded-3xl"
              onClick={() => setShowCongrats(false)}
            />

            {/* flowers */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {Array.from({ length: 18 }).map((_, i) => {
                const left = `${(i * 100) / 18}%`;
                const delay = `${(i % 6) * 0.08}s`;
                const emoji = ["🌸", "🌼", "💐", "🌺"][i % 4];
                const size = 22 + (i % 5) * 6;
                return (
                  <div
                    key={`fl-${i}`}
                    className="flower"
                    style={{ left, animationDelay: delay, fontSize: size }}
                  >
                    {emoji}
                  </div>
                );
              })}
            </div>

            {/* card */}
            <div className="relative z-10 w-[92%] max-w-md bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] p-6 congratsCard">
              <div className="text-sm text-[#6B7280] mb-1">Score atteint</div>
              <div className="text-3xl text-[#1F2937] mb-2">🎉 Félicitations !</div>
              <div className="text-[#374151] mb-4">
                {school?.name ?? "Cette école"} a atteint <b>100/100</b> en résistance numérique.
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowCongrats(false)}
                  className="flex-1 rounded-xl px-4 py-2 bg-[#111827] text-white hover:opacity-90 transition"
                >
                  Super !
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-4 py-2 border border-[#E5E7EB] text-[#111827] hover:bg-[#F9FAFB] transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E5E7EB] p-6 flex items-start justify-between rounded-t-3xl">
          <div className="flex-1">
            <h2 className="text-[#1F2937] mb-2">{school?.name ?? "École"}</h2>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getStatusColor(school?.status) }}
                />
                <span className="text-sm text-[#6B7280]">{getStatusLabel(school?.status)}</span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#37C77F]" />
                <span className="text-sm text-[#6B7280]">
                  +{Math.floor(Math.random() * 15 + 5)} ce mois
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#1F2937] transition-colors"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Score */}
          <div className="bg-gradient-to-br from-[#2A6DF4]/10 to-[#37C77F]/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-[#6B7280] mb-1">Score NIRD</div>
                <div className="text-4xl text-[#1F2937]">{school?.score ?? 0}/100</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-[#6B7280] mb-1">Niveau XP</div>
                <div className="text-2xl text-[#2A6DF4]">{Math.floor((school?.score ?? 0) / 20)}</div>
              </div>
            </div>

            <div className="relative h-3 bg-white rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2A6DF4] to-[#37C77F] rounded-full transition-all"
                style={{ width: `${school?.score ?? 0}%` }}
              />
            </div>
          </div>

          {/* Decisions */}
          {!!school?.decisions?.length && (
            <div>
              <h3 className="text-[#1F2937] mb-4">Historique des décisions</h3>
              <div className="space-y-3">
                {school.decisions.map((decision, index) => (
                  <div key={`dec-${index}`} className="bg-white border border-[#E5E7EB] rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#37C77F]/10 rounded-lg p-2">
                        <CheckCircle size={20} className="text-[#37C77F]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-[#1F2937] text-sm">{decision.action}</h4>
                          <span className="text-xs text-[#37C77F]">{decision.impact}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                          <Calendar size={12} />
                          <span>
                            {new Date(decision.date).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problems + QCM */}
          <div>
            <h3 className="text-[#1F2937] mb-4">⚠️ Problèmes détectés</h3>

            {remainingProblems.length === 0 ? (
              <div className="bg-[#ECFDF5] border border-[#37C77F]/30 rounded-xl p-3 text-sm text-[#065F46]">
                ✅ Tous les QCM ont été traités pour cette école.
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  {remainingProblems.map((p, index) => {
                    const isActive = index === selectedProblemIndex;
                    return (
                      <button
                        key={`prob-${index}`}
                        type="button"
                        onClick={() => setSelectedProblemIndex(index)}
                        className={
                          "w-full text-left border rounded-xl p-3 text-sm transition-all " +
                          (isActive
                            ? "bg-[#FFF7ED] border-[#F59E0B]/40 text-[#1F2937]"
                            : "bg-[#FEF2F2] border-[#EF4444]/20 text-[#6B7280] hover:bg-[#FEE2E2]")
                        }
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                {currentProblem && (
                  <div className="mt-4 bg-white border border-[#E5E7EB] rounded-2xl p-4">
                    <div className="mb-3">
                      <div className="text-xs text-[#6B7280] mb-1">QCM — Solution NIRD</div>
                      <h4 className="text-[#1F2937] text-sm">{currentQcm.title}</h4>
                    </div>

                    <div className="text-sm text-[#1F2937] mb-3">{currentQcm.question}</div>

                    <div className="space-y-2">
                      {currentQcm.options.map((opt) => (
                        <button
                          key={`opt-${opt.id}`}
                          type="button"
                          onClick={() => submitQcmAnswer(selectedProblemIndex, opt.id)}
                          className="w-full text-left rounded-xl border p-3 text-sm transition-all bg-white border-[#E5E7EB] hover:bg-[#F9FAFB]"
                        >
                          {opt.id}. {opt.text}
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 text-xs text-[#6B7280]">
                      (Après réponse, ce QCM disparaît automatiquement.)
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
