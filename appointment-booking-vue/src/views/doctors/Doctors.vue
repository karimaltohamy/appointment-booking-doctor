<template>
  <div class="doctors_page">
    <div class="head_find">
      <h3 class="title">Find a Doctor</h3>
      <div class="input_search">
        <input type="text" placeholder="Search Doctor" />
        <button class="btn_search">Search</button>
      </div>
    </div>
    <span v-if="error">some thing is error</span>
    <div class="loading d-flex align-items-center justify-content-center mt-5" v-else-if="loading">
      <Loader :loading="loading" />
    </div>
    <div class="doctors" v-else>
      <div class="container">
        <div class="cards_doctors">
          <doctor-card
            :card="item"
            v-for="(item, index) in doctors"
            :key="index"
          />
        </div>
      </div>
    </div>
    <testimonial-section />
  </div>
</template>

<script>
import TestimonialSection from "@/components/TestimonialSection.vue";
import DoctorCard from "../../components/Doctors/DoctorCard.vue";
import useFetch from "@/composables/useFetch.js";
import Loader from "@/components/Loader.vue";

export default {
  name: "doctorsView",
  components: {
    DoctorCard,
    TestimonialSection,
    Loader
  },
  setup() {
    const { dataFetch, loading, error } =  useFetch("/doctors");
    
    return { doctors: dataFetch, loading, error };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.head_find {
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fbf6e6;

  .title {
    margin-bottom: 20px;
  }

  .input_search {
    display: flex;

    input {
      width: 350px;
      max-width: 100%;
      border: none;
      outline: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 8px;
      background-color: #dce6f8;
    }

    button {
      padding: 8px 20px;
      background-color: $primary-color;
      color: white;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}

.cards_doctors {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 80px 0;
}

@media (max-width: 768px) {
  .cards_doctors {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 40px 0;
  }
}
</style>
