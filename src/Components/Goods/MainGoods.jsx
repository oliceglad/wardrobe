import React from 'react'
import { Card } from '../UI/Card';
import s from './Goods.module.scss'
import { useNavigate } from 'react-router-dom';

export const MainGoods = ({ isFetching, data, clickHandler, price }) => {
    const navigate = useNavigate()
    return (
        <div color='black'>
            <button onClick={
                () => navigate('/')
            }>
                Назад
            </button>
            {
                isFetching
                    ?
                    <div> Загрузка </div>
                    :
                    <div className={s.goods__flex}>
                        {data.map(
                            (item, index) => <Card item={item} key={index} clickHandler={clickHandler} price={price} />
                        )}
                    </div>
            }
        </div>
    )
}