<template>
  <div class="profile_settings">
    <div class="form_signup">
      <form action="" class="needs-validation" novalidate>
        <div class="input">
          <input
            type="text"
            placeholder="Full Name"
            v-model="inputs.name"
            class="form-control"
          />
          <div class="valid-feedback d-block" v-if="validName">Looks good!</div>
          <div class="invalid-feedback d-block" v-else-if="validName == false">
            Invalid Name
          </div>
        </div>
        <div class="input">
          <input
            type="email"
            placeholder="Enter Your Email"
            v-model="inputs.email"
            class="form-control"
          />
          <div class="valid-feedback d-block" v-if="validEmail">
            Looks good!
          </div>
          <div class="invalid-feedback d-block" v-else-if="validEmail == false">
            Invalid Email
          </div>
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Enter Your Password"
            v-model="inputs.password"
            class="form-control"
          />
          <div class="valid-feedback d-block" v-if="validPassword">
            Looks good!
          </div>
          <div
            class="invalid-feedback d-block"
            v-else-if="validPassword == false"
          >
            Invalid Password
          </div>
        </div>
        <div class="input">
          <input
            type="text"
            placeholder="Enter your blood type"
            v-model="inputs.bloodType"
            class="form-control"
          />
        </div>
        <div class="selects">
          <div class="input_select">
            <label for="">Gender:</label>
            <select name="" id="" v-model="inputs.gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="img_user">
          <img v-if="imageShow" :src="imageShow" alt="" />
          <i class="fa-solid fa-user" v-else></i>
          <div class="input_file">
            <label for="upload-img">Upload Img</label>
            <input
              type="file"
              id="upload-img"
              class="d-none"
              @change="handleFile"
            />
          </div>
        </div>
        <button-primary
          name="Update"
          @click="handleUpdateUser"
          :loading="loading"
        />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/utils/ButtonPrimary.vue";
import uploadCloudinary from "@/utils/uploadCloudinary.js";
import apiAxios from "@/utils/apiAxios.js";
import { computed, reactive, ref } from "vue";
import router from "@/router";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default {
  name: "profileSettings",
  components: {
    ButtonPrimary
  },
  setup() {
    const store = useStore()
    let user = computed(() => store.state.user)
    const inputs = reactive({
      name: user.value.name || "",
      email: user.value.email || "",
      password: "",
      gender: user.value.gender || "",
      bloodType: user.value.bloodType || "",
    });
    const photo = ref("");
    const imageShow = ref();
    const loading = ref(false);
    const startValid = ref(false);

    const validName = computed(() =>
      startValid.value ? inputs.name.length >= 4 : null
    );
    const validEmail = computed(() =>
      startValid.value
        ? inputs.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)
          ? true
          : false
        : null
    );
    const validPassword = computed(() =>
      startValid.value ? inputs.password.length >= 8 : null
    );

    const handleFile = async (e) => {
      photo.value = e.target.files[0];

      const data = URL.createObjectURL(e.target.files[0]);
      imageShow.value = data;
    };

    // handle update user
    const handleUpdateUser = async (e) => {
      e.preventDefault();
      
      startValid.value = true;

        loading.value = true;
        try {
          const url = await uploadCloudinary(photo.value);
         const {data} = await apiAxios.put(`/users/edit-user/${user.value._id}`, { ...inputs, photo: url });
         store.commit("setUser", data.user)
          router.push("/users/profile/me");
          loading.value = false;
          toast.success("successfull Update");
        } catch (error) {
          loading.value = false;
          toast.error(error.response.data.message);
        }
    };

    return {
      inputs,
      handleFile,
      imageShow,
      loading,
      validName,
      validEmail,
      validPassword,
      handleUpdateUser
    };
  },


};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.profile_settings {

    .form_signup {
      padding: 15px;
      form {
        .input {
          margin-bottom: 20px;

          input {
            width: 100%;
            border: none;
            border: 1px solid rgb(203, 203, 203);
            border-radius: 5px;
            outline: none;
            padding: 6px;
            font-size: 15px;
            box-shadow: none;

            &:focus {
              border: 1px solid $primary-color;
            }
          }
        }

        .selects {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;

          .input_select {
            display: flex;
            align-items: center;
            gap: 10px;

            label {
              font-size: 14px;
              font-weight: 500;
            }

            select {
              border: none;
              padding: 0;
              outline: none;
              margin: 0;
              font-size: 13px;
              color: gray;
            }
          }
        }

        .img_user {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;

          i {
            color: gray;
            font-size: 25px;
          }

          label {
            font-size: 12px;
            padding: 4px 15px;
            color: white;
            border-radius: 5px;
            background-color: rgb(13, 13, 24);
          }

          img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
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
        margin-top: 20px;

        a {
          color: $primary-color !important;
        }
      }
    }
  
}

@media (max-width: 768px) {
  .signup {
    padding: 15px;
    .line {
      > div {
        width: 100%;
      }
      .image {
        display: none;
      }

      .form_signup {
        padding: 20px;
        border-radius: 8px;
        box-shadow: 4px 4px 12px rgb(238, 238, 238);
      }
    }
  }
}
</style>
