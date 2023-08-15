import React from 'react'
import s from './Constructor.module.scss'
import { Stage, Sprite, } from '@pixi/react';

export const Constructor = ({svgData}) => {
    return (
        <Stage className={s.container} options={{ backgroundColor: '#fff' }} width={200} height={550}>
            <Sprite
                image={svgData}
                x={200}
                y={270}
                anchor={{ x: 0.7, y: 0.5 }}
            />
        </Stage>
    )
}