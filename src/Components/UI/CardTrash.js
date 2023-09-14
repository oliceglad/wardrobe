import React from 'react'
import s from './CardTrash.module.scss'

export const CardTrash = ({ item, deleteItem }) => {

    return (
        <div style={{display: 'flex'}}>
            <div className={s.card}>
                <img src='https://cdn-icons-png.flaticon.com/512/4054/4054617.png' alt={item.name} />
                <div className={s.card__info}>
                    <div className={s.card__info__name}>
                        {item.name}
                    </div>
                    <div className={s.card__info__brand}>
                        {item.brand}
                    </div>

                    <div className={s.card__info__price}>
                        {item.price} руб.
                    </div>


                    <div style={{ display: 'flex', alignItems: 'center', alignContent: 'flex-end'}}>
                        <a href={item.url} className={s.card__info__url} target='_blanc'>
                            Ссылка
                        </a>
                    </div>
                </div>
            </div>

            <button className={s.card__delete} onClick={
                () => deleteItem(item)
            }>
                Удалить
            </button>
        </div>
    )
}