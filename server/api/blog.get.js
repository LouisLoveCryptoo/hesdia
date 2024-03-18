export default defineEventHandler((event) => {
    return {
        data: [
            {
                id: 1,
                title: 'First blog post',
                content: 'This is the'
            },
            {
                id: 2,
                title: 'Second blog post',
                content: 'This is the'
            }
        ]
    }
})