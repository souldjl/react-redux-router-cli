import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 10000;

//POST传参序列化
axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    res => {
        if (!res.data) {
            return Promise.reject(res);
        }
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

const Post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
};

const Get = (url, param) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: param
            })
            .then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
};

export { Post, Get };
