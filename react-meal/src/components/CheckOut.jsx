import React from 'react'
import classes from "./CheckOut.module.css"


const CheckOut = () => {
    return (
        <div>
            <form  >
                <div className="street">
                    <p>Street</p>
                    <input
                        type="text"
                        placeholder='Enter Street Name...'
                    />
                </div>
                <div className="postal">
                    <p>Postal</p>
                    <input
                        type="text"
                        placeholder='Enter postal...'
                    />
                </div>
                <div className="city">
                    <p>City</p>
                    <input
                        type="text"
                        placeholder='Enter city Name...'
                    />
                </div>
                <div className="btn">
                    <button>Cancel</button>
                    <button>Confirm</button>
                </div>
            </form>

        </div>
    )
}

export default CheckOut
