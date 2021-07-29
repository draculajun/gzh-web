import BaseAxios from "../utils/request";

const accessTokenApi = {};

accessTokenApi.get = () => {
    return new Promise((resolve, reject) => {
        BaseAxios.get('/wxApi/accessToken').then(res => {
            if (res.data.code == 200) {
                resolve(res.data.data);
            } else {
                reject(res.data.message);
            }
        }).catch(error => {
            reject(error);
        });
    });
};

export default accessTokenApi;
