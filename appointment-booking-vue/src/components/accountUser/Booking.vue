<template>
  <span v-if="error">some thing is error</span>
  <div class="loading" v-else-if="loading">
    <loader :loading="loading" />
  </div>
  <div class="text-center" v-else>
    
    <span v-if="doctors.length == 0">You not have any appiontments</span>
  </div>
</template>

<script>
import useFetch from "../../composables/useFetch";
import Loader from "../Loader.vue";

export default {
  name: "BookingVue",
  components: {
    Loader,
  },
  setup() {
    const { dataFetch, loading, error } = useFetch(
      "/users/appiontments/myAppiontments"
    );



    return {doctors: dataFetch, loading, error };
  },
};
</script>

<style></style>
