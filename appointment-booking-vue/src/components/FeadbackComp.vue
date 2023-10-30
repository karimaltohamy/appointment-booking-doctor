<template>
  <div class="text-center" v-if="doctor?.reviews.length == 0">
    not have any reviews
  </div>
  <div class="feadback">
    <h5 class="num_reviews" v-if="doctor?.reviews.length > 0">
      All Review ({{ doctor?.reviews.length }})
    </h5>
    <div class="reviews" v-if="doctor?.reviews.length > 0">
      <div
        class="review"
        v-for="(review, index) in doctor.reviews"
        :key="index"
      >
        <div>
          <div class="profile">
            <img :src="review?.user.photo" alt="" loading="lazy" />
            <div class="info">
              <h6 class="name">{{ reactive?.user.name }}</h6>
              <span class="date">{{ formateDate(review?.createdAt) }}</span>
              <div class="comment">{{ review?.reviewText }}</div>
            </div>
          </div>
        </div>
        <div class="rating">
          <div
            class="star"
            v-for="(item, index) in review?.rating"
            :key="index"
          >
            <img src="../assets/images/Star.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="btn_feadback mt-5 text-center"
      v-if="user.role == 'patient'"
    >
      <button-primary name="Give Feadback" @click="show = true" v-if="!show" />
    </div>

    <form
      action=""
      class="form_review"
      v-if="show"
      @submit.prevent="handleCreateReview"
    >
      <div class="input">
        <label for="">How would you rate the overall experience</label>
        <div class="stars">
          <div
            class="star"
            v-for="(item, index) in ratinginfo()"
            :key="index"
            @click="rate = index + 1"
            @mouseover="hover = index + 1"
            @mouseleave="hover = rate"
            @dblclick="(rate = 0), (hover = 0)"
          >
            <i
              class="fa-solid fa-star"
              :class="index + 1 <= ((rate && hover) || hover) ? 'active' : ''"
            ></i>
          </div>
        </div>
      </div>
      <div class="input">
        <label for="">Share your feadback</label>
        <textarea name="" v-model="reviewText"></textarea>
      </div>
      <div class="btn_submit">
        <button-primary name="Submit Feadback" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import { formateDate } from "../utils/formateDate";
import ButtonPrimary from "./utils/ButtonPrimary.vue";
import store from "../store";
import apiAxios from "@/utils/apiAxios.js";
import { toast } from "vue3-toastify";

export default {
  components: {
    ButtonPrimary,
  },
  props: {
    doctor: Object
  },
  data() {
    return {
      formateDate,
    };
  },
  setup(props) {
    const show = ref(false);
    const reviewText = ref("");
    const rate = ref(0);
    const hover = ref(0);
    const rating = () => {
      return [...Array(5).keys()].map((_, index) => index);
    };
    const numRating = ref(5);
    const ratinginfo = () => {
      return [...Array(numRating.value).keys()].map((_, index) => index);
    };
    const user = computed(() => store.state.user);
    const doctor = reactive(props.doctor);
    const isReview = computed(() =>
      doctor.value.reviews.find((review) => review.user._id == user.value._id)
        ? true
        : false
    );
    const loading = ref(false);

    // handle create review
    const handleCreateReview = async () => {
      loading.value = true;
      try {
        await apiAxios.post(`/reviews/${doctor._id}/review`, {
          reviewText: reviewText.value,
          rating: rate.value,
        });
        toast.success("successfull create review");
        loading.value = false;
        show.value = false;
        window.location.reload()
      } catch (error) {
        console.log(error.response?.data.message);
        toast.error(error.response?.data.message);
        loading.value = false;

      }
    };

    return {
      ratinginfo,
      rating,
      rate,
      hover,
      show,
      user,
      reviewText,
      handleCreateReview,
      isReview,
    };
  },
};
</script>

<style lang="scss" scoped>
.feadback {
  .num_reviews {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .reviews {
    .review {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      .profile {
        display: flex;
        gap: 15px;

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }

        .name {
          font-size: 15px;
          margin-bottom: 0;
        }

        .date {
          font-size: 13px;
          color: gray;
        }

        .comment {
          font-size: 14px;
        }
      }

      .rating {
        display: flex;
        align-items: center;
        gap: 4px;

        img {
          width: 12px;
        }
      }
    }
  }

  .btn_primary {
    font-size: 14px;
  }

  .form_review {
    margin-top: 30px;

    .input {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      label {
        display: block;
        margin-bottom: 5px;
      }

      textarea {
        width: 100%;
        height: 130px;
        border: 1px solid rgb(219, 219, 219);
        border-radius: 5px;
        padding: 10px;
      }

      .stars {
        display: flex;
        align-items: center;
        gap: 4px;
        .star {
          i {
            font-size: 13px;
            &.active {
              color: rgb(247, 193, 15);
            }
          }
        }
      }
    }
  }
}
</style>
