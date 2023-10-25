<template>
  <div class="account_doctor">
    <div class="container">
      <div class="line row">
        <div class="col-12 col-md-4">
          <div class="box_info">
            <div class="nav_swatchs">
              <button
                class="btn_nav"
                :class="activeCom == 'Overview' ? 'active' : ''"
                @click="activeCom = 'Overview'"
              >
                Overview
              </button>
              <button
                class="btn_nav"
                :class="activeCom == 'Appiontments' ? 'active' : ''"
                @click="activeCom = 'Appiontments'"
              >
                Appiontments
              </button>
              <button
                class="btn_nav"
                :class="activeCom == 'Profile' ? 'active' : ''"
                @click="activeCom = 'Profile'"
              >
                Profile
              </button>
            </div>
            <div class="btns">
              <button class="btn_logout">Logout</button>
              <button class="btn_delete_account">Delete Account</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <component :is="activeCom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Overview from "../../components/acoountDoctor/Overveiw";
import Appiontments from "../../components/acoountDoctor/Appiontments";
import Profile from "../../components/acoountDoctor/Profile";
export default {
  name: "accountDoctor",
  components: {
    Overview,
    Appiontments,
    Profile,
  },
  setup() {
    const activeCom = ref("Overview");

    return { activeCom };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.account_doctor {
  padding: 60px 0;

  .line {
    .box_info {
      text-align: center;
      padding: 15px;
      background-color: #f2f2f2;
      border-radius: 5px;

      .nav_swatchs {
        .btn_nav {
          padding: 5px 20px;
          border-radius: 4px;
          font-size: 15px;
          width: 100%;

          &.active {
            background-color: $trans-primary;
            color: $primary-color;
          }
        }
      }

      .btns {
        margin-top: 50px;

        button {
          width: 100%;
          display: block;
          padding: 4px 20px;
          border-radius: 4px;
          font-size: 15px;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          &.btn_logout {
            background-color: black;
            color: white;
          }

          &.btn_delete_account {
            background-color: rgb(245, 46, 7);
            color: white;
          }
        }
      }
    }
  }
}
</style>
