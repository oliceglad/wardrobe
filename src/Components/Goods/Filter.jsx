import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Filter = ({category}) => {

    const navigate = useNavigate()

    return (
        <div color='black'>
            {category}
            <button onClick={
               () => navigate('goods')
            }>
                кнопка
            </button>
        </div>
    )
}