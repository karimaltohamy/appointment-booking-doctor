<template>
  <div class="faq_Section">
    <div class="container">
      <div class="line line_section">
        <div class="image">
          <img
            src="../../assets/images/faq-img.png"
            alt="faq-img"
            loading="lazy"
          />
        </div>
        <div class="text">
          <h4 class="title">Most Questions Our bloved patients</h4>
          <div class="questions">
            <faq-item :faq="item" v-for="(item, index) in faqs" :key="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem.vue";
export default {
  components: { FaqItem },
  data() {
    return {
      faqs,
    };
  },
};
</script>

<style lang="scss" scoped>
.faq_Section {
  padding: 50px 0;
  .image {
    text-align: center;

    img {
      width: 60%;
    }
  }

  .text {
    .questions {
      margin-top: 20px;
    }
  }
}
</style>
