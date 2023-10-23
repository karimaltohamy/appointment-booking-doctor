<template>
  <div class="services_section">
    <div class="container">
      <div class="head text-center">
        <h3 class="title">Our Medical Services</h3>
        <p class="desc">
          t is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>
      <div class="boxs">
        <div class="box" v-for="(item, index) in services" :key="index">
          <h4 class="title_box">{{ item.name }}</h4>
          <p class="desc_box">
           {{ item.desc }}
          </p>
          <div class="bottom">
            <div class="btn_arrow">
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
            </div>
            <div class="index" :style="{ background: `${item.bgColor}`, color: `${item.textColor}` }">{{ index + 1 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  { services } from "../assets/data/services"

export default {
    data() {
        return {
            services
        }
    }
};
</script>

<style lang="scss" scoped>
.services_section {
  padding: 70px 0;

  .head {
    max-width: 700px;
    margin: auto;

    .desc {
      font-size: 15px;
      color: gray;
    }
  }

  .boxs {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 70px;

    .box {
      .title_box {
        font-size: 22px;
        margin-bottom: 5px;
      }

      .desc_box {
        font-size: 15px;
        color: gray;
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

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

        .index {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
      }
    }
  }
}

@media(max-width: 768px) {
    .services_section {
        padding: 30px 0;

        .boxs {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
        }
    }
}
</style>
