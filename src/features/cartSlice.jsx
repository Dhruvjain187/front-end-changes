import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from "../ProductData";


const initialState = {
    items: [],
    popup: false,
    specificProduct: "",
    cost: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        findQuantity: (state, action) => {
            const quantity = state.items.find((el) => el._id === action.payload)?.quantity;
            if (quantity === undefined) {
                return 0;
            }
            return quantity
        },
        addOneToCart: (state, action) => {
            const quantity = cartSlice.caseReducers.findQuantity(state, action);
            if (quantity == 0) {
                state.items.push({ _id: action.payload, quantity: 1 })

                state.popup = true;
                console.log(action.payload)
                let productdata = getProductData(action.payload);
                state.specificProduct = `${productdata.brand} is added to Cart`
            }
            else {
                state.items = state.items.map((el) => el._id == action.payload ? { ...el, quantity: el.quantity + 1 } : el)
            }
        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter((el) => el._id !== action.payload);
        },
        removeOneFromCart: (state, action) => {
            const quantity = cartSlice.caseReducers.findQuantity(state, action);
            if (quantity == 1) {
                cartSlice.caseReducers.deleteFromCart(state, action);
            }
            else {
                state.items = state.items.map((el) => el._id === action.payload ? { ...el, quantity: el.quantity - 1 } : el)
            }
        },
        findTotalCost: (state, action) => {
            state.cost = 0;

            state.items.map((el) => {
                let productdata = getProductData(el._id);
                state.cost += productdata.price * el.quantity
            })



            // return totalcost;
        },
        popupVisiblity: (state, action) => {
            state.popup = false;
        }
    }
})

export const { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity } = cartSlice.actions

export default cartSlice.reducer;