import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from "../ProductData";
import { ProductData } from "../ProductData";

const initialState = {
    dataItems: ProductData,
    selectedColor: [],
    selectedSize: [],
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByColor: (state, action) => {
            state.selectedColor.push(action.payload)

            state.dataItems = state.dataItems.filter(el => {
                if (el.color) {
                    return el.color.includes(action.payload)
                } else {
                    return el
                }
            })

        },

        sortByName: (state, action) => {
            state.dataItems = state.dataItems.slice().sort((a, b) => a.brand.localeCompare(b.brand))
        },

        sortByPrice: (state, action) => {
            state.dataItems = state.dataItems.slice().sort((a, b) => a.price - b.price);
        },

        filterBySize: (state, action) => {
            state.selectedSize.push(action.payload);

            state.dataItems = state.dataItems.filter(el => {
                if (el.size) {
                    return el.size.includes(action.payload)
                } else {
                    return el
                }
            })
        },

        originalDefault: (state, action) => {
            state.dataItems = ProductData
        },

        removeSelectedColor: (state, action) => {
            state.selectedColor = []
        },

        removeSelectedSize: (state, action) => {
            state.selectedSize = [];
        },

        removeAll: (state, action) => {
            state.selectedColor = [];
            state.selectedSize = [];
            state.dataItems = ProductData;
        }

    }
})

export const { filterByColor, sortByName, sortByPrice, filterBySize, originalDefault, removeSelectedColor, removeSelectedSize, removeAll } = filterSlice.actions
export default filterSlice.reducer;