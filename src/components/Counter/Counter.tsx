import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../redux/useTypeSelector';
import s from './Counter.module.css'

function Counter() {
    const dispatch = useDispatch()
    const value = useTypeSelector(state => state.cash)

    function incCash() {
        dispatch({ type: "ADD_VALUE", payload: 1 })
    }

    function decCash() {
        dispatch({ type: "DECREMENT_CASH", payload: 1 })
    }

    function disabled() {
        if (value === 0) {
            return true
        }
    }

    return (
        <div className={s.counterContainer}>
            <div className={s.sm}>
                <div className={s.startBlock}>
                    <TextField placeholder="Start"></TextField>
                    <Button variant="outlined" color="primary">Start</Button>
                </div>
                <div className={s.maxBlock}>
                    <TextField placeholder="Max"></TextField>
                    <Button variant="outlined" color="primary">Max</Button>
                    <div></div>
                </div>
            </div>

            <div className={s.counter}>
                <div className={s.value}>
                    {value}
                </div>
                <Button variant="contained" color="primary" onClick={() => incCash()} >+</Button>
                <Button variant="contained" color="secondary" onClick={() => decCash()} disabled={disabled()}>-</Button>
            </div>

        </div>
    )
}

export default Counter
