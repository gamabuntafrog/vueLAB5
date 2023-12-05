<template>
    <div style="padding: 10vw;">
        <label>Select lessons:</label>
        <div v-for="lesson in lessons" :key="lesson.id">
            <input :id="lesson.id" v-model="selectedLessons" :value="lesson.id" type="checkbox" />
            <label :for="lesson.id">{{ lesson.name }}</label>
        </div>
        <router-link
            v-if="selectedLessons.length > 0"
            :to="{ name: 'teacher', query: { lessonIds: selectedLessons.join('/') } }"
        >
            <button>Select</button>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LessonsView',
    data() {
        return {
            selectedLessons: [],
        }
    },
    computed: {
        ...mapGetters({
            lessons: 'lessonsGetter',
            teachers: 'teachers/teachersGetter',
        }),
    },
}
</script>

<style lang="scss" scoped></style>
