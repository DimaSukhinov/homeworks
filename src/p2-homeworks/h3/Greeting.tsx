import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: null | string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onEnter}) => {

    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onEnter}/>
            <span className={s.spanError}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting