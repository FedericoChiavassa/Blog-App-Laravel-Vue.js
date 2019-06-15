<template>
    <div id="edit-form">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <div v-else>
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

            <b-button type="submit" variant="primary" class="mt-3">Update Post</b-button>
        </b-form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditForm",
  props: ['postId'],
  data() {
        return {
            post: {
                title: '',
                body: '',
                id: ''
            }
        }
    },
    computed: mapGetters(["singlePost", "isLoading", "user"]),
    methods: {
        ...mapActions(["fetchPost", "updatePost", "clearPostState", "setMessage"]),
        onSubmit(evt) {
            evt.preventDefault()
            if(this.singlePost.author.id !== this.user.id) {
                this.setMessage({"error" : "Unauthorized to edit this post"})
            }
            else {
                this.updatePost(this.post)
            }
        }
    },
    created() {
        this.fetchPost(this.postId);
    },
    watch: {
        singlePost(postToUpdate, oldVal) {
            if(postToUpdate) {
                    this.post.title = postToUpdate.title
                    this.post.body = postToUpdate.body
                    this.post.id = postToUpdate.id
            }
        }
    },
    beforeDestroy() {
        this.clearPostState();
    }
}
</script>

<style>


</style>