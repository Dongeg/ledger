export const padLeft = (num) =>{
    return num < 10 ? '0' + num : num
}
export const judgeIO = (type,price) =>{
    return type === 'outcome' ? '-' + price : '+' +price
}

export const setLocalStorage = (key,value)=> {
    const _value = JSON.stringify(value)
    localStorage.setItem(key,_value)
}
export const getLocalStorage = (key) =>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)):[]
}
export const getNowMonth = () =>{
    let date = new Date()
    return date.getFullYear() + '-' + padLeft(date.getMonth()+1)
}
export const getToday = () =>{
    let date = new Date()
    return date.getFullYear() + '-' + padLeft(date.getMonth()+1) + '-' + padLeft(date.getDate())
}
