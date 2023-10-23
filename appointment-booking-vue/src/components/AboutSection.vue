<template>
  <div class="about_section">
    <div class="container">
      <div class="line line_section">
        <div class="image">
          <img src="../assets/images/about.png" alt="about" loading="lazy" />
          <div class="about_card">
            <img
              src="../assets/images/about-card.png"
              alt="about-card"
              loading="lazy"
            />
          </div>
        </div>
        <div class="text text-center text-md-start">
          <h3 class="title">The Great Place Of Medical Hospital Center</h3>
          <p class="desc">
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.We provide
            the special tips and advice’s of heath care treatment and high level
            of best technology involve in the our hospital.
          </p>
          <p class="desc">
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital
          </p>
          <router-link to="/contact">
            <button-primary name="Learn More" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "./utils/ButtonPrimary.vue";
export default {
  components: {
    ButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
.about_section {
  padding: 50px 0;

  .line {
    .text {
      .title {
        font-weight: 600;
      }
      .desc {
        color: gray;
      }
    }

    .image {
      text-align: center;
      position: relative;

      > img {
        width: 75%;
      }

      .about_card {
        position: absolute;
        top: 50%;
        right: -15px;

        img {
            width: 250px;
            max-width: 100%;
        }
      }
    }
  }
}
</style>
