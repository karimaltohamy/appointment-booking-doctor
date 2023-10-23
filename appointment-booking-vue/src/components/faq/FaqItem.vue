<template>
  <div class="faqItem">
    <div class="head" @click="handleOpen">
      <h4 class="question">{{ faq.question }}</h4>
      <div class="arrow" :class="open ? 'open' : ''">
        <span v-if="open === false">+</span>
        <span v-if="open === true">-</span>
      </div>
    </div>
    <div class="content" :class="open ? 'open' : ''">
      {{ faq.content }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    faq: Object,
  },
  setup() {
    const open = ref(false);

    const handleOpen = () => {
      open.value = !open.value;
    };

    return { open, handleOpen };
  },
};
</script>

<style lang="scss" scoped>
.faqItem {
  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
  padding: 12px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    h4 {
      margin-bottom: 0;
      font-size: 17px;
    }

    .arrow {
      width: 25px;
      height: 25px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(218, 218, 218);

      &.open {
        background-color: rgb(52, 161, 243);
        color: white;
      }
    }
  }

  .content {
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 1.7;
    color: gray;
    margin-bottom: 0;
    max-height: 0;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    transition: max-height 0.5s ease-in-out;

    &.open {
     max-height: 1500px;
    }
  }
}
</style>
