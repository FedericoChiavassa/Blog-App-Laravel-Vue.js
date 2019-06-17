<template>
    <div class="posts-list">
        <b-spinner v-if="isLoading" label="Loading..." variant="primary"></b-spinner>
        <b-list-group v-else class="mb-5">
            <b-list-group-item v-for="post in allPosts" :key="post.id">
                <b-img :src="'/images/'+post.image"  alt="postImage"></b-img>     
                <b-link :to="`/posts/${post.id}`">{{ post.title }}</b-link><br/>
                <small>written on: {{post.created_at}} - by: {{post.author.name}} </small>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostsList",
  props: ["page"],
  methods: {
    ...mapActions(["fetchPosts"])
  },
  computed: mapGetters(["allPosts", "isLoading"]),
  created() {
    this.fetchPosts(this.page);
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      this.fetchPosts(this.page);
    }
  }
}
</script>

<style scoped>
    .list-group-item {
        background-color: #f9f9f9
    }

    img {
        width: 250px; 
        max-height: 150px;
        object-fit: cover;
        float: left;
        margin-right: 2rem;
    }

</style>
