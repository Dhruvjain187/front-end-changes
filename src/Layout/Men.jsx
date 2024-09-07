import { useLoaderData } from "react-router";
import styled from "styled-components";
import MensSlider from "../Components/MensSlider";
import { NavLink } from "react-router-dom";
import { useProduct } from "../Contexts/ProductContext";

export const MensContainer = styled.div`
    &{
        font-family: "Barlow Semi Condensed";
        padding: 0.375rem 0.75rem;
    }

    & .Mens-0{
        display: flex;
        padding: 1rem;
        gap: 0.5rem;
        font-family: "Mukta";
    }

    & .Mens-0 li{
        list-style-type: none;
        font-weight: 400;
        font-size: .875rem;
        color:#737373;
    }

    & .Mens-0 li a{
        text-decoration: none;
        color: #9ca3af;
    }
    
    & .Mens-0 li i{
        color:#9ca3af;
    }

    & .Mens-0 li a:hover{
        text-decoration:underline;
    }

    & .Mens-1,.Mens-4{
        position: relative;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }

    & .Mens-1 h1{
        display: flex;
        margin: 2.5rem 0;
        padding: 12px 0;
        padding-left: 100px;
        padding-right: 100px;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
        font-size: 3rem;
        font-weight: 600;
        color:#1F2937;
    }

    & .Mens-1 h1 span{
        width: 100%;
        text-align: center;
    }

    & .Mens-4 h1{
        display: flex;
        margin: 2.5rem 0;
        padding: 12px 0;
        padding-left: 100px;
        padding-right: 100px;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
        font-size: 2.2rem;
        font-weight: 600;
        color:#1F2937;
    }

    & .Mens-4 h1 span{
        width: 100%;
        text-align: center;
    }

    & .main-container{
        display: flex;
        position: relative;
    }

    & .main-container .Mens-2{
        width: 14rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        /* overflow: scroll; */
    }

    & .main-container .Mens-3{
        width:80%;
    }

    & .main-container .Mens-2 .sub{
        padding: .75rem 1rem;
        border: 2px solid #e5e7eb;
        font-weight: 600;
        font-size: 1.125rem;
        /* display: flex;
        justify-content: space-between; */
        /* align-items: center; */
    }

    & .main-container .Mens-2 .scrollable{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .main-container .Mens-2 .sub i{
        color:#e5e7eb
    }

    & .main-container .Mens-2 .close{
        display: none;
        justify-content:center;
        align-items: center;
    }

    & .main-container .Mens-2 .close i{
        color: black;
    }

    & .main-container .Mens-2 .bg{
        background-color: rgba(237,231,52,0.7);
    }

    & .main-container .Mens-2 .sub input{
        display: none;
    }

    & .main-container .Mens-2 .special{
        border: 2px solid #374151;
    }

    & .main-container .Mens-2 .special-2{
        border-top:none;
    }

    & .main-container .Mens-2 .sub ol{
        margin: .5rem 0 .75rem;
        padding: 0;
        display: none;
    }

    & .main-container .Mens-2 .sub ol li{
        list-style-type: none;
        font-size: 1rem;
        font-family: "Mukta";
        font-weight: 400;
    }

    & .main-container .Mens-2 span{
        /* color: #e5e7eb; */
        font-weight: 300;
        opacity: 0.5;
        font-size: 0.875rem;
    }

    & .main-container .Mens-2 .sub #check-1:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-2:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-3:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-4:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-5:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-6:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-7:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-8:checked~ol{
        display: block;
    }
    
    & .main-container .Mens-2 .sub #check-9:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-10:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-11:checked~ol{
        display: block;
    }

    & .main-container .Mens-2 .sub #check-12:checked~ol{
        display: block;
    }
    
    & .main-container .Mens-2 .sub #check-13:checked~ol{
        display: block;
    }

    &  input{
        display: none;
    }

    & .main-container .Mens-3 .card{
        display: flex;
        gap: 1rem;
        position: relative;
        justify-content:space-around;
        width: 100%;
        /* height: 100%; */
        flex-wrap: wrap;
    }


    & .main-container .Mens-3 .card .relative{
        /* display: flex;
        flex-direction: column; */
        position: relative;
        z-index: 3;
        width: clamp(10rem,100vw,14rem);
        /* min-height: 18em; */
        height: auto;
        /* overflow: hidden; */
        background-color: white;
    }

    & .main-container .Mens-3 .card .relative:hover{
        z-index: 5;

        & .absolute{
            position: absolute;
            box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1),0 1px 6px rgba(0, 0, 0, .05),0 0 0 1px rgb(0 0 0 / 10%);
        }
    }

    & .main-container .Mens-3 .card .relative .absolute{
        /* position: absolute; */
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;
    }

    & .main-container .Mens-3 .card .relative .absolute .card-img{
        height: 15rem;
        position: relative;
    }

    & .main-container .Mens-3 .card .relative .absolute .card-img .anchor{
        position:absolute;
        top: 0.5rem;
        right: 0.5rem;
        gap: 0.5rem;
        display: none;
        flex-direction: column;
    }

    & .main-container .Mens-3 .card .relative .absolute .card-img .anchor i{
        color: rgba(0,0,0,0.6);
    }

    & .main-container .Mens-3 .card .relative .absolute .card-img .anchor i:hover{
        color: rgba(0,0,0,1);
    }

    & .main-container .Mens-3 .card .relative .absolute .card-img img{
        width:100%;
        height: 100%;
    }

    & .main-container .Mens-3 .card .relative .absolute .quantity{
        display: none;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    & .main-container .Mens-3 .card .relative:hover .quantity{
        display: flex;
    }

    & .main-container .Mens-3 .card .relative .quantity p{
        margin: 0;
        justify-self: center;
    }

    & .main-container .Mens-3 .card .relative .absolute .quantity-btn{
        display: flex;
        gap: 1rem;
    }

    & .main-container .Mens-3 .card .relative .absolute .quantity button{
        padding: 0 0.5rem 0 0.5rem;
        background-color: blue;
        border-radius:.5rem;
    }

    & .main-container .Mens-3 .card-content{
        display: flex;
        flex-direction: column;
    }

    & .main-container .Mens-3 .card-content button{
        display: none;
    }

    & .main-container .Mens-3 .relative:hover .card-content button,& .main-container .Mens-3 .relative:hover .card-content .color,
    & .main-container .Mens-3 .relative:hover .absolute .card-img .anchor{
        display: flex;
    }

    & .main-container .Mens-3 .card-content a{
        font-family: "Mukta";
        font-size: 1rem;
        color:#1f2937;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
    }

    & .main-container .Mens-3 .card-content span{
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
    }

    & .main-container .Mens-3 .card-content .color{
        background-color: white;
        display: none;
        flex-direction: row;
        gap: 0.375rem;
        justify-content: center;
        align-items: center;
        margin: .25rem 0 .5rem;
    }

    & .main-container .Mens-3 .card-content .color *{
        height: 2rem;
        width: 2rem;
    }

    & .main-container .Mens-3 .card-content .color .red{
        background-color: red;
    }

    & .main-container .Mens-3 .card-content .color .black{
        background-color: black;
    }

    & .main-container .Mens-3 .card-content .color .gray{
        background-color: gray;
    }

    & .main-container .Mens-3 .card-content button{
        border: none;
        color: white;
        font-size: 1.25rem;
        font-family: "Barlow Semi Condensed";
        background-color: #1f2937;
        font-weight: 600;
        padding: .5rem 1.25rem;
    }

    & .main-container .Mens-3 .card-content button:hover{
        background-color: #ede734;
    }

    & .main-container .Mens-3 .bar{
            display: flex;
            /* flex-wrap: wrap; */
            align-items: center;
            gap: .75rem;
            margin: 0 0 1.25rem;
        }

    & .main-container .Mens-3 .bar .bar-1{
        color: #9ca3af;
        font-weight: 600;
    }

    & .main-container .Mens-3 .bar .bar-2{
        display: flex;
        align-items: center;
        margin-left:auto;
        font-weight: 600;
        color: #9ca3af;
    }

    & .main-container .Mens-3 .bar .bar-2 i{
        padding:.5rem;
    }

    & .main-container .Mens-3 .bar .bar-2 .fa-qrcode{
        color: #1F2937;
    }

    & .main-container .Mens-3 .bar .bar-2 .fa-bars:hover{
        color: #1f293799;
    }

    & .main-container .Mens-3 .bar .bar-3{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: "Barlow Semi Condensed";
    }

    & .main-container .Mens-3 .bar>label{
        font-weight: 600;
        display: none;
    }

    & .main-container .Mens-3 .bar .bar-3 label{
        font-weight: 600;
        color: #9ca3af;
    }

    & .main-container .Mens-3 .bar .bar-3 select{
        outline: none;
        padding: 0.5rem 2.5rem 0.5rem 0.75rem;
        border: 2px solid rgb(209,213,219);
        font-weight: 600;
    }

    & .main-container .Mens-3 .bar .bar-3 select:focus{
        border-color: orangered;
    }

    & .main-container .Mens-3 .bar .bar-3 .fa-arrow-up{
        color: #9ca3af;
    }

    /* & .slider{
        display: flex;
    }

    & .slider .sub-container{
        display: flex;
        gap: 1rem;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    & .slider .slider-item{
        display: flex;
        flex-direction: column;
    }

    & .slider .slider-item .slider-content{
        display: flex;
        flex-direction: column;
    }

    & .slider .slider-item .slider-img{
        height: 18rem;
        width: 16rem;
    }

    & .slider .slider-item .slider-img img{
        height: 100%;
        width: 100%;
    } */

    @media(max-width:767px){
        & .main-container .Mens-2{
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 16rem;
            z-index: 5;
            overflow: scroll;
        }

        & .main-container .Mens-2 .close{
            display: flex;
        }

        & .main-container .Mens-2 .bg{
            display: none;
        }

        & .main-container .Mens-3{
            width: 100%;
        }


        & #check:checked~.main-container .Mens-2{
            display: flex;
        }

        & .main-container .Mens-3 .bar{
            flex-wrap: wrap;
        }

        & .main-container .Mens-3 .bar .bar-3{
            flex-grow: 1;
            justify-content: flex-end;
        }

        & .main-container .Mens-3 .bar>label{
            display: block;
        }
    }

    @media(max-width:639px){
        & .main-container .Mens-3 .bar .bar-3{
            flex-grow: 0.5;
        }

        & .main-container .Mens-3 .bar>label{
            flex-grow: 0.25;
        }

        & .main-container .Mens-3 .bar .bar-2{
            flex-grow: 0.25;
        }

        & .main-container .Mens-3 .bar .bar-1{
            order: 4;
            flex-grow: 1;
        }

        & .Mens-4 h1{
            padding: 0;
        }
    }

    @media(max-width:557px){
        /* & .main-container .Mens-3 .bar .bar-1{
            flex-grow: 0.5;
        }

        & .main-container .Mens-3 .bar .bar-2{
            flex-grow: 0.5;
        } */

        & .main-container .Mens-3 .bar .bar-3{
            flex-grow: 1;
            width: 100%;
        }

        & .main-container .Mens-3 .bar .bar-1{
            order: 4;
            flex-grow: 1;
        }
    }

    @media(max-width:479px){
        & .main-container .Mens-3 .bar{
            justify-content: space-between;
        }

        & .main-container .Mens-3 .bar .bar-2{
            display: none;
        }

        & .main-container .Mens-3 .bar>label{
            flex-grow: 0.3;
        }

        & .main-container .Mens-3 .bar .bar-3{
            flex-basis: 0;
            flex-grow: 0.3;
        }

        & .main-container .Mens-3 .bar .bar-3 select{
            padding: 0;
        }

        & .main-container .Mens-3 .bar .bar-3>label{
            display: none;
        }
    }

    @media(max-width:428px){
        & .main-container .Mens-3 .card .relative{
            width: 80%;
        }
    }
`;


