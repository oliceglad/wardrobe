import React, { useEffect } from 'react'
import s from './Goods.module.scss'
import { requestGoods } from '../../redux/main-reducer';
import { connect } from 'react-redux';
import { Card } from '../UI/Card';

const Goods = ({ clickHandler, price, requestGoods, category, isFetching, dataGoods }) => {

    return (
        <div>
            Товары
            <button onClick={() => clickHandler(price + 1)}>
                Добавить
            </button>
            <button onClick={() => requestGoods(category)}>
                Загрузить
            </button>

            {isFetching ?
            <div> Загрузка </div>
            :  dataGoods.map(
                (object) => <Card id = {object.id}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    dataGoods: state.main.dataGoods,
    isFetching: state.main.isFetching
})

export const GoodsContainer = connect(mapStateToProps, { requestGoods })(Goods)