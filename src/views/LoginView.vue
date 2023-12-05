<template>
    <div style="padding: 10vw;">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input id="username" v-model="username" type="text" required />

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
        }
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', {
                username: this.username,
            })
            console.log(this.$store.state)

            this.redirectToRegistration();
        },
        redirectToRegistration() {
            this.$router.push({ name: 'select' })
        },
        mounted() {
            console.log(this.$store.state)
        }
    },
}
</script>

<style scoped></style>
