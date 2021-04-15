import React from 'react'
import classes from './Button.module.css'

type ButtonTypes = {
    state: number
    handleClick: () => void
    clearState: () => void
    
}

function Button(props: ButtonTypes) {
    
    function disabledButton() {
        if (props.state === 5) {
            return true
        }
    }

    return (
        <div>
            <button className={classes.inc} onClick={props.handleClick} disabled={disabledButton()}>Inc</button>
            <button className={`${props.state === 0 ? classes.noneReset : classes.reset}`} onClick={props.clearState} >Reset</button>
        </div>
    )
}

export default Button
