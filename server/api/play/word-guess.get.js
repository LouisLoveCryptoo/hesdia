export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      hint: 'Messages répétitifs et agressifs : Être intentionnellement exclu d\'un groupe en ligne Encourager une personne à se faire du mal ou à se suicider',
      word: 'cyberharcelment',
    },
    {
      id: 2,
      hint: 'Retrait social soudain, Signes de détresse psychologique, Demande d\'aide indirecte',
      word: 'victime',
    },
    {
      id: 3,
      hint: 'Commentaires ou moqueries sur le poids, Pressions pour perdre du poids ,Effets sur la santé mentale',
      word: 'grossophobie',
    },
    {
      id: 4,
      hint: 'Violences verbales ou physique, Intolérance dans la famille, Opposition aux droits LGBTQ+',
      word: 'homophobie',
    },
    {
      id: 5,
      hint: 'Haine envers autruit peur de l\'etranger les arabes dehors',
      word: 'racisme',
    },
    {
      id: 6,
      hint: 'diffusions non autorisé vie sexuelle privé +18}',
      word: 'revenge porn',
    },
    {
      id: 7,
      hint: 'Regard sur une personne archarnement visuel suiveur',
      word: 'stalking',
    },
    {
      id: 8,
      hint: 'Manipulation faire douter une autre personne semer le doute',
      word: 'gazlightning',
    },

  ];
})
