import { Button, TextField } from '@material-ui/core';
import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../redux/useTypeSelector';
import s from './Counter.module.css'

function Counter() {
    const dispatch = useDispatch()
    const valueStart = useTypeSelector(state => state.start)
    const valueMax = useTypeSelector(state => state.max)

    const [start, setStart] = useState<number>(5)
    const [max, setMax] = useState<number>(0)

    const onChangeNewValue = (e: ChangeEvent<HTMLInputElement>) => setStart(e.currentTarget.valueAsNumber)
    const onChangemaxValue = (e: ChangeEvent<HTMLInputElement>) => setMax(e.currentTarget.valueAsNumber)

    const incValue = () => dispatch({ type: "ADD_VALUE", payload: 1 })
    const decValue = () => dispatch({ type: "DECREMENT_CASH", payload: 1 })

    const addValue = () => {
        dispatch({ type: "START_VALUE", payload: start })
        dispatch({ type: "MAX_VALUE", payload: max })
    }

    const disabledMin = () => valueStart === 0 ? true : false
    const disabledMax = () => valueStart === valueMax ? true : false

    return (
        <div className={s.counterContainer}>
            <div className={s.sm}>
                <div className={s.startBlock}>
                    <TextField type="number" onChange={onChangeNewValue} placeholder="Start"></TextField>
                    <TextField type="number" placeholder="Max" onChange={onChangemaxValue}></TextField>
                    <Button onClick={addValue} variant="outlined" color="primary">SET</Button>
                </div>
            </div>
            <div className={s.counter}>
                <div className={s.value}>
                    {valueStart}
                </div>
                <Button variant="contained" color="primary" onClick={() => incValue()} disabled={disabledMax()}>+</Button>
                <Button variant="contained" color="secondary" onClick={() => decValue()} disabled={disabledMin()}>-</Button>
            </div>
        </div >
    )
}

export default Counter
