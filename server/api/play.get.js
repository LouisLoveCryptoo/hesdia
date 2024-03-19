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
        }
    ]
})