<template>
  <div class="overview_profile">
    <div class="main_info">
      <div class="image">
        <img :src="doctor?.photo" alt="" />
      </div>
      <div class="info">
        <div class="specialty">
          {{ doctor?.specialty }}
        </div>
        <h4 class="title">{{ doctor?.name }}</h4>
        <div class="rating">
          <img src="../../assets/images/Star.png" alt="star" loading="lazy" />
          <span class="avg_rating">{{ doctor?.avgRating }}</span>
          <span class="total_rating">({{ doctor?.totalRating }})</span>
        </div>
        <div class="mini_desc">
         {{doctor?.bio}}
        </div>
      </div>
    </div>
    <about-comp :doctor="doctor" />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import store from "../../store";
import AboutComp from "../AboutComp.vue";
export default {
  name: "OverviewVue",
  components: {
    AboutComp,
  },
  setup() {
    const doctor = computed(() => store.state.user);

    return { doctor };
  },
};
</script>

<style lang="scss" scoped>
.overview_profile {
  .main_info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    .image {
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .info {
      .specialty {
        padding: 3px 13px;
        font-size: 13px;
        border-radius: 4px;
        background-color: #cdf1f1;
        color: #28c2d6;
        width: fit-content;
        margin-bottom: 6px;
      }

      .title {
        font-size: 20px;
        margin-bottom: 7px;
      }

      .rating {
        display: flex;
        align-items: center;
        gap: 7px;
        margin-bottom: 20px;

        img {
          width: 20px;
        }

        span {
          font-size: 15px;

          &.avg_rating {
            color: black;
            font-weight: 600;
          }

          &.total_rating {
            color: gray;
            font-size: 11px;
          }
        }
      }

      .mini_desc {
        color: gray;
        max-width: 500px;
        font-size: 14px;
      }
    }
  }
}
</style>
