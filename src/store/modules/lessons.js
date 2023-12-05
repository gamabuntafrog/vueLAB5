export default {
    state: {
        lessons: [
            { id: 1, name: 'Math' },
            { id: 2, name: 'English' },
            { id: 3, name: 'Ukrainian' },
            { id: 4, name: 'Test' },
        ],
    },
    getters: {
        lessonsGetter: (state) => state.lessons,
        
        lessonByIdGetter: (state) => (lessonId) => {
            return state.lessons.find((lesson) => lesson.id == lessonId)
        },

    }
}