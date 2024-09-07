import styled from "styled-components";
import { useState } from "react";
export const SliderContainer = styled.div`
    display: flex;
    font-family: "Barlow Semi Condensed";
    margin-bottom: 0.3em;
    justify-content: center;
    align-items: center;
    position:  relative;
    height:30em;
    width: 100%;
    overflow: hidden;
    /* transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1); */

    & div.leftBtn{
        z-index: 5;
        left:0;
        width: 3.5em;
        height: 45%;
        color: rgba(255,255,255,0.7);
        opacity: 0.9;
        display: block;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    & div.rightBtn{
        z-index: 5;
        right:0;
        width: 3.5em;
        height: 45%;
        opacity: 0.9;
        color: rgba(255,255,255,0.7);
        display: block;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .leftBtn button,.rightBtn button{
        all: unset;
        /* border-radius: 0.5em; */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff84;
        height: 100%;
        width: 90%;
    }

    & div.rightBtn:hover,& div.leftBtn:hover{
        color: rgba(255,255,255,0.9);
        opacity: 1;
    }

    .img-container{
        padding: 4em;
        height: 100%;
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 1s ease-in-out;
    }

    .in-img-container{
        display: flex;
        z-index: 3;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        height: 75%;
        width: 50%;
    }

    .in-img-container span{
        all: unset;
        /* height: 50%; */
        color: white;
        font-weight: 600;
        font-size: clamp(2rem, 6vw, 6rem);
        line-height: clamp(2rem, 7vw, 5.5rem);
    }

    .in-img-container span:hover{
        cursor: pointer;
    }

    .in-img-container button{
        all: unset;
        text-align: center;
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
        background-color: orangered;
        /* height: 18%; */
        width: 45%;
        padding: .5rem 2rem;
    }

    /* & img{
        flex-shrink: 0;
        flex-grow: 0;
        height: 100%;
        width: 100%;
        transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1);
    } */

    & button i{
        color: white;
    }

    @media(max-width:768px){
        .in-img-container button{
            display: none;
        }
    }

    @media(max-width:768px){
        &{
            height: 15em;
        }

        .img-container{
            padding: 3.5em;
        }

        .in-img-container{
            width: 100%;
            height: 100%;
        }

        .in-img-container span{
            height: 100%;
            width: 100%;
        }
    }

    @media(max-width:435px){
        .in-img-container{
            height: 65%;
        }

        .in-img-container span{
            font-size: 1.7em;
        }
    }
`;

export default function Slider({ imgArr, contentArr }) {
    const [imgIndex, setImgIndex] = useState(0);

    const rightArrowHandler = () => {
        setImgIndex((prevIdx) => {
            return (prevIdx + 1) % (imgArr.length);
        })
    }

    const leftArrowHandler = () => {
        setImgIndex((prevIdx) => {
            return (imgArr.length - 1 + prevIdx) % (imgArr.length);
        })
    }

    return (
        <>
            <SliderContainer>
                <div className="leftBtn">
                    <button onClick={leftArrowHandler}><i className="fa-solid fa-angle-left"></i></button>
                </div>


                <div className="img-container" style={{
                    backgroundImage: `url(${imgArr[imgIndex]})`,
                    backgroundSize: `100% 100%`,
                    // transform: `translateX(${-100 * imgIndex}%)`
                }}>
                    {/* {imgArr.map((url) => {
                        return <>
                            <img src={url} alt="" style={{ translate: `${-100 * imgIndex}%` }} />
                        </>
                    })} */}

                    <div className="in-img-container" >
                        <span>{contentArr[imgIndex].span}</span>
                        <button>{contentArr[imgIndex].btn}</button>
                    </div>
                </div>
                <div className="rightBtn">
                    <button onClick={rightArrowHandler}><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </SliderContainer>
        </>
    );
}