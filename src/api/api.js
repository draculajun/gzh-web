import wxAxios from "../utils/request"

const baseApi = {};

baseApi.getAccessToken = () => {
    return new Promise((resolve, reject) => {
        wxAxios.get().then(res => {
            console.log(res);
        }).catch(error => {
            reject(error);
        });
    });
};