export default function Men() {
    const data = useLoaderData();
    const sliderData = data.slice(0, 6);
    const contextData = useProduct();
    console.log(contextData.items);
    return (
        <>
            <MensContainer>
                <ul className="Mens-0">
                    <li><NavLink to="/">HOME&nbsp;</NavLink><i className="fa-solid fa-angle-right fa-xs"></i></li>
                    <li>MEN</li>
                </ul>
                <div className="Mens-1">
                    <h1>
                        <span>MEN</span>
                    </h1>
                </div>
                <input type="checkbox" id="check" />
                <div className="main-container">
                    <div className="Mens-2">
                        <div className="sub special bg"><div>SHOP BY</div></div>

                        <div className="sub close">
                            <label htmlFor="check" className="close-sidebar"><i className="fa-solid fa-xmark"></i></label>
                        </div>

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

                        <div className="sub special-2">
                            <input type="checkbox" id="check-10" />
                            <label htmlFor="check-10" className="check-10">
                                <div className="scrollable">
                                    <div>COLOR</div>
                                    <i className="fa-solid fa-angle-down fa-2xs" ></i>
                                </div>
                            </label>
                            {/* <ol>
                                <li>Yes <span>(13)</span></li>
                                <li>No <span>(72)</span></li>
                            </ol> */}
                        </div>

                        <div className="sub special-2">
                            <input type="checkbox" id="check-11" />
                            <label htmlFor="check-11" className="check-11">
                                <div className="scrollable">
                                    <div>SIZE</div>
                                    <i className="fa-solid fa-angle-down fa-2xs" ></i>
                                </div>
                            </label>
                            <ol>
                                <li>O <span>(72)</span></li>
                                <li>XS <span>(48)</span></li>
                                <li>S <span>(48)</span></li>
                                <li>M <span>(48)</span></li>
                                <li>L <span>(48)</span></li>
                                <li>XL <span>(48)</span></li>
                                <li>32 <span>(24)</span></li>
                                <li>33 <span>(24)</span></li>
                                <li>34 <span>(24)</span></li>
                                <li>36 <span>(24)</span></li>
                            </ol>
                        </div>

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
                    <div className="Mens-3">
                        <div className="bar">
                            <label htmlFor="check" className="close-sidebar"><i className="fa-solid fa-filter"></i> <strong>SHOP BY</strong></label>
                            <div className="bar-1">ITEMS 1-12 OF 72</div>
                            <div className="bar-2">
                                <strong>VIEW AS&nbsp;</strong>
                                <i className="fa-solid fa-qrcode"></i>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className="bar-3">
                                <label htmlFor="opt">SORT BY</label>
                                <select name="select" id="opt">
                                    <option value="">POSITION</option>
                                    <option value="">PRODUCT NAME</option>
                                    <option value="">PRICE</option>
                                    <option value="">SENSOR</option>
                                    <option value="">VIDEO</option>
                                </select>
                                <i className="fa-solid fa-arrow-up"></i>
                            </div>
                        </div>
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
                                                    contextData.items.find((item) =>
                                                        item.id === el._id)?.quantity > 0 ?
                                                        <div className="quantity">
                                                            <p>Cart items:{contextData.items.find((item) =>
                                                                item.id === el._id)?.quantity}</p>
                                                            <div className="quantity-btn">
                                                                <button onClick={() => { contextData.removeOneFromCart(el._id) }}>-</button>
                                                                <button onClick={() => { contextData.addOneToCart(el._id) }}>+</button>
                                                            </div>
                                                        </div> : <div className="quantity"><p>Item is not added</p></div>
                                                }
                                                <button onClick={() => { contextData.addOneToCart(el._id) }}>ADD TO CARD</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="Mens-4">
                    <h1>
                        <span>RECENTLY VIEWED</span>
                    </h1>
                </div>


                <MensSlider sliderData={sliderData} />
            </MensContainer >
        </>
    );
}
