import apiAxios from "@/utils/apiAxios";
import {  ref } from "vue";

const useFetch = (url) => {
  const dataFetch = ref(null);
  const loading = ref(false);
  const error = ref(false);

  const getData = async () => {
    loading.value = true;
    try {
      const { data: {success, info} } = await apiAxios.get(url);
      dataFetch.value = info
      loading.value = false
      console.log(success);
    } catch (err) {
      error.value = true;
      loading.value = false
      console.log(err);
    }
  };
  getData()

  return { dataFetch, loading, error, getData };
};

export default useFetch;
