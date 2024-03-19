export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: "Harcélement sur les réseaux sociaux",
      context: {
        question:
          "Un ami partage une photo embarrassante de vous sur un réseau social sans votre consentement. Que faites-vous ?",
        answers: [
          {
            id: 1,
            content: "Confronter l'ami en public sur le réseau social",
            next_question: {
              answer_id: 1,
              context: {
                question:
                  "Vous confrontez l'ami en public sur le réseau social. Que faites-vous ?",
                answers: [
                  {
                    answer_id: 11,
                    content:
                      "Poster une autre photo embarrassante de l'ami en représailles",
                    next_question: {
                        conclusion: "La situation s'escalade, affectant la réputation des deux personnes. Il est préférable de régler le conflit de manière plus constructive.",
                    }
                  },
                  {
                    answer_id: 12,
                    content:
                      "Demander des excuses publiques a l'ami sur le réseau social",
                  },
                  {
                    answer_id: 13,
                    content: "Supprimer l'ami de vos contacts",
                  },
                ],
              },
            },
          },
          {
            answer_id: 2,
            content:
              "Envoyer un message privé a l'ami expliquant pourquoi la photo est problématique",
          },
          {
            answer_id: 3,
            content: "Ignorer la situation",
          },
        ],
      },
    },
  ];
});
