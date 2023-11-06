<template>
  <div class="text-center p-5"> success full <router-link to="/" class=" text-decoration-underline font-weight-bolder">Back</router-link></div>
</template>

<script>
import apiAxios from "@/utils/apiAxios.js";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
import { onMounted } from '@vue/runtime-dom';
import {computed} from "vue"

export default {
name: "successfullVue",
setup() {
  const store = useStore();
  const booking = computed(() => store.state.booking)

  onMounted( async () => {
    if (booking.value !== null) {
      await apiAxios.post("/booking/create-booking", booking.value)
      toast.success("successfull booking")
      store.commit("setBooking", null)
    }
  })
}
}
</script>

<style>

</style>