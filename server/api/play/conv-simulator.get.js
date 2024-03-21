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
                    "Vous envoyez un message privé a l'ami expliquant pourquoi la photo est problématique. Que faites-vous ?",
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
                  "Vous ignorez la situation. Que faites-vous ?",
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
{
  id: 2,
  title: "Témoigner du Cyberharcèlement",
  context: {
    question:
      "Vous voyez quelqu'un se faire harceler dans les commentaires d'un post sur une plateforme de médias sociaux. Que faites-vous ?",
    answers: [
      {
        answer_id: 1,
        content: "Participer aux commentaires en défendant la victime.",
        next_question: {
          answer_id: 1,
          context: {
            question:
              "Vous participez aux commentaires en défendant la victime. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Essayer de trouver un compromis pour calmer la situation",
                next_question: {
                    conclusion: "Opter pour trouver un compromis pourrait conduire à une résolution pacifique du conflit, favorisant ainsi un environnement en ligne plus harmonieux.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Inverser la situation en se mettant à plusieurs contre le harceleur",
                next_question: {
                    conclusion: "En choisissant de se mettre à plusieurs contre l'harceleur, cela pourrait potentiellement aggraver la situation en exacerbant le conflit plutôt qu'en le résolvant.",
                }
              },
              {
                choice_id: 3,
                content: "Parler a la personne harcelé en lui disant de ne pas faire attention au message",
                next_question: {
                  conclusion: "Si le joueur décide de parler à la personne harcelée en lui disant de ne pas faire attention au message, cela pourrait offrir un soutien émotionnel à la victime, mais ne résoudrait pas nécessairement le problème de harcèlement à sa source.",
              }
              },
            ],
          },
        },
      },
      {
        answer_id: 2,
        content:
          "Signaler les commentaires harcelants à la plateforme.",
          next_question: {
            answer_id: 2,
            context: {
              question:
                "Vous signalez les commentaires harcelants à la plateforme. Que faites-vous ?",
              answers: [
                {
                  choice_id: 1,
                  content:
                    "Attendre que les modérateurs de la plateforme agissent",
                  next_question: {
                      conclusion: "Opter pour attendre que les modérateurs de la plateforme agissent peut être une stratégie passive mais efficace si les modérateurs réagissent rapidement aux signalements de harcèlement.",
                  }
                },
                {
                  choice_id: 2,
                  content:
                    "Continuer de défendre la personne",
                  next_question: {
                      conclusion: "En choisissant de bloquer l'harceleur et de continuer à signaler les messages, le joueur peut se protéger efficacement contre le harcèlement et réduire son impact sur son expérience sur les réseaux sociaux.",
                  }
                },
                {
                  choice_id: 3,
                  content: "Bloquer l’harceleur et partir car les messages ont été report",
                  next_question: {
                    conclusion: "Si le joueur décide de continuer à défendre la personne harcelée, cela peut montrer un soutien continu à la victime, mais ne garantit pas nécessairement une résolution rapide du problème.",
                }
                },
              ],
            },
          },
      },
      {
        answer_id: 3,
        content: "Envoyer un message de soutien à la victime en privé.",
        next_question: {
          answer_id: 3,
          context: {
            question:
              "Vous envoyez un message de soutien à la victime en privé. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Lui demander de bloquer l’utilisateur.",
                next_question: {
                    conclusion: "Choisir de demander à la victime de bloquer l'utilisateur peut aider à prévenir les futurs contacts indésirables, mais ne règle pas nécessairement le problème de harcèlement.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Le rassurer en lui disant que ce disait la personne était fausse.",
                next_question: {
                    conclusion: "En rassurant la victime en lui disant que ce que disait la personne était faux, cela pourrait apaiser ses craintes à court terme, mais ne confronte pas directement le harceleur.",
                }
              },
              {
                choice_id: 3,
                content: "Je lui dit d’apprendre a ce défendre tout seul",
                next_question: {
                  conclusion: "Encourager la victime à apprendre à se défendre seule peut être interprété comme une tentative de promouvoir l'autonomie, mais cela peut également minimiser l'importance du soutien de la communauté face au harcèlement sur les réseaux sociaux.",
              }
              },
            ],
          },
        },
      },
    ],
  },
},


