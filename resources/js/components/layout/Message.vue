<template>
    <div id="message"> 
        <b-alert variant="success" show v-if="msgType==='success'">{{ msg }}</b-alert>
        <b-alert variant="danger" show v-if="msgType==='error'">{{ msg }}</b-alert>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Message",
  computed: {
      ...mapGetters(["msg", "msgType"])
  },
  methods: {
    ...mapActions(["clearMessage"])
  },
  watch: {
      '$route' (to, from) {
          this.clearMessage();
      }
  }
}
</script>

<style>

</style>