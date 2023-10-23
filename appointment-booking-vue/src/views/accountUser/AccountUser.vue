<template>
  <div class="account_user">
    <div class="container">
      <div class="line row">
        <div class="col-12 col-md-4">
          <div class="box_info">
            <div class="image">
              <img :src="user.photo" alt="" />
            </div>
            <h4 class="title">{{ user.name }}</h4>
            <p class="email">{{ user.email }}</p>
            <span class="blood_type">A+</span>
            <div class="btns">
              <button class="btn_logout">Logout</button>
              <button class="btn_delete_account">Delete Account</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">info</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "accountUser",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    return { user };
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
            padding: 8px 20px;
            border-radius: 8px;

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
