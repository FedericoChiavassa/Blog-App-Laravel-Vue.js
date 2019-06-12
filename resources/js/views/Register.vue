<template>
    <div id="register-page">
        <h1 class="mb-4">Register</h1>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from '../components/auth/RegisterForm';

export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>

<style>

</style>