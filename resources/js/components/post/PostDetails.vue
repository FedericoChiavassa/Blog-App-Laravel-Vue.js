<template>
    <div class="post-details">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <div v-else>
            <b-button id="go-back-btn" size="sm" class="mb-4" v-on:click="goBack">← Go Back</b-button>
            <b-button 
                    size="sm" 
                    variant="primary" 
                    :to="`/posts/${singlePost.id}/edit`" 
                    v-if="validUser()"
                >Edit Post</b-button>
            <h1 class="mb-4">{{ singlePost.title }}</h1>
            <b-img v-if="validImage()" :src="'/images/'+singlePost.image" alt="postImage"></b-img>
            <p>{{ singlePost.body }}</p>
            <footer class="mb-5">
                <small>Author: {{ singlePost.author.name }}</small><br>
                <small>Created: {{ singlePost.created_at }}</small><br>
                <small>Last update: {{ singlePost.updated_at }}</small>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostDetails",
  props: ['postId'],
  methods: {
    ...mapActions(["fetchPost", "clearPostState"]),
    validUser() {
        return this.singlePost.author.id===this.user.id ? true : false
    },
    goBack () {
        window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/posts')
    },
    validImage() {
        return this.singlePost.image !== 'noimage.jpg'
    }
  },
  computed: mapGetters(["singlePost", "isLoading", "user"]),
  created() {
    this.fetchPost(this.postId);
  },
  beforeDestroy() {
    this.clearPostState();
  }
};
</script>

<style scoped>
    #go-back-btn {
        float: left;
    }

    .btn {
        float: right;
    }

    h1 {
        clear: both;
    }

    img {
        width: 100%; 
        height: 300px;
        object-fit: cover;
        margin-bottom: 2rem;
    }

</style>