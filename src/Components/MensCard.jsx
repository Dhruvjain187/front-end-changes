import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { filterByColor, sortByName, sortByPrice, filterBySize, originalDefault, removeSelectedColor, removeSelectedSize, removeAll } from "../features/filterSlice"
import { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity } from "../features/cartSlice"
export default function MensCard() {
    const data = useSelector(state => state.filterData.dataItems);

    const [view, setView] = useState(true);

    const dispatch = useDispatch();

    const list = useSelector(state => state.cartData.items);
    console.log("list=", list)

    function grid() {
        setView(false);
    }

    function flex() {
        setView(true);
    }

    function handleSelect(e) {
        const { value } = e.target;

        switch (value) {
            case "productname": dispatch(sortByName());
                break;
            case "price": dispatch(sortByPrice());
                break;
            default: dispatch(originalDefault());
        }
    }

    return (
        <>
            <div className="Mens-3">
                <div className="bar">
                    <label htmlFor="check" className="close-sidebar"><i className="fa-solid fa-filter"></i> <strong>SHOP BY</strong></label>
                    <div className="bar-1">ITEMS 1-12 OF 72</div>
                    <div className="bar-2">
                        <strong>VIEW AS&nbsp;</strong>
                        <i className="fa-solid fa-qrcode" onClick={flex}></i>
                        <i className="fa-solid fa-bars" onClick={grid}></i>
                    </div>
                    <div className="bar-3">
                        <label htmlFor="opt">SORT BY</label>
                        <select name="select" onClick={handleSelect} id="opt">
                            <option value="position">POSITION</option>
                            <option value="productname">PRODUCT NAME</option>
                            <option value="price">PRICE</option>
                            <option value="sensor">SENSOR</option>
                            <option value="video">VIDEO</option>
                        </select>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
                {view ?
                    <div className="card">
                        {data.map((el, idx) => {
                            return (
                                <div className="relative" key={idx}>
                                    <div className="absolute">
                                        <div className="card-img">
                                            <img src={el.image} alt="" />
                                            <div className="anchor">
                                                <a href=""><i className="fa-regular fa-heart"></i></a>
                                                <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                                <a href=""><i className="fa-regular fa-eye"></i></a>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <a href="">{el.brand}</a>
                                            <span>${el.price}</span>
                                            <div className="color">
                                                <div className="black"></div>
                                                <div className="red"></div>
                                                <div className="gray"></div>
                                            </div>
                                            {
                                                list.find((item) =>
                                                    item._id === el._id)?.quantity > 0 ?
                                                    <div className="quantity">
                                                        <p>Cart items:{list.find((item) =>
                                                            item._id === el._id)?.quantity}</p>
                                                        <div className="quantity-btn">
                                                            <button onClick={() => { dispatch(removeOneFromCart(el._id)) & dispatch(findTotalCost()) }}>-</button>
                                                            <button onClick={() => { dispatch(addOneToCart(el._id)) & dispatch(findTotalCost()) }}>+</button>
                                                        </div>
                                                    </div> : <div className="quantity"><p>Item is not added</p></div>
                                            }
                                            <button onClick={() => { dispatch(addOneToCart(el._id)) & dispatch(findTotalCost()) }}>ADD TO CARD</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    : <div className="card-2">
                        {data.map((el, idx) => {
                            return (
                                <>
                                    <div className="relative-2" key={idx}>
                                        <div className="card-img-2">
                                            <img src={el.image} alt="image" />
                                        </div>
                                        <div className="card-content-2">
                                            <a href="">{el.brand}</a>
                                            <span>${el.price}</span>
                                            <div className="color">
                                                <div className="black"></div>
                                                <div className="red"></div>
                                                <div className="gray"></div>
                                            </div>
                                            {
                                                list.find((item) =>
                                                    item.id === el.id)?.quantity > 0 ?
                                                    <div className="quantity">
                                                        <p>Cart items:{list.find((item) =>
                                                            item.id === el.id)?.quantity}</p>
                                                        <div className="quantity-btn">
                                                            <button onClick={() => { () => { dispatch(removeOneFromCart(el.id)) } }}>-</button>
                                                            <button onClick={() => { () => { dispatch(addOneToCart(el.id)) & dispatch(findTotalCost()) } }}>+</button>
                                                        </div>
                                                    </div> : <div className="quantity"><p>Item is not added</p></div>
                                            }
                                            <div className="demo-1">
                                                <button onClick={() => { dispatch(addOneToCart(el.id)) & dispatch(findTotalCost()) }}>ADD TO CARD</button>
                                                <div className="demo-sub">
                                                    <a href=""><i className="fa-regular fa-heart"></i></a>
                                                    <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                                    <a href=""><i className="fa-regular fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            );
                        })}
                    </div>}

            </div>
        </>
    );
}