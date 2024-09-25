import { filterByColor, sortByName, sortByPrice, filterBySize, originalDefault, removeSelectedColor, removeSelectedSize, removeAll } from "../features/filterSlice"
import { useSelector, useDispatch } from "react-redux";

export default function MensMenubar() {

    const data = useSelector(state => state.filterData.dataItems);
    const color = useSelector(state => state.filterData.selectedColor);
    const size = useSelector(state => state.filterData.selectedSize);
    const dispatch = useDispatch();

    return (
        <>
            <div className="Mens-2">
                <div className="sub special bg"><div>SHOP BY</div></div>

                <div className="sub close">
                    <label htmlFor="check" className="close-sidebar"><i className="fa-solid fa-xmark"></i></label>
                </div>

                {color.length !== 0 || size.length !== 0 ?
                    <div className="sub special-2">
                        {color.map((el, idx) =>
                            <div className="scrollable" key={idx}>
                                <div className="filter">Color:<strong>{el}</strong></div>
                                <i className="fa-solid fa-xmark fa-2xs" onClick={() => { dispatch(removeSelectedColor()) }}></i>
                            </div>)
                        }

                        {size.map((el, idx) =>
                            <div className="scrollable" key={idx}>
                                <div className="filter">Size:<strong>{el}</strong></div>
                                <i className="fa-solid fa-xmark fa-2xs" onClick={() => { dispatch(removeSelectedSize()) }}></i>
                            </div>)
                        }

                        <div className="scrollable">
                            <a onClick={() => { dispatch(removeAll()) }}>Clear All</a>
                        </div>
                    </div>
                    :
                    <></>
                }

                <div className="sub special-2 ">
                    <input type="checkbox" id="check-1" />
                    <label htmlFor="check-1" className="check-1">
                        <div className="scrollable">
                            <div>QUANTITY</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>In Stock <span>(72)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-2" />
                    <label htmlFor="check-2" className="check-2">
                        <div className="scrollable">
                            <div>CLIMATE</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>All-Weather <span>(51)</span></li>
                        <li>Cold <span>(8)</span></li>
                        <li>Cool <span>(33)</span></li>
                        <li>Indoor <span>(50)</span></li>
                        <li>Mild <span>(9)</span></li>
                        <li>Rainy <span>(6)</span></li>
                        <li>Spring <span>(33)</span></li>
                        <li>Warm <span>(35)</span></li>
                        <li>Windy <span>(27)</span></li>
                        <li>Wintry <span>(13)</span></li>
                        <li>Hot <span>(8)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-3" />
                    <label htmlFor="check-3" className="check-3">
                        <div className="scrollable">
                            <div>ECO COLLECTION</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Yes <span>(9)</span></li>
                        <li>No <span>(27)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-4" />
                    <label htmlFor="check-4" className="check-4">
                        <div className="scrollable">
                            <div>ERIN RECOMMENDS</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Yes <span>(15)</span></li>
                        <li>No <span>(72)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-5" />
                    <label htmlFor="check-5" className="check-5">
                        <div className="scrollable">
                            <div>NEW</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Yes <span>(19)</span></li>
                        <li>No <span>(72)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-6" />
                    <label htmlFor="check-6" className="check-6">
                        <div className="scrollable">
                            <div>PATTERN</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Color-Blocked <span>(4)</span></li>
                        <li>Splid <span>(67)</span></li>
                        <li>Striped <span>(3)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-7" />
                    <label htmlFor="check-7" className="check-7">
                        <div className="scrollable">
                            <div>SALE</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Yes <span>(13)</span></li>
                        <li>No <span>(72)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-8" />
                    <label htmlFor="check-8" className="check-8">
                        <div className="scrollable">
                            <div>STYLE BOTTOM</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Base Layer <span>(15)</span></li>
                        <li>Compression <span>(5)</span></li>
                        <li>Leggings <span>(4)</span></li>
                        <li>Sweatpants <span>(8)</span></li>
                        <li>Tights <span>(1)</span></li>
                        <li>Track Pants <span>(10)</span></li>
                        <li>Workout Pants <span>(23)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-9" />
                    <label htmlFor="check-9" className="check-9">
                        <div className="scrollable">
                            <div>STYLE GENERAL</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Insulated <span>(5)</span></li>
                        <li>Jacket <span>(1)</span></li>
                        <li>Lightweight <span>(6)</span></li>
                        <li>Hooded <span>(3)</span></li>
                        <li>Heavy Duty <span>(2)</span></li>
                        <li>Rain Coat <span>(5)</span></li>
                        <li>Hard Shell <span>(5)</span></li>
                        <li>Soft Shell <span>(5)</span></li>
                        <li>Windbreaker <span>(6)</span></li>
                        <li>1/4 Zip <span>(7)</span></li>
                        <li>Full Zip <span>(5)</span></li>
                        <li>Reversible <span>(1)</span></li>
                        <li>Tank <span>(12)</span></li>
                        <li>Tee <span>(12)</span></li>
                    </ol>
                </div>

                {color.length == 0 ?
                    <div className="sub special-2">
                        <input type="checkbox" id="check-10" />
                        <label htmlFor="check-10" className="check-10">
                            <div className="scrollable">
                                <div>COLOR</div>
                                <i className="fa-solid fa-angle-down fa-2xs" ></i>
                            </div>
                        </label>
                        <ol className="colors">
                            <a onClick={() => { dispatch(filterByColor("black")) }} className="black"></a>
                            <a onClick={() => { dispatch(filterByColor("blue")) }} className="blue"></a>
                            <a onClick={() => { dispatch(filterByColor("brown")) }} className="brown"></a>
                            <a onClick={() => { dispatch(filterByColor("green")) }} className="green"></a>
                            <a onClick={() => { dispatch(filterByColor("orange")) }} className="orange"></a>
                            <a onClick={() => { dispatch(filterByColor("purple")) }} className="purple"></a>
                            <a onClick={() => { dispatch(filterByColor("red")) }} className="red"></a>
                            <a onClick={() => { dispatch(filterByColor("white")) }} className="white"></a>
                            <a onClick={() => { dispatch(filterByColor("yellow")) }} className="yellow"></a>
                        </ol>
                    </div>
                    :
                    <>
                    </>
                }

                {size.length === 0 ?
                    <div className="sub special-2">
                        <input type="checkbox" id="check-11" />
                        <label htmlFor="check-11" className="check-11">
                            <div className="scrollable">
                                <div>SIZE</div>
                                <i className="fa-solid fa-angle-down fa-2xs" ></i>
                            </div>
                        </label>
                        <ol>
                            <li onClick={() => { dispatch(filterBySize("O")) }}>O <span>(72)</span></li>
                            <li onClick={() => { dispatch(filterBySize("XS")) }}>XS <span>(48)</span></li>
                            <li onClick={() => { dispatch(filterBySize("S")) }}>S <span>(48)</span></li>
                            <li onClick={() => { dispatch(filterBySize("M")) }}>M <span>(48)</span></li>
                            <li onClick={() => { dispatch(filterBySize("L")) }}>L <span>(48)</span></li>
                            <li onClick={() => { dispatch(filterBySize("XL")) }}>XL <span>(48)</span></li>
                            <li onClick={() => { dispatch(filterBySize(32)) }}>32 <span>(24)</span></li>
                            <li onClick={() => { dispatch(filterBySize(33)) }}>33 <span>(24)</span></li>
                            <li onClick={() => { dispatch(filterBySize(34)) }}>34 <span>(24)</span></li>
                            <li onClick={() => { dispatch(filterBySize(36)) }}>36 <span>(24)</span></li>
                        </ol>
                    </div>
                    :
                    <>
                    </>
                }


                <div className="sub special-2">
                    <input type="checkbox" id="check-12" />
                    <label htmlFor="check-12" className="check-12">
                        <div className="scrollable">
                            <div>PRICE</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>$10.00-$19.99 <span>(3)</span></li>
                        <li>$20.00-$29.99 <span>(22)</span></li>
                        <li>$30.00-$39.99 <span>(12)</span></li>
                        <li>$40.00-$49.99 <span>(10)</span></li>
                        <li>$50.00-$59.99 <span>(7)</span></li>
                        <li>$60.00-$69.99 <span>(11)</span></li>
                        <li>$70.00-$79.99 <span>(5)</span></li>
                        <li>$80.00-$89.99 <span>(1)</span></li>
                        <li>$90.00 and above <span>(1)</span></li>
                    </ol>
                </div>

                <div className="sub special-2">
                    <input type="checkbox" id="check-13" />
                    <label htmlFor="check-13" className="check-13">
                        <div className="scrollable">
                            <div>MATERIAL</div>
                            <i className="fa-solid fa-angle-down fa-2xs" ></i>
                        </div>
                    </label>
                    <ol>
                        <li>Cotton <span>(1)</span></li>
                        <li>Nylon <span>(5)</span></li>
                        <li>Polyster <span>(16)</span></li>
                        <li>Wool <span>(12)</span></li>
                        <li>CoolTech&trade;	 <span>(3)</span></li>
                        <li>Organic Cotton <span>(16)</span></li>
                        <li>HeatTec&reg; <span>(3)</span></li>
                        <li>Spandex <span>(6)</span></li>
                        <li>Rayon <span>(3)</span></li>
                        <li>Fleece <span>(6)</span></li>
                        <li>Organic <span>(1)</span></li>
                    </ol>
                </div>

            </div>
        </>
    );
}