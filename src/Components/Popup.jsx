import styled from "styled-components"
import { useProduct } from "../Contexts/ProductContext"

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
    const { popup, popupVisiblity, specificProduct } = useProduct();
    return (
        <PopContainer>
            {popup ?
                <div>
                    <p>{specificProduct}</p>
                    <i className="fa-solid fa-x" onClick={popupVisiblity}></i>
                </div>
                :
                <>
                </>
            }
        </PopContainer>
    )
}