import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
  const dispatch=useDispatch()
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        {/* <h1>Buy Book</h1>
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(500))}}>+ </button>
         Add this item to the cart
        <button  className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(500))}}> -</button> */}
        
        <h1>Buy Book</h1>
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(500)}}>+ </button>
         Add this item to the cart
        <button  className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(500)}}> -</button>
   
    </div>
    
   
  )
}

export default Shop