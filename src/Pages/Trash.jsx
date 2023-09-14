import React from 'react'
import { connect } from 'react-redux';
import { CardTrash } from '../Components/UI/CardTrash';
import { setTrashHandler, setPriceHandler } from '../redux/main-reducer';

const Trash = ({ trashGoods, priceCount, setTrashHandler, setPriceHandler}) => {

    const deleteItem = (item) => {
        const newTrashGoods = trashGoods.filter((i) => i !== item)

        setPriceHandler(priceCount - item.price)
        setTrashHandler(newTrashGoods)
    }
    return (
        <div className='trash'>
            <h2 className='trash__title'>Корзина</h2>
            <div className='trash__container'>
                {
                    !trashGoods.length ?
                        <div style={{ color: "black" }}> Корзина пуста </div>
                        : <div>
                            {trashGoods.map(
                                (item, index) => <CardTrash item={item} key={index} deleteItem={deleteItem}/>
                            )}
                            <div className='trash__result'>
                                Итого: <b>{priceCount}</b> руб.
                            </div>

                            <p>
                                Чтобы купить вещь, нажмите на ссылку.
                            </p>
                        </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    trashGoods: state.main.trashGoods,
    priceCount: state.main.priceCount
})

export const TrashContainer = connect(mapStateToProps, {setTrashHandler, setPriceHandler})(Trash)