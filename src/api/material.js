import baseAxios from "../utils/request";

const materialApi = {};

materialApi.page = (type, offset, count) => {
    let data = {
        'type': type,
        'offset': offset,
        'count': count,
    }
    return new Promise((resolve, reject) => {
        baseAxios.post('/wxApi/material/page', data).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};

export default materialApi;