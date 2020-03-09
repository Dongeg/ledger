import store from "./index";

// 获取首页数据
const getTableData = (value) => {
    const action = {
        type:'getTableData',
        value
    }
    store.dispatch(action)
}
// 初始化
const initTableData = (value,month) => {
    const action = {
        type:'initTableData',
        value,
        month,
    }
    store.dispatch(action)
}

const setMonth = (value) => {
    const action = {
        type:'setMonth',
        value
    }
    store.dispatch(action)
}
const submitCreate = (value,isUpdate) => {
    const action = {
        type:'submitCreate',
        value,
        isUpdate
    }
    store.dispatch(action)
}
const delActivity = (value) => {
    const action = {
        type:'delActivity',
        value
    }
    store.dispatch(action)
}
export default {
    getTableData,
    initTableData,
    setMonth,
    submitCreate,
    delActivity,
}
