import { createStore } from 'vuex'
import teachersModule from './modules/teachers'
import userModule from './modules/user'
import lessonsModule from './modules/lessons'

// const getInitialState = () => ({
//     lessons: [
//         { id: 1, name: 'Math' },
//         { id: 2, name: 'English' },
//         { id: 3, name: 'Ukrainian' },
//         { id: 4, name: 'Test' },
//     ],
//     selectedTeachers: {},
// })

export default createStore({
    // state: getInitialState(),
    // getters: {
    //     lessonsGetter: (state) => state.lessons,

    //     lessonByIdGetter: (state) => (lessonId) => {
    //         return state.lessons.find((lesson) => lesson.id == lessonId)
    //     },

    //     selectedTeachersGetter: (state) => state.selectedTeachers,
    // },
    // mutations: {
    //     updateSelectedTeacher(state, { lessonId, teacherId }) {
    //         state.selectedTeachers = {
    //             ...state.selectedTeachers,
    //             [lessonId]: teacherId,
    //         }
    //     },
    // },
    // actions: {
    //     // updateSelectedTeacher({ commit }, { lessonId, teacherId }) {
    //     //     commit('updateSelectedTeacher', { lessonId, teacherId })
    //     // },
    // },
    modules: {
        teachers: teachersModule,
        user: userModule,
        lessons: lessonsModule,
    },
})
