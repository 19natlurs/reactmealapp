import { Fragment, useState } from 'react'
import NavBar from './components/NavBar'
import Display from './components/Display'
import MealItems from './components/MealItems'
import Modal from './components/Modal'

import './App.css'

function App() {

  const [showCart, setShowcart] = useState(false)


  const handleShowCart = () => {

    setShowcart(!showCart)

    // console.log("hello")
  }





  const DummyData = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      id: "1"
    },

    {
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.50,
      id: "2"
    },

    {
      name: "Berbeque Burger",
      description: "America raw, meaty",
      price: 12.99,
      id: "3"
    },

    {
      name: "Green Bowl",
      description: "Healthy and  green",
      price: 18.99,
      id: "4"
    }
  ]


  return (
    <Fragment>
      {showCart && <  Modal onShowCart={handleShowCart} />}
      <NavBar onShowCart={handleShowCart} />
      <Display />
      <MealItems mealData={DummyData} />
    </Fragment>
  )
}

export default App
