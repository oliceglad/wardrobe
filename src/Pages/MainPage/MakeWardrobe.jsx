import React, {useState} from 'react'
import { Constructor } from '../../Components/Constructor/Constructor'
import { Goods } from '../../Components/Goods/Goods'
import { Button } from 'primereact/button';
import logo from '../../assets/img/human.jpg'

export const MakeWardrobe = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='wardrobe'>
            <div className='wardrobe__container'>
                <Constructor svgData = {logo}/>
                <Goods />
            </div>
            <div className='wardrobe__count'>
                Итого: {count} руб.
            </div>
            <Button label="Купить" style={{marginRight: 20}}/>
            <Button label="Сохранить" outlined />
        </div>
    )
}