import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/Cakes/cakeActions';

function CakeContainer() {

    const numOfCakes = useSelector((store) => {
        return store.cake.numOfCakes
    })
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default CakeContainer