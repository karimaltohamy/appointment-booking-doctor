<template>
  <div class="profile_doctor">
    <h5 class="title">Profile Information</h5>
    <form action="">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="input_item">
            <label for="">Name</label>
            <input type="text" placeholder="name" v-model="inputs.name" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="input_item">
            <label for="">Email</label>
            <input type="text" placeholder="email" v-model="inputs.email" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="input_item">
            <label for="">Phone</label>
            <input
              type="text"
              placeholder="phone number"
              v-model="inputs.phone"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="input_item">
            <label for="">Bio</label>
            <input type="text" placeholder="bio" v-model="inputs.bio" />
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="input_item">
            <label for="">Gender</label>
            <select name="" id="" v-model="inputs.gender">
              <option value="">select</option>
              <option value="male">male</option>
              <option value="famale">female</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="input_item">
            <label for="">Specialization</label>
            <select name="" id="" v-model="inputs.specialization">
              <option value="">select</option>
              <option value="anesthesiology">Anesthesiology</option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="emergency medicine">Emergency Medicine</option>
              <option value="hospital medicine">Hospital Medicine</option>

            </select>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="input_item">
            <label for="">Ticket Price</label>
            <input
              type="number"
              placeholder="ticket price"
              v-model="inputs.ticketPrice"
            />
          </div>
        </div>
      </div>
      <div class="info_qualifications">
        <h6>Qualifications</h6>
        <div
          class="row"
          v-for="(item, index) in inputs.qualifications"
          :key="index"
        >
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">Start Date</label>
              <input
                type="date"
                placeholder="start date"
                v-model="item.startDate"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">End Date</label>
              <input
                type="date"
                placeholder="End date"
                v-model="item.endDate"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">Dgree</label>
              <input type="text" placeholder="dgree" v-model="item.dgree" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">university</label>
              <input
                type="text"
                placeholder="university"
                v-model="item.university"
              />
            </div>
          </div>
          <button
            class="remove_group"
            @click.prevent="removeQualificationsGroup(index)"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <button class="btn_add" @click.prevent="addQualificationsGroup">
          Add Qualification
        </button>
      </div>
      <div class="info_experinces">
        <h6>Experinces</h6>
        <div
          class="row"
          v-for="(item, index) in inputs.experiences"
          :key="index"
        >
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">Start Date</label>
              <input
                type="date"
                placeholder="start date"
                v-model="item.startDate"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">End Date</label>
              <input
                type="date"
                placeholder="End date"
                v-model="item.endDate"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">position</label>
              <input
                type="text"
                placeholder="position"
                v-model="item.position"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input_item">
              <label for="">hospital</label>
              <input
                type="text"
                placeholder="hospital"
                v-model="item.hospital"
              />
            </div>
          </div>
          <button
            class="remove_group"
            @click.prevent="removeExperincesGroup(index)"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <button class="btn_add" @click.prevent="addExperincesGroup">
          Add Experinces
        </button>
      </div>
      <div class="info_slots">
        <h6>Time Slots</h6>
        <div class="row" v-for="(item, index) in inputs.timeSlots" :key="index">
          <div class="col-12 col-md-4">
            <div class="input_item">
              <label for="">Day</label>
              <select name="" id="" v-model="item.day">
                <option value="">select</option>
                <option value="saturday">saturday</option>
                <option value="sunday">sunday</option>
                <option value="monday">monday</option>
                <option value="tuesday">tuesday</option>
                <option value="wednesday">wednesday</option>
                <option value="thursday">thursday</option>
                <option value="friday">friday</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="input_item">
              <label for="">Starting Date</label>
              <input type="time" v-model="item.startingTime" />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="input_item">
              <label for="">Ending Date</label>
              <input type="time" v-model="item.endingTime" />
            </div>
          </div>
          <button
            class="remove_group"
            @click.prevent="removeTimeSlotsGroup(index)"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <button class="btn_add" @click.prevent="addTimeSlotsGroup">
          Add Time Slot
        </button>
      </div>
      <div class="input_item">
        <label for="">About</label>
        <textarea name="" id="" v-model="inputs.about"></textarea>
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
        name="Update Profile"
        class="btn_submit"
        @click.prevent="handleUpdateProfile"
      />
    </form>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import ButtonPrimary from "@/components/utils/ButtonPrimary.vue";
