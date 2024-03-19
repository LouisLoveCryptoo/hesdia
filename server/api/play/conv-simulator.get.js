export default defineEventHandler((event) => {
  return [

  //SCÉNARIO 1
    {
      id: 1,
      title: "Harcèlement sur les réseaux sociaux",
      context: {
        question:
          "Un ami partage une photo embarrassante de vous sur un réseau social sans votre consentement. Que faites-vous ?",
        answers: [
          {
            answer_id: 1,
            content: "Confronter l'ami en public sur le réseau social",
            next_question: {
              answer_id: 1,
              context: {
                question:
                  "Vous confrontez l'ami en public sur le réseau social. Que faites-vous ?",
                answers: [
                  {
                    choice_id: 1,
                    content:
                      "Poster une autre photo embarrassante de l'ami en représailles",
                    next_question: {
                        conclusion: "La situation s'escalade, affectant la réputation des deux personnes. Il est préférable de régler le conflit de manière plus constructive.",
                    }
                  },
                  {
                    choice_id: 2,
                    content:
                      "Demander des excuses publiques a l'ami sur le réseau social",
                    next_question: {
                        conclusion: "L'ami s'excuse publiquement, ce qui apaise un peu la situation mais laisse des tensions.",
                    }
                  },
                  {
                    choice_id: 3,
                    content: "Supprimer l'ami de vos contacts",
                    next_question: {
                      conclusion: "Vous perdez le contact avec cet ami, mais cela vous aide à vous concentrer sur des amitiés plus saines.",
                  }
                  },
                ],
              },
            },
          },
          {
            answer_id: 2,
            content:
              "Envoyer un message privé a l'ami expliquant pourquoi la photo est problématique",
              next_question: {
                answer_id: 2,
                context: {
                  question:
                    "Envoyer un message privé a l'ami expliquant pourquoi la photo est problématique",
                  answers: [
                    {
                      choice_id: 1,
                      content:
                        "Accepter les excuses de l'ami mais demander de discuter en personne pour clarifier les limites.",
                      next_question: {
                          conclusion: "La discussion renforce votre amitié et établit des limites claires.",
                      }
                    },
                    {
                      choice_id: 2,
                      content:
                        "Suggérer de faire une publication commune sur l'importance du consentement.",
                      next_question: {
                          conclusion: "La publication commune sensibilise vos réseaux à l'importance du respect en ligne.",
                      }
                    },
                    {
                      choice_id: 3,
                      content: "Décider de limiter les interactions avec cet ami à l'avenir.",
                      next_question: {
                        conclusion: "Vous vous sentez plus en sécurité mais un peu isolé de certains cercles sociaux.",
                    }
                    },
                  ],
                },
              },
          },
          {
            answer_id: 3,
            content: "Ignorer la situation",
            next_question: {
              answer_id: 3,
              context: {
                question:
                  "Ignorer la situation",
                answers: [
                  {
                    choice_id: 1,
                    content:
                      "S'ouvrir à un proche pour obtenir du soutien.",
                    next_question: {
                        conclusion: "Trouver du soutien vous aide à mieux gérer vos émotions face à la situation.",
                    }
                  },
                  {
                    choice_id: 2,
                    content:
                      "Rejoindre un groupe en ligne pour des conseils sur comment gérer le cyberharcèlement.",
                    next_question: {
                        conclusion: "Les conseils reçus offrent des stratégies pratiques pour vous protéger en ligne.",
                    }
                  },
                  {
                    choice_id: 3,
                    content: "Commencer à utiliser des paramètres de confidentialité plus stricts sur les réseaux sociaux.",
                    next_question: {
                      conclusion: "Les paramètres de confidentialité améliorés réduisent les risques de futurs incidents.",
                  }
                  },
                ],
              },
            },
          },
        ],
      },
    },

//SCÉNARIO 2


    
  ];
});
