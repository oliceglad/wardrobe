import React from 'react'
import { Card } from '../UI/Card';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI/Loader';

export const MainGoods = ({ isFetching, data, clickHandler, price, s, addedToTrash, trashItems }) => {
    const navigate = useNavigate()

    const addedItemToTrash = (item, price) => {
        trashItems.push(item)
        addedToTrash(trashItems)

        clickHandler(price + item.price)
    }
    

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
                                (item, index) => <Card item={item} key={index} price = {price} addedItemToTrash = {addedItemToTrash}/>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}