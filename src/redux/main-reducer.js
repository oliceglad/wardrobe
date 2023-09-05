import { mainAPI } from '../api/api'

const SET_PRICE = 'SET_PRICE'
const GET_GOODS = 'GET_GOODS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    priceCount: 0,
    dataGoods: {},
    isFetching: true
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {...state, priceCount: action.priceCount}
        
        case GET_GOODS:
            return {...state, dataGoods: action.dataGoods}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        
        default: 
            return state
    }
}

const setPrice = (priceCount) => ({ type: SET_PRICE, priceCount})
const getGoods = (dataGoods) => ({type: GET_GOODS, dataGoods})
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setPriceHandler = (newPrice) => (dispatch) => {
    try {
        console.log('adasads')
        dispatch(setPrice(newPrice))

        console.log(newPrice)
    } catch (e) {
        console.log('adasads')
    }
}

export const requestGoods = (category, gender, count) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    try{
        const response = await mainAPI.getGoodsByCategory(category, gender, count)
        if (response.status === 200) {
            dispatch(getGoods(response.data.data))
            dispatch(toggleIsFetching(false))
            console.log(response.data.data)
        } else {
            dispatch(toggleIsFetching(false))
        }
    } catch(e) {
        console.log(e)
    }
}