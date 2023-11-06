<template>
  <span v-if="error">some thing is error</span>
  <div class="loading" v-else-if="loading">
    <loader :loading="loading" />
  </div>
  <div  v-else>
    <span class="text-center" v-if="doctors.length == 0">You not have any appiontments</span>
    <div class="doctors" v-else>
      <div class="container">
        <div class="cards_doctors">
          <doctor-card
            :card="item"
            v-for="(item, index) in doctors"
            :key="index"
            heightImg="240"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from "../../composables/useFetch";
import Loader from "../Loader.vue";
import DoctorCard from "@/components/Doctors/DoctorCard.vue"; 

export default {
  name: "BookingVue",
  components: {
    Loader,
    DoctorCard
  },
  setup() {
    const { dataFetch, loading, error } = useFetch(
      "/users/appiontments/myAppiontments"
    );

    console.log(dataFetch);



    return {doctors: dataFetch, loading, error };
  },
};
</script>

<style lang="scss" scoped>
.cards_doctors {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .cards_doctors {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }
}
</style>
