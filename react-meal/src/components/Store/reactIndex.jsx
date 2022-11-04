import React from "react";
import { configureStore } from "@reduxjs/toolkit"
import mealSlice from "./meal-slice";


const store = configureStore({ reducer: { meal: mealSlice.reducer } })

export default store