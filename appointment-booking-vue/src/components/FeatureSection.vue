<template>
  <div class="feature_section">
    <div class="container">
      <div class="line line_section">
        <div class="text text-center text-md-start">
          <h3 class="title">The Great Place Of Medical Hospital Center</h3>
          <p class="desc">
            1.It is a long established fact that a reader will be distracted
          </p>
          <p class="desc">
            2.Contrary to popular belief, Lorem Ipsum is not simply random
          </p>
          <p class="desc">
            3.It is a long established fact that a reader will be distracted
          </p>
          <p class="desc">
            4.Contrary to popular belief, Lorem Ipsum is not simply random
          </p>
          <router-link to="/contact">
            <button-primary name="Learn More" />
          </router-link>
        </div>
        <div class="image">
          <img src="../assets/images/feature-img.png" alt="about" loading="lazy" />
          <div class="about_card">
            <img
              src="../assets/images/about-card.png"
              alt="about-card"
              loading="lazy"
            />
          </div>
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
.feature_section {
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
        left: -15px;

        img {
          width: 250px;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
