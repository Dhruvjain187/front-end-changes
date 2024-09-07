import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const SliderContainer = styled.div`
    &{
        /* overflow-x: hidden; */
    }

    & .slider-item{
        display: flex;
        padding: 0.625rem;
        flex-direction: column;
    }

    & .slider-item:hover{
        box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1),0 1px 6px rgba(0, 0, 0, .05),0 0 0 1px rgb(0 0 0 / 10%);
    }

    & .slider-content{
        display: flex;
        flex-direction: column;
    }

    & .slider-content .brand{
        font-family: "Mukta";
        font-size: 1rem;
        text-align: center;
        color: #1f2937;
        font-weight: 500;
    }

    & .slider-content .price{
        font-family: "Barlow Semi Condensed";
        font-weight: 600;
        font-size: 1.5rem;
        text-align: center;
    }

    & .slider-item .slider-img{
        height: 18rem;
        /* width: 16rem; */
    }

    & .slider-item .slider-img img{
        height: 100%;
        width: 100%;
    }

    & .slick-prev:before, .slick-next:before{
        color: black;
    }

    & .slick-prev{
        left: 1rem;
        z-index: 5;
    }

    & .slick-next{
        right: 1rem;
        z-index:5;
    }

    & .slick-list{
        /* overflow: initial; */
    }

    @media(max-width:435px){
        & .slider-item .slider-img{
            height: 13rem;
        }
    }
`;

export default function MensSlider({ sliderData }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <SliderContainer>
            <Slider {...settings}>
                {
                    sliderData.map((el, idx) => <div className="slider-item" key={idx}>

                        <div className="slider-img">
                            <img src={el.image} alt="" />
                        </div>
                        <div className="slider-content">
                            <span className="brand">{el.brand}</span>
                            <span className="price">${el.price}</span>
                        </div>
                    </div>
                    )
                }
            </Slider>
        </SliderContainer>
    )
};
