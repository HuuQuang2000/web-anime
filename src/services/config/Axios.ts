import axios from "axios";
// @ts-ignore
import {getCookie} from "@/plugins/Utils";
import type {AxiosInstance, AxiosResponse} from "axios";
import {data} from "autoprefixer";

let axiosInstance: AxiosInstance | null = null;

function getInstance(): AxiosInstance {
    if (axiosInstance != null) {
        return axiosInstance
    }
    axiosInstance = axios.create({
        // baseURL: "https://api.g-eduhanoi.com/v1/api",
        baseURL: "http://localhost:3000",
        headers: {},
    });

    //hook interceptor cài ở đây
    axiosInstance.interceptors.request.use((config) => {
        const token: string | null = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })
    axiosInstance.interceptors.response.use((response: any) => {
            return response;
        },
        async (error: { response: { data: { code: string; }, status: number }; }) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
}

function get(endpointApiUrl: string, payload = {}, opts = {}) {
    return getInstance().get(endpointApiUrl, {
        params: payload,
        ...opts
    });
}

const getProfile = async (token: string) => Axios.get(`/v1/api/auth/profile`);


function post(endpointApiUrl: string, payload = {}, opts = {}) {
    return getInstance().post(endpointApiUrl, payload, opts);
}

function put(endpointApiUrl: string, payload = {}, opts = {}) {
    return getInstance().put(endpointApiUrl, payload, opts);
}

function patch(endpointApiUrl: string, payload = {}, opts = {}) {
    return getInstance().patch(endpointApiUrl, payload, opts);
}

function del(endpointApiUrl: string, payload = {}, opts = {}) {
    return getInstance().delete(endpointApiUrl, {
        ...payload, ...opts
    });
}

export interface IAxiosRes<T> extends AxiosResponse {
    data: T
};

export interface IAxiosPageRes<T> extends AxiosResponse {
    data: {
        content: T[],
        number: number,
        totalElements: number,
        numberOfElements: number,
    }
};


export const Axios = {
    axiosInstance,
    get,
    post,
    put,
    patch,
    del,
};