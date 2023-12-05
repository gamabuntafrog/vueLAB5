<template>
    <div>
        <nav style="display: flex;">
            <router-link to="/home">Main</router-link>
            <router-link v-if="isLoggedIn" to="/lessons/select">Lessons</router-link>

            <div v-if="!isLoggedIn" class="login-button">
                <router-link to="/login">Login</router-link>
            </div>
            <div v-else class="login-button">
                <p>{{ user.username }}</p>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        computed: {
            isLoggedIn() {
                return this.$store.state.user.isLoggedIn;
            },
            user() {
                return this.$store.state.user;
            }
        },
        mounted() {
            console.log(this.$store.state)
        }
    }
</script>

<style lang="scss">
#app {
    font-size: x-large;
}
nav {
    margin: 10px;
    padding: 30px;
}

a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 20px;

    &.router-link-exact-active {
        color: #5c42b9;
    }
}

.login-button {
    border: none;
    color: #000000;
    font-weight: bold;
    cursor: pointer;

    margin-left: auto;

    p {
        margin: 0;
        margin-left: auto;

    }
}
</style>
