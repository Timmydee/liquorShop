// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     item: [],
// }

// export const basketSlice = createSlice({
//     name: 'basket',
//     initialState,
//     reducers: {
//         incrementBasket: (state, action) => {
//             state.item = [...state.item, action.payload]
//         },

//         decrementBasket: (state, payload) => {
//             state = state + payload
//         }
//     }
// })

// export const {incrementBasket, decrementBasket} = basketSlice.actions
// export const selectBasketItems = (state) => state.basket.item

// // export const selectBasketItemsId = (state, id) => state.basket.item.filter((ite) => ite.id === id)
// export const selectBasketItemsId = (state, id) => state.basket.item.filter((items) => items.id === id)


// export default basketSlice.reducer