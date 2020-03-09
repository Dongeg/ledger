import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
const { MonthPicker } = DatePicker;
const monthFormat = 'YYYY-MM';
const MonthPickerCom= (props) =>  {
    return (
        <div>
            <span>选择月份:</span>
            <MonthPicker
                onChange={props.changeMonth}
                defaultValue={moment(props.month, monthFormat)}
                format={monthFormat}
            >
            </MonthPicker>
        </div>
    )

}
export default MonthPickerCom
