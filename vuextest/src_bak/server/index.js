import axios  from 'axios';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5aceccf07b63be2d80ff2749/mozstore';

export function getList(params) {
    return axios('/shoplist',params)
}
export function getUsers(params) {
    return axios('/users',params)
}