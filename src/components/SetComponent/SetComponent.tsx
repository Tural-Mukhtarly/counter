import { Button, TextField } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import classes from './SetComponent.module.css'


type SetComponentType = {
    startState: number
    addState: (start: number, max: number) => void
    start: number
    onChangeStartHandler: (e: ChangeEvent<HTMLInputElement>) => void
    max: number
    onChangeMaxtHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

function SetComponent(props: SetComponentType) {


    return (
        <div>
            <div className={classes.stateMenu}>
                <div>
                    <form>
                        Start value : <TextField color="secondary" type="number" value={props.start} onChange={props.onChangeStartHandler} ></TextField>
                        Max value: <TextField color="secondary" type="number" value={props.max} onChange={props.onChangeMaxtHandler} ></TextField>
                    </form>
                </div>
                <div>
                    <Button variant="outlined" color="secondary" onClick={props.addState()}>set</Button>
                </div>
            </div>
        </div>
    )
}

export default SetComponent
