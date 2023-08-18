import React from 'react'
import s from './Goods.module.scss'

export const Goods = ({clickHandler, price}) => {
    return (
        <div>
            Товары
            <button onClick={() => clickHandler(price+1)}>
                Добавить
            </button>
        </div>
    )
}