import React, { useEffect } from 'react'
import s from './Goods.module.scss'
import { requestGoods } from '../../redux/main-reducer';
import { connect } from 'react-redux';
import { Card } from '../UI/Card';

const Goods = ({ clickHandler, price, requestGoods, category, isFetching, dataGoods }) => {

    return (
        <div className={s.goods}>
            Товары
            <button onClick={() => requestGoods(category)}>
                Загрузить
            </button>

            {isFetching
                ?
                <div> Загрузка </div>
                :
                <div className={s.goods__flex}>
                    {dataGoods.map(
                        (item, index) => <Card item={item} key={index} clickHandler = {clickHandler} price = {price}/>
                    )}
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    dataGoods: state.main.dataGoods,
    isFetching: state.main.isFetching
})

export const GoodsContainer = connect(mapStateToProps, { requestGoods })(Goods)