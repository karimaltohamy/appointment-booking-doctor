<template>
  <span v-if="error">some thing is error</span>
  <div
    class="loading d-flex align-items-center justify-content-center mt-5"
    v-else-if="loading"
  >
    <loader :loading="loading" />
  </div>
  <div class="doctor_details" v-else>
    
    <div class="container">
      <div class="line">
        <div class="info">
          <div class="main_info">
            <div class="image">
              <img :src="doctor?.photo" alt="" />
            </div>
            <div class="info">
              <div class="specialty">
                {{ doctor?.specialization }}
              </div>
              <h4 class="title">{{ doctor?.name }}</h4>
              <div class="rating">
                <img
                  src="../../assets/images/Star.png"
                  alt="star"
                  loading="lazy"
                />
                <span class="avg_rating">{{ doctor?.avgRating }}</span>
                <span class="total_rating">({{ doctor?.totalRating }})</span>
              </div>
              <div class="mini_desc">
                {{doctor?.bio}}
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
               <div>
                <component :is="currentComponent" :doctor="doctor" />
              </div> 
              
            </div>
          </div>
        </div>
        <div class="side_panel">
          <side-panel-vue :doctor="doctor" />
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import AboutComp from "@/components/AboutComp.vue";
import FeadbackComp from "@/components/FeadbackComp.vue";
import SidePanelVue from "@/components/SidePanel.vue";
import useFetch from "../../composables/useFetch";
import Loader from "@/components/Loader.vue";

export default {
  name: "doctorDetailsView",
  components: {
    AboutComp,
    FeadbackComp,
    SidePanelVue,
    Loader
  },
  setup() {
    const route = useRoute();
    const currentComponent = ref("AboutComp");

    const { dataFetch, loading, error } = useFetch(`doctors/get-doctor/${route.params.id}`);


    return { id: route.params.id, doctor: dataFetch, currentComponent, loading, error };
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
            border-radius: 5px;
            object-fit: cover;
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

@media (max-width: 991px) {
  .doctor_details {
    .line {
      flex-direction: column;
      gap: 30px;

      > div {
        width: 100% !important;
      }
    }
  }
}
</style>
