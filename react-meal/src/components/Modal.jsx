import React from 'react'
import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import OrderForm from './OrderForm'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { mealAction } from './Store/meal-slice'



import "./Modal.css"


const BackDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClick}></div>
    )

}


const Overlay = (props) => {

    const [checkOut, setCheckOut] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)


    const dispatch = useDispatch()
    const modalData = useSelector(state => state.meal.items)
    const modalAmount = useSelector(state => state.meal.items.amount)
    // console.log(modalAmount)
    // console.log(modalData)
    const modalTotalAmount = useSelector(state => state.meal.totalAmount)

    const checkOutHandler = () => {

        setCheckOut(true)
    }

    const submitHandler = async (userData) => {

        console.log(userData)

        await fetch("https://react-http-ntx-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                userData,
                orderedItems: modalData
            })
        })

        setIsSubmitting(true)

        dispatch(mealAction.clearModal())

    }

    const modalContent = (
        <Fragment>
            <div className="firstModal">

                {
                    modalData.map(data => {
                        return (
                            <Fragment key={data.id} >
                                <div className="mealModal"  >
                                    <div className="mealContent"  >
                                        <p className='mealTitle'>{data.name}</p>
                                        <div className='mealIndicator'>

                                            <p className='mealAmount'>${data.price}</p>
                                            <button>x{data.amount}</button>

                                        </div>


                                    </div>

                                    <div className="mealFunc">
                                        <button

                                            onClick={
                                                () => {
                                                    dispatch(mealAction.removeItemFromCart(data.id))
                                                }
                                            }

                                        >-</button>
                                        <button

                                            onClick={
                                                () => {
                                                    dispatch(mealAction.addItemToCart(data))
                                                }
                                            }

                                        >+</button>
                                    </div>

                                </div>

                            </Fragment>
                        )
                    })
                }
            </div>

            <div className="mealTotal">
                <div className="totalReset">
                    <h3>Total Amount</h3>
                    <h3>${modalTotalAmount}</h3>
                </div>





                {checkOut && <OrderForm onClick={props.onClick} onConfirm={submitHandler} />}
                <div className="mealNumbers">

                    {!checkOut && <div className="mealNumbers2">
                        <button onClick={props.onClick}>Close</button>
                        <button onClick={checkOutHandler}>Order</button>
                    </div>}

                </div>
            </div>
        </Fragment>
    )

    const submitted = (
        <Fragment>
            <div className='submitted'>
                <p>Order succesfully submitted !</p>
                <div className="bttn"><button onClick={props.onClick}>Close</button></div>


            </div>
        </Fragment>
    )


    return (
        <div>
            <div className="modal">

                {!isSubmitting && modalContent}

                {isSubmitting && submitted}


            </div>
        </div>
    )
}





const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onShowCart} />, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<Overlay onClick={props.onShowCart} />, document.getElementById("overlay"))}
        </Fragment>
    )
}

export default Modal