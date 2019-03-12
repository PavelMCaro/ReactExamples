import axios, { AxiosInstance } from 'axios';

export const axiosAjax = (():AxiosInstance => axios.create({
    headers:{
        'Content-Type': 'application/json', 
        'X-Requested-With':'XMLHttpRequest'
    }
}))();

export * from 'axios';