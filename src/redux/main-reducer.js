const SET_PRICE = 'SET_PRICE'

const initialState = {
    priceCount: 0
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {...state, priceCount: action.priceCount}
        default: 
            return state
    }
}

const setPrice = (priceCount) => ({ type: SET_PRICE, priceCount})

export const setPriceHandler = (newPrice) => (dispatch) => {
    try {
        console.log('adasads')
        dispatch(setPrice(newPrice))

        console.log(newPrice)
    } catch (e) {
        console.log('adasads')
    }
}