//SCÉNARIO 3
{
  id: 3,
  title: "Réception de Messages Harcelants",
  context: {
    question:
      "Vous recevez des messages harcelants d'un compte anonyme. Que faites-vous ?",
    answers: [
      {
        answer_id: 1,
        content: "Répondre au harceleur pour lui dire de s'arrêter.",
        next_question: {
          answer_id: 1,
          context: {
            question:
              "Vous répondez au harceleur pour lui dire de s'arrêter. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Continuer à dialoguer avec le harceleur dans l'espoir de le raisonner.",
                next_question: {
                    conclusion: "Essayer de dialoguer peut entraîner une escalade du conflit si le harceleur se sent provoqué.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Utiliser de l'humour pour dédramatiser la situation.",
                next_question: {
                    conclusion: "Utiliser l'humour peut potentiellement désamorcer la tension, mais risque aussi de minimiser la gravité du harcèlement aux yeux des autres.",
                }
              },
              {
                choice_id: 3,
                content: "Après une tentative de communication, bloquer le harceleur si les messages persistent.",
                next_question: {
                  conclusion: "Bloquer le harceleur après une tentative de communication montre une limite claire de tolérance tout en prenant des mesures pour se protéger.",
              }
              },
            ],
          },
        },
      },
      {
        answer_id: 2,
        content:
          "Bloquer le compte et signaler les messages à la plateforme.",
          next_question: {
            answer_id: 2,
            context: {
              question:
                "Vous bloquez le compte et signaler les messages à la plateforme. Que faites-vous ?",
              answers: [
                {
                  choice_id: 1,
                  content:
                    "Encourager ses contacts à signaler également le compte pour une action plus rapide de la plateforme.",
                  next_question: {
                      conclusion: "Inciter d'autres à signaler le compte peut accélérer la réaction de la plateforme, mais peut également impliquer d'autres personnes dans le conflit.",
                  }
                },
                {
                  choice_id: 2,
                  content:
                    "Consulter un professionnel pour des conseils sur la gestion du stress et de l'anxiété causés par le harcèlement.",
                  next_question: {
                      conclusion: "La consultation d'un professionnel peut aider à gérer l'impact émotionnel du harcèlement, favorisant le bien-être mental.",
                  }
                },
                {
                  choice_id: 3,
                  content: "Chercher des ressources en ligne pour améliorer sa sécurité et sa confidentialité sur les réseaux sociaux.",
                  next_question: {
                    conclusion: "Améliorer sa sécurité en ligne peut empêcher de futures attaques mais nécessite un effort continu et une éducation sur la sécurité numérique.",
                }
                },
              ],
            },
          },
      },
      {
        answer_id: 3,
        content: "Partager les messages avec des amis pour obtenir du soutien.",
        next_question: {
          answer_id: 3,
          context: {
            question:
              "Vous partagez les messages avec des amis pour obtenir du soutien. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Organiser une rencontre avec des amis pour discuter des messages et élaborer une réponse collective.",
                next_question: {
                    conclusion: "Partager l'expérience avec des amis offre un soutien émotionnel immédiat et peut aider à développer une réponse collective au harceleur.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Créer une campagne de sensibilisation sur les réseaux sociaux contre le cyberharcèlement.",
                next_question: {
                    conclusion: "Lancer une campagne de sensibilisation peut transformer une expérience négative en une action positive, mais nécessite des ressources et peut attirer plus d'attention sur la situation initiale.",
                }
              },
              {
                choice_id: 3,
                content: "Rechercher du soutien professionnel pour gérer les effets émotionnels du harcèlement.",
                next_question: {
                  conclusion: "Chercher du soutien professionnel assure une gestion adaptée des répercussions émotionnelles, mais peut être perçu comme une démarche nécessitant une reconnaissance du problème comme sérieux et affectant profondément.",
              }
              },
            ],
          },
        },
      },
    ],
  },
},


