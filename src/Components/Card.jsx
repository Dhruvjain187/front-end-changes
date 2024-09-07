import styled from "styled-components";

export const CardContainer = styled.div`
    font-family: "Barlow Semi Condensed";
    width: 100%;
    height: 22em;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;

    & .Card-Container-1{
        height: 70%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /* column-gap: 1em; */
    }

    & .Card-Container-1a{
        flex-grow: 1;
        display: inline-flex;
        flex-shrink: 0;
        /* width: 50%; */
        /* height: 100%; */
    }

    & .Card-Container-1b{
        flex-grow: 1;
        display: inline-flex;
        flex-shrink: 0;
        /* width: 50%; */
        /* height: 100%; */
    }

    & .Card-Container-1 .Card-Container-1a div{
        width: 50%;
        height: 100%;
    }

    & .Card-Container-1 .Card-Container-1b div{
        width: 50%;
        height: 100%;
    }

    & .Card-Container-1 h2{
        margin-top: 0;
        font-size: 2.2rem;
        color: white;
    }

    & .Card-Container-1 button{
        font-size: 1.125rem;
        width: 85%;
        background-color: #f76801;
        color: white;
        border: none;
        padding: 0.5rem;
    }

    & .Card-Container-1 button:hover{
        background-color: #202633;
    }

    & .img-1,.img-2,.img-3,.img-4{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding:0 0 1em 1em;
        width: 25%;
    }

    & .img-1 h2,& .img-2 h2,& .img-3 h2,& .img-4 h2{
        margin-bottom: 0.35em;
    }

    & .img-1 button,& .img-2 button,& .img-3 button,& .img-4 button{
        font-size: 1rem;
        font-family: "Barlow Semi Condensed";
        width: 87%;
        padding: 0.5em 1em 0.5em 1em;
        text-align: start;
        flex-shrink: 0;
    }

    & .Card-Container-1 .img-1{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/sneakers-square.jpeg.webp");
        background-size: 100% 100%;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & .Card-Container-1 .img-2{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/category-women.jpg.webp");
        background-size: 100% 100%;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & .Card-Container-1 .img-3{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/man-square_1.jpg.webp");
        background-size: 100% 100%;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & .Card-Container-1 .img-4{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/tennis-ball-square_1.jpeg.webp");
        background-size: 100% 100%;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & .Card-Container-1 .img-1:hover,.img-2:hover,.img-3:hover,.img-4:hover{
        background-size: 101% 101%;
    }


    & .Card-Container-2{
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .Card-Container-2 button{
        padding: 1rem 1.5rem 1rem 1.5rem;
        border: 0.18rem solid black;
        background-color: white;
    }
    
    & .Card-Container-2 button:hover{
        background-color: #2026331A;
    }
    
    @media(max-width:620px){
        &{
            height: 38em;
        }

    }
`;

export default function Card() {
    return (
        <>
            <CardContainer>
                <div className="Card-Container-1">
                    <div className="Card-Container-1a">
                        <div className="img-1">
                            <h2>WHAT'S NEW</h2>
                            <button>SHOP NOW <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                        <div className="img-2">
                            <h2>WOMEN</h2>
                            <button>SHOP NOW <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                    </div>
                    <div className="Card-Container-1b">
                        <div className="img-3">
                            <h2>MEN</h2>
                            <button>SHOP NOW <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                        <div className="img-4">
                            <h2>GEAR</h2>
                            <button>SHOP NOW <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                    </div>

                </div>
                <div className="Card-Container-2">
                    <button>ALL DEPARTMENTS <i className="fa-solid fa-greater-than"></i></button>
                </div>
            </CardContainer>
        </>
    );
}