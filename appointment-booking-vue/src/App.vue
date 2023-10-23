<template>
  <Header v-if="path" />
  <router-view />
  <Footer /> 
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
},
  setup() {
    const router = useRoute();

    const path = computed(() => {
      return router.path !== "/" ? true : false;
    });

    return { path };
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>
