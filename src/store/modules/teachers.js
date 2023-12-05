export default {
    state: {
        teachers: [
            { id: 1, name: 'Брила' },
            { id: 2, name: 'Вогар' },
            { id: 3, name: 'Андрашко' },
            { id: 4, name: 'Ромочівська' },
        ],
    },
    
    getters: {
        // lessonsGetter: (state) => state.lessons,
        teachersGetter: (state) => state.teachers,

        selectedTeachersGetter: (state) => state.selectedTeachers,
    },
    mutations: {
        updateSelectedTeacher(state, { lessonId, teacherId }) {
            state.selectedTeachers = {
                ...state.selectedTeachers,
                [lessonId]: teacherId,
            }
        },
    },
    actions: {
        updateSelectedTeacher({ commit }, { lessonId, teacherId }) {
            commit('updateSelectedTeacher', { lessonId, teacherId })
        },
    },
}
