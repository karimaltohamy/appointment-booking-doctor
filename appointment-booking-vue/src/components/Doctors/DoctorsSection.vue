<template>
  <div class="doctors_section">
    <div class="container">
      <div class="head text-center">
        <h3 class="title">Our Great Doctors</h3>
        <p class="desc">
          t is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>
      <div class="cards_doctors">
        <doctor-card
          :card="item"
          v-for="(item, index) in doctors"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard.vue";

export default {
  data() {
    return {
      doctors,
    };
  },
  components: {
    DoctorCard,
  },
};
</script>

<style lang="scss" scoped>
.doctors_section {
  padding: 70px 0;
  .head {
    max-width: 700px;
    margin: auto;

    .desc {
      font-size: 15px;
      color: gray;
    }
  }

  .cards_doctors {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 70px;
  }
}

@media (max-width: 768px) {
  .doctors_section {
    padding: 30px 0;

    .cards_doctors {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }
  }
}
</style>
