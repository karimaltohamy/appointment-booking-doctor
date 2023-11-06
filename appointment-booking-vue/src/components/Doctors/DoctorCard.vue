<template>
  <router-link
    :to="`/doctorDetails/${card?._id}`"
    class="card_doctor"
    v-if="card"
  >
    <div class="image">
      <img :src="card?.photo" alt="img-doctor" loading="lazy" :style="{ height: heightImg && heightImg + 'px' }" />
    </div>
    <div class="text">
      <h4 class="title">{{ card?.name }}</h4>
      <div class="center">
        <div class="specialty">
          {{ card?.specialization }}
        </div>
        <div class="rating">
          <img src="../../assets/images/Star.png" alt="star" loading="lazy" />
          <span class="avg_rating">{{ card?.avgRating }}</span>
          <span class="total_rating">({{ card?.totalRating }})</span>
        </div>
      </div>
      <div class="bottom">
        <div class="info">
          <h6 class="total_patients">+{{ card?.reviews?.length }} Patients</h6>
          <span v-for="(item, index) in card.experiences" :key="index"
            >{{ item.hospital }}
            {{ index !== card.experiences.length - 1 && " ," }}</span
          >
        </div>
        <router-link :to="`/doctorDetails/${card?._id}`">
          <button class="btn_arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
export default {
  props: {
    card: Object,
    heightImg: String
  },
  setup(props) {
    const doctor = ref(props.card);
    const hospital = computed(() =>
      doctor.value.experiences[0].hospital
        ? doctor.value.experiences[1].hospital
        : "not"
    );
    return { doctor, hospital };
  },
};
</script>

<style lang="scss" scoped>
.card_doctor {
  .image {
    margin-bottom: 10px;
    img {
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .title {
    font-size: 20px;
    margin-bottom: 7px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    .specialty {
      padding: 3px 13px;
      font-size: 13px;
      border-radius: 4px;
      background-color: #cdf1f1;
      color: #28c2d6;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 7px;

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
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      .total_patients {
        margin-bottom: 0;
        font-weight: 600;
        font-size: 15px;
      }

      span {
        font-size: 12px;
        color: gray;
      }
    }

    .btn_arrow {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 17px;
      }
    }
  }
}
</style>
