import React from 'react'
import { Button } from 'primereact/button';
import s from './Card.module.scss'

export const Card = ({ item, price, addedItemToTrash}) => {
    return (
        <div className={s.card}>
            <img src={item.images[0]} alt={item.name}/>
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


                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <a href={item.url} className={s.card__info__url} target='_blanc'>
                        Ссылка
                    </a>
                    <Button label='+' style={{ display: 'block', marginTop: 5, padding: '0px 5px 3px 5px' }} onClick={() => addedItemToTrash(item, price)} />
                </div>
            </div>
        </div>
    )
}