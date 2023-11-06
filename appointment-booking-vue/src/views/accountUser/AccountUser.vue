<template>
  <div class="account_user">
    <div class="container">
      <div class="line row">
        <div class="col-12 col-md-3">
          <div class="box_info">
            <div class="image">
              <img :src="user?.photo" alt="" />
            </div>
            <h4 class="title">{{ user?.name }}</h4>
            <p class="email">{{ user?.email }}</p>
            <span class="blood_type">{{user?.bloodType}}</span>
            <div class="btns">
              <button class="btn_logout" @click="handleLogout">
                <Loader v-if="loading"/>
                <span v-else>Logout</span>
                
              </button>
              <button class="btn_delete_account">Delete Account</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="nav_swatchs">
            <button
              class="btn_nav"
              :class="activeCom == 'Booking' ? 'active' : ''"
              @click="activeCom = 'Booking'"
            >
              My Booking
            </button>
            <button
              class="btn_nav"
              :class="activeCom == 'ProfileSettings' ? 'active' : ''"
              @click="activeCom = 'ProfileSettings'"
            >
              Profile Settings
            </button>
          </div>
          <div class="content mt-3">
            <component :is="activeCom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Booking from "../../components/accountUser/Booking.vue";
import ProfileSettings from "../../components/accountUser/ProfileSettings.vue";
import { toast } from "vue3-toastify";
import apiAxios from "@/utils/apiAxios.js";
import router from "@/router";
import Loader from '../../components/Loader.vue'


export default {
  name: "accountUser",
  components: {
    Booking,
    ProfileSettings,
    Loader
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const activeCom = ref("Booking");
    const loading = ref(false)

    const handleLogout = async () => {
      loading.value = true
      try {
        await apiAxios.get("/auth/logout")
        store.commit("setUser", null)
        toast.success("successfull logout")
        router.push("/")
      } catch (error) {
        loading.value = false;
        toast.error(error.response.data.message);
      }
    }

    return { user, activeCom, loading, handleLogout};
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.account_user {
  padding: 60px 0;

  .line {
    .box_info {
      text-align: center;
      padding: 15px;
      background-color: #f2f2f2;
      border-radius: 5px;

      .image {
        text-align: center;
        margin-bottom: 10px;
        img {
          width: 80px;
          height: 78px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid $primary-color;
        }
      }

      .title {
        font-size: 20px;
        margin-bottom: 2px;
      }

      .email {
        font-size: 14px;
        margin-bottom: 0;
      }

      .blood_type {
        font-size: 14px;
        color: gray;
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

    .nav_swatchs {
      display: flex;
      align-items: center;
      gap: 12px;

      .btn_nav {
        padding: 5px 20px;
        border: 1px solid $primary-color;
        border-radius: 6px;
        color: $primary-color;
        font-size: 15px;

        &.active {
          background-color: $primary-color;
          color: white;
        }
      }
    }
  }
}
</style>
