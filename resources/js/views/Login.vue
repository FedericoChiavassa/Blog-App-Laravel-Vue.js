<template>
    <div id="posts">
        <h1 class="mb-4">Login</h1>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '../components/auth/LoginForm';

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style>

</style>