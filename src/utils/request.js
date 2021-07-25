import axios from "axios"
import qs from 'qs';
import config from "@/config.base.js"
import {mergeObj} from "@/utils/objectUtils.js"
import {MediaType} from "@/utils/header.js"

let BaseAxios = axios.create({
    timeout: 30000,
    baseURL: ``,     //api为代理路径，在vue.config.js中有配置
});

BaseAxios._get = BaseAxios.get;
BaseAxios._post = BaseAxios.post;
BaseAxios._put = BaseAxios.put;
BaseAxios._delete = BaseAxios.delete;

BaseAxios.get = (url, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    return BaseAxios._get(url, configNew);
};

BaseAxios.delete = function (url, config) {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    return BaseAxios._delete(url, configNew);
};

BaseAxios.post = (url, data, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['headers']['Content-Type'] = MediaType.APPLICATION_JSON_UTF_8;
    return BaseAxios._post(url, JSON.stringify(data), configNew);
};

BaseAxios.put = (url, data, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['headers']['Content-Type'] = MediaType.APPLICATION_JSON_UTF_8;
    return BaseAxios._put(url, JSON.stringify(data), configNew);
};

BaseAxios.postByForm = (url, data, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['headers']['Content-Type'] = MediaType.APPLICATION_FORM_URLENCODED;
    return BaseAxios._post(url, qs.stringify(data), configNew);
};

BaseAxios.postByMultipartForm = (url, data, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['headers']['Content-Type'] = MediaType.MULTIPART_FORM_DATA;
    return BaseAxios._post(url, data, configNew);
};

BaseAxios.download = (url, defaultFilename, config) => {
    let configNew = mergeObj(config, getDefaultAthubConfig());
    configNew['responseType'] = 'blob';
    axios.get(url, configNew).then(res => {
        let filename = getFilename(res, defaultFilename);
        let blob = new Blob([res.data]);
        let objectUrl = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = objectUrl;
        a.setAttribute('download', filename);
        document.getElementsByTagName("body")[0].appendChild(a);
        a.click();
        a.remove();
    });
};

function getFilename(response, defaultFilename) {
    let filename = defaultFilename || '下载的文件';
    let contentDisposition = response.headers["content-disposition"];
    if (contentDisposition != null) {
        let key = 'filename=';
        let index = contentDisposition.indexOf(key);
        if (index !== -1) {
            filename = decodeURIComponent(contentDisposition.substr(index + key.length)).replaceAll('\"', '');
        }
    }
    return filename;
}


// 添加请求拦截器
BaseAxios.interceptors.request.use(function (config) {
    localStorage.setItem('appId', 'WEB');
    localStorage.setItem('token', 'token');
    // 认证信息
    ['appId', 'token'].forEach((key) => {
        config.headers = autoHeaders(config.headers, key, encodeURIComponent(localStorage.getItem(key)));
    });
    return config;
}, function (error) {
    return Promise.reject(error);
})

// 添加响应拦截器
BaseAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code != "200") {
        localStorage.clear();
        window.location.href = config.loginUrl;
    }
    return response.data;
}, function (error) {
    console.log(error.response);
    if (error && error.response && error.response.status == '401') {
        localStorage.clear();
        window.location.href = config.loginUrl;
    }
    return Promise.reject(error);
})

function getDefaultAthubConfig() {
    let headers = {};
    return {
        loading: false,
        headers: headers
    };
}

function autoHeaders(headers, key, value) {
    if ((headers[key] == null || String(headers[key]).trim() === '') && value != null) {
        headers[key] = value;
    }
    return headers;
}

export default BaseAxios
