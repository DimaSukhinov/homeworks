import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<null | string>(null)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value.trim())
        setError(null)
    }

    const addUser = () => {
        if (name.trim()) {
            addUserCallback(name)
            setName('')
            alert(`Hi ${name}!`)
        } else setError('Name is required!')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            onEnter={onEnter}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer