import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Filter = ({category, findGoods}) => {

    const navigate = useNavigate()

    const onNavigateClick = () => {
        findGoods(category)
        navigate('goods')
    }

    return (
        <div color='black'>
            {category}
            <button onClick={
               () => onNavigateClick()
            }>
                Го
            </button>
        </div>
    )
}