//SCÉNARIO 4
{
  id: 4,
  title: "Diffusion de Rumeurs en Ligne ",
  context: {
    question:
      "Une rumeur fausse et nuisible se répand sur vous dans votre école ou lieu de travail, principalement à travers les réseaux sociaux. Que faites-vous ?",
    answers: [
      {
        answer_id: 1,
        content: "Confronter directement la personne que vous suspectez d'avoir commencé la rumeur sur les réseaux sociaux.",
        next_question: {
          answer_id: 1,
          context: {
            question:
              "Vous confrontez directement la personne que vous suspectez d'avoir commencé la rumeur sur les réseaux sociaux. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Exiger une rétractation publique de la part de la personne qui a diffusé la rumeur.",
                next_question: {
                    conclusion: "Exiger une rétractation publique peut entraîner une résolution du problème mais risque d'aggraver la situation si la personne refuse ou réagit négativement.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Utiliser des preuves pour réfuter la rumeur publiquement.",
                next_question: {
                    conclusion: "Réfuter publiquement la rumeur avec des preuves peut aider à clarifier la situation mais peut également prolonger la discussion autour de la rumeur.",
                }
              },
              {
                choice_id: 3,
                content: "Engager une conversation privée avec la personne pour comprendre ses motivations.",
                next_question: {
                  conclusion: "Une conversation privée peut mener à une résolution pacifique si la personne est ouverte à discuter, mais il n'y a aucune garantie que cela changera son comportement ou l'opinion publique.",
              }
              },
            ],
          },
        },
      },
      {
        answer_id: 2,
        content:
          "Informer un adulte de confiance ou un responsable dans votre école ou lieu de travail de la situation.",
          next_question: {
            answer_id: 2,
            context: {
              question:
                "Vous informez un adulte de confiance ou un responsable dans votre école ou lieu de travail de la situation. Que faites-vous ?",
              answers: [
                {
                  choice_id: 1,
                  content:
                    "Travailler avec le responsable pour développer un plan d'action officiel.",
                  next_question: {
                      conclusion: "Développer un plan d'action avec un responsable peut offrir une solution structurée et officielle, aidant à rétablir la réputation.",
                  }
                },
                {
                  choice_id: 2,
                  content:
                    "Demander une annonce ou une réunion pour clarifier la situation auprès des autres.",
                  next_question: {
                      conclusion: "Une annonce ou réunion officielle peut clarifier les faits, mais également attirer plus d'attention sur la rumeur initialement.",
                  }
                },
                {
                  choice_id: 3,
                  content: "Participer à des ateliers ou des séances de sensibilisation sur la gestion de la réputation en ligne avec l'aide de l'établissement.",
                  next_question: {
                    conclusion: "Participer à des ateliers sur la gestion de la réputation en ligne peut offrir des stratégies à long terme pour gérer des situations similaires à l'avenir, renforçant la résilience personnelle.",
                }
                },
              ],
            },
          },
      },
      {
        answer_id: 3,
        content: "Essayer d'ignorer la rumeur, espérant qu'elle se dissipe d'elle-même.",
        next_question: {
          answer_id: 3,
          context: {
            question:
              "Vous essayez d'ignorer la rumeur, espérant qu'elle se dissipe d'elle-même. Que faites-vous ?",
            answers: [
              {
                choice_id: 1,
                content:
                  "Se concentrer sur ses activités et ses relations positives pour montrer que la rumeur ne l'affecte pas.",
                next_question: {
                    conclusion: "Ignorer la rumeur et se concentrer sur le positif peut aider à maintenir sa propre santé mentale et à minimiser l'impact de la rumeur, mais ne garantit pas que la rumeur se dissipera d'elle-même.",
                }
              },
              {
                choice_id: 2,
                content:
                  "Utiliser les réseaux sociaux pour partager des aspects positifs de sa vie et contrer subtilement la rumeur.",
                next_question: {
                    conclusion: "Contrer la rumeur par des publications positives peut lentement changer la perception des autres, bien que cela puisse prendre du temps et ne pas atteindre tout le monde concerné.",
                }
              },
              {
                choice_id: 3,
                content: "Consulter un conseiller ou un psychologue pour gérer le stress et l'impact émotionnel causés par la rumeur.",
                next_question: {
                  conclusion: "Consulter un professionnel pour gérer le stress et l'impact émotionnel est crucial pour la santé mentale, mais cela ne résout pas directement le problème de la rumeur en elle-même.",
              }
              },
            ],
          },
        },
      },
    ],
  },
},
    
  ];
});
