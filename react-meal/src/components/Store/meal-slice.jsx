import React from "react"
import { createSlice } from "@reduxjs/toolkit"


const mealSlice = createSlice(
    {
        name: "meal",
        initialState: {
            items: [],
            totalAmount: 0,
        },

        reducers: {

            addItemToCart(state, action) {

                const newItem = action.payload
                const newTotalAmoun = state.totalAmount += action.payload.price * action.payload.amount



                const newTotalAmounts = +newTotalAmoun
                // console.log(typeof newTotalAmounts) 

                const newTotalAmount = newTotalAmounts.toFixed(2)

                // console.log(newTotalAmount)

                state.totalAmount = +newTotalAmount
                // state.totalAmount++

                const existingItem = state.items.find(item => item.id === newItem.id)

                if (!existingItem) {

                    state.items.push({

                        name: newItem.name,
                        amount: newItem.amount,
                        price: newItem.price,
                        description: newItem.description,
                        id: newItem.id
                    })
                } else {
                    existingItem.amount++
                    // existingItem.price = existingItem.price + newItem.price
                }




            },

            removeItemFromCart(state, action) {

                const newId = action.payload
                const existingItem = state.items.find(item => item.id === newId)
                // state.totalAmount--

                const totalAmoun = state.totalAmount - existingItem.price
                const totalAmountx = +totalAmoun
                const totalAmountz = totalAmountx.toFixed(2)
                state.totalAmount = +totalAmountz

                if (existingItem.amount === 1) {

                    const newArray = state.items.filter(item => item.id !== newId)
                    state.items = newArray


                } else {
                    existingItem.amount--

                }



            },

            clearModal(state, action) {

                console.log('HELLO')
                state.items = []
                state.totalAmount = []

            }

        }
    }
)

export default mealSlice;

export const mealAction = mealSlice.actions