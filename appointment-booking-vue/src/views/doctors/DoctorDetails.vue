<template>
  <div class="doctor_details" v-if="doctor">
    <div class="container">
      <div class="line">
        <div class="info">
          <div class="main_info">
            <div class="image">
              <img :src="doctor.photo" alt="" />
            </div>
            <div class="info">
              <div class="specialty">
                {{ doctor.specialty }}
              </div>
              <h4 class="title">{{ doctor.name }}</h4>
              <div class="rating">
                <img
                  src="../../assets/images/Star.png"
                  alt="star"
                  loading="lazy"
                />
                <span class="avg_rating">{{ doctor.avgRating }}</span>
                <span class="total_rating">({{ doctor.totalRating }})</span>
              </div>
              <div class="mini_desc">
                It is a long established fact that a reader will be distracted
                by the readable content
              </div>
            </div>
          </div>
          <div class="details_info">
            <div class="head_details">
              <h6
                class=""
                @click="currentComponent = 'AboutComp'"
                :class="currentComponent == 'AboutComp' ? 'active' : ''"
              >
                About
              </h6>
              <h6
                class=""
                @click="currentComponent = 'FeadbackComp'"
                :class="currentComponent == 'FeadbackComp' ? 'active' : ''"
              >
                Feeback
              </h6>
            </div>
            <div class="content">
              <component :is="currentComponent"></component>
            </div>
          </div>
        </div>
        <div class="side_panel">
          <side-panel-vue /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { doctors } from "../../assets/data/doctors";
import AboutComp from "@/components/AboutComp.vue";
import FeadbackComp from "@/components/FeadbackComp.vue";
import SidePanelVue from '@/components/SidePanel.vue';
export default {
  name: "doctorDetailsView",
  components: {
    AboutComp,
    FeadbackComp,
    SidePanelVue
  },
  setup() {
    const route = useRoute();
    const doctor = ref({});
    const currentComponent = ref("AboutComp");

    onMounted(() => {
      doctor.value = doctors.find((item) => item.id === route.params.id);
    });

    return { id: route.params.id, doctor, currentComponent };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.doctor_details {
  padding: 50px 0;

  .line {
    display: flex;
    gap: 50px;

    .info {
      width: 65%;
      .main_info {
        display: flex;
        gap: 20px;

        .image {
          img {
            width: 200px;
            height: 200px;
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

      .details_info {
        margin-top: 40px;

        .head_details {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgb(211, 211, 211);

          h6 {
            margin-bottom: 0;
            padding-bottom: 5px;
            position: relative;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;

            &.active {
              &::before {
                content: "";
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: $primary-color;
              }
            }
          }
        }

        .content {
          margin-top: 25px;
        }
      }
    }

    .side_panel {
      width: 25%;
    }
  }
}

@media(max-width: 991px) {
  .doctor_details {
    .line {
      flex-direction: column;
      gap: 30px;

      > div  {
        width: 100% !important;
      }
    }
  }
}
</style>
