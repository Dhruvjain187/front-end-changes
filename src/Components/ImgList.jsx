import { useState } from "react"
import styled from "styled-components"
import ShortsSlider from "./ShortsSlider"

export const ImgContainer = styled.div`
    &{
        display: flex;
    }
`

const SmallImg = styled.div`
    &{
        width: 8%;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        /* background-color: #f5eeeef6; */
    }

    & div{
        width: 100%;
        height: 7rem;
        background-color:  rgb(244,244,244);
    }

    & img{
        height: 100%;
        width: 100%;
        mix-blend-mode: multiply;
        /* height: 9.5rem; */
    }

    @media(max-width:1000px){
        &{
            order: 2;
            width: 100%;
            flex-direction: row;
        }

        & div{
            height: 8rem;
            width: 6rem;
        }
    }

    
`

const LargeImg = styled.div`
    &{
        width: 40%;
        /* max-height: 32rem; */
        min-height: 20rem;
        background-color: #f5eeeef6;
        overflow: hidden;
    }

    & img{
        height: 100%;
    }

    & .slider-container{
        width: 100%;
        height: 100%;
    }

    & .slider-container img{
        width: 100%;
        mix-blend-mode: multiply;
        /* max-height: 100%; */
    }

    & .slider-container div{
        height: 100%;
        background-color:  rgb(244,244,244);
    }

    .slick-prev:before, .slick-next:before {
        color: black ;
    }

    .slick-next{
        right: 25px;
    }

    .slick-prev{
        left: 25px;
        z-index: 5;
    }

    @media(max-width:780px){
        &{
            max-height: 100%;
            min-width: 50%;
            /* max-width: 82%; */
            aspect-ratio: auto 520/300;
            margin: 0 auto;
        }
    }

    @media(max-width:672px){
        &{
            min-width: 70%;
        }
    }

    @media(max-width:480px){
        &{
            min-width:80%;
        }
    }

    @media(max-width:400px){
        &{
            min-width:100%;
        }
    }
    
`

export default function ImgList({ data }) {
    const [img, setImg] = useState("");
    console.log(data)
    return (
        <>
            <SmallImg>
                {data.smallImg.map((el, idx) => {
                    return (
                        <div key={idx}><img src={el} alt="" onClick={(e) => setImg(el)} /></div>
                    );
                }
                )}
            </SmallImg>
            <LargeImg>
                {/* {img ?
                    <img src={img} alt="" /> :
                    <img src={data.smallImg[0]} alt="" />
                } */}
                <ShortsSlider images={data.smallImg} />
            </LargeImg>
        </>
    )
}