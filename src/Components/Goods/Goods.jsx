import React, { useEffect } from 'react'
import s from './Goods.module.scss'
import { requestGoods } from '../../redux/main-reducer';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Card } from '../UI/Card';
import { MainGoods } from './MainGoods';
import { Filter } from './Filter';

const Goods = ({ clickHandler, price, requestGoods, category, isFetching, dataGoods }) => {

    const WrappedFilter = function(props) {
        return (<Filter {...props} findGoods = {requestGoods} category = {category}/>);
    };

    const WrappedMainGoods = function(props) {
        return (<MainGoods {...props} setPriceHandler = {clickHandler} price = {price} isFetching = {isFetching} data = {dataGoods}/>);
    };


    return (
        <div className={s.goods}>
            <h2 className={s.goods__title}>
                Товары
            </h2>
            <div>
                <Routes>
                    <Route path="/goods" Component={WrappedMainGoods}/>
                    <Route path="*" Component={WrappedFilter} />
                </Routes>
                {/* {
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
                } */}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    dataGoods: state.main.dataGoods,
    isFetching: state.main.isFetching
})

export const GoodsContainer = connect(mapStateToProps, { requestGoods })(Goods)