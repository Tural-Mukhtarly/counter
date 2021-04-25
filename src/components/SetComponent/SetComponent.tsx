import React, { useState, ChangeEvent } from 'react'
import classes from './SetComponent.module.css'

type SetComponentType = {
    state: number
    addState: (max: number) => void
}


function SetComponent(props: SetComponentType) {

    const [max, setMax] = useState(0)


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.valueAsNumber)
    }

    // function addState(er: number) {
    //     setMax(props.addState(er))
    // }


    return (
        <div>
            <div className={classes.stateMenu}>
                <div>
                    max value : <input value={max} onChange={onChangeMaxHandler} />
                    {/* start value: <input value={start} onChange={onChangeStartHandler} /> */}
                </div>
                <div>
                    <button onClick={() => props.addState(max)}>set</button>
                </div>
            </div>
        </div>
    )
}

export default SetComponent