import store from "../../store";
import router from "@/router";
import { toast } from "vue3-toastify";
import uploadCloudinary from "@/utils/uploadCloudinary.js";
import apiAxios from "@/utils/apiAxios.js";

export default {
  name: "ProfileVue",
  components: {
    ButtonPrimary,
  },
  setup() {
    const user = computed(() => store.state.user);
    const inputs = reactive({
      name: user.value.name || "",
      email: user.value.email || "",
      phone: user.value.phone || "",
      bio: user.value.bio || "",
      gender: user.value.gender || "",
      specialization: user.value.specialization || "",
      ticketPrice: user.value.ticketPrice || "",
      qualifications: user.value.qualifications || [],
      experiences: user.value.experiences || [],
      timeSlots: user.value.timeSlots || [],
      about: user.value.about || "",
    });
    const photo = ref("");
    const imageShow = ref();
    const loading = ref(false);

    // handle img
    const handleFile = async (e) => {
      photo.value = e.target.files[0];

      const data = URL.createObjectURL(e.target.files[0]);
      imageShow.value = data;
    };

    // add gualifications group inputs
    const addQualificationsGroup = () => {
      inputs.qualifications.push({
        startDate: "",
        endDate: "",
        dgree: "",
        university: "",
      });
    };

    // remove gualifications group inputs
    const removeQualificationsGroup = (i) => {
      console.log(i);
      inputs.qualifications = inputs.qualifications.filter(
        (_, index) => index !== i
      );
    };

    // add experinces group inputs
    const addExperincesGroup = () => {
      inputs.experiences.push({
        startDate: "",
        endDate: "",
        position: "",
        hospital: "",
      });
    };

    // remove experinces group inputs
    const removeExperincesGroup = (i) => {
      console.log(i);
      inputs.experiences = inputs.experiences.filter((_, index) => index !== i);
    };

    // add experinces group inputs
    const addTimeSlotsGroup = () => {
      inputs.timeSlots.push({
        day: "",
        StartingTime: "",
        endingTime: "",
      });
    };

    // remove experinces group inputs
    const removeTimeSlotsGroup = (i) => {
      console.log(i);
      inputs.timeSlots = inputs.timeSlots.filter((_, index) => index !== i);
    };

    // const handle update Profiel
    const handleUpdateProfile = async () => {
      loading.value = true;
      try {
        const url = await uploadCloudinary(photo.value);
        const { data } = await apiAxios.put(
          `/doctors/edit-doctor/${user.value._id}`,
          { ...inputs, photo: url }
        );
        store.commit("setUser", data.doctor);
        toast.success("successfull Update");
        router.push("/doctors/profile/me");
        loading.value = false;
      } catch (error) {
        loading.value = false;
        toast.error(error.response.data.message);
      }
    };

    return {
      inputs,
      addQualificationsGroup,
      removeQualificationsGroup,
      addExperincesGroup,
      removeExperincesGroup,
      addTimeSlotsGroup,
      removeTimeSlotsGroup,
      handleUpdateProfile,
      handleFile,
      imageShow,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile_doctor {
  .title {
    font-size: 22px;
    margin-bottom: 15px;
  }

  form {
    .input_item {
      margin-bottom: 10px;

      label {
        font-size: 15px;
        display: block;
        margin-bottom: 3px;
        color: #333;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 5px;
        outline: none;
        border: 1px solid rgb(205, 205, 205);
        border-radius: 4px;
      }

      textarea {
        height: 120px;
      }
    }

    .remove_group {
      width: 30px;
      height: 30px;
      background-color: rgb(249, 38, 38);
      color: white;
      border-radius: 50%;
      margin: 0 15px 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        font-size: 14px;
      }
    }

    .btn_add {
      padding: 4px 10px;
      font-size: 13px;
      background-color: black;
      color: white;
      border-radius: 5px;
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

    .btn_submit {
      width: 100%;
      border-radius: 5px;
    }

    .info_qualifications,
    .info_experinces,
    .info_slots {
      margin-bottom: 12px;
    }
  }
}
</style>
