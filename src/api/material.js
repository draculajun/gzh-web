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

materialApi.addTemporaryMedia = (formData) => {
    return new Promise((resolve, reject) => {
        baseAxios.postByMultipartForm('/wxApi/material/temporary/media', formData).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};
materialApi.getTemporaryMedia = (mediaId) => {
    baseAxios.download(`/wxApi/material/temporary/media_id/${mediaId}`);
};

export default materialApi;