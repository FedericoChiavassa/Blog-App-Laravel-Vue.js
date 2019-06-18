<template>
    <div id="create-form">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="post.title"
                type="text"
                required
                placeholder="Enter title"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Body:" label-for="input-2">
                <b-form-textarea
                id="input-2"
                v-model="post.body"
                required
                rows="10"
                placeholder="Enter body"
                ></b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-3" label="You can select an image:" label-for="input-3" class="mt-3">
                <b-form-file v-model="post.image" class="mt-3" plain></b-form-file>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-4">Create Post</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateForm",
  data() {
        return {
            post: {
                title: '',
                body: '',
                image: null
            }
        }
    },
    methods: {
        ...mapActions(["createPost"]),
        onSubmit(evt) {
            evt.preventDefault()
            const new_post = new FormData()
            new_post.append('image', this.post.image)
            new_post.append('title', this.post.title)
            new_post.append('body', this.post.body)
            this.createPost(new_post)
        }
    }
}
</script>

<style>


</style>