import styled from "styled-components"
import ReactDom from "react-dom"
import { useDispatch, useSelector } from "react-redux";
import { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity } from "../features/cartSlice"

export const PopContainer = styled.div`
    &{
        position: relative;
    }

    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        position: fixed;
        top: 1.5rem;
        left: 15%;
        right: 15%;
        padding: 1rem;
        background-color: #75b798;
        border-radius: 1rem;
        z-index: 15;
    }

    & div p{
        font-size: 1.3rem;
        color: black;
        font-weight: 600;
    }
`

export default function Popup() {
    const pop = document.querySelector(".root-2");
    const popup = useSelector(state => state.cartData.popup);
    const specificProduct = useSelector(state => state.cartData.specificProduct)
    const dispatch = useDispatch();

    return ReactDom.createPortal(
        <PopContainer>
            {popup ?
                <div>
                    <p>{specificProduct}</p>
                    <i className="fa-solid fa-x" onClick={() => dispatch(popupVisiblity())}></i>
                </div>
                :
                <>
                </>
            }
        </PopContainer>,
        pop
    )
}