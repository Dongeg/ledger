import React from 'react'
import {Button} from "antd";
import { Link } from "react-router-dom";
import { getNowMonth } from '../utility'
import MonthPickerCom from "../components/MonthPickerCom";
import TotalPrice from '../components/TotalPrice'
import ViewTab from '../components/ViewTab'
import actionHandle from "../store/actionHandle";
class Home extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            chosenMonth:'',
        }
    }
    componentWillMount() {
        this.initPage()
    }
    render() {
        return (
            <div className="main">
                <div className="main-top">
                    <MonthPickerCom
                        month={this.state.chosenMonth}
                        changeMonth={this.changeMonth}
                    />
                    <TotalPrice />
                </div>
                <Link to='/Create'><Button type="primary">新增</Button></Link>
                <ViewTab/>
            </div>
        )
    }
    changeMonth(date, dateString){
        actionHandle.getTableData(dateString)
    }
    initPage(){
        let nowMonth = getNowMonth()
        this.setState(()=>({
            chosenMonth:nowMonth
        }))
        actionHandle.getTableData(nowMonth)
    }
}
export default Home
