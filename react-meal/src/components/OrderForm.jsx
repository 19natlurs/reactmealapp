import { React, useRef, useState } from 'react'

import "./OrderForm.css"

const isEmpty = value => value.trim() === "";
const fiveChars = value => value.trim().length === 5;

const OrderForm = (props) => {

    const [formInput, setFormInput] = useState({
        name: true,
        city: true,
        postal: true
    })

    const nameInputRef = useRef()
    const cityInputRef = useRef()
    const postalInputRef = useRef()

    const confirmHandler = (e) => {

        e.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredCity = cityInputRef.current.value
        const enteredPostal = postalInputRef.current.value

        const nameIsValid = !isEmpty(enteredName)
        const cityIsValid = !isEmpty(enteredCity)
        const postalIsValid = fiveChars(enteredPostal)

        const formIsValid = nameIsValid && cityIsValid && postalIsValid

        setFormInput({
            name: nameIsValid,
            city: cityIsValid,
            postal: postalIsValid
        })

        console.log(formInput)



        if (!formIsValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            city: enteredCity,
            PostalCode: enteredPostal
        })


    }



    return (
        <div>
            <form className='orderr' onSubmit={confirmHandler} >
                <div className="owner">
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder='Please enter name ...'
                        ref={nameInputRef}
                    />
                    {!formInput.name && <p className='error'>Please input a valid name</p>}
                </div>



                <div className="city">
                    <p>City</p>
                    <input
                        type="text"
                        placeholder='Please enter city name ...'
                        ref={cityInputRef}
                    />
                    {!formInput.city && <p className='error'>Please input a valid city name</p>}
                </div>

                <div className="postal">
                    <p>Postal Code</p>
                    <input
                        type="number"
                        placeholder='Please enter postal code ...'
                        ref={postalInputRef}
                    />
                    {!formInput.postal && <p className='error'>Please input a valid postal code (5 characters long)! </p>}
                </div>

                <div className="btn">
                    <button onClick={props.onClick}>Cancel</button>
                    <button onClick={props.onConfirm}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm
