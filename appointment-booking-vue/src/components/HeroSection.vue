<template>
  <div class="hero_section">
    <div class="container">
      <div class="line">
        <div class="text">
          <h2 class="title">
            Protect Your Health And Take Care To Of Your Health
          </h2>
          <p class="desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>

          <router-link to="/doctors">
            <button-primary-vue name="Requst an Appointment" />
          </router-link>
          <div class="info_details">
            <div class="item">
              <h4 class="num">30+</h4>
              <span>Years of Experience</span>
            </div>
            <div class="item">
              <h4 class="num">15+</h4>
              <span>Linic Location</span>
            </div>
            <div class="item">
              <h4 class="num">100%</h4>
              <span>Patient Satisfaction</span>
            </div>
          </div>
        </div>
        <div class="image">
          <div class="img_banner">
            <img
              src="../assets/images/doctor.7c2bc96d67d3eba1d64a.png"
              alt="img-banner"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimaryVue from "./utils/ButtonPrimary.vue";

export default {
  components: {
    ButtonPrimaryVue,
  },
};
</script>

<style lang="scss" scoped>
.hero_section {
  height: calc(100vh - 53px);

  .container {
    height: 100%;

    .line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      height: 100%;

      > div {
        width: 50%;
      }

      .text {
        .title {
          font-size: 40px;
        }

        .desc {
          color: gray;
        }

        .info_details {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 20px;

          .item {
            &:nth-child(2) {
              .num {
                &::before {
                  background-color: #8e49e9;
                }
              }
            }

            &:nth-child(3) {
              .num {
                &::before {
                  background-color: #2dd2dd;
                }
              }
            }
            .num {
              font-size: 30px;
              margin-bottom: 8px;
              position: relative;

              &::before {
                content: "";
                position: absolute;
                bottom: 7px;
                left: 0;
                height: 5px;
                z-index: -1;
                width: 75%;
                background-color: #ebad3b;
                border-radius: 100px;
              }
            }

            span {
              font-size: 14px;
              color: gray;
            }
          }
        }
      }

      .image {
        text-align: center;
        
        img {
          width: 80%;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .hero_section {
    .container {
      .line {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 30px;

        > div {
          width: 100%;
        }

        .text {
          text-align: center;
          .title {
            font-size: 22px;
          }

          .desc {
            font-size: 14px;
            margin-bottom: 5px;
          }

          .info_details {
            margin-top: 10px;
            justify-content: center;
            text-align: start;

           .item {
            .num {
                font-size: 24px;
                margin-bottom: 0;
            }

            span {
                font-size: 12px;
            }
           }
          }
        }

        .image {
          .img_banner {
            text-align: center;
            img {
              width: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
