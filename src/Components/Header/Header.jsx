import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={s.header}>
                <NavLink to='/makewardrobe' className={s.header__logo}>
                    <div className={s.header__log__text}>
                        Mylogo
                    </div>
                </NavLink>
                <nav className={s.header__nav}>
                    <NavLink to='/makewardrobe' className={s.header__nav__link}>Собрать гардероб</NavLink>
                    <NavLink to='/mywardrobe' className={s.header__nav__link}>Мой гардероб</NavLink>
                </nav>
        </header>
    )
}