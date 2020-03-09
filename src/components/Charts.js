import React, { PureComponent } from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts';
import './Charts.scss'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Charts extends PureComponent {
    constructor (props){
        super(props)
        this.state = {
            inputData:[],
            outputData:[],
        }
        this.initChartData = this.initChartData.bind(this)
    }
    componentWillMount() {
        this.setState({
            outputData:this.initChartData('outcome'),
            inputData:this.initChartData('income')
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            outputData:this.initChartData('outcome',nextProps.items),
            inputData:this.initChartData('income',nextProps.items)
        })
    }
    render() {
        let inputView = null
        let outputView = null
        if (this.state.inputData[0]){
            inputView = <div className={'charts-item'}>
                <PieChart width={400} height={380}>
                    <Pie dataKey="value"
                         isAnimationActive={true}
                         data={this.state.inputData}
                         cx={200} cy={200}
                         outerRadius={120}
                         fill="#8884d8" label>
                        {
                            this.state.inputData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className='chart-dir'>收入</div>
            </div>
        }
        else {
            inputView = <div className='chart-dir'>本月没有收入</div>
        }
        if (this.state.outputData[0]){
            outputView =  <div className={'charts-item'}>
                <PieChart width={400} height={380}>
                    <Pie dataKey="value"
                         isAnimationActive={true}
                         data={this.state.outputData}
                         cx={200} cy={200}
                         outerRadius={120}
                         fill="#8884d8" label>
                        {
                            this.state.outputData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className='chart-dir'>支出</div>
            </div>
        }
        else {
            outputView = <div className='chart-dir'>本月没有支出</div>
        }
        return (
            <div className={'charts-ctn'}>
                {inputView}

                {outputView}
            </div>

        );
    }
    initChartData(type,tableData = this.props.items){
        let result = {}
        let resultArr = []
        tableData.filter((item)=>{
            return item.category.type === type
        }).forEach((item)=>{
            if (!result[item.category.name]){
                result[item.category.name] = {
                    name:item.category.name,
                    value:item.price * 1
                }
            }
            else {
                result[item.category.name].value += item.price * 1
            }
        })
        for (let key in result){
            resultArr.push(result[key])
        }
        return resultArr
    }
}
