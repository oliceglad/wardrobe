import React from 'react'
import { Constructor } from '../../Components/Constructor/Constructor'
import { Goods } from '../../Components/Goods/Goods'

export const MakeWardrobe = () => {
    return (
        <div className='wardrobe'>
            <Constructor />
            <Goods />
            
        </div>
    )
}