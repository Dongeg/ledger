import React from 'react'
import { Tabs , Input, Button, DatePicker ,message } from 'antd';
import './Create.scss'
import {withRouter} from "react-router-dom";
import moment from "moment";
import Tags from '../components/Tags'
import actionHandle from '../store/actionHandle'
import { getLocalStorage,setLocalStorage,getToday } from '../utility'
const { TabPane } = Tabs;

class Create extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            inputTags:['工资','外快','欠款回收','股票','基金','黄金','期货','其他'],
            outputTags:['饮食','购物','养生','健身','借债','投资','亏损','旅行','其他'],
            submitData:{
                "id": Math.random(),
                "title": '',
                "price": '',
                "date": getToday(),
                "category": {
                    'name': '饮食',
                    "type": 'outcome'
                }
            }
        }
        this.toggleTabs = this.toggleTabs.bind(this)
        this.dateChange = this.dateChange.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.chooseClass = this.chooseClass.bind(this)
        this.backHome = this.backHome.bind(this)
        this.submitData = this.submitData.bind(this)
        this.getActivityDetail = this.getActivityDetail.bind(this)
    }
    componentDidMount() {
        if(this.props.match.params.id){
            this.getActivityDetail(this.props.match.params.id)
        }
    }

    render() {
        return (
            <div className='create-ctn'>
                <Tabs defaultActiveKey="outcome" onChange={this.toggleTabs}>
                    <TabPane tab="支出" key="outcome">
                        <Tags
                            tags={this.state.outputTags}
                            categoryName={this.state.submitData.category.name}
                            chooseClass={this.chooseClass}
                        />
                    </TabPane>
                    <TabPane tab="收入" key="income">
                        <Tags
                            tags={this.state.inputTags}
                            categoryName={this.state.submitData.category.name}
                            chooseClass={this.chooseClass}
                        />
                    </TabPane>
                </Tabs>
                <div className={'form-item-ctn'}>
                    <span><label style={{color:'red'}}>*</label>活动</span>
                    <Input type='text' value={this.state.submitData.title} onChange={this.inputChange} name='title' />
                </div>

                <div className={'form-item-ctn'}>
                    <span><label style={{color:'red'}}>*</label>金额</span>
                    <Input type='number' value={this.state.submitData.price} onChange={this.inputChange} name='price' />
                </div>
                <div className={'form-item-ctn'}>
                    <span><label style={{color:'red'}}>*</label>日期</span>
                    <DatePicker
                        value={moment(this.state.submitData.date, 'YYYY-MM-DD')}
                        format= 'YYYY-MM-DD'
                        onChange={this.dateChange} />
                </div>
                <div className='btn-ctn'>
                    <Button type="primary" onClick={this.submitData}>
                        提交
                    </Button>
                    <Button style={{marginLeft:'20px'}} onClick={this.backHome}>
                        取消
                    </Button>
                </div>

            </div>
        )
    }
    submitData(){
        let _data = this.state.submitData
        if (!_data.title || !_data.title || !_data.date ) {
            message.error('请填写完整的表单');
            return
        }
        const isUpdate = this.props.match.params.id ? true : false
        if(isUpdate){
            message.success('更新成功');
        }
        else {
            message.success('新增成功');
        }
        actionHandle.submitCreate(this.state.submitData,isUpdate)
        this.props.history.push(`/`);
    }
    backHome(){
        this.props.history.push(`/`);
    }
    // 表单输入框改变
    inputChange(e){
        let _submitData = {...this.state.submitData}
        _submitData[e.target.name] = e.target.value
        this.setState(()=>({
            submitData:_submitData
        }))
    }
    // 表单日期改变
    dateChange(date, dateString){
        let _submitData = {...this.state.submitData}
        _submitData.date = dateString
        this.setState(()=>({
            submitData:_submitData
        }))
    }
    // 切换tab
    toggleTabs (key){
        let _submitData = {...this.state.submitData}
        _submitData.category.type = key
        this.setState(()=>({
            submitData:_submitData
        }))
    }
    // 选择收入分类
    chooseClass(categoryName){
        let _submitData = {...this.state.submitData}
        _submitData.category.name = categoryName
        this.setState(()=>({
            submitData:_submitData
        }))
    }
    getActivityDetail(id){
        let tableData = getLocalStorage('tableData')
        for (let i=0;i < tableData.length;i++){
            if(tableData[i].id === id){
                this.setState(()=>({
                    submitData:{...tableData[i]},
                }))
            }
        }

    }
}

export default withRouter(Create)
