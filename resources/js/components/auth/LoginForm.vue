<template>
    <div id="login-form">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="user.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="user.password"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-3">Login</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(["login"]),
        onSubmit(evt) {
            evt.preventDefault()
            this.login(this.user)
        }
    }
}
</script>

<style>


</style>