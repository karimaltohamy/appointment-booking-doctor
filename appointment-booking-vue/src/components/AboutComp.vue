<template>
  <div class="about">
    <h4 class="about_who">About of <span>Dr. Alfaz Ahmed</span></h4>
    <p class="desc">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
    <div class="education">
      <h5>Education</h5>

      <div class="items">
        <div class="item">
          <div>
            <div class="date">
              <span class="start">{{ formateDate("12-7-2013") }}</span> -
              <span class="end">{{ formateDate("3-2-2014") }}</span>
            </div>
            <div class="degree">PHD in Surgon</div>
          </div>
          <div class="hospital">Mount Adora Hospital, Sylhet.</div>
        </div>
        <div class="item">
          <div>
            <div class="date">
              <span class="start">{{ formateDate("4-7-2014") }}</span> -
              <span class="end">{{ formateDate("9-23-2015") }}</span>
            </div>
            <div class="degree">PHD in Surgon</div>
          </div>
          <div class="hospital">Mount Adora Hospital, Sylhet.</div>
        </div>
      </div>
    </div>
    <div class="exprience">
      <h5>Exprience</h5>
      <div class="boxs">
        <div class="box">
          <div class="date">
            <span class="start">{{ formateDate("12-7-2013") }}</span> -
            <span class="end">{{ formateDate("3-2-2014") }}</span>
          </div>
          <div class="degree">Sr.Surgon</div>
          <div class="hospital">Mount Adora Hospital, Sylhet.</div>
        </div>
        <div class="box">
          <div class="date">
            <span class="start">{{ formateDate("12-7-2013") }}</span> -
            <span class="end">{{ formateDate("3-2-2014") }}</span>
          </div>
          <div class="degree">Sr.Surgon</div>
          <div class="hospital">Mount Adora Hospital, Sylhet.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formateDate } from "../utils/formateDate";
export default {
  data() {
    return {
      formateDate,
    };
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

            .degree, .hospital {
                font-size: 14px;
                color: gray;
            }
        }
    }
  }
}
</style>
