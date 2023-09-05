import React from 'react'
import s from './Goods.module.scss'
import { requestGoods } from '../../redux/main-reducer';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { MainGoods } from './MainGoods';
import { Filter } from './Filter';

const Goods = ({ clickHandler, price, requestGoods, isFetching, dataGoods}) => {

    const WrappedFilter = function(props) {
        return (<Filter {...props} findGoods = {requestGoods} s = {s}/>);
    };

    const WrappedMainGoods = function(props) {
        return (<MainGoods {...props} clickHandler = {clickHandler} price = {price} isFetching = {isFetching} data = {dataGoods} s = {s}/>);
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
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    dataGoods: state.main.dataGoods,
    isFetching: state.main.isFetching
})

export const GoodsContainer = connect(mapStateToProps, { requestGoods })(Goods)