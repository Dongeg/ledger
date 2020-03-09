import React from 'react'
import './TotalPrice.scss'
import {connect} from "react-redux";
const TotalPrice = (props)=>{
    return (
        <div className="TotalPrice-ctn">
            <div>
                <span>收入</span>
                <span>￥{props.inputPrice}</span>
            </div>
            <div>
                <span>支付</span>
                <span>￥{props.outputPrice}</span>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        inputPrice:state.input,
        outputPrice:state.output,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(TotalPrice);
