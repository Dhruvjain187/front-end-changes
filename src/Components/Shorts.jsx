import styled from "styled-components";

export const ShortsContainer = styled.div`
    &{
        padding-bottom: 1em;
        width: 100%;
        height: 35em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-family:'Barlow Semi Condensed';
        position: relative;
    }

    & .ShortsContainer-1{
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .ShortsContainer-1 strong{
        font-weight: 600;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
        font-size:2rem ;
        font-weight: 500;
    }

    & .ShortsContainer-2{
        height: 78%;
        width: 93%;
        display: flex;
        justify-content: space-between;
    }

    & .ShortsContainer-2 .mid-Container{
        height: 103%;
        z-index: 5;
        width: 24.5%;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: center;
        padding: 0.5rem;
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    }

    & .mid-Container a,span{
        height: 8%;
        width: 100%;
    }

    & .mid-Container .colors,& .mid-Container button{
        height: 11%;
    }

    & .mid-Container span{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }

    & .mid-Container a{
        font-family: "Mukta",sans-serif;
        font-size: 1rem;
        margin-top: 1rem;
        line-height: 1em;
        text-decoration: none;
        color: black;
        font-weight: 500;
        text-align: center;
    }

    & .mid-Container button{
        border: none;
        display: none;
        width: 100%;
        height: 9.5%;
        font-family:'Barlow Semi Condensed';
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        background-color: black;
    }

    & .mid-Container:hover button{
        display: block;
    }

    & .ShortsContainer-2 .mid-Container:hover{
        box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05), 0 0 0 1px rgb(0 0 0 / 10%);
        justify-content: space-between;
        /* transform: scaleY(105%); */
    }

    & .mid-Container .colors{
        display: none;
        width: 75%;
        justify-content: center;
        align-items: center;
    }

    & .mid-Container:hover .colors{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    & .mid-Container .colors button{
        height: 80%;
        width: 20%;
        padding:1rem;
        display: block;
    }

    & .mid-Container .colors .btn1{
        background-color: blue;
    }

    & .mid-Container .colors .btn2{
        background-color: orange;
    }

    & .mid-Container .colors .btn3{
        background-color: red;
    }

    & .mid-Container button:hover{
        background-color: yellow;
        color: black;
    }

    & .ShortsContainer-2 .img-1{
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 60%;
        width: 100%;
        /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfNs2CTKXV4MFKX_8mWmqkVFwZk2ZH0TW-w&s");
        background-size: 100% 100%; */
    }


    & .ShortsContainer-2 .img-2{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 60%;
        width: 100%;
        /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWg5wsLhz-Q67vSKdZHlBQ5_Y7Um_RYQrotA&s");
        background-size: 100% 100%; */
    }

    & .ShortsContainer-2 .img-3{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 60%;
        width: 100%;
        /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoauxjtKSXEPXDd1QGezNmEM1pDCot9bK8ig&s");
        background-size: 100% 100%; */
    }

    & .ShortsContainer-2 .img-4{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 60%;
        width: 100%;
        /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoD0AZDuQDdJ1HOIiIAnHGIAyeznBWNxOxWg&s");
        background-size: 100% 100%; */
    }

    & .ShortsContainer-2 .img-1 img,& .ShortsContainer-2 .img-2 img,& .ShortsContainer-2 .img-3 img,& .ShortsContainer-2 .img-4 img{
        height: 100%;
        width: 100%;
    }

    & .ShortsContainer-2 .anchor{
        display: none;
        flex-direction: column;
        height: 50%;
        width: 100%;
        justify-content: flex-start;
        position: absolute;
    }

    & .img-1:hover .anchor,& .img-2:hover .anchor,& .img-3:hover .anchor,& .img-4:hover .anchor{
        display: flex;
    }

    & .ShortsContainer-2 .anchor a{
        text-align: end;
        padding: 1rem;
        margin: 0;
    }

    /* & .ShortsContainer-2 .mid-Container .img-1 a{
        text-align: end;
        display: none;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-1 a{
        display: block;
        opacity: 0.8;
    }

    & .ShortsContainer-2 .mid-Container .img-2 a{
        text-align: end;
        display: none;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-2 a{
        display: block;
        opacity: 0.8;
    }

    & .ShortsContainer-2 .mid-Container .img-3 a{
        text-align: end;
        display: none;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-3 a{
        display: block;
        opacity: 0.8;
    }

    & .ShortsContainer-2 .mid-Container .img-4 a{
        text-align: end;
        display: none;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-4 a{
        display: block;
        opacity: 0.8;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-1 a:hover{
        opacity: 1;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-2 a:hover{
        opacity: 1;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-3 a:hover{
        opacity: 1;
    }

    & .ShortsContainer-2 .mid-Container:hover .img-4 a:hover{
        opacity: 1;
    } */



    & .ShortsContainer-3{
        height: 12.5%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    & .ShortsContainer-3 button{
        font-family:'Barlow Semi Condensed';
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
        background-color: white;
        border: 0.05rem solid black;
    }

    & .ShortsContainer-3 button:hover{
        background-color: #F0F0F0;
    }

    @media(max-width:750px){
        &{
            height: 50em;
        }

        & .mid-Container button{
            /* display: block; */
        }

        & .ShortsContainer-2 .img-1,& .ShortsContainer-2 .img-2,& .ShortsContainer-2 .img-3,& .ShortsContainer-2 .img-4{
            height: 70%;
        }

        & .ShortsContainer-1{
            height: 9%;
        }

        & .mid-Container:hover .colors{
           display: none;
        }

        & .ShortsContainer-2 {
            height: 74%;
            flex-wrap: wrap;
            align-content:space-between;
        }

        & .ShortsContainer-2 .mid-Container{
            width: 49%;
            height: 49%;
            justify-content: unset;
        }

        /* & .ShortsContainer-2 .mid-Container{
            justify-content: s;
        } */

        & .ShortsContainer-3{
            height: 15%;
            align-items: center;
        }
    }
`;

