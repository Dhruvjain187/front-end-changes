import { createContext, useContext, useState } from "react";
import { getProductData } from "../ProductData";

export const productContext = createContext(
    {
        items: [],
        addOneToCart: () => { },
        removeOneFromCart: () => { },
        deleteFromCart: () => { },
        findTotalCost: () => { },
        findQuantity: () => { },
        popup: false,
        popupVisiblity: () => { },
        specificProduct: ""
    }
);


export function ProductProvider({ children }) {
    const [arr, setArr] = useState([]);
    const [isPopup, setIsPopup] = useState(false);
    const [specificItem, setSpecficItem] = useState("");

    const popup = isPopup;

    const specificProduct = specificItem;

    function findQuantity(id) {
        const quantity = arr.find((el) => el.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity
    }

    function addOneToCart(id) {
        const quantity = findQuantity(id);
        if (quantity == 0) {
            setArr((prevArr) => {
                return [...prevArr, { id: id, quantity: 1 }]
            })

            setIsPopup(true);
            let productdata = getProductData(id);
            setSpecficItem(`${productdata.brand} is added to Cart`);
        }
        else {
            setArr((prevArr) => {
                return prevArr.map((el) => el.id == id ? { ...el, quantity: el.quantity + 1 } : el)
            })
        }

    }

    function deleteFromCart(id) {
        setArr((prevArr) => {
            return prevArr.filter((el) => el.id !== id);
        })
    }

    function removeOneFromCart(id) {
        const quantity = findQuantity(id);
        if (quantity == 1) {
            deleteFromCart(id);
        }
        else {
            setArr((prevArr) => {
                return prevArr.map((el) => el.id === id ? { ...el, quantity: el.quantity - 1 } : el);
            })
        }
    }

    function findTotalCost() {
        let totalcost = 0;

        arr.map((el) => {
            let productdata = getProductData(el.id);
            totalcost += productdata.price * el.quantity
        })

        return totalcost;
    }

    function popupVisiblity() {
        setIsPopup(false);
    }

    const contextValue = {
        items: arr,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        findTotalCost,
        findQuantity,
        popup,
        popupVisiblity,
        specificProduct
    }

    return (
        <>
            <productContext.Provider value={contextValue}>
                {children}
            </productContext.Provider>
        </>
    );
}


export const useProduct = () => {
    return useContext(productContext);
}