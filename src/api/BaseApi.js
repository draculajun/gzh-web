import BaseAxios from "../utils/request";

class BaseApi {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(id) {
        return new Promise((resolve, reject) => {
            BaseAxios.get(`${this.baseUrl}/${id}`).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    insert(params) {
        return new Promise((resolve, reject) => {
            BaseAxios.post(`${this.baseUrl}`, params).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    update(id, params) {
        return new Promise((resolve, reject) => {
            BaseAxios.put(`${this.baseUrl}/${id}`, params).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            BaseAxios.delete(`${this.baseUrl}/${id}`).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    list(params) {
        return new Promise((resolve, reject) => {
            BaseAxios.post(`${this.baseUrl}/list`, params).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    page(params) {
        return new Promise((resolve, reject) => {
            BaseAxios.post(`${this.baseUrl}/page`, params).then(res => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

}

export default BaseApi;
