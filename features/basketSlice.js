import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        incrementBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        decrementBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)

            let newBasket = [...state.items]

            if(index >= 0){
                newBasket.splice(index, 1)
            } else {
                console.log("cant remove")
            }

            state.items = newBasket
        }

    }
})

export const {incrementBasket, decrementBasket} = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items

// export const selectBasketItemsId = (state, id) => state.basket.item.filter((ite) => ite.id === id)
export const selectBasketItemsId = (state, id) => 
    state.basket.items.filter((item) => item.id === id)

export const totalBasket = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer