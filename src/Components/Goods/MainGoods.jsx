import React from 'react'
import { Card } from '../UI/Card';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI/Loader';

export const MainGoods = ({ isFetching, data, clickHandler, price, s }) => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={
                () => navigate('/')
            } style={{ display: 'block' }}>
                Назад
            </button>
            <div className={s.goods__list}>
                {
                    isFetching
                        ?
                        <Loader width={100} height={100}/>
                        :
                        <div className={s.goods__flex}>
                            {data.map(
                                (item, index) => <Card item={item} key={index} clickHandler={clickHandler} price={price} />
                            )}
                        </div>
                }
            </div>
        </div>
    )
}