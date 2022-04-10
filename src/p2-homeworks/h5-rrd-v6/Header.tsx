import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './h5.module.css'

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'} className={s.item}>preJunior</NavLink>
            <NavLink to={'/junior'} className={s.item}>junior</NavLink>
            <NavLink to={'/junior-plus'} className={s.item}>juniorPlus</NavLink>
        </div>
    )
}

export default Header