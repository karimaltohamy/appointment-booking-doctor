<template>
  <div class="about">
    <h4 class="about_who">About of <span>{{doctor?.name}}</span></h4>
    <p class="desc">
      {{doctor?.about}}
    </p>
    <div class="education">
      <h5>Education</h5>

      <div class="items">
        <div class="item" v-for="(item,index) in doctor?.qualifications" :key="index">
          <div>
            <div class="date">
              <span class="start">{{ formateDate(item.startDate) }}</span> -
              <span class="end">{{ formateDate(item.endDate) }}</span>
            </div>
            <div class="degree">{{item.dgree}}</div>
          </div>
          <div class="hospital">{{item.university}}</div>
        </div>
      </div>
    </div>
    <div class="exprience">
      <h5>Exprience</h5>
      <div class="boxs">
        <div class="box" v-for="(item,index) in doctor?.experiences" :key="index">
          <div class="date">
            <span class="start">{{ formateDate(item.startDate) }}</span> -
              <span class="end">{{ formateDate(item.endDate) }}</span>
          </div>
          <div class="position">{{item.position}}</div>
          <div class="hospital">{{item.hospital}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from '@vue/reactivity';
import { formateDate } from "../utils/formateDate";
export default {
  props: {
    doctor: Object
  },
  data() {
    return {
      formateDate
    }
  },
  setup(props) {
    console.log(props.doctor);
  },  
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.about {
  .about_who {
    span {
      color: $primary-color;
    }
  }

  .desc {
    color: gray;
    font-size: 15px;
    margin-bottom: 0;
  }

  .education {
    margin-top: 25px;

    h5 {
      margin-bottom: 20px;
    }

    .items {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        .date {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 15px;
          font-weight: 500;
          color: $primary-color;
        }

        .degree {
          font-size: 13px;
          color: gray;
        }

        .hospital {
          color: gray;
          font-size: 14px;
        }
      }
    }
  }

  .exprience {
    margin-top: 25px;

    h5 {
        margin-bottom: 20px;
    }

    .boxs {
        display: flex;
        align-items: center;
        gap: 20px;

        .box {
            width: 50%;
            padding: 15px;
            border-radius: 5px;
            background-color: #fff7dd;

            .date {
                font-size: 15px;
                color: #f6c933;
            }

            .position, .hospital {
                font-size: 14px;
                color: gray;
            }
        }
    }
  }
}
</style>
