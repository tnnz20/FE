import axios from 'axios';

// const BASE_URL_LOCAL = 'http://localhost:5000/api/v2';
const BASE_URL_DEPLOY = 'https://mid-be-production.up.railway.app/api/v2';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL_DEPLOY,
});

export default axiosInstance;
