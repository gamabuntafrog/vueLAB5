<template>
    <div style="padding: 10vw;">
        <p>
            <strong>Selected teachers and lessons:</strong>
        </p>
        <ul>
            <li v-for="lessonTeacherPair in lessonTeacherPairsArray" :key="lessonTeacherPair">
                {{ getLessonWithTeacher(lessonTeacherPair.replace('_', '-')) }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SummaryView',
    computed: {
        ...mapGetters(['lessonsGetter', 'teachersGetter', 'selectedTeachersGetter']),
        lessonTeacherPairsArray() {
            return this.$route.params.lessonTeacherPairs.split('/')
        },
    },

    methods: {
        getLessonWithTeacher(lessonTeacherPair) {
            const [lessonId, teacherId] = lessonTeacherPair.split('-')
            const lesson = this.lessonsGetter.find((lesson) => lesson.id.toString() === lessonId)
            const teacher = this.teachersGetter.find((teacher) => teacher.id.toString() === teacherId)

            if (lesson && teacher) {
                return `${lesson.name} - ${teacher.name}`
            } else {
                return `Lesson with ID ${lessonId}`
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
