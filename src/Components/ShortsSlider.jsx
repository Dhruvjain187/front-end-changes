import Slider from "react-slick";
import styled from "styled-components";

export const SliderCon1 = styled.div`
    &{
        display: flex;
        position: relative;
    }

    & img{
        width: 100%;
        height: 100%;
    }
    
`

export default function ShortsSlider({ images }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map(el => {
                        return (
                            <>
                                <div><img src={el} alt="" /></div>

                            </>
                        )
                    }
                    )}
                </Slider>
            </div>
        </>
    );
}