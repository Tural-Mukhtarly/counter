import { Button, TextField } from '@material-ui/core';
import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { decValueAC, incValueAC } from '../../redux/store';
import { useTypeSelector } from '../../redux/useTypeSelector';
import s from './Counter.module.css'
import { Link } from "react-router-dom";

function Counter() {

    const dispatch = useDispatch()

    const valueStart = useTypeSelector(state => state.start)
    const valueMax = useTypeSelector(state => state.max)


    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(0)

    const incValue = () => dispatch(incValueAC(1))
    const decValue = () => dispatch(decValueAC(1))


    const disabledMin = () => valueStart === start ? true : false
    const disabledMax = () => valueStart === valueMax ? true : false
    
    return (
            <div className={s.counter}>
                <div className={s.value}>
                    {valueStart}
                </div>
                <Button variant="contained" color="primary" onClick={() => incValue()} disabled={disabledMax()}>+</Button>
                <Button variant="contained" color="secondary" onClick={() => decValue()} disabled={disabledMin()}>-</Button>
                <Link to="/counter">Set</Link>
            </div>
    )
}

export default Counter;
