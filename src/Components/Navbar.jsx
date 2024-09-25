import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getProductData } from "../ProductData";
import { useSelector, useDispatch } from "react-redux"
import { findQuantity, addOneToCart, deleteFromCart, removeOneFromCart, findTotalCost, popupVisiblity } from "../features/cartSlice"


export const NavContainer = styled.div`
    /* margin-left: 2em;
     height: 5em; 
    margin-right: 2em;  */
    padding: 0 1.375rem 0 1.375rem;
    font-family:'Barlow Semi Condensed';
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* position: relative; */
    /* border-top: 2px solid rgb(203,213,219,0.15);
    border-bottom: 2px solid rgba(203,213,219,0.15); */

    .open-sidebar-div{
        display: none;
    }

    & input,.close-sidebar{
        display: none;
    }

    .navbar2 .close-div{
        display: none;
    }

    .navbar1{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        width: 14%;
        height: 2em;
    }


    .navbar1 a{
        height: 80%;
        width: 100%;
    }

    .navbar1 img{
        height: 100%;
        width: 100%;
    }

    .navbar2{
        width: 58%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: space-between;
        flex-wrap: wrap;

        &>div{
            padding:2.125rem 0.8rem 2.125rem 0.8rem;
            font-size: 1.25rem;
            font-weight: 600;
            color:  #1F2937;
        }


        div a{
            all: unset;
        }

        .drop-menu-div .drop-menu{
            font-family: "Mukta";
            /* display:none; */
            z-index: 5;
            background-color: white;
            position: absolute;
            padding: 0.5rem 0.7rem 0.5rem 0.7rem;
            /* top:6.8em; */
            margin:0;
        }

        .drop-menu-div .drop-menu li{
            list-style: none;
            font-size: 0.9em;
            font-weight: 300;
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            line-height: 1rem;
            color: black;
        }

        /* .drop-menu-div:hover .drop-menu{
            display: block;
        } */

        .drop-menu-div .drop-menu li a:hover{
            color: black;
            text-decoration: underline;
        }

        .full-drop-div span .full-drop{
            font-family: "Mukta";
            z-index: 5;
            display: none;
            position: absolute;
            cursor: pointer;
            background-color: white;
            left: 0;
            right:0;
        }

        .full-drop-div .full-drop ul{
            width: 33%;
        }

        .full-drop-div .full-drop ul li{
            list-style: none;
            font-weight: 300;
            /* font-size: 0.8em; */
            padding: 3px 12px 3px 12px;
        }

        .full-drop-div .full-drop ul li a{
                font-size: 1rem;
                color: black;
        }

        .full-drop-div .full-drop ul li a:hover{
            text-decoration: underline;
        }

        .full-drop-div .full-drop ul li.bold-anchor{
            font-weight: 600;
            font-size: 1.2rem;
        }

        /* .full-drop-div span:hover+.full-drop{
            display: flex;
            justify-content: space-between;
        } */

        div a:hover,span:hover{
            color: orangered;
            cursor: pointer;
        }

    }

    .navbar3{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        width: 15%;
        height: 2em;
        position: relative;

        & #search{
            display: none;
            position: absolute;
            right: 4rem;
            height: 2rem;
        }

        & #xyz:checked~#search{
            display: block;
        }

        & button,a{
            all: unset;
            position: relative;
        }

        & a ul.product-ul{
            display: none;
            position: absolute;
            top: 0;
            right:-2rem;
            width: 20rem;
            z-index: 10;
            padding: .75rem 1rem;
            background-color: white;
            box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1),0 1px 6px rgba(0, 0, 0, .05),0 0 0 1px rgb(0 0 0 / 10%);
        }

        & a ul.product-ul li{
            list-style: none;
        }

        & a ul.product-ul li.upper-product-ul{
            display: flex;
            justify-content: space-between;
        }

         & a ul.product-ul li.Proceed{
            display: flex;
            justify-content: space-between;
            margin: .5rem 0;
         }

        & a ul.product-ul .scroll-div{
            min-height: 10rem;
            max-height: 24rem;
            scrollbar-width: none;
            overflow-y: scroll;
        }

        & a ul.product-ul li.card-info{
            display: flex;
            margin-top: 1rem;
            padding: 1rem;
            gap:.75rem;
        }

        & a ul.product-ul li.card-info .card-info-img{
            max-width: 30%;
        }

        & a ul.product-ul li.card-info .card-info-img img{
            height: 4rem;
        }

        & a ul.product-ul li.card-info .card-info-data{
            max-width: calc(70% - .75rem);
            flex-grow: 1;
        }

        & a ul.product-ul li.card-info .card-info-data p{
            margin: 0;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn{
            display: flex;
            justify-content: space-between;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn .qty-btn{
            display: flex;
            gap: 1rem;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn .qty-btn button{
            padding: 0 0.5rem 0 0.5rem;
            border-radius:.5rem;
            border: .5px solid;
            border-color: white;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn .qty-btn button:hover{
            border-color: black;
            background-color: beige;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn p{
            margin: 0;
        }

        & a ul.product-ul li.card-info .card-info-data .delete-btn i{
            align-self: center;
        }

         & a ul.product-ul li.btn{
            overflow: hidden;
         }

         & a ul.product-ul li.btn button{
            width:100%;
            background-color: black;
            color: white;
            padding: .625rem 0 .625rem 0;
            text-align: center;
            border-radius:0.3rem ;
         }

        & a ul.product-ul .empty strong{
            font-weight: 500;
            font-size: 1rem;
            padding: .5rem 0 0;
        }

        & a ul.product-ul li.upper-product-ul strong{
            font-weight: 700;
            font-size: 1rem;
        }

        & #product-list:checked+a ul.product-ul{
            display: block;
        }
    }

    & .navbar2 .upper-navbar{
            display: none;
            width: 100%;
            /* margin-top: 1rem; */
            flex-direction: column;
            border-top: 0.1px solid rgba(31, 41, 55,0.1);
            font-family: "Mukta";
            font-size: 1rem;

            & div{
                padding: 0.5rem 0 0 0;
                color: #1f293799;
                position: relative;
                /* z-index: 5; */
            }
        }

    & .navbar2 .upper-navbar .small{
        font-size: 0.878rem;
    }

    & .navbar2 .upper-navbar .small .span{
        color: #1F2937;
        font-size: 1rem;
    }

    @media(min-width:640px){
        .full-drop-div span:hover .full-drop{
            display: flex;
            justify-content: space-between;
        }

        .drop-menu-div .drop-menu{
            display: none;
        }

        .drop-menu-div:hover .drop-menu{
            display: block;
        }       
    }
    

    @media(max-width:639px){
        &{
            height: 4.5em;
        }


        label.close-sidebar{
            display: block;
            margin: 0 auto;
        }

        .open-sidebar-div{
            display: block;
        }

        #sidebar-active:checked ~ .navbar2{
            display:flex;
            transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .navbar2{
            display:none;
            flex-wrap: nowrap;
            /* flex-grow: 1; */
            padding: 1rem;
            flex-direction:column;
            align-items:flex-start;
            justify-content: flex-start;
            position:absolute;
            top:0;
            left: 0;
            min-height: 30em;
            z-index:10;
            width:80%;
            background-color:white;
            overflow-y: scroll;


            div{
                padding: .5rem;
                /* margin:0 auto;    */
            }

            .full-drop-div span .full-drop{
                position: static;
            }

            .full-drop-div .full-drop ul{
                width: 100%;
                margin: 0.5rem 0 0.5rem 0;
            }

            .full-drop-div .full-drop ul li{
                padding: 3px 12px 3px 12px;
            }
        }

        .navbar3{
            width: 24%;

            & a ul.product-ul{
                width: 19rem;
            }
        }


        .navbar1{
            width: 55%;
        }

        & .navbar2 .full-drop-div .full-drop{
            display: none;
            flex-direction: column;
            justify-content: space-between;
        }

        & .navbar2 .drop-menu-div .drop-menu{
            position: static;
            display: none;

            & ul{
                padding: 3px 12px 5px 12px;
            }
        }

        & .navbar2 #div-3+.drop-menu-div .drop-menu{
            display: none;
        }

        & .navbar2 #div-3:checked+.drop-menu-div .drop-menu{
            display:block;
        }

        & .navbar2 #div-4+.drop-menu-div .drop-menu{
            display: none;
        }

        & .navbar2 #div-4:checked+.drop-menu-div .drop-menu{
            display:block;
        }

        & .navbar2 #div-1:checked+.full-drop-div .full-drop{
            display: flex;
        }

        & .navbar2 #div-2:checked+.full-drop-div .full-drop{
            display: flex;
        }

        & .navbar2 .upper-navbar{
            display: flex;
        }

        & .navbar2 .upper-navbar .span{
            display: inline-flex;
        }

        & .navbar2 .upper-navbar .span i{
            align-self: center;
        }

        & .navbar2 .upper-navbar .small span{
            position: relative;
        }

        & .navbar2 .upper-navbar .small ul{
            padding: 0.5rem;
            display: none;
            position: absolute;
            margin-top: 2rem;
            width:80%;
            top: 0;
            z-index: 10;
            background-color: white;
            box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1),0 1px 6px rgba(0, 0, 0, .05),0 0 0 1px rgb(0 0 0 / 10%);
            /* left: 20%; */
        }

        & .navbar2 .upper-navbar ul li{
            border: none;
            outline: none;
            text-align: center;
            list-style-type: none;
            color: #1f293799;
            width: 100%;
            background-color: white;
        }

        & .navbar2 .upper-navbar ul li:hover{
            background-color: #f5f5f4;
            color: black;
        }

        & .navbar2 .upper-navbar #curr:checked+.small .curr+ul{
            display: flex;
            flex-direction:column;
        }

        & .navbar2 .upper-navbar #createAcc:checked+.small .createAcc+ul{
            display: flex;
            flex-direction: column;
        }
    }

    @media(max-width:356px){
        .navbar3{
            gap: 0.5rem;
        }
    }
`;

