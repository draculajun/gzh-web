import baseAxios from "../utils/request";
import BaseApi from "@/api/BaseApi";

const materialApi = new BaseApi('/wxApi/material/');

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
