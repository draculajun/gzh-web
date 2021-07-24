import baseAxios from "../utils/request";

const baseApi = {};

baseApi.getAccessToken = () => {
    return new Promise((resolve, reject) => {
        baseAxios.get('/wxApi/accessToken').then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};

export default baseApi;
