<template>
  <div id="pagination" class="overflow-auto" v-if="pagination.totPages > 1">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pagination.totPages" use-router></b-pagination-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: "Pagination",
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '/posts' : `?page=${pageNum}`
      }
    },
    computed: mapGetters(["pagination"])
  }
</script>

<style>

</style>
