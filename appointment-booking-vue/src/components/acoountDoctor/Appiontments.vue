<template>
  <div class="appiontments">
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
          <tr>
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    src="../../assets/images/avatar-icon.png"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>Ahmed Ali</h6>
                  <span>ali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>male</td>
            <td>
              <div class="status paid">
                <i class="fa-solid fa-circle"></i>
                <span>paid</span>
              </div>
            </td>
            <td>100</td>
            <td>June 27, 2023</td>
          </tr>
          <tr>
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    src="../../assets/images/avatar-icon.png"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>Ahmed Ali</h6>
                  <span>ali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>male</td>
            <td>
              <div class="status paid">
                <i class="fa-solid fa-circle"></i>
                <span>paid</span>
              </div>
            </td>
            <td>100</td>
            <td>June 27, 2023</td>
          </tr>
          <tr>
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    src="../../assets/images/avatar-icon.png"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>Ahmed Ali</h6>
                  <span>ali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>male</td>
            <td>
              <div class="status paid">
                <i class="fa-solid fa-circle"></i>
                <span>paid</span>
              </div>
            </td>
            <td>100</td>
            <td>June 27, 2023</td>
          </tr>
          <tr>
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    src="../../assets/images/avatar-icon.png"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>Ahmed Ali</h6>
                  <span>ali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>male</td>
            <td>
              <div class="status paid">
                <i class="fa-solid fa-circle"></i>
                <span>paid</span>
              </div>
            </td>
            <td>100</td>
            <td>June 27, 2023</td>
          </tr>
          <tr>
            <td>
              <div class="profile">
                <div class="img">
                  <img
                    src="../../assets/images/avatar-icon.png"
                    alt="avatar-img"
                  />
                </div>
                <div class="info">
                  <h6>Ahmed Ali</h6>
                  <span>ali@gmail.com</span>
                </div>
              </div>
            </td>
            <td>male</td>
            <td>
              <div class="status paid">
                <i class="fa-solid fa-circle"></i>
                <span>paid</span>
              </div>
            </td>
            <td>100</td>
            <td>June 27, 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppiontmentsVue",
};
</script>

<style lang="scss" scoped>
.appiontments {
  .table_appiontments {
    overflow-x: auto;
    table {
      width: 100%;

      thead {
        background-color: #F4F4F4;
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
            background-color: #F4F4F4;
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

@media(max-width: 768px) {
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
