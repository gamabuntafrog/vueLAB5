<template>
    <div style="padding: 10vw">
        <h1>
            Вітаємо на сайті школи <br />
            <div v-if="!isLoggedIn">
                У нашій школі учень сам вибирає уроки і вчителів <br />
                Увійдіть для повноцінного використання
            </div>
        </h1>
    </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.state.user.isLoggedIn
        },
    },
}
</script>
