import React from 'react'
import s from './Constructor.module.scss'

export const Constructor = () => {

    const onClickHandler = (event) => {
        console.log(event.target.id)
    }
    return (
        <div className={s.constructor}>
        </div>
    )
}