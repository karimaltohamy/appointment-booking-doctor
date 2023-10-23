import axios from "axios";

const apiAxios = axios.create({
    baseURL: 'http://localhost:9000/api/v1',
    withCredentials: true,
    headers: {'content-type': "application/json"}
})

export default apiAxios