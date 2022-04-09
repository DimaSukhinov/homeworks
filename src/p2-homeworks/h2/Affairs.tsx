import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>
            {mappedAffairs}
            <button className={props.filter === 'all' ? s.activeFilter : ''} onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? s.activeFilter : ''} onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? s.activeFilter : ''} onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? s.activeFilter : ''} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
