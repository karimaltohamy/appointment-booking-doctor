import axios from "axios";

const apiAxios = axios.create({
    baseURL: 'appointment-booking-doctor-hrzb.vercel.app/api/v1',
    withCredentials: true,
    headers: {'content-type': "application/json"}
})

export default apiAxios