import BaseAxios from "../utils/request";

const accessTokenApi = {};

accessTokenApi.get = () => {
    return new Promise((resolve, reject) => {
        BaseAxios.get('/wxApi/accessToken').then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};

export default accessTokenApi;
