import styled from "styled-components";
export const TshirtContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height:45em;
    width: 100%;
    font-family:'Barlow Semi Condensed';

    & .TshirtContainer-1{
        height: 18%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .TshirtContainer-1 strong{
        font-size: 2.25rem;
        font-weight: 600;
        background: url("https://argento-breeze-m2.swissupdemo.com/static/frontend/Swissup/argentobreeze-force/en_US/images/title-bg.svg") no-repeat 50% 50%;
    }

    & .TshirtContainer-1 strong::before{
        content: "";
        width: 8px;
    }

    & .TshirtContainer-2{
        height: 80%;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    & .TshirtContainer-2 .T-container{
        width: 32%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    & .TshirtContainer-2 .T-container .img-Contain{
        height: 75%;
        width: 100%;
        text-align: end;
    }

    & .TshirtContainer-2 .T-container h3{
        max-height: 10%;
        width: 100%;
        margin: 0;
        font-weight: 600;
        font-size: 1.8rem;
        text-align: center;
    }

    & .TshirtContainer-2 .T-container p{
        height: 7%;
        width: 100%;
        margin: 0;
        font-size: 1.1rem;
        color: black;
        font-weight: 500;
        text-align: center;
    }

    & .TshirtContainer-2 .T-container a{
        all: unset;
        height: 5%;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        text-decoration: solid underline yellow 0.25em;
    }

    & .TshirtContainer-2 .T-container .img-1{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/hot-1-800.webp");
        background-size: 100% 105%;
        transition: background-size 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    & .TshirtContainer-2 .T-container .img-2{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/hot-2-800.webp");
        background-size: 100% 105%;
        transition: background-size 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    & .TshirtContainer-2 .T-container .img-3{
        background-image: url("https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/hot-3-800.webp");
        background-size: 100% 105%;
        transition: background-size 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    & .TshirtContainer-2 .T-container .img-1:hover,& .TshirtContainer-2 .T-container .img-2:hover,
    & .TshirtContainer-2 .T-container .img-3:hover{
        background-size: 103% 109%;
    }

    @media(max-width:767px){
        &{
            height: 90em;
        }

        & .TshirtContainer-1{
            height: 5%;
        }
    

        & .TshirtContainer-2{
            flex-direction: column;
            width: 95%;
            height: 95%;
        }

        & .TshirtContainer-2 .T-container{
            width: 100%;
            height: 32%;
        }

        & .TshirtContainer-2 .T-container .img-Contain{
            background-size: 99.7% 110%;
            background-repeat: no-repeat;
        }


        & .TshirtContainer-2 .T-container .img-Contain:hover{
            background-size: 102% 115%;
        }

    }
`;

export default function Tshirts() {
    return (
        <>
            <TshirtContainer>
                <div className="TshirtContainer-1">
                    <strong>HOT STUFF</strong>
                </div>
                <div className="TshirtContainer-2">
                    <div className="T-container">
                        <div className="img-Contain img-1"></div>
                        <h3>2022 RUNNING COLLECTION</h3>
                        <p>Save on our running shorts collection</p>
                        <a href="">SHOP NOW</a>
                    </div>
                    <div className="T-container">
                        <div className="img-Contain img-2"></div>
                        <h3>FIND YOUR PERFECT OUTFIT</h3>
                        <p>From accessories to t-shirts and more</p>
                        <a href="">SHOP NOW</a>
                    </div>
                    <div className="T-container">
                        <div className="img-Contain img-3"></div>
                        <h3>SAVE ATLEAST 30%</h3>
                        <p>Save on our dhb Aeron shorts collection</p>
                        <a href="">SHOP NOW</a>
                    </div>
                </div>
            </TshirtContainer>
        </>
    );
}