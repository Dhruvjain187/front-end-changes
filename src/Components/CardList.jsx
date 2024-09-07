import styled from "styled-components";

export const CardListContainer = styled.div`
    font-family: "Barlow Semi Condensed";
    width: 100%;
    height: 35em;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    overflow: hidden;

    & .CardList-0{
        height: 20%;
        width: 100%;
    }

    & .CardList-0 span{
        display: block;
        width: 100%;
        height: 100%;
        color: #f7f7f7;
        font-weight: 600;
        font-size: 17vw;
        text-align: center;
    }

    & .CardList-1{ 
        height: 57%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

    }

    & .CardList-2{
        height: 8%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .CardList-2 button{
        font-size: 1rem;
        font-weight: 700;
        color: #1F2937;
        padding: 1rem 1.5rem 1rem 1.5rem;
        border: 0.18rem solid black;
        background-color: white;
    }
    
    & .CardList-2 button:hover{
        background-color: #2026331A;
    }

    & .CardList-1 .CardContainer{
        height: 100%;
        width: 25%;
        overflow: hidden;
        position: relative;
    }

    & .CardList-1 .CardContainer h2{
        margin-top: 0;
        font-size:clamp(1.5rem,5vw,2.2rem) ;
        color: white;
    }

    & .CardList-1 .CardContainer button{
        font-size: 1.125rem;
        width: 100%;
        background-color: #f76801;
        color: white;
        border: none;
        padding: 0.5rem;
    }

    & .CardList-1 .CardContainer button:hover{
        background-color: #202633;
    }

    & .CardList-1 .CardContainer img{
        height: 100%;
        width: 100%;
        z-index: -1;
        transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    & .CardList-1 .CardContainer:hover img{
        transform: scale(1.05);
    }

    & .CardList-1 .CardContainer .div-container{
        position: absolute;
        z-index: 5;
        /* bottom: 1em; */
        /* left: 1em; */
        bottom: 1em;
        left: 1em;
        width: 8.5em;
        display: flex;
        flex-direction: column;
        justify-content: end;

    }

    @media(max-width:940px){
        & .CardList-0{
            height: 10%;
        }
    }

    @media(max-width:724px){
        &{
            height: 42em;
        }

        & .CardList-1 .CardContainer .div-container{
            width: 7.25em;
        }

        & .CardList-0{
            height: 4%;
        }

        & .CardList-1 .CardContainer{
        height: 50%;
        width: 50%;
    }   
    }

    @media(max-width:480px){
        & .CardList-0{
            height: .5%;
        }
    }
`;



export default function CardList() {
    return (
        <CardListContainer>
            <div className="CardList-0">
                <span>READY TO GO</span>
            </div>
            <div className="CardList-1">
                <div className="CardContainer">
                    <img src="https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/sneakers-square.jpeg.webp" alt="" />
                    <div className="div-container">
                        <h2>WHAT'S NEW</h2>
                        <button>SHOP NOW <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="CardContainer">
                    <img src="https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/category-women.jpg.webp" alt="" />
                    <div className="div-container">
                        <h2>WOMEN</h2>
                        <button>SHOP NOW <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="CardContainer">
                    <img src="https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/man-square_1.jpg.webp" alt="" />
                    <div className="div-container">
                        <h2>MEN</h2>
                        <button>SHOP NOW <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="CardContainer">
                    <img src="https://argento-breeze-m2.swissupdemo.com/media/catalog/category/resized/384x384/tennis-ball-square_1.jpeg.webp" alt="" />
                    <div className="div-container">
                        <h2>GEAR</h2>
                        <button>SHOP NOW <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="CardList-2">
                <button>ALL DEPARTMENTS <i className="fa-solid fa-angle-right"></i></button>
            </div>
        </CardListContainer>
    );
}