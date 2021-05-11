import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../redux/useTypeSelector';

function Counter() {
    const dispatch = useDispatch()
    const value = useTypeSelector(state => state.cash)

    function incCash() {
        dispatch({ type: "ADD_VALUE", payload: 1 })
    }
    
    function decCash() {
        dispatch({ type: "DECREMENT_CASH", payload: 1 })
    }
    
    return (
        <div>
            <div>{value}</div>
            <Button variant="outlined" color="primary" onClick={() => incCash()}>+</Button>
            <Button variant="outlined" color="primary" onClick={() => decCash()}>-</Button>
        </div>
    )
}

export default Counter
