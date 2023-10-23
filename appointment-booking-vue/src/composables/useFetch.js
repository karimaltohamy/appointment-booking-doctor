import apiAxios from "@/utils/apiAxios";
import { ref } from "vue";

const useFetch = (url) => {
  const dataFetch = ref(null);
  const loading = ref(false);
  const error = ref(false);

  const getData = async () => {
    loading.value = true;
    try {
      const { data } = await apiAxios.get(url);
      dataFetch.value = data;
    } catch (err) {
      error.value = true;
      console.log(err);
    }
  };

  getData();

  return { dataFetch, loading, error };
};

export default useFetch;
