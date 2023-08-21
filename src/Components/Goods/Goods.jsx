import React, { useEffect } from 'react'
import s from './Goods.module.scss'
import { requestGoods } from '../../redux/main-reducer';
import { connect } from 'react-redux';
import { Card } from '../UI/Card';

const Goods = ({ clickHandler, price, requestGoods, category, isFetching, dataGoods }) => {

    return (
        <div className={s.goods}>
            <h2 className={s.goods__title}>
                Товары
            </h2>
            <div>
                {
                    dataGoods.length > 0 ? <div className={s.goods__count}> Найдено товаров:{dataGoods.length}</div> : <button onClick={() => requestGoods(category)}>
                        Загрузить
                    </button>
                }
                {
                    isFetching
                        ?
                        <div> Загрузка </div>
                        :
                        <div className={s.goods__flex}>
                            {dataGoods.map(
                                (item, index) => <Card item={item} key={index} clickHandler={clickHandler} price={price} />
                            )}
                        </div>
                }
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    dataGoods: state.main.dataGoods,
    isFetching: state.main.isFetching
})

export const GoodsContainer = connect(mapStateToProps, { requestGoods })(Goods)