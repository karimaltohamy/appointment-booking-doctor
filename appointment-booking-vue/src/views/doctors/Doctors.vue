<template>
  <div class="doctors_page">
    <div class="head_find">
      <h3 class="title">Find a Doctor</h3>
      <div class="input_search">
        <input type="text" placeholder="Search Doctor" />
        <button class="btn_search">Search</button>
      </div>
    </div>
    <div class="doctors">
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
import TestimonialSection from '@/components/TestimonialSection.vue';
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard.vue";

export default {
  name: "doctorsView",
  data() {
    return {
      doctors,
    };
  },
  components: {
    DoctorCard,
    TestimonialSection
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
