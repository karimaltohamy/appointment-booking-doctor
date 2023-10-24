<template>
  <span v-if="error">some thing is error</span>
  <div class="loading" v-else-if="loading">
    <loader :loading="loading" />
  </div>
  <div class="" v-else>booking</div>
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
      "users/appiontments/myAppiontments"
    );

    console.log(dataFetch);
    console.log(error);

    return { doctors: dataFetch, loading, error };
  },
};
</script>

<style></style>
