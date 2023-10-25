<template>
  <div class="login">
    <div class="content">
      <h4 class="title">Hello! <span>Welocome</span> Back</h4>
      <form action="">
        <div class="input">
          <input
            type="email"
            placeholder="Enter Your Email"
            v-model="inputs.email"
          />
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Enter Your Password"
            v-model="inputs.password"
          />
        </div>
        <button-primary name="Login" @click="handleLogin" :loading="loading" />
      </form>
      <div class="bottom">
        Don't have any account?
        <router-link to="/signup">Register Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/utils/ButtonPrimary.vue";
import { reactive, ref } from "vue";
import router from "@/router";
import apiAxios from "@/utils/apiAxios.js";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default {
  components: { ButtonPrimary },
  name: "loginView",
  setup() {
    const store = useStore();
    const inputs = reactive({
      email: "",
      password: "",
    });
    const loading = ref(false);

    // const toastPopup = (message) => {
    //   toast.success(message, {
    //     autoClose: 1000,
    //     Position: "top-right",
    //   });
    // };

    // login user
    const handleLogin = async (e) => {
      e.preventDefault();
      loading.value = true;

      try {
        const { data } = await apiAxios.post("/auth/login", inputs);
        store.commit("setUser", data.user);
        loading.value = false;
        toast.success("successfull login");
        router.push("/");
      } catch (error) {
        loading.value = false;
        toast.error(error.response.data.message);
      }
    };

    toast.success("successfull login");

    return { inputs, handleLogin, loading };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";

.login {
  padding: 10px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    padding: 20px;
    border-radius: 8px;
    box-shadow: 4px 4px 12px rgb(238, 238, 238);
    max-width: 100%;
    width: 500px;

    .title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 25px;

      span {
        color: $primary-color;
      }
    }

    form {
      margin-bottom: 15px;
      .input {
        margin-bottom: 15px;

        input {
          width: 100%;
          border: 1px solid rgb(203, 203, 203);
          border-radius: 5px;
          outline: none;
          padding: 6px;
          font-size: 15px;

          &:focus {
            border: 1px solid $primary-color;
          }
        }
      }

      .btn_primary {
        width: 100%;
        font-size: 15px;
        border-radius: 5px;
      }
    }

    .bottom {
      text-align: center;
      font-size: 14px;
      color: gray;

      a {
        color: $primary-color !important;
      }
    }
  }
}
</style>
