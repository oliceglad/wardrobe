import React from 'react'
import s from './Card.module.scss'

export const Card = ({ item, price, clickHandler }) => {

    return (
        <div className={s.card} onClick={() => clickHandler(price + item.price)}>
            <img src='https://cdn-icons-png.flaticon.com/512/4054/4054617.png' />
            <div className={s.card__info}>
                <div className={s.card__info__name}>
                    {item.name}
                </div>
                <div className={s.card__info__brand}>
                    {item.brand}
                </div>

                <div className={s.card__info__price}>
                    {item.price}
                </div>

                <a href={item.url} className={s.card__info__url}>
                    Ссылка
                </a>
            </div>
        </div>
    )
}