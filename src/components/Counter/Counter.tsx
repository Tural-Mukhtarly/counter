import { ChangeEvent } from 'react'
import ButtonComponent from '../Button/Button'
import SetComponent from '../SetComponent/SetComponent'
import classes from './Counter.module.css'

type CounterType = {
    handleClick: () => void
    clearState: () => void
    startState: number
    addState: (start: number, max: number) => void
    start: number
    onChangeStartHandler: (e: ChangeEvent<HTMLInputElement>) => void
    max: number
    onChangeMaxtHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

function Table(props: CounterType) {
    return (
        <div className={classes.allBlock}>
            <SetComponent
                startState={props.startState}
                addState={props.addState}
                start={props.start}
                onChangeStartHandler={props.onChangeStartHandler}
                max={props.max}
                onChangeMaxtHandler={props.onChangeMaxtHandler}
            />
            <div className={classes.block}>
                <div className={classes.stateBlock}>{props.startState}</div>
                <div>
                    <ButtonComponent
                        handleClick={props.handleClick}
                        clearState={props.clearState}
                        state={props.startState}
                        max={props.max} />
                </div>
            </div>
        </div>
    )
}

export default Table
