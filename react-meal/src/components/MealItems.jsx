import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { mealAction } from './Store/meal-slice'


import "./MealItems.css"

const MealItems = (props) => {

    const [input, setInput] = useState(1)

    const dispatch = useDispatch();

    const formHandler = (e) => {

        setInput(e.target.value)

    }

    const amount = +input

    // console.log(typeof amount)









    return (
        <div className='foodItem'>
            {props.mealData.map(data => {
                return (
                    <div className='foodData' key={data.id}>
                        <div className="foodData1" >
                            <p className='meal'>{data.name}</p>
                            <p className='description'><i>{data.description}</i></p>
                            <p className='price'>{data.price}</p>
                        </div>

                        <div className="foodData2">
                            <form onSubmit={(e) => {
                                e.preventDefault()

                                dispatch(
                                    mealAction.addItemToCart(
                                        {
                                            name: data.name,
                                            price: data.price,
                                            description: data.description,
                                            id: data.id,
                                            amount
                                        }
                                    )


                                )



                                // console.log('SUP')
                                // console.log(input)
                            }}>
                                <label>Amount</label>
                                <input
                                    type="number"
                                    onChange={formHandler}
                                    // placeholder='1'
                                    defaultValue="1"


                                />
                                <br />
                                <button>+Add</button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MealItems