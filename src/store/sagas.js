import {takeEvery} from 'redux-saga/effects'
import {getLocalStorage,setLocalStorage} from '../utility'
import actionHandle from './actionHandle'
function getTableData(action) {
    let tableData = getLocalStorage('tableData')
    actionHandle.initTableData(tableData,action.value)
}
function submitCreate(action) {
    let tableData = getLocalStorage('tableData')
    if (action.isUpdate){
        for (let i=0;i < tableData.length;i++){
            if(tableData[i].id === action.value.id){
                tableData[i] = action.value
                setLocalStorage('tableData',tableData)
            }
        }
    }
    else {
        try {

            tableData.push(action.value)
            setLocalStorage('tableData',tableData)
        }
        catch (e) {
            let tableData = [action.value]
            setLocalStorage('tableData',tableData)
        }
    }
}
function delActivity(action) {
    let tableData = getLocalStorage('tableData')
    for (let i=0;i < tableData.length;i++){
        if(tableData[i].id === action.value.id){
            tableData.splice(i,1)
        }
    }
    setLocalStorage('tableData',tableData)
    actionHandle.initTableData(tableData,action.value.date.substring(0,7))
}
function* mySaga() {
    yield takeEvery('getTableData',getTableData)
    yield takeEvery('submitCreate',submitCreate)
    yield takeEvery('delActivity',delActivity)
}

export default mySaga;
