<template>
    <div style="padding: 10vw;">
        <h1>Select teachers:</h1>
        <ul>
            <li v-for="lessonId in lessonIdsArray" :key="lessonId">
                {{ getLessonName(lessonId) }}
                <select v-model="selectedTeacher[lessonId]">
                    <option v-for="teacher in teachersList" :key="teacher.id" :value="teacher.id">
                        {{ teacher.name }}
                    </option>
                </select>
            </li>
        </ul>
        <button @click="startLearning">Start</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TeacherView',
    props: {
        lessonIds: {
            type: String,
            required: true,
            default: ''
        },
    },
    data() {
        return {
            selectedTeacher: {},
        }
    },
    computed: {
        ...mapGetters(['teachersGetter', 'lessonByIdGetter']),
        lessonIdsArray() {
            return this.lessonIds.split('/')
        },
        teachersList() {
            return this.teachersGetter
        },
    },
    methods: {
        getLessonName(lessonId) {
            const lesson = this.lessonByIdGetter(lessonId)
            return lesson ? lesson.name : `Lesson with ID ${lessonId}`
        },
        startLearning() {
            if (Object.keys(this.selectedTeacher).length > 0) {
                const lessonTeacherPairs = this.lessonIdsArray.map(
                    (lessonId) => `${lessonId}-${this.selectedTeacher[lessonId]}`
                )
                const lessonTeacherPairsString = lessonTeacherPairs.join('/')
                this.$router.push({ name: 'summary', params: { lessonTeacherPairs: lessonTeacherPairsString } })
            } else {
                this.$router.push({ name: 'PageNotFound' })
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
