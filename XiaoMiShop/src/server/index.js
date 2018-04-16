import axios from 'axios';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5aceccf07b63be2d80ff2749/mozstore';

export function getShopList(params){
    return axios('/shop-list',params);
}
export function getRecomendList (params){
    return axios('recommend',params);
}