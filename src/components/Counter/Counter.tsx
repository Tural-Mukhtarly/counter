import Button from '../Button/Button'
import classes from './Counter.module.css'

type CounterType = {
    handleClick: () => void
    clearState: () => void
    state: number
}

function Table(props:CounterType) {
    return (
        <div>
            <div className={classes.block}>
                <div className={classes.stateBlock}>{props.state}</div>
                <div>
                    <Button handleClick={props.handleClick} clearState={props.clearState} state={props.state} />
                </div>
            </div>
        </div>
    )
}

export default Table
