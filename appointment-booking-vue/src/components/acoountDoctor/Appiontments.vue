<template>
  <span v-if="error">some thing is error</span>
  <div class="loading" v-else-if="loading">
    <loader :loading="loading" />
  </div>
  <div class="appiontments" v-else>
    <div class="table_appiontments">
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>PAYMENT</th>
            <th>PRICE</th>
            <th>BOOKED ON</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in users" :key="index">
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    :src="item?.user?.photo"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>{{item?.user?.name}}</h6>
                  <span>{{item?.user?.email}}</span>
                </div>
              </div>
            </td>
            <td>{{item?.user?.gender}}</td>
            <td>
              <div class="status" :class="item.isPaid ? 'paid' : 'not_paid'">
                <i class="fa-solid fa-circle"></i>
                <span>{{item.isPaid ? "paid" : "not pay"}}</span>
              </div>
            </td>
            <td>{{item.ticketPrice}}</td>
            <td>{{formateDate(item?.appointmentDate)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import useFetch from "../../composables/useFetch";
import Loader from "@/components/Loader.vue";
import { formateDate } from "@/utils/formateDate";

export default {
  name: "AppiontmentsVue",
  components: {
    Loader,
  },
  data() {
    return {
      formateDate
    }
  },
  setup() {
    const { dataFetch, loading, error } = useFetch(
      "/doctors/appiontments/myAppiontments"
    );

    console.log(dataFetch);

    return { users: dataFetch, loading, error };
  },
};
</script>

<style lang="scss" scoped>
.appiontments {
  .table_appiontments {
    overflow-x: auto;
    table {
      width: 100%;

      thead {
        background-color: #f4f4f4;
        th {
          padding: 5px;
          font-size: 15px;
          color: rgb(40, 40, 40);
          font-weight: 600;
          min-width: 100px;
          text-align: start;
        }
      }

      tbody {
        tr {
          text-align: start;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid rgb(228, 228, 228);
          }

          &:hover {
            background-color: #f4f4f4;
          }

          td {
            padding: 7px;
            color: gray;
            font-size: 14px;
            min-width: 100px;

            .profile {
              display: flex;
              align-items: center;
              gap: 12px;

              .img {
                img {
                  width: 35px;
                  min-width: 35px;
                  height: 35px;
                  border-radius: 50%;
                }
              }

              h6 {
                margin-bottom: 0;
                font-size: 16px;
                color: black;
              }

              span {
                display: block;
                transform: translateY(-2px);
                font-size: 12px;
                color: gray;
              }
            }

            .status {
              display: flex;
              align-items: center;
              gap: 5px;

              &.paid {
                i {
                  color: rgb(5, 231, 73);
                }
              }

              &.not_paid {
                i {
                  color: rgb(231, 31, 5);
                }
              }


              i {
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .appiontments {
    .table_appiontments {
      table {
        thead {
          th {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
