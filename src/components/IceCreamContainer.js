import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'


function IceCreamContainer() {
    const numOfIceCream = useSelector((store) => {
        return store.iceCream.numOfIceCream
    })

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecream - {numOfIceCream}</h2>
            <button onClick={() => { dispatch(buyIceCream()) }}> Buy Ice Cream</button>
        </div >
    )
}

export default IceCreamContainer