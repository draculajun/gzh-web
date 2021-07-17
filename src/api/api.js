import axios from "../utils/request"

const baseApi = {};

baseApi.getAccessToken = () => {
    return new Promise((resolve, reject) => {
        axios.get().then(res => {
            console.log(res);
        }).catch(error => {
            reject(error);
        });
    });
};
