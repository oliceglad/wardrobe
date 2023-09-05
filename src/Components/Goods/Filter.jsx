import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

export const Filter = ({findGoods, s }) => {

    const [filterObject, setFilter] = useState({
        gender: 'man',
        count: 10
    })

    const category = filterObject.gender === 'man' ? 'jacket' : 'pants'

    const navigate = useNavigate()

    const onNavigateClick = () => {
        findGoods(category, filterObject.gender, filterObject.count)
        navigate('goods')
    }

    return (
        <div>
            <div className={s.goods__filter}>
                <Button className={s.goods__filter__gender} onClick={
                    () => {
                        setFilter((value) => ({
                            ...value, ['gender']: 'man'
                        }))
                    }
                } outlined = {filterObject.gender === 'man' ? false : true}>
                    Мужчина
                </Button>
                <Button className={s.goods__filter__gender} onClick={
                    () => setFilter((value) => (
                        {
                            ...value,
                            ['gender']: 'woman'
                        }))
                } outlined = {filterObject.gender === 'woman' ? false : true}>
                    Женщина
                </Button>
            </div>
            <label style={{ display: 'block' }}>
                Количество товаров:
            </label>
            <InputNumber value={filterObject.count} onValueChange={
                (event) => setFilter((value) => (
                    {
                        ...value,
                        ['count']: event.value || 0
                    }))
            } min={0} max={100} className={s.goods__filter__count} id='input' />

            <Button onClick={
                () => onNavigateClick()
            } style={{ display: 'block' }}>
                Найти
            </Button>
        </div >
    )
}