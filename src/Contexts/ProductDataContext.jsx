import { createContext, useState, useContext, useEffect } from "react";
import { ProductData } from "../ProductData";

export const ProductContextData = createContext({
    dataItems: [],
    filterByColor: () => { },
    filterBySize: () => { },
    sortByName: () => { },
    sortByPrice: () => { },
    originalDefault: () => { },
    selectedColor: [],
    selectedSize: [],
    removeSelectedColor: () => { },
    removeSelectedSize: () => { },
    removeAll: () => { }
})

export default function ProductContextDataProvider({ children }) {
    const [itemArr, setItemArr] = useState(ProductData);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);

    function filterByColor(color) {
        setSelectedColor((prevColor) => {
            return [...prevColor, color]
        })

        setItemArr((prevData) => {
            return prevData.filter((el) => {
                if (el.color) {
                    return el.color.includes(color)
                } else {
                    return el
                }
            })
        })
    }

    function sortByName() {
        setItemArr(itemArr.slice().sort((a, b) => a.brand.localeCompare(b.brand)))
    }

    function sortByPrice() {
        setItemArr(itemArr.slice().sort((a, b) => a.price - b.price))
    }

    function filterBySize(size) {
        setSelectedSize((prevSize) => {
            return [...prevSize, size]
        })


        setItemArr((prevData) => {
            return prevData.filter((el) => {
                if (el.size) {
                    return el.size.includes(size)
                } else {
                    return el
                }
            })
        })
    }

    function originalDefault() {
        setItemArr(ProductData)
    }

    function removeSelectedColor() {
        setSelectedColor([])
    }

    function removeSelectedSize() {
        setSelectedSize([])
    }

    function removeAll() {
        setSelectedColor([]);
        setSelectedSize([]);
        setItemArr(ProductData);
    }

    const context = {
        dataItems: itemArr,
        selectedColor,
        selectedSize,
        removeSelectedColor,
        removeSelectedSize,
        removeAll,
        filterByColor,
        filterBySize,
        sortByName,
        sortByPrice,
        originalDefault,
    }

    return (
        <ProductContextData.Provider value={context}>
            {children}
        </ProductContextData.Provider>
    );
}


export function useData() {
    return useContext(ProductContextData);
}