<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/images/logo.png" alt="logo" loading="lazy" />
      </router-link>
      <div class="links">
        <div class="link" v-for="(item, index) in links" :key="index">
          <router-link :to="item.path">{{ item.text }}</router-link>
        </div>
      </div>
      <div class="info">
        <router-link :to="pathProfile" class="profile" v-if="user">
          <img :src="user.photo" alt="img-profile" loading="lazy">
        </router-link>
        <router-link to="/login" v-else>
          <button-primary-vue name="Login" />
        </router-link>
        <div class="menu_icon d-md-none">
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
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, ref } from "vue";
import ButtonPrimaryVue from "./utils/ButtonPrimary.vue";
import { useStore } from "vuex";


export default {
  name: "HeaderView",
  components: {
    ButtonPrimaryVue,
  },
  setup() {
    const store = useStore()
    const links = ref([
      {
        path: "/",
        text: "Home",
      },
      {
        path: "/doctors",
        text: "Find a Doctor",
      },
      {
        path: "/services",
        text: "Services",
      },
      {
        path: "/contact",
        text: "Contact",
      },
    ]);
    
    const user = computed(() => store.state.user)
    const pathProfile = computed(() => user.value.role === "patient" ? "/users/profile/me" : "/doctors/profile/me")

    return { links, user, pathProfile };
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 10px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      img {
        width: 130px;
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 15px;

      .link {
        a {
          &.router-link-exact-active,
          &:hover {
            color: #0067ff !important;
          }
        }
      }
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      h6 {
        margin-bottom: 0;
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 768px) {
  header {
    .container {
      .logo {
        img {
          width: 120px;
        }
      }
      .links {
        display: none;
      }

      .info {
        display: flex;
        align-items: center;
        gap: 15px;

        .menu_icon {
            cursor: pointer;
          svg {
            width: 25px;
          }
        }
      }
    }
  }
}
</style>
