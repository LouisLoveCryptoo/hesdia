export default defineEventHandler((event) => {
    return [
        {
            id: 1,
            title: 'Plus ou Moins',
            path: '/play/more-or-less',
            desc: 'Naviguez a travers les statistiques des dernières années sur le harcélement',
        },
        {
            id: 2,
            title: 'Jeu de carte',
            path: '/play/memory-game',
            desc: 'Jouez avec les cartes mémoires pour découvrir les différents gestes simples',
        },
        {
            id: 3,
<<<<<<< HEAD
            title: 'Simulateur',
            path: '/play/conversation-simulator',
            desc: 'Jouez avec les cartes mémoires pour découvrir les différents gestes simples',
        },
        {
            id: 4,
            title: 'Jeu de mots',
            path: '/play/word-guess',
            desc: 'Jouez avec les cartes mémoires pour découvrir les différents gestes simples',
=======
            title: 'Trouve le Mot!',
            path: '/play/word-guess',
            desc: 'Découvrez des mots cachés grâce aux indices, testez votre vocabulaire et relevez le défi de trouver le bon mot!',
>>>>>>> e6a7d56 (j'ai enlevé les commentaires chatgpt)
        }

    ]
})