export default function Shorts() {
    return (
        <>
            <ShortsContainer>
                <div className="ShortsContainer-1">
                    <strong>BESTSELLERS</strong>
                </div>
                <div className="ShortsContainer-2">
                    <div className="mid-Container">
                        <div className="img-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfNs2CTKXV4MFKX_8mWmqkVFwZk2ZH0TW-w&s" alt="" />
                            <div className="anchor">
                                <a href=""><i className="fa-regular fa-heart"></i></a>
                                <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                <a href=""><i className="fa-regular fa-eye"></i></a>
                            </div>

                        </div>
                        <a href="">Erika Running Short</a>
                        <span>$45.00</span>
                        <div className="colors">
                            <button className="btn1"></button>
                            <button className="btn2"></button>
                            <button className="btn3"></button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="mid-Container">
                        <div className="img-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWg5wsLhz-Q67vSKdZHlBQ5_Y7Um_RYQrotA&s" alt="" />
                            <div className="anchor">
                                <a href=""><i className="fa-regular fa-heart"></i></a>
                                <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                <a href=""><i className="fa-regular fa-eye"></i></a>
                            </div>
                        </div>
                        <a href="">Ina Compression Short</a>
                        <span>$49.00</span>
                        <div className="colors">
                            <button className="btn1"></button>
                            <button className="btn2"></button>
                            <button className="btn3"></button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="mid-Container">
                        <div className="img-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoauxjtKSXEPXDd1QGezNmEM1pDCot9bK8ig&s" alt="" />
                            <div className="anchor">
                                <a href=""><i className="fa-regular fa-heart"></i></a>
                                <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                <a href=""><i className="fa-regular fa-eye"></i></a>
                            </div>
                        </div>
                        <a href="">Ana Running Short</a>
                        <span>$40.00</span>
                        <div className="colors">
                            <button className="btn1"></button>
                            <button className="btn2"></button>
                            <button className="btn3"></button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="mid-Container">
                        <div className="img-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoD0AZDuQDdJ1HOIiIAnHGIAyeznBWNxOxWg&s" alt="" />
                            <div className="anchor">
                                <a href=""><i className="fa-regular fa-heart"></i></a>
                                <a href=""><i className="fa-solid fa-scale-balanced"></i></a>
                                <a href=""><i className="fa-regular fa-eye"></i></a>
                            </div>
                        </div>
                        <a href="">Sybil Running Short</a>
                        <span>$44.00</span>
                        <div className="colors">
                            <button className="btn1"></button>
                            <button className="btn2"></button>
                            <button className="btn3"></button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
                <div className="ShortsContainer-3">
                    <button>SHOP NOW &nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i></button>
                </div>
            </ShortsContainer>
        </>
    );
}