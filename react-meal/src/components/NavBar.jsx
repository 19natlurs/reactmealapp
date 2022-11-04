import React from 'react'
import "./NavBar.css"

import { useSelector } from 'react-redux'


const NavBar = (props) => {

    const modalData = useSelector(state => state.meal.items)
    // console.log(modalData)

    const amounts = modalData.map(data => data.amount)

    // console.log(amounts)

    const navNumber = amounts.reduce((curNumber, item) => {
        return curNumber += item
    }, 0)

    // console.log(navNumber)


    return (
        <nav onClick={props.onShowCart}>
            <div className="navleft"><p>ReactMeals</p></div>
            <div className="navright">
                <div><i className="fa-solid fa-cart-shopping"></i></div>
                <p>Your Cart</p>
                <div className="navnumber">{navNumber}</div>
            </div>
        </nav>
    )
}

export default NavBar