<template>
  <div class="testimonial_section">
    <div class="container">
      <div class="head text-center">
        <h3 class="title">What are patient say</h3>
        <p class="desc">
          t is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>
      <div class="boxs">
        <swiper
          :slides-per-view="3"
          :space-between="20"
          :breakpoints="{
            '0': {
              slidesPerView: 1,
            },
            '768': {
              slidesPerView: 2,
            },
            '991': {
              slidesPerView: 3,
            },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="box">
              <div class="profile">
                <img
                  src="../assets/images/patient-avatar.png"
                  alt="avatar"
                  loading="lazy"
                />
                <div class="info">
                  <h5>Ahmed Mohammed</h5>
                  <div class="rating">
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="content">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div class="box">
              <div class="profile">
                <img
                  src="../assets/images/patient-avatar.png"
                  alt="avatar"
                  loading="lazy"
                />
                <div class="info">
                  <h5>Ahmed Mohammed</h5>
                  <div class="rating">
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="content">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution
              </div>
            </div></swiper-slide
          >
          <swiper-slide
            ><div class="box">
              <div class="profile">
                <img
                  src="../assets/images/patient-avatar.png"
                  alt="avatar"
                  loading="lazy"
                />
                <div class="info">
                  <h5>Ahmed Mohammed</h5>
                  <div class="rating">
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="content">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution
              </div>
            </div></swiper-slide
          >
          <swiper-slide
            ><div class="box">
              <div class="profile">
                <img
                  src="../assets/images/patient-avatar.png"
                  alt="avatar"
                  loading="lazy"
                />
                <div class="info">
                  <h5>Ahmed Mohammed</h5>
                  <div class="rating">
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="content">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution
              </div>
            </div></swiper-slide
          >
          <swiper-slide
            ><div class="box">
              <div class="profile">
                <img
                  src="../assets/images/patient-avatar.png"
                  alt="avatar"
                  loading="lazy"
                />
                <div class="info">
                  <h5>Ahmed Mohammed</h5>
                  <div class="rating">
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../assets/images/Star.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="content">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution
              </div>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.testimonial_section {
  padding: 50px 0;

  .head {
    max-width: 700px;
    margin: auto;

    .desc {
      font-size: 15px;
      color: gray;
    }
  }

  .boxs {
    margin-top: 50px;

    .swiper-slide-active {
      .box {
        background-color: rgb(24, 123, 222);
        color: white;

        .content {
          color: white;
        }
      }
    }

    .box {
      background-color: rgb(235, 235, 235);
      padding: 20px;
      border-radius: 8px;

      .profile {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;

        > img {
          width: 50px;
          height: 50px;
          border-radius: 6px;
        }

        .info {
          h5 {
            margin-bottom: 5px;
            font-size: 16px;
          }

          .rating {
            display: flex;
            gap: 2px;

            img {
              width: 15px;
            }
          }
        }
      }

      .content {
        line-height: 1.7;
        color: gray;
        font-size: 14px;
      }
    }
  }
}
</style>
