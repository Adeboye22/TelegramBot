const axios = require("axios");
const MY_TOKEN = "7047963135:AAHxGcT10tdz0gU6xaZB8emO2EYUm2tnhiQ"

const BASE_URL =`https://api.telegram.org/bot${MY_TOKEN}`;
const getAxiosInstance = () => {
    return{
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params, 
            });
        },
        post(method, data) {
            return axios({      
            method: "post",
            baseURL: BASE_URL,
            url: `/${method}`,
            data,
            })
        }

    };
}
module.exports = { axiosInstance: getAxiosInstance() };