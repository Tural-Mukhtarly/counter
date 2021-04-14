import React, { useState, ChangeEvent } from 'react'
import classes from './SetComponent.module.css'

type SetComponentType = {
    state: number
    addState: (title: any) => void
}


function SetComponent(props: SetComponentType) {

    const [title, setTitle] = useState<any>(0)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    function addState() {
        props.addState(title)
    }

    return (
        <div>
            <div className={classes.stateMenu}>
                <div>
                    max value : <input value={title} onChange={onChangeHandler} />
                    start value: <input type="text" />
                </div>
                <div>
                    <button onClick={() => addState}>set</button>
                </div>
            </div>
        </div>
    )
}

export default SetComponent
