import React from 'react'
import loader from '../../assets/loader/loader.svg'

export const Loader = ({width, height}) => {
    return <img src={loader} width={width} height={height}/>
}