import { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity, addProductWithQty } from "../features/cartSlice"

export const Input = styled.input`
    background-color: ${props => (props.backcol ? props.backcol : "black")};    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: .5rem;
    height: 100%;

    & span{
        font-family: "Barlow Semi Condensed";
        font-size: 2.625rem;
        font-weight: 700;
        color: #1f2937;
    }

    & .stock{
        font-size: 1.15rem;
        font-weight: 600;
    }

    & .price-div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .price-div span{
        font-size: 1.875rem;
        font-weight: 600;
        color: #f76801;
    }

    & .price-div a{
        font-size: .875rem;
        font-weight: 600;
        color: #6b7280;
        font-family: "Mukta";
    }

    & .color-div,.size-div,.qty-div{
        display: flex;
        align-items: center;
        gap: .5rem;
        font-family: "Barlow Semi Condensed";
    }

    & .color-div .label-div{
        display: flex;
        width: 120px;
        font-weight: 600;
        font-size: 1rem;
    }

    & .color-div .btns{
        display:flex;
        gap: .375rem;

        & div{
            height: 3rem;
            width: 3rem;
        }
    }


    & .color-div .btns input{
        -webkit-appearance: none; /* Remove default appearance */
        appearance: none;
        height: 3rem;
        width: 3rem;
    }

    & .color-div .btns input:focus{
        border: 2px solid orangered;    
    }

    /* & .color-div .btns input{
        background-color: ${props => (props.backcol ? "white" : "black")};
    } */

    /* & .color-div .btns .red{
        background-color: red;
    }

    & .color-div .btns .black{
        background-color: black;
    }

    & .color-div .btns .gray{
        background-color: gray;
    } */

    & .size-div .label-div{
        display: flex;
        width: 120px;
        font-weight: 600;
        font-size: 1rem;
    }

    & .size-div select{
        border: none;
        outline: none;
        padding: .5rem .75rem;
        width: 12rem;
        border: 2px solid rgb(203, 213, 219);
    }

    & .size-div select:focus{
        border-color: orangered;
    }

    & .qty-div .label-div{
        display: flex;
        width: 120px;
        font-weight: 600;
        font-size: 1rem;
    }

    & .qty-div input{
        border: none;
        outline: 0;
        max-width: 4rem;
        padding: .625rem .75rem;
        border: 2px solid black;
    }

    & .qty-div input[type="number"]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    & .qty-div input[type="number"] {
        -moz-appearance: textfield;
    }


    & .qty-div input:focus{
        border-color: orangered;
    }

    & .qty-div button{
        border: none;
        outline: none;
        padding: .5rem;
        font-family: "Barlow Semi Condensed";
        flex-grow: 1;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        background-color: black;
    }

    & .qty-div button:hover{
        background-color: #ede734;
        color: black;
    }

    & .anchors{
        font-family: "Mukta";
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: .5rem;
        column-gap: .75rem;

        & div{
            display: flex;
            align-items: center;
        }
    }

    & .anchors a{
        font-size: .875rem;
        font-weight: 600;
        color: #1f2937cc;
        text-decoration: 1px #1f2937cc underline;
        transition: 0.9s ease-in-out;
    }

    & .anchors a:hover{
        text-decoration: 2px black underline;
    }

    @media(max-width:780px){
        &{
            order: 5;
            width: 100%;
        }

        & .brand{
            display: none;
        }
    }

`

export default function QtyForm({ data }) {
    const formData = useRef(null);
    const dispatch = useDispatch();

    const handleSubmitData = (e) => {
        e.preventDefault();


        const specificData = {
            quantity: parseInt(formData.current.quantity.value),
            _id: data._id,
            // color: formData.current.color.value
        }
        // const quantity = formData.current.quantity.value;
        // const _id = data._id;

        dispatch(addProductWithQty(specificData))
        dispatch(findTotalCost())

    }

    return (
        <>
            <Form onSubmit={handleSubmitData} ref={formData}>
                <span className="brand">{data.brand}</span>
                <span className="stock">In Stock</span>
                <div className="price-div">
                    <span>${data.price}</span>
                    <a href="">Be the first one to review this product</a>
                </div>
                <div className="color-div">
                    <div className="label-div">
                        <label htmlFor="">COLOR</label>
                    </div>
                    <div className="btns">
                        {/* <input type="radio" name="color" value="black" className="black" required />
                        <input type="radio" name="color" value="red" className="red" required />
                        <input type="radio" name="color" value="gray" className="gray" required /> */}
                        {data.color.map((e, idx) => {
                            return (
                                // <input  />
                                <Input type="radio" name="color" value={e} backcol={`${e}`} key={idx} required />
                            )
                        })}
                    </div>
                </div>

                <div className="size-div">
                    <div className="label-div">
                        <label htmlFor="">SIZE&nbsp;<i className="fa-solid fa-question fa-sm"></i></label>
                    </div>
                    <select name="size" id="" required>
                        <option value="">Choose an Option</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="36">36</option>
                    </select>
                </div>

                <div className="qty-div">
                    <div className="label-div">
                        <label htmlFor="">QTY</label>
                    </div>
                    <input type="number" name="quantity" min={0} required />
                    <button type="submit">ADD TO CART</button>
                </div>

                <div className="anchors">
                    <div>
                        <i className="fa-regular fa-heart fa-sm"></i>
                        &nbsp;
                        <a href="">Add to Wish List</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-scale-balanced fa-sm"></i>
                        &nbsp;
                        <a href="">Add to compare</a>
                    </div>
                </div>

            </Form>
        </>
    )
}