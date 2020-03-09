import React from 'react'
import {connect} from 'react-redux';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import PriceList from './PriceList'
import Charts from './Charts'
const { TabPane } = Tabs;

const ViewTabs = (props)=> {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane
                tab= {
                    <span>
                         <AppleOutlined />列表
                    </span>
                }
                key="1">
                <PriceList items={props.items}></PriceList>
            </TabPane>
            <TabPane
                tab= {
                    <span>
                      <AndroidOutlined />图表
                    </span>
                }
                key="2">
                <Charts items={props.items}></Charts>
            </TabPane>
        </Tabs>
    )
}
ViewTabs.propTypes = {
    onTabChange:PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        items:state.tableData,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewTabs);

