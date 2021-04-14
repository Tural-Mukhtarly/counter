import Button from '../Button/Button'
import SetComponent from '../SetComponent/SetComponent'
import classes from './Counter.module.css'

type CounterType = {
    handleClick: () => void
    clearState: () => void
    state: number
    addState: (title: any) => void
}

function Table(props: CounterType) {
    return (
        <div className={classes.allBlock}>
            <SetComponent state={props.state} addState={props.addState} />
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
