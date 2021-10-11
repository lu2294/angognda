import { makeAutoObservable } from 'mobx';
class Store {
    isMain = true;
    isDown = false;
    appList = [];//header里面子app展示主要的数据
    localStorageData = {};
    activeName = 'xdr平台';
    updateUapStatus = false;
    appActiveList = [];
    appXdrList = {};
    activeList = [];//状态为0的app
    isUap = (localStorage.getItem('isUap') === undefined ? false : JSON.parse(localStorage.getItem('isUap')));
    routeList = {};//代表子app打开的url，router。实时更新，保证进入的是最新的url,router

    constructor() {
        makeAutoObservable(this);
        this.setLocalStorageData();
    }
    updateLocalStorageData = () => {
        localStorage.setItem('localData', JSON.stringify(this.localStorageData))
    }

    // mobx等一些状态管理数据库，  刷新数据后都会清空原有的数据，先采取折中方案，存在本地缓存中
    setLocalStorageData = () => {
        if (localStorage.getItem('localData')) {
            const data = JSON.parse(localStorage.getItem('localData'));
            this.localStorageData = { ...data }
            Object.keys(data).forEach((v) => {
                this[v] = data[v];
            })
        }
    }
    //更新数据，isLocal为是否存在缓存，避免数据刷新，数据丢失
    update = (value, key, isLocal) => {
        if (isLocal) {
            this.localStorageData[key] = value;
            this.updateLocalStorageData();
        }
        this[key] = value
    }
    updateAppListData = (arr = []) => {
        if (Array.isArray(arr)) {
            const xdrData = arr.filter((v) => (v.appname === 'xdr'));
            xdrData.length ? this.update(xdrData[0], 'appXdrList') : this.update({}, 'appXdrList');
            const data1 = arr.filter((v) => (v.appname !== 'xdr'));
            const data2 = arr.filter((v) => (v.status === 0));
            this.update(data1, 'appActiveList');
            if (data2.length) {
                let appNameList = []
                for (let i = 0; i < data2.length; i++) {
                    appNameList.push(data2[i].appname);
                }
                this.update(appNameList, 'activeList',true);
            } else {
                this.update([], 'activeList',true);
            }

        }
    }
}

const store = new Store();
export default store;