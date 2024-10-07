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
            const quantity = cartSlice.caseReducers.findProductQuantity(state, action);
            if (quantity == 0) {
                state.items.push({ _id: action.payload, quantity: 1 })

                state.popup = true;
                console.log(action.payload)
                let productdata = getProductData(action.payload);
                state.specificProduct = `${productdata.brand} is added to Cart`
            }
            else {
                state.items = state.items.map((el) => el._id === action.payload._id && el.color === action.payload.color ? { ...el, quantity: el.quantity + 1 } : el)
            }
        },
        deleteFromCart: (state, action) => {
            console.log(action.payload)
            state.items = state.items.filter((el) => {
                return !(el._id === action.payload._id && el.color === action.payload.color)
            });
        },
        removeOneFromCart: (state, action) => {
            const quantity = cartSlice.caseReducers.findProductQuantity(state, action);
            if (quantity == 1) {
                cartSlice.caseReducers.deleteFromCart(state, action);
            }
            else {
                state.items = state.items.map((el) => el._id === action.payload._id && el.color === action.payload.color ? { ...el, quantity: el.quantity - 1 } : el)
            }
        },
        findProductQuantity: (state, action) => {
            const quantity = state.items.find((el) => (el._id === action.payload._id && el.color === action.payload.color))?.quantity;
            if (quantity === undefined) {
                return 0;
            }
            return quantity
        },

        addProductWithQty: (state, action) => {
            const quantity = cartSlice.caseReducers.findProductQuantity(state, action);
            if (quantity) {
                state.items = state.items.map(el => el._id === action.payload._id ? { ...el, quantity: el.quantity + action.payload.quantity } : el);
            } else {
                state.items.push(action.payload);
            }
            state.popup = true;
            let productdata = getProductData(action.payload._id);
            state.specificProduct = `${productdata.brand} is added to Cart`
        },
        findTotalCost: (state, action) => {
            state.cost = 0;

            state.items.map((el) => {
                let productdata = getProductData(el._id);
                state.cost += productdata.price * el.quantity
            })

        },
        popupVisiblity: (state, action) => {
            state.popup = false;
        }
    }
})

export const { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity, addProductWithQty } = cartSlice.actions

export default cartSlice.reducer;