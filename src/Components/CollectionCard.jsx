import styled from "styled-components";

export const MainCollection = styled.div`
    background-image: url("https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/banner-bg.png.webp");
    background-image: 100% 100%;
`;

export const Collection = styled.div`
    height: 28em;
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url("https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/banner-image.webp");
    background-size: 50% 100%;
    background-repeat: no-repeat;
    transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);

    & div{
        padding: 1.2em;
        width: 43%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    & div button{
        all: unset;
        margin: 0 auto;
        margin-top:1rem;
        padding: 0.3em 1.2em;
        color: white;
        background-color: orangered;
    }

    & div h3{
        text-align: center;
        margin: 0;
        font-size: clamp(2em ,5vw,2.5em);
        line-height: 1.5em;
    }

    & div p{
        margin: 0;
        font-size: 1.2em;
        text-align: center;
        font-weight: 500;
    }

    /* &:hover{
        background-size: 50% 100%;
    } */

    @media(max-width:1125px){
        &{
            padding: 0;
            height: 19em;
            background-size: 55% 100%;
        }
/* 
        &:hover{
            background-size: 80% 100%;
        } */

        & div{
            height: 90%;
        }

        & div button{
            padding: 0.2em 0.5em 0.2em 0.5em;
        }

        & div{
            padding: 0;
            height: 100%;
            width: 100%;
        }
    }

    @media(max-width:710px){
        &{
            padding: 0;
            height: 16em;
            background-size: 85% 100%;
        }
    }
`;

export default function CollectionCard() {
    return (
        <>
            <MainCollection>
                <Collection>
                    <div>
                        <h3>New Nike Collection</h3>
                        <p>Three-peace toe construction for classic tennis support and performance.</p>
                        <button>SHOP NOW</button>
                    </div>
                </Collection>
            </MainCollection>
        </>
    );
}