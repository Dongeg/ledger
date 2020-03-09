const  defaultState = {
    tableData:[],
    chosenMonth:"",
    input:'0',
    output:'0',
}
export default (state = defaultState,action)=>{
    const _state = JSON.parse(JSON.stringify(state))
    if(action.type === 'initTableData'){
        let _input = 0
        let _output = 0
        _state.tableData = action.value.filter((item)=>{
            return item.date.substring(0,7) === action.month
        })
        _state.tableData.forEach((item)=>{
            if(item.category.type === 'outcome'){
                _output += Number(item.price)
            }
            else if (item.category.type === 'income'){
                _input += Number(item.price)
            }
        })
        _state.input = _input
        _state.output = _output
    }
    if(action.type === 'setMonth'){
        _state.chosenMonth = action.value
    }

    return _state
}
