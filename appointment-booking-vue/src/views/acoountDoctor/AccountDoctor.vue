<template>
  <div class="account_doctor">
    <div class="container">
      <div class="line row">
        <div class="col-12 col-md-3">
          <div class="box_info mb-3 mb-md-0">
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
              <button class="btn_logout" @click="handleLogout">
                <Loader v-if="loading" />
                <span v-else>Logout</span>
              </button>
              <button class="btn_delete_account">Delete Account</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="message_warning alert alert-warning">
            <i class="fa-solid fa-circle-info"></i>
            To get approval please complete your profile, we'll review manually
            and approve within 3days
          </div>
          <component :is="activeCom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import Overview from "../../components/acoountDoctor/Overveiw";
import Appiontments from "../../components/acoountDoctor/Appiontments";
import Profile from "../../components/acoountDoctor/Profile";
import { toast } from "vue3-toastify";
import apiAxios from "@/utils/apiAxios.js";
import router from "@/router";
import Loader from "../../components/Loader.vue";

export default {
  name: "accountDoctor",
  components: {
    Overview,
    Appiontments,
    Profile,
    Loader,
  },
  setup() {
    const store = useStore();
    const activeCom = ref("Overview");
    const loading = ref(false);

    const handleLogout = async () => {
      loading.value = true;
      try {
        await apiAxios.get("/auth/logout");
        store.commit("setUser", null);
        toast.success("successfull logout");
        router.push("/");
      } catch (error) {
        loading.value = false;
        toast.error(error.response.data.message);
      }
    };

    return { activeCom, handleLogout, loading };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.account_doctor {
  padding: 60px 0;
  max-width: 1000px;
  margin: auto;

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

    .message_warning {
      padding: 7px;
      font-size: 15px;
    }
  }
}
</style>
