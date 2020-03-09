import React from 'react'
import { Table , Button ,Tag , Modal} from 'antd';
import {withRouter} from "react-router-dom";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {judgeIO} from '../utility'
import actionHandle from "../store/actionHandle";
const { confirm } = Modal;
class PriceList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tableData:props.items,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState(()=>({
            tableData:nextProps.items
        }))
    }
    render() {
        const columns =[
            {
                title: '类别',
                dataIndex: 'category',
                key: 'category',
                render: (text, record) => (
                    <Tag color="volcano">{record.category.name}</Tag>
                )
            },
            {
                title: '活动',
                dataIndex: 'title',
                key: 'title',

            },
            {
                title: '收支',
                dataIndex: 'price',
                key: 'price',
                width: "200px",
                render: (text, record) => (
                    <span>{judgeIO(record.category.type,record.price)}</span>
                )
            },
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
                width: "200px"
            },
            {
                title: '操作',
                key: 'ops',
                width:'200px',
                render:(text, record)=>(
                    <div>
                        <Button type="link"
                                onClick={()=>{
                                    this.handleDel(text,record)
                                }}>删除</Button >
                        <Button type="link"
                                onClick={()=>{
                                    this.handleEdit(text,record)
                                }}>编辑</Button >
                    </div>
                )
            },
        ]
        return (
            <div>
                <Table style={{marginBottom:'30px'}} pagination= {false} bordered rowKey={record => record.id} columns={columns} dataSource={this.state.tableData} />
            </div>

        )
    }
    handleDel(text,record){
        confirm({
            title: '确定要删除这条数据吗?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: '确认',
            okType: 'primary',
            cancelText: '取消',
            onOk() {
                actionHandle.delActivity(text)
            },
        });
        this.setState(()=>({
            visible:false
        }))
    }
    handleEdit(text,record){
        this.props.history.push(`/edit/${text.id}`);
    }
}

export default withRouter(PriceList)
