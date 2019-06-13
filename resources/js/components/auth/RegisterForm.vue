<template>
    <div id="register-form">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="user.name"
                required
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Email:"
                label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="user.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="user.password"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Confirm password:" label-for="input-4">
                <b-form-input
                id="input-4"
                v-model="user.password_confirmation"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-3">Register</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RegisterForm",
  data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        ...mapActions(["register", "setMessage"]),
        onSubmit(evt) {
            evt.preventDefault();
            if (this.user.password === this.user.password_confirmation) {
                this.register(this.user);
            }
            else {
                this.setMessage({"error": "Password confirmation doesn't match"});
            }
        }
    }
}
</script>

<style>


</style>