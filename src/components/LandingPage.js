
import React from "react";
import { Shield, Heart, Leaf, School, Users, Building2, GraduationCap, MapPin, CheckCircle } from "lucide-react";
import Hero from "./Hero";
import NirdCard from "./NirdCard";
import ProblemCard from "./ProblemCard";

export default function LandingPage({ onNavigateToDashboard }) {
  const nirdPrinciples = [
    {
      icon: Heart,
      title: "Inclusion",
      description:
        "Garantir un accès équitable aux outils numériques pour tous les élèves et enseignants.",
      color: "#2A6DF4",
    },
    {
      icon: Shield,
      title: "Responsabilité",
      description:
        "Reprendre le contrôle de nos données et protéger la vie privée des utilisateurs.",
      color: "#37C77F",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description:
        "Prolonger la vie du matériel et réduire l'empreinte écologique du numérique.",
      color: "#F7C948",
    },
  ];

  const problems = [
    {
      title: "Obsolescence Windows",
      description:
        "Des milliers d'ordinateurs encore fonctionnels jetés à cause des mises à jour Windows.",
      impact: "Coût environnemental et financier",
    },
    {
      title: "Dépendance Google",
      description:
        "Données des élèves collectées par les GAFAM sans véritable contrôle ni transparence.",
      impact: "Risque de confidentialité",
    },
    {
      title: "Licences coûteuses",
      description:
        "Budgets éducatifs gaspillés dans des licences propriétaires onéreuses.",
      impact: "Perte de ressources",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Visualiser",
      description:
        "Explorez la carte interactive des écoles et leur niveau d'autonomie numérique.",
    },
    {
      number: "2",
      title: "Détecter",
      description:
        "Identifiez les problèmes de dépendance, d'obsolescence et de coûts cachés.",
    },
    {
      number: "3",
      title: "Choisir",
      description:
        "Sélectionnez des solutions libres adaptées : Linux, LibreOffice, Nextcloud...",
    },
    {
      number: "4",
      title: "Améliorer",
      description:
        "Suivez la progression du score NIRD et inspirez d'autres établissements.",
    },
  ];

  const community = [
    { icon: GraduationCap, label: "Élèves", color: "#2A6DF4" },
    { icon: Users, label: "Enseignants", color: "#37C77F" },
    { icon: School, label: "Directions", color: "#F7C948" },
    { icon: Building2, label: "Collectivités", color: "#2A6DF4" },
  ];

  return React.createElement(
    "div",
    { className: "min-h-screen" },
    [
      React.createElement(Hero, {
        key: "hero",
        onExploreCarte: onNavigateToDashboard,
      }),

      // What is NIRD
      React.createElement(
        "section",
        { key: "what", className: "py-20 px-6" },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto" },
          [
            React.createElement(
              "div",
              { key: "head", className: "text-center mb-16" },
              [
                React.createElement(
                  "h2",
                  { key: "title", className: "text-[#1F2937] mb-4" },
                  "Qu'est-ce que NIRD ?"
                ),
                React.createElement(
                  "p",
                  {
                    key: "text",
                    className: "text-[#6B7280] max-w-2xl mx-auto",
                  },
                  "NIRD (Numérique Inclusif, Responsable et Durable) est une démarche pour aider les écoles à s'émanciper des géants du numérique et adopter des outils libres et durables."
                ),
              ]
            ),
            React.createElement(
              "div",
              { key: "cards", className: "grid md:grid-cols-3 gap-8" },
              nirdPrinciples.map((p, idx) =>
                React.createElement(NirdCard, {
                  key: "np-" + idx,
                  icon: p.icon,
                  title: p.title,
                  description: p.description,
                  color: p.color,
                })
              )
            ),
          ]
        )
      ),

      // Problems
      React.createElement(
        "section",
        { key: "problems", className: "py-20 px-6 bg-white" },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto" },
          [
            React.createElement(
              "div",
              { key: "head", className: "text-center mb-16" },
              [
                React.createElement(
                  "h2",
                  { key: "title", className: "text-[#1F2937] mb-4" },
                  "Problèmes rencontrés par les écoles"
                ),
                React.createElement(
                  "p",
                  {
                    key: "text",
                    className: "text-[#6B7280] max-w-2xl mx-auto",
                  },
                  "Les établissements scolaires font face à de nombreux défis liés à leur dépendance aux solutions propriétaires."
                ),
              ]
            ),
            React.createElement(
              "div",
              { key: "list", className: "grid md:grid-cols-3 gap-6" },
              problems.map((pr, idx) =>
                React.createElement(ProblemCard, {
                  key: "pr-" + idx,
                  title: pr.title,
                  description: pr.description,
                  impact: pr.impact,
                })
              )
            ),
          ]
        )
      ),

      // How it works
      React.createElement(
        "section",
        { key: "how", className: "py-20 px-6" },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto" },
          [
            React.createElement(
              "div",
              { key: "head", className: "text-center mb-16" },
              [
                React.createElement(
                  "h2",
                  { key: "title", className: "text-[#1F2937] mb-4" },
                  "Comment fonctionne NIRD MAP ?"
                ),
                React.createElement(
                  "p",
                  {
                    key: "text",
                    className: "text-[#6B7280] max-w-2xl mx-auto",
                  },
                  "Une approche simple en quatre étapes pour transformer votre établissement."
                ),
              ]
            ),
            React.createElement(
              "div",
              { key: "steps", className: "grid md:grid-cols-4 gap-8" },
              steps.map((step, index) => {
                const bgColor =
                  index % 3 === 0
                    ? "#2A6DF4"
                    : index % 3 === 1
                    ? "#37C77F"
                    : "#F7C948";
                return React.createElement(
                  "div",
                  { key: "step-" + index, className: "relative" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow",
                    },
                    [
                      React.createElement(
                        "div",
                        {
                          key: "circle",
                          className:
                            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                          style: { backgroundColor: bgColor + "20" },
                        },
                        React.createElement(
                          "span",
                          {
                            className: "text-2xl",
                            style: { color: bgColor },
                          },
                          step.number
                        )
                      ),
                      React.createElement(
                        "h3",
                        {
                          key: "title",
                          className: "text-[#1F2937] mb-3",
                        },
                        step.title
                      ),
                      React.createElement(
                        "p",
                        {
                          key: "desc",
                          className: "text-[#6B7280] text-sm",
                        },
                        step.description
                      ),
                    ]
                  ),
                  index < steps.length - 1 &&
                    React.createElement("div", {
                      key: "connector",
                      className:
                        "hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2A6DF4] to-[#37C77F] opacity-30",
                    })
                );
              })
            ),
          ]
        )
      ),

      // Community
      React.createElement(
        "section",
        {
          key: "community",
          className:
            "py-20 px-6 bg-gradient-to-br from-[#2A6DF4]/5 to-[#37C77F]/5",
        },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto text-center" },
          [
            React.createElement(
              "h2",
              { key: "title", className: "text-[#1F2937] mb-4" },
              "Une communauté engagée"
            ),
            React.createElement(
              "p",
              {
                key: "text",
                className: "text-[#6B7280] mb-12 max-w-2xl mx-auto",
              },
              "NIRD MAP rassemble tous les acteurs de l'éducation autour d'un objectif commun : l'autonomie numérique."
            ),
            React.createElement(
              "div",
              {
                key: "cards",
                className: "grid grid-cols-2 md:grid-cols-4 gap-6",
              },
              community.map((member, index) => {
                const Icon = member.icon;
                return React.createElement(
                  "div",
                  {
                    key: "m-" + index,
                    className:
                      "bg-white rounded-2xl p-8 hover:scale-105 transition-transform",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "iconwrap",
                        className:
                          "w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center",
                        style: { backgroundColor: member.color + "20" },
                      },
                      React.createElement(Icon, {
                        size: 32,
                        style: { color: member.color },
                      })
                    ),
                    React.createElement(
                      "p",
                      { key: "label", className: "text-[#1F2937]" },
                      member.label
                    ),
                  ]
                );
              })
            ),
          ]
        )
      ),

      // CTA
      React.createElement(
        "section",
        { key: "cta", className: "py-20 px-6" },
        React.createElement(
          "div",
          {
            className:
              "max-w-4xl mx-auto text-center bg-gradient-to-r from-[#2A6DF4] to-[#37C77F] rounded-3xl p-12 shadow-lg",
          },
          [
            React.createElement(
              "h2",
              { key: "title", className: "text-white mb-4" },
              "Prêt à rejoindre la résistance numérique ?"
            ),
            React.createElement(
              "p",
              {
                key: "txt",
                className: "text-white/90 mb-8 max-w-2xl mx-auto",
              },
              "Découvrez comment votre établissement peut améliorer son autonomie numérique et contribuer à un écosystème éducatif plus durable."
            ),
            React.createElement(
              "button",
              {
                key: "btn",
                onClick: onNavigateToDashboard,
                className:
                  "bg-white text-[#2A6DF4] px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2",
              },
              [
                React.createElement(MapPin, { key: "icon", size: 20 }),
                "Explorer la Carte Interactive",
              ]
            ),
          ]
        )
      ),

      // Footer
      React.createElement(
        "footer",
        { key: "footer", className: "bg-[#1F2937] text-white py-12 px-6" },
        React.createElement(
          "div",
          { className: "max-w-6xl mx-auto" },
          [
            React.createElement(
              "div",
              {
                key: "top",
                className: "grid md:grid-cols-4 gap-8 mb-8",
              },
              [
                React.createElement(
                  "div",
                  { key: "col1" },
                  [
                    React.createElement(
                      "h3",
                      { key: "t", className: "mb-4" },
                      "NIRD MAP"
                    ),
                    React.createElement(
                      "p",
                      {
                        key: "p",
                        className: "text-white/70 text-sm",
                      },
                      "La carte interactive de l'autonomie numérique des écoles."
                    ),
                  ]
                ),
                React.createElement(
                  "div",
                  { key: "col2" },
                  [
                    React.createElement(
                      "h4",
                      { key: "t", className: "mb-4 text-sm" },
                      "Ressources"
                    ),
                    React.createElement(
                      "ul",
                      { key: "ul", className: "space-y-2 text-sm text-white/70" },
                      [
                        React.createElement(
                          "li",
                          { key: "l1" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Documentation"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l2" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Guide NIRD"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l3" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Solutions Libres"
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                React.createElement(
                  "div",
                  { key: "col3" },
                  [
                    React.createElement(
                      "h4",
                      { key: "t", className: "mb-4 text-sm" },
                      "Communauté"
                    ),
                    React.createElement(
                      "ul",
                      { key: "ul", className: "space-y-2 text-sm text-white/70" },
                      [
                        React.createElement(
                          "li",
                          { key: "l1" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Forum"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l2" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Contribuer"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l3" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Événements"
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                React.createElement(
                  "div",
                  { key: "col4" },
                  [
                    React.createElement(
                      "h4",
                      { key: "t", className: "mb-4 text-sm" },
                      "Contact"
                    ),
                    React.createElement(
                      "ul",
                      { key: "ul", className: "space-y-2 text-sm text-white/70" },
                      [
                        React.createElement(
                          "li",
                          { key: "l1" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Support"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l2" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "À propos"
                          )
                        ),
                        React.createElement(
                          "li",
                          { key: "l3" },
                          React.createElement(
                            "a",
                            {
                              href: "#",
                              className: "hover:text-white transition-colors",
                            },
                            "Partenaires"
                          )
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            React.createElement(
              "div",
              {
                key: "bottom",
                className:
                  "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
              },
              [
                React.createElement(
                  "p",
                  { key: "copy", className: "text-sm text-white/50" },
                  "© 2025 NIRD MAP - Nuit de l'Info 2025"
                ),
                React.createElement(
                  "div",
                  {
                    key: "lic",
                    className: "flex items-center gap-2 text-sm text-white/70",
                  },
                  [
                    React.createElement(CheckCircle, {
                      key: "icon",
                      size: 16,
                      className: "text-[#37C77F]",
                    }),
                    "Licence Libre - Open Source",
                  ]
                ),
              ]
            ),
          ]
        )
      ),
    ]
  );
}
