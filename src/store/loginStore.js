import { makeAutoObservable } from 'mobx';
// import { login } from '../services'

class Store {
    isLogin = localStorage.getItem('name') && localStorage.getItem('token') ;
    username = localStorage.getItem('name') || '';


    constructor() {
        makeAutoObservable(this)
    }
    update = (value, key) => {
        this[key] = value
    }

    // @action
    // isLogin = () => {
    //     return localStorage.getItem('name') && localStorage.getItem('token') 
    // }

    // login = async (params) => {
    //     const res = await login(params);
    //     return res.data
    // }
}

const store = new Store();
export default store;