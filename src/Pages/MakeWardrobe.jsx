import React from 'react'
import { Constructor } from '../Components/Constructor/Constructor'
import { GoodsContainer } from '../Components/Goods/Goods'
import { Button } from 'primereact/button';
import { setPriceHandler } from '../redux/main-reducer';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MakeWardrobe = ({ setPriceHandler, priceCount }) => {
    const navigate = useNavigate()
    
    return (
        <div className='wardrobe'>
            <div className='wardrobe__container'>
                <Constructor />
                <GoodsContainer clickHandler={setPriceHandler} price={priceCount}/>
            </div>
            <div className='wardrobe__count'>
                Итого: {priceCount} руб.
            </div>
            <Button label="Купить" style={{ marginRight: 20 }} onClick={ () => navigate('/trash')}/>
            <Button label="Сохранить" outlined />
        </div>
    )
}

const mapStateToProps = (state) => ({
    priceCount: state.main.priceCount
})

export const MakeWardrobeContainer = connect(mapStateToProps, { setPriceHandler })(MakeWardrobe)