export default function Navbar() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.cartData.items);
    console.log("list=", list);
    const finalCost2 = useSelector(state => state.cartData.cost);
    console.log(finalCost2)
    const number = list.reduce((acc, el) => acc + el.quantity, 0);

    return (
        <NavContainer>
            <input type="checkbox" id="sidebar-active" />
            <div className="open-sidebar-div">
                <label htmlFor="sidebar-active" className="open-sidebar"><i className="fa-solid fa-bars"></i></label>
            </div>
            <div className="navbar1">
                <NavLink to="/"><img src="https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/logo.svg" alt="" /></NavLink>
            </div>
            <div className="navbar2">
                <label htmlFor="sidebar-active" className="close-sidebar"><i className="fa-solid fa-xmark"></i></label>
                <div><a href="">WHAT'S NEW</a></div>
                <input type="checkbox" id="div-1" />
                <div className="full-drop-div">
                    <label htmlFor="div-1" className="div-1">
                        <span>WOMEN <i className="fa-solid fa-angle-down"></i>
                            <div className="full-drop">
                                <ul>
                                    <li className="bold-anchor"><a href="">CLOTHING</a></li>
                                    <li><a href="">Jackets</a></li>
                                    <li><a href="">Hoodies & SweatShirts</a></li>
                                    <li><a href="">Tees</a></li>
                                    <li><a href="">Bras & Tanks</a></li>
                                    <li className="bold-anchor"><a href="">Shop All</a></li>
                                </ul>
                                <ul>
                                    <li className="bold-anchor"><a href="">SHOES</a></li>
                                    <li><a href="">Athletics</a></li>
                                    <li><a href="">Boots</a></li>
                                    <li><a href="">Oxfords</a></li>
                                    <li><a href="">Flats</a></li>
                                    <li className="bold-anchor"><a href="">Shop All</a></li>
                                </ul>
                                <ul>
                                    <li className="bold-anchor"><a href="">ACCESSORIES</a></li>
                                    <li><a href="">Belts</a></li>
                                    <li><a href="">Sunglasses</a></li>
                                    <li><a href="">Scarves & Wrapes</a></li>
                                    <li><a href="">Gloves & Mittens</a></li>
                                </ul>
                            </div>
                        </span>
                    </label>
                </div>
                <input type="checkbox" id="div-2" />
                <div className="full-drop-div">
                    <label htmlFor="div-2">
                        <span><NavLink to="/men">MEN</NavLink> <i className="fa-solid fa-angle-down"></i>
                            <div className="full-drop">
                                <ul>
                                    <li className="bold-anchor"><a href="">ACCESSORIES</a></li>
                                    <li><a href="">Belts</a></li>
                                    <li><a href="">Suspenders</a></li>
                                    <li><a href="">Clips</a></li>
                                </ul>
                                <ul>
                                    <li className="bold-anchor"><a href="">SHOES</a></li>
                                    <li><a href="">Athletics</a></li>
                                    <li><a href="">Boots</a></li>
                                    <li><a href="">LOAFERS & SLIP ONS</a></li>
                                    <li><a href="">Oxfords</a></li>
                                </ul>
                                <ul>
                                    <li className="bold-anchor"><a href="">CLOTHING</a></li>
                                    <li><a href="">Jackets</a></li>
                                    <li><a href="">Hoodies & Sweatshirts</a></li>
                                    <li><a href="">Tees</a></li>
                                    <li><a href="">Tanks</a></li>
                                    <li className="bold-anchor"><a href="">SHOP ALL</a></li>
                                </ul>
                            </div>
                        </span>
                    </label>
                </div>
                <input type="checkbox" id="div-3" />
                <div className="drop-menu-div">
                    <label htmlFor="div-3" className="div-3">
                        <span>GEAR <i className="fa-solid fa-angle-down"></i>
                            <ul className="drop-menu">
                                <li><a href="">Bags</a></li>
                                <li><a href="">Fitness Equipment</a></li>
                                <li><a href="">Watches</a></li>
                                <li><a href="">Eyewear</a></li>
                                <li><a href="">Special deal</a></li>
                            </ul>
                        </span>
                    </label>
                </div>
                <div className="div-center"><a href="">SALE</a></div>
                <input type="checkbox" id="div-4" />
                <div className="div-center drop-menu-div">
                    <label htmlFor="div-4" className="div-4">
                        <span>FEATURES <i className="fa-solid fa-angle-down"></i>
                            <ul className="drop-menu">
                                <li><a href="">1 Column</a></li>
                                <li><a href="">2 Column Right</a></li>
                                <li><a href="">3 Column Left</a></li>
                                <li><a href="">Columns</a></li>
                                <li><a href="">Full Width</a></li>
                            </ul>
                        </span>
                    </label>
                </div>
                <div className="upper-navbar">
                    <div>SUPPORT</div>
                    <div><i className="fa-solid fa-message"></i> sales@example.com</div>
                    <div><i className="fa-solid fa-phone"></i> +01 122 334 566</div>
                    <input type="checkbox" id="curr" />
                    <div className="small">CURRENCY&nbsp;
                        <label htmlFor="curr" className="curr"><span className="span">USD-US DOLLAR <i className="fa-solid fa-angle-down"></i>
                        </span>
                        </label>
                        <ul>
                            <li>EUR - Euro</li>
                        </ul>
                    </div>
                    <input type="checkbox" id="createAcc" />
                    <div className="small">ACCOUNT&nbsp;
                        <label htmlFor="createAcc" className="createAcc">
                            <span className="span">My Account <i className="fa-solid fa-angle-down"></i>
                            </span>
                        </label>
                        <ul>
                            <li><NavLink to="sign-in">Sign In</NavLink></li>
                            <li><NavLink to="/new">Create an Account</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar3">
                <input type="checkbox" id="xyz" />
                <input id="search" type="text" placeholder="Search entire store here..." />
                <label htmlFor="xyz">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input type="checkbox" id="product-list" />
                <a>
                    <label htmlFor="product-list"><i className="fa-solid fa-bag-shopping"></i></label> {number}
                    <ul className="product-ul">
                        <li className="upper-product-ul">
                            <strong>My Cart</strong>
                            <label htmlFor="product-list"><i className="fa-solid fa-x"></i></label>
                        </li>
                        {number === 0 ?
                            <li className="empty"><strong>You have no items in your shopping cart.</strong></li>
                            :
                            <>
                                <li className="Proceed">
                                    <span>Cart Subtotal</span>
                                    <span>${finalCost2}</span>
                                </li>
                                <li className="btn">
                                    <button>Proceed to Checkout</button>
                                </li>
                                <div className="scroll-div">
                                    {
                                        list.map((el, idx) => {
                                            const productdata = getProductData(el._id);
                                            return (
                                                <li className="card-info" key={idx}>
                                                    <div className="card-info-img">
                                                        <img src={productdata.image} alt="" />
                                                    </div>
                                                    <div className="card-info-data">
                                                        <p>{productdata.brand}</p>
                                                        <span>${productdata.price}</span>
                                                        <div className="delete-btn">
                                                            <div className="qty-btn">
                                                                <button onClick={() => { dispatch(removeOneFromCart(el._id)) & dispatch(findTotalCost()) }}>-</button>
                                                                <p>Qty {el.quantity}</p>
                                                                <button onClick={() => { dispatch(addOneToCart(el._id)) & dispatch(findTotalCost()) }}>+</button>
                                                            </div>
                                                            <i className="fa-solid fa-trash" onClick={() => { dispatch(deleteFromCart(el._id)) & dispatch(findTotalCost()) }}></i>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </div>
                            </>
                        }
                    </ul>
                </a>
            </div>
        </NavContainer >
